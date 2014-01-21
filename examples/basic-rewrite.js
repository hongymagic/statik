//
// ## Barebones demonstration.
//
// The following code will serve everything inside `./public` over HTTP using
// port 1203.
//

var statik = require('../index');
statik({
  port: 1203,
  root: './public',
  rewriteRule: '!\\.html|\\.js|\\.css|\\.woff|\\.ttf|\\.swf|\\.png|\\.svg$ /index.html'
});

console.log("server, serving ./public with AngularJS rewriteRule, online at http://localhost:1203/");
