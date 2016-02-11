/* JustProxy / cli.js
 * command line interface for JustProxy
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    JustProxy = require('./just-proxy.min.js');

app.use('/', JustProxy);

server.listen(process.env.PORT ? process.env.PORT : 80, function() {
    var host = process.env.HOST ? process.env.HOST : '0.0.0.0',
        port = server.address().port;
    
    console.log('JustProxy listening at http://%s:%s', host, port);
});