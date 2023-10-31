import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
const app = http.createServer((req, res) => {
  console.log('req.url: ', req.url);
  if (req.url === '/') {
    res.end(
      fs.readFileSync(path.join(__dirname, 'assets/index.html'), 'utf-8')
    );
    return;
  }
  if (req.url.includes('/test')) {
    res.end(
      JSON.stringify({
        name: 'xxx',
        age: 15,
        url: req.url,
      })
    );
    return;
  }
});
app.listen(4200, () => {
  console.log('http://localhost:4200/');
});
