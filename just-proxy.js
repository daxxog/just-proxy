/* JustProxy
 * simple just-dice proxy (alpha)
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.JustProxy = factory();
  }
}(this, function() {
    var S = require('string'),
        request = require('request'),
        express = require('express'),
        app = express.Router();
    
    app.get('/user/:uid', function(req, res) {
        var uid = S(req.params.uid);
        
        res.set('Content-Type', 'application/json');
        
        if(uid.isNumeric()) {
            request('https://just-dice.com/user/' + uid, function(err, reqres) {
                if(!err && reqres.statusCode == 200) {
                    res.send(reqres.body);
                } else {
                    res.status(500).send('"error"');
                }
            });
        } else {
            res.status(400).send('"uid must be numeric"');
        }
    });
    
    return app;
}));
