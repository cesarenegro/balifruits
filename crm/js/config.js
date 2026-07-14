// BALI FRUITS CRM Configuration

// Default Authentication
export const DEFAULT_AUTH = {
  username: 'admin',
  password: 'BALIFRUITS'
};

// Database Configuration
// The app will check localStorage first; if empty, it will use these hardcoded values (or fall back to Mock Local Database mode).
export const getSupabaseConfig = () => {
  return {
    url: localStorage.getItem('BF_SUPABASE_URL') || window.BF_SUPABASE_URL || '',
    anonKey: localStorage.getItem('BF_SUPABASE_ANON_KEY') || window.BF_SUPABASE_ANON_KEY || ''
  };
};

export const saveSupabaseConfig = (url, anonKey) => {
  localStorage.setItem('BF_SUPABASE_URL', url.trim());
  localStorage.setItem('BF_SUPABASE_ANON_KEY', anonKey.trim());
};

export const clearSupabaseConfig = () => {
  localStorage.removeItem('BF_SUPABASE_URL');
  localStorage.removeItem('BF_SUPABASE_ANON_KEY');
};

// OpenAI Ingestion Configuration
export const getOpenAIKey = () => {
  return localStorage.getItem('BF_OPENAI_API_KEY') || 'YOUR_OPENAI_API_KEY';
};

export const saveOpenAIKey = (key) => {
  localStorage.setItem('BF_OPENAI_API_KEY', key.trim());
};

// Default Preset Data (inserted on first initialize if Supabase/Local DB is empty)
export const DEFAULT_DELIVERY_ZONES = [
  { id: 'zone-1', name: 'Canggu', fee: 15000 },
  { id: 'zone-2', name: 'Seminyak', fee: 20000 },
  { id: 'zone-3', name: 'Kuta', fee: 25000 },
  { id: 'zone-4', name: 'Sanur', fee: 30000 },
  { id: 'zone-5', name: 'Ubud', fee: 40000 },
  { id: 'zone-6', name: 'Uluwatu', fee: 45000 }
];

export const PRODUCT_CATEGORIES = [
  'Tropical Fruits',
  'Local Fruits',
  'Vegetables',
  'Greens',
  'Smoothie Products',
  'Boxes',
  'Add-ons',
  'Other'
];

export const BRAND_COLORS = {
  forestGreen: '#173D2B',
  mint: '#8FD6BF',
  cream: '#F7F3E8',
  creamStrong: '#FFFaf0',
  orangeCTA: '#F5A623'
};
