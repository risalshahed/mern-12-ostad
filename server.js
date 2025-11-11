const express = require('express');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Programmers');
});

// CRUD, Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// Multiple Files Upload
/* app.post('/api/uploads', (req, res) => {
  res.send('Multiple Files Uploaded Successfully');
}); */
app.post(
  '/api/uploads',     // endpoint / url
  upload.array('files'),    // middleware
  (req, res) => {     // request & response
  // res.send('Multiple Files Uploaded Successfully');
  res.json(req.files);
});

// Single File Upload
app.post(
  '/api/upload',     // endpoint / url
  upload.single('file'),    // middleware
  (req, res) => {     // request & response
  // res.send('Single File Uploaded Successfully');
  // console.log(req);
  res.json(req.file);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
})