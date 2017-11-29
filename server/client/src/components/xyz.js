var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var myObj = {
    keystore: {
      keyStoreName: 'painting.keystore',
      aliasName: 'paint',
      storepass: 'qwerty123',
      dname: {
        CN: 'qwe',
        OU: 'qwe'
      }
    }
  };
  res.end(JSON.stringify(myObj));
});

server.listen(8080, '127.0.0.1');
