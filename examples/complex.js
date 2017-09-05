//
// ## Barebones demonstration.
//
// The following code will serve everything inside `./public` over HTTP using
// port 3000.
//

var statik = require('../index');
statik({
  port: 3000,
  auth: true,
  authRealm: 'My over-strictly forbidden area. Don`t touch ever!',
  authFile: __dirname + "/users.htpasswd",  // admin:123456  ;-)
  verbose: true
});

console.log("Server with auth online at http://localhost:3000/");
