var https = require('https');
var fs = require('fs');
var path = require('path');
var extend = require('extend');
var connect = require('connect');
var pushState = require('connect-pushstate');

var defaults = {
    /* connect options */
    port: 3000,

    /* connect.static options */
    root: path.join(process.cwd(), 'public'),
    maxAge: 0,
    hidden: false,
    redirect: true,
    sslCert: false,
    /* other options */
    compress: true,
    verbose: false,
    pushstate: false
};

module.exports = function (opts) {
    var options = extend(Object.create(null), defaults, opts);
    var app = connect();
    var serverOpts = {};

    // setup middlewares
    if (options.compress) {
        app.use(connect.compress());
    }

    if (options.verbose) {
        app.use(connect.logger('short'));
    }

    if (options.pushstate) {
        app.use(pushState());
    }

    app.use(connect.static(options.root, options));

    if (options.sslCert) {
        var path = options.sslCert;
        if (!fs.statSync(path + '.crt')) throw new Error('Could not find file: ' + path + '.crt');
        if (!fs.statSync(path + '.key')) throw new Error('Could not find file: ' + path + '.key');
        https.createServer({
            protocol: 'https',
            key: fs.readFileSync(path + '.key').toString(),
            cert: fs.readFileSync(path + '.crt').toString()
        }, app).listen(options.port);
    } else {
        app.listen(options.port);
    }

    return app;
};
