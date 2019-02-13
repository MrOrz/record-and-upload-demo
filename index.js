const express = require('express');
const multer = require('multer');

const PORT = 3000;

const app = express();
const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploaded/',
    filename: (req, file, cb) => cb(null, `${(new Date).toISOString().replace(/:/g, '_')}.webm`),
  })
});

app.post('/upload', upload.single('video'), (req, res) => {
  res.json({
    filename: req.file.filename,
  });
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Visit http://localhost:${PORT}`);
});
