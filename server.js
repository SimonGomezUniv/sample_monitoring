const http = require('http');

var os = require("os");
var hostname = os.hostname();
const port = process.env.PORT || 3000;
const loki_uri = process.env.LOKI || "http://127.0.0.1:3100";
var i=0

const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {
  transports: [
    new LokiTransport({
      host: loki_uri
    })
  ]
};
const logger = createLogger(options);


const server = http.createServer((req, res) => {
  i++
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var randomOut = Math.floor(Math.random() * 100)
  var data = `http_requests_total{api="global"} ${i}
rand ${randomOut}
hostname ${hostname}
`
  logger.info({ message: 'URL '+req.url , labels: { 'url': req.url } })
  logger.warn({ message: 'stat ', labels: { 'rand': randomOut, "http_requests_total":i } })
  res.end(data);
});

server.listen(port,  () => {
  console.log(`Server running at http://localhost:${port}/`);
})
