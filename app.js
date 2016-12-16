var express = require('express');

var app = express();

//Base app start directory
app.use(express.static(__dirname+'/client'));

//Google map client for node
var googleMapsClient = require('@google/maps').createClient({
  key: ''
});


var counter = 0;
//Simple api to fetch elevation data
app.get('/api/elevation', function(req, res){
	counter ++;  //Simple request counter
	console.log(counter);
	var latitude = req.param('lat'); //Latitude value
	var longitude = req.param('lng'); //Longitude value

	googleMapsClient.elevation({
  		locations: {lat: latitude, lng: longitude}
	}, function(err, response) {
  		if (!err) {
    	
    	res.json(response.json.results);
  }
});
});

//Start Server
app.listen(3000);
console.log('Eeeze ...');
