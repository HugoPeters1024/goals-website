const ejs = require('ejs')
const fs = require('fs')
const util = require('util');
const request = require('request');
const http = require('http');

readFile = util.promisify(fs.readFile);


module.exports = (app) => {
	app.get('/', async (req, res) => {
		const bars_config = JSON.parse(await readFile(__dirname+'/public/bars.json'));
		const renders = bars_config.map(x => ejs.renderFile(__dirname+'/views/partials/bar.ejs', {bar : x}));
		const bars = await Promise.all(renders);
		res.render('pages/index', { bars: bars });
	});

	app.get('/books', async (req, res) => { 
		const bars_config = JSON.parse(await readFile(__dirname+"/public/bars.json"));

		//find the right object by url
		let ret = {}
		for(let i=0; i<bars_config.length; i++) {  
			if (bars_config[i].url == "/books")
				ret = bars_config[i].content
		}

		if (!ret) { 
			res.render('pages/error')
			return;
		}
		
		files = ret.map(x => (x.split(' ').join('')).toLowerCase());

		
		res.render('pages/books', { books : ret });
	});

	app.get('/movies', (req, res) => res.render('pages/movies'));

	app.get('/coding', (req, res) => res.render('pages/coding'));
}
