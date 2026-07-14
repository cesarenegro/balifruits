import { getOpenAIKey } from './config.js';

// Local Regex-based Ingestion Parser (Fallback)
function localParseMessage(text, forcedType) {
  const lowercaseText = text.toLowerCase();
  
  // 1. Detect type: Supplier Price List vs Customer Order vs Driver Message
  let type = forcedType;
  if (!type || type === 'auto') {
    type = 'New order';
    if (
      lowercaseText.includes('price list') ||
      lowercaseText.includes('pricelist') ||
      lowercaseText.includes('quotation') ||
      lowercaseText.includes('ready tomorrow') ||
      lowercaseText.includes('no stock') ||
      lowercaseText.includes('availability') ||
      (lowercaseText.includes('supplier') && lowercaseText.includes('ready'))
    ) {
      type = 'Supplier quotation';
    } else if (
      lowercaseText.includes('driver') ||
      lowercaseText.includes('delivery done') ||
      lowercaseText.includes('delivered') ||
      lowercaseText.includes('completed delivery') ||
      lowercaseText.includes('left at security') ||
      lowercaseText.includes('consegnato') ||
      lowercaseText.includes('consegna')
    ) {
      type = 'Driver message';
    }
  }

  if (type === 'Supplier quotation') {
    return parseLocalSupplierMessage(text);
  } else if (type === 'Driver message') {
    return parseLocalDriverMessage(text);
  } else {
    return parseLocalCustomerOrder(text);
  }
}

// Extract driver message details
function parseLocalDriverMessage(text) {
  const result = {
    senderName: 'Driver',
    driverPhone: '',
    messageText: text,
    orderRef: ''
  };

  // Extract phone number
  const phoneMatch = text.match(/(?:\+62|08)[0-9\s-]{9,15}/);
  if (phoneMatch) {
    result.driverPhone = phoneMatch[0].replace(/[\s-]/g, '');
  }

  // Extract order reference, e.g. BF-1001
  const refMatch = text.match(/BF-\d{4}/i);
  if (refMatch) {
    result.orderRef = refMatch[0].toUpperCase();
  }

  // Guess sender name
  if (lowercaseContains(text, 'wayan')) {
    result.senderName = 'Wayan Delivery';
  } else if (lowercaseContains(text, 'gede')) {
    result.senderName = 'Gede Go-Send';
  } else if (lowercaseContains(text, 'made')) {
    result.senderName = 'Made Fruits';
  }

  return {
    type: 'Driver message',
    data: result
  };
}

// Extract customer order via regex
function parseLocalCustomerOrder(text) {
  const lines = text.split('\n');
  const result = {
    clientName: '',
    whatsapp: '',
    deliveryAddress: '',
    deliveryZone: '',
    deliveryDate: '',
    timeWindow: '',
    products: [],
    paymentNote: '',
    specialNotes: ''
  };

  // Attempt to extract phone/whatsapp number
  const phoneMatch = text.match(/(?:\+62|08)[0-9\s-]{9,15}/);
  if (phoneMatch) {
    result.whatsapp = phoneMatch[0].replace(/[\s-]/g, '');
  }

  // Attempt to extract name
  const nameMatch = text.match(/(?:name is|this is|i am|name:)\s*([A-Za-z\s]{2,20})/i);
  if (nameMatch) {
    result.clientName = nameMatch[1].trim();
  } else if (lines.length > 0 && lines[0].toLowerCase().includes('hello')) {
    // Guess name from first line greeting if simple
    const firstLineMatch = lines[0].match(/(?:hello|hi|hey)\s+([A-Za-z]+)/i);
    if (firstLineMatch) {
      result.clientName = firstLineMatch[1].trim();
    }
  }

  // Detect Zone
  const zones = ['canggu', 'seminyak', 'kuta', 'sanur', 'ubud', 'uluwatu'];
  for (const zone of zones) {
    if (lowercaseContains(text, zone)) {
      result.deliveryZone = zone.charAt(0).toUpperCase() + zone.slice(1);
      break;
    }
  }

  // Detect Address
  const addressMatch = text.match(/(?:address|delivery to|location|villa|jl\.|jalan)\s*:?\s*([^\n,.]+)/i);
  if (addressMatch) {
    result.deliveryAddress = addressMatch[1].trim();
  } else {
    // fallback: look for lines starting with Jl. or Villa
    for (const line of lines) {
      if (line.toLowerCase().startsWith('jl.') || line.toLowerCase().startsWith('villa') || line.toLowerCase().startsWith('jalan')) {
        result.deliveryAddress = line.trim();
        break;
      }
    }
  }

  // Detect Date / Time
  if (lowercaseContains(text, 'tomorrow')) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    result.deliveryDate = tomorrow.toISOString().split('T')[0];
  } else if (lowercaseContains(text, 'today')) {
    result.deliveryDate = new Date().toISOString().split('T')[0];
  }

  if (lowercaseContains(text, 'morning') || lowercaseContains(text, 'am')) {
    result.timeWindow = '09:00 - 12:00';
  } else if (lowercaseContains(text, 'afternoon') || lowercaseContains(text, 'pm')) {
    result.timeWindow = '13:00 - 16:00';
  }

  // Detect products and quantities (e.g. "3x Mango", "2 kg avocado", "1 Organic Spinach")
  const productCatalog = ['mango', 'avocado', 'papaya', 'dragon', 'banana', 'spinach', 'box'];
  const catalogMapping = {
    'mango': 'Mango Harum Manis',
    'avocado': 'Avocado Bali',
    'papaya': 'Papaya California',
    'dragon': 'Dragon Fruit Red',
    'banana': 'Cavendish Banana',
    'spinach': 'Organic Spinach',
    'box': 'Delivery Box Medium'
  };

  for (const line of lines) {
    // Match something like: "3 x mango", "2kg avocados", "1 bundle spinach"
    const match = line.match(/(\d+)\s*(?:x|kg|pcs|pcs\.|bundles|bundle|bag|bags)?\s*([a-zA-Z\s]+)/i);
    if (match) {
      const qty = parseInt(match[1], 10);
      const namePart = match[2].trim().toLowerCase();
      
      for (const keyword of productCatalog) {
        if (namePart.includes(keyword)) {
          result.products.push({
            name: catalogMapping[keyword],
            quantity: qty,
            unit: keyword === 'spinach' ? 'bundle' : (keyword === 'box' ? 'unit' : 'kg')
          });
          break;
        }
      }
    }
  }

  // Notes and payment
  if (lowercaseContains(text, 'transfer')) {
    result.paymentNote = 'Bank Transfer';
  } else if (lowercaseContains(text, 'cash') || lowercaseContains(text, 'cod')) {
    result.paymentNote = 'Cash on Delivery';
  }

  return {
    type: 'New order',
    data: result
  };
}

// Extract supplier prices via regex (generic line-by-line parser)
function parseLocalSupplierMessage(text) {
  const lines = text.split('\n');
  const result = {
    supplierName: '',
    products: []
  };

  // Guess supplier name
  if (lowercaseContains(text, 'agung')) {
    result.supplierName = 'Pak Agung Fruits';
  } else if (lowercaseContains(text, 'organic')) {
    result.supplierName = 'Bali Organic Farm';
  } else if (lowercaseContains(text, 'sari') || lowercaseContains(text, 'packaging')) {
    result.supplierName = 'Sari Packaging';
  } else {
    result.supplierName = 'Local Supplier';
  }

  // Common crop/product catalog mapping for normalization
  const catalogMapping = {
    'carrot': 'Carrot import',
    'kol putih': 'Kol putih',
    'kol ungu': 'Kol ungu',
    'celery': 'Celery stick',
    'timun': 'Timun jepang',
    'terong': 'Terong ungu',
    'jeruk': 'Jeruk lokal',
    'garlic': 'Garlic utuh',
    'shallot': 'Shallot utuh',
    'kemangi': 'Kemangi',
    'jahe': 'Jahe',
    'kunyit': 'Kunyit',
    'kencur': 'Kencur',
    'lengkuas': 'Lengkuas',
    'sereh': 'Sereh',
    'cabe rawit': 'Cabe rawit',
    'cabe lombok': 'Cabe lombok',
    'jalapeno': 'Jalapeno',
    'tomat': 'Tomat',
    'lobak': 'Lobak putih',
    'labu': 'Labu Siam',
    'jagung': 'Jagung',
    'kentang': 'Kentang',
    'sweet potato': 'Sweet potato',
    'pisang': 'Pisang mas',
    'sawi': 'Sawi putih',
    'broccoli': 'Broccoli local',
    'cauliflower': 'Cauliflower',
    'toge': 'Toge',
    'avocado': 'Avocado Bali',
    'bengkoang': 'Bengkoang',
    'apel': 'Apel hijau green smith',
    'nanas': 'Nanas import',
    'mango': 'Mango Harum Manis',
    'mangga': 'Mango Harum Manis',
    'dragon': 'Dragon Fruit Red',
    'naga': 'Dragon Fruit Red',
    'spinach': 'Organic Spinach',
    'bayam': 'Organic Spinach',
    'papaya': 'Papaya California',
    'strawberry': 'Stoberi',
    'semangka': 'Semangka',
    'lemon': 'Lemon import',
    'mandarin': 'Mandarin',
    'orange': 'Orange sunskit',
    'beetroot': 'Beetroot',
    'kale': 'Kale Curly',
    'lettuce': 'Mix lettuce',
    'selada': 'Selada bulat',
    'mint': 'Mint',
    'melon': 'Melon',
    'lime': 'Lime'
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Ignore lines that are just headers or greetings
    const lower = trimmed.toLowerCase();
    if (lower.startsWith('pricelist') || lower.startsWith('price list') || lower.startsWith('hello') || lower.startsWith('supplier')) {
      continue;
    }

    // Match "Name" followed by "Number" e.g. "Carrot import 25/kg" or "Kemangi 3/ikat"
    const match = trimmed.match(/^([a-zA-Z\s\-().]+?)\s+(\d+)\s*(?:\/|per)?\s*(kg|kg\.|ikat|pcs|bundle|box|pack|100g|100gr|unit)?/i);
    if (match) {
      const rawName = match[1].trim();
      const num = parseInt(match[2], 10);
      
      // Normalize price
      const price = num < 1000 ? num * 1000 : num;
      
      // Determine unit
      let unit = 'kg';
      if (match[3]) {
        const rawUnit = match[3].toLowerCase();
        if (rawUnit.startsWith('kg')) unit = 'kg';
        else if (rawUnit.startsWith('ikat')) unit = 'ikat';
        else if (rawUnit.startsWith('pcs') || rawUnit.startsWith('unit')) unit = 'pcs';
        else if (rawUnit.startsWith('bundle')) unit = 'bundle';
        else if (rawUnit.startsWith('box')) unit = 'box';
        else if (rawUnit.startsWith('pack')) unit = 'pack';
        else if (rawUnit.includes('100g') || rawUnit.includes('100gr')) unit = '100g';
      } else {
        // Fallback checks
        if (lower.includes('ikat')) unit = 'ikat';
        else if (lower.includes('pcs') || lower.includes('unit')) unit = 'pcs';
        else if (lower.includes('100g') || lower.includes('100gr')) unit = '100g';
        else if (lower.includes('bundle')) unit = 'bundle';
        else if (lower.includes('box')) unit = 'box';
        else if (lower.includes('pack')) unit = 'pack';
      }

      // Normalize name
      let normalizedName = rawName;
      const lowerRaw = rawName.toLowerCase();
      
      for (const [key, val] of Object.entries(catalogMapping)) {
        if (lowerRaw.includes(key)) {
          normalizedName = val;
          break;
        }
      }

      let availability = 'In Stock';
      if (lower.includes('no stock') || lower.includes('empty') || lower.includes('out')) {
        availability = 'Out of Stock';
      } else if (lower.includes('limited')) {
        availability = 'Limited';
      }

      result.products.push({
        name: normalizedName,
        price: price,
        availability: availability,
        eta: 'Immediate',
        unit: unit
      });
    }
  }

  return {
    type: 'Supplier quotation',
    data: result
  };
}

function lowercaseContains(str, word) {
  return str.toLowerCase().includes(word.toLowerCase());
}

// OpenAI Ingestion Parser (API Call)
async function openAIParseMessage(text, apiKey, forcedType) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant parsing incoming operational messages (WhatsApp/Emails) for "BALI FRUITS" lightweight CRM.
Parse the raw message text into structured JSON.

${forcedType ? `CRITICAL: You MUST parse this message strictly as a "${forcedType}". Bypassing auto-detection is mandatory.` : 'You should auto-detect the message type.'}

Your output must be a clean JSON object (no markdown wrapping, no \`\`\`json blocks) with exactly these fields:
{
  "type": "${forcedType || 'New order'}" | "${forcedType || 'Supplier quotation'}" | "${forcedType || 'Driver message'}" | "${forcedType || 'General message'}", // Set this to the parsed message type
  "data": <DataBlock>
}

Where <DataBlock> for "New order" is:
{
  "clientName": "string",
  "whatsapp": "string (cleaned phone number, e.g. +6281355551234)",
  "deliveryAddress": "string",
  "deliveryZone": "Canggu" | "Seminyak" | "Kuta" | "Sanur" | "Ubud" | "Uluwatu" | "" (match exactly if mentioned, else empty string),
  "deliveryDate": "YYYY-MM-DD" (relative to today: 2026-06-14),
  "timeWindow": "09:00 - 12:00" | "13:00 - 16:00" | "",
  "products": [
    { "name": "string (product name, normalize to match catalog if close, e.g. 'Mango Harum Manis', 'Avocado Bali', 'Papaya California', 'Dragon Fruit Red', 'Cavendish Banana', 'Organic Spinach', 'Delivery Box Medium', otherwise return the customer's raw name)", "quantity": number, "unit": "kg" | "bundle" | "unit" }
  ],
  "paymentNote": "string (e.g. Bank Transfer, Cash on Delivery, etc.)",
  "specialNotes": "string"
}

And <DataBlock> for "Supplier quotation" is:
{
  "supplierName": "Pak Agung Fruits" | "Bali Organic Farm" | "Sari Packaging" | "" (match close supplier, else empty),
  "products": [
    { 
      "name": "string (product name, normalize to match catalog if close, e.g. 'Mango Harum Manis', 'Avocado Bali', 'Papaya California', 'Dragon Fruit Red', 'Cavendish Banana', 'Organic Spinach', 'Delivery Box Medium', otherwise return the supplier's raw crop name like 'Carrot import' or 'Kol putih')", 
      "price": number | null, 
      "availability": "In Stock" | "Out of Stock" | "Limited", 
      "eta": "string",
      "unit": "kg" | "pcs" | "100g" | "ikat" | "box" | "pack" | "bundle" // Detect the unit of price, e.g. per kg, per pcs, per ikat, etc., default to 'kg'
    }
  ]
}

And <DataBlock> for "Driver message" is:
{
  "senderName": "string",
  "driverPhone": "string (cleaned phone number, e.g. +6281377776666)",
  "messageText": "string",
  "orderRef": "string (e.g. BF-1001 or BF-1002 if mentioned, else empty string)"
}

And <DataBlock> for "General message" is:
{
  "senderName": "string",
  "summary": "string"
}

Be conservative, extract only what is present in the text.`
          },
          {
            role: 'user',
            content: text
          }
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API responded with status ${response.status}`);
    }

    const json = await response.json();
    const result = JSON.parse(json.choices[0].message.content);
    return result;
  } catch (err) {
    console.error('OpenAI Parsing failed, falling back to Local Regex parser.', err);
    return localParseMessage(text, forcedType);
  }
}

// Primary Exported Parser Function
export async function parseIncomingMessage(text, forcedType) {
  const apiKey = getOpenAIKey();
  const resolvedType = forcedType === 'auto' ? null : forcedType;
  if (apiKey) {
    console.log(`Parsing message with OpenAI GPT-4o-mini (Forced: ${resolvedType || 'Auto'})...`);
    return openAIParseMessage(text, apiKey, resolvedType);
  } else {
    console.log(`No OpenAI Key set. Parsing message with local regex system (Forced: ${resolvedType || 'Auto'})...`);
    return localParseMessage(text, resolvedType);
  }
}
