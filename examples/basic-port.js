//
// ## Barebones demonstration.
//
// The following code will serve everything inside `./public` over HTTP using
// port 1203.
//

var statik = require('../index');
statik({
  port: 1203,
  root: './public'
});

console.log("server, serving ./public, online at http://localhost:1203/");
