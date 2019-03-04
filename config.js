module.exports = {
	NODE_ENV: 'development',
	development: {
		serveroptions: {
			port: 5000,
			host: 'localhost',
			playground: true,
		},
	},
	production: {
		serveroptions: {
			port: 3000,
			host: '0.0.0.0',
			playground: false,
		},
	},	
};