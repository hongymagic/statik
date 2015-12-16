//
// ## Barebones demonstration.
//
// The following code will serve everything inside `./public` over HTTP using
// port 3033.
//

var statik = require('../index');
var server = statik();

server.listen(3033);
console.log("server online at http://localhost:3033/");
