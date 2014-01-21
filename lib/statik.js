var path = require('path');
var extend = require('extend');
var connect = require('connect');
var modRewrite = require('connect-modrewrite');
var defaults = {
	/* connect options */
	port: 3000,

	/* connect-modrewrite options:
		 uncomment the line below for default rewrite rule used by an AngularJS app in HTML5 mode
			RULE -> redirect anything not HTML/JS-RESOURCE OR MEDIA to BASE_URL/index.html
	*/
	//rewriteRule: '!\\.html|\\.js|\\.css|\\.woff|\\.ttf|\\.swf|\\.png|\\.svg$ /index.html',

	/* connect.static options */
	root: path.join(process.cwd(), 'public'),
	maxAge: 0,
	hidden: false,
	redirect: true,

	/* other options */
	compress: true,
	verbose: false
};

module.exports = function (opts) {
	var options = extend(Object.create(null), defaults, opts);
	var app = connect();

	// setup rewrite rule(s)
	if (options.rewriteRule) {
		app.use(modRewrite([options.rewriteRule]));
	}

	// setup middlewares
	if (options.compress) {
		app.use(connect.compress());
	}

	if (options.verbose) {
		app.use(connect.logger('short'));
	}

	app.use(connect.static(options.root, options));

	// start the app on given port. defaults to 3000
	app.listen(options.port);

	return app;
};

