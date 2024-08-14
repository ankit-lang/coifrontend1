import express from "express";
import cors from "cors"
import path from "path";
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;
app.use(cors())

app.post('/save', express.json(), (req, res) => {
    const { formData } = req.body;
    let data = formData
    data =   JSON.stringify(data)
    console.log(typeof data)
    if (typeof textData !== 'string') {
      return res.status(402).json({ message: 'Invalid data type. Expected a string.' });
    }
    const filePath = path.join(__dirname, 'data', 'formData.txt');
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save data' });
      }
      res.status(200).json({ message: 'Data saved successfully' });
    });
  });


  app.get('/form-data', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'formData.txt');
  
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ message: 'Failed to read data' });
        }
        res.status(200).json({ textData: data });
      });
    } else {
      res.status(404).json({ message: 'No data found' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  