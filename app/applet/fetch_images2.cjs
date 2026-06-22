const https = require('https');
const urls = [
"https://ibb.co/SwTCcGrJ",
"https://ibb.co/vxw65MzW",
"https://ibb.co/TMhjVQtB",
"https://ibb.co/vvDn9mPj",
"https://ibb.co/Cy8RhL3",
"https://ibb.co/qLN0VRw0",
"https://ibb.co/qYJ8QV5D",
"https://ibb.co/My1tkW4V",
"https://ibb.co/DHL4dWgW",
"https://ibb.co/vxHhs4GJ",
"https://ibb.co/shypVCG",
"https://ibb.co/zTXLZksQ",
"https://ibb.co/Zz9rWsQx",
"https://ibb.co/0V85TxPn"
];

const results = {};

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const metaMatch = data.match(/<meta property="og:image"\s+content="([^"]+)"/i);
        if (metaMatch) {
           results[url] = metaMatch[1];
        } else {
           results[url] = "NOT FOUND FOR " + url;
        }
        resolve();
      });
    }).on('error', resolve);
  });
}

async function main() {
  for (let i = 0; i < urls.length; i++) {
    await fetchUrl(urls[i]);
  }
  for (const url of urls) {
    console.log(results[url]);
  }
}
main();
