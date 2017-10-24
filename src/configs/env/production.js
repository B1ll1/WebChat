const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const hbs = require('express-hbs')
const expressValidator = require('express-validator')

module.exports = (app) => {
	app.set('port', 80)
	app.set('host', '127.0.0.1')
	app.set('views', path.join(__dirname, './../../../build/views'))
	app.set('view engine', 'hbs')

	app.use(morgan('combined'))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: false, limit: '200kb', defaultCharset: 'utf-8'}))
	app.use(methodOverride('_method'))
	app.use(expressSession({
		secret: '980345jjhk0-_)_)_11',
		resave: false,
		saveUnitialized: false
	}))
	app.use(expressValidator())

	app.engine('hbs', hbs.express4({
		defaultLayout: path.join(app.get('views'), 'layout/main.hbs'),
		partialsDir: path.join(app.get('views'), 'partials'),
		layoutsDir: path.join(app.get('views'), 'layouts')
	}))

}	

