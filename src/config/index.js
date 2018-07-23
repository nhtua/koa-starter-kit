//NODE_ENV = production || development || other
let env = process.env.NODE_ENV;

if (!env) {
	env = 'development';
}

const CONFIG = require('./'+env+'.json');

export default CONFIG;