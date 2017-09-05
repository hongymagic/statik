//
// ## Barebones demonstration.
//
// The following code will serve everything inside `./public` over HTTP using
// port 3000 (default).
//

var statik = require('../index');
statik();   // just run the server

console.log("Server online at http://localhost:3000/");
