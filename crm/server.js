// BALI FRUITS CRM Local Backend Server
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3050;
const DATA_DIR = path.join(__dirname, 'data');

app.use(cors());
app.use(express.json());

// Serve static workspace files (storefront and crm)
app.use(express.static(path.join(__dirname, '..')));

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// API Check
app.get('/api/check', (req, res) => {
  res.json({ status: 'running', database: 'local-file-db', path: DATA_DIR });
});

// GET Collection
app.get('/api/:collection', (req, res) => {
  const file = path.join(DATA_DIR, `${req.params.collection}.json`);
  if (!fs.existsSync(file)) {
    return res.json([]);
  }
  
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database file.' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (e) {
      res.json([]);
    }
  });
});

// POST Upsert Record in Collection
app.post('/api/:collection', (req, res) => {
  const file = path.join(DATA_DIR, `${req.params.collection}.json`);
  const record = req.body;
  
  if (!record.id) {
    record.id = req.params.collection + '-' + Math.random().toString(36).substr(2, 9);
  }

  fs.readFile(file, 'utf8', (err, data) => {
    let items = [];
    if (!err && data) {
      try {
        items = JSON.parse(data);
      } catch (e) {
        items = [];
      }
    }

    const idx = items.findIndex(item => item.id === record.id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...record };
    } else {
      items.push(record);
    }

    fs.writeFile(file, JSON.stringify(items, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Failed to write to database.' });
      }
      res.json(record);
    });
  });
});

// DELETE Record
app.delete('/api/:collection/:id', (req, res) => {
  const file = path.join(DATA_DIR, `${req.params.collection}.json`);
  const id = req.params.id;

  if (!fs.existsSync(file)) {
    return res.json({ success: true });
  }

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database.' });
    }
    
    let items = [];
    try {
      items = JSON.parse(data);
    } catch (e) {
      items = [];
    }

    const filtered = items.filter(item => item.id !== id);

    fs.writeFile(file, JSON.stringify(filtered, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Failed to update database.' });
      }
      res.json({ success: true });
    });
  });
});

// Serve frontend main index from root if requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`BALI FRUITS CRM Local Server started successfully.`);
  console.log(`Access CRM dashboard: http://localhost:${PORT}`);
  console.log(`Database storage path: ${DATA_DIR}`);
  console.log(`=======================================================`);
});
