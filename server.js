const http = require('http');
const fs = require('fs');
const url = require('url');

// CRUD

const server = http.createServer((req, res) => {
  // http://risalshahed.com/about?app=wp-plugin
  // console.log(req);
  // console.log(url.parse(req.url, true));
  const pathName = url.parse(req.url, true).pathname;

  if(pathName === '/' || pathName === '/home') {
    fs.readFile('./pages/home.html', 'utf-8', (err, data) => {
      // write the repsonse with "status code" & Content Type
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Send the Response & Close the Connection between Client & Server
      res.end(data);
    })
  } else if (pathName === '/about') {
    fs.readFile('./pages/about.html', 'utf-8', (err, data) => {
      // write the repsonse with "status code" & Content Type
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Send the Response & Close the Connection between Client & Server
      res.end(data);
    })
  } else if (pathName === '/contact') {
    fs.readFile('./pages/contact.html', 'utf-8', (err, data) => {
      // write the repsonse with "status code" & Content Type
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Send the Response & Close the Connection between Client & Server
      res.end(data);
    })
  } else {
    // write the repsonse with "status code" & Content Type
    res.writeHead(404, { 'Content-Type': 'text/html' });
    // Send the Response & Close the Connection between Client & Server
    res.end('<h1>Page Not Found</h1>');
  }
})

const port = 4000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});