const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const optionsToAdd = `
            <option value="id">ID</option>
            <option value="it">IT</option>
            <option value="zh">ZH</option>
            <option value="uk">UK</option>`;

for (const file of htmlFiles) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('<option value="ru">RU</option>') && !content.includes('<option value="id">ID</option>')) {
    content = content.replace('<option value="ru">RU</option>', '<option value="ru">RU</option>' + optionsToAdd);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
