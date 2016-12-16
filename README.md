
# Elevation Checking Application

This application provides Elevation of a location where Latitude and Longitude values are provided by the user

**Remember to choose Latitude values range (-90, 90) and Longitude (-180,180)**

![LatLng](https://github.com/eyobw/elevation/blob/master/client/images/latlng.gif)

Just click the Choose Location button and fill Latitude and Longitude values 

![Form](https://github.com/eyobw/elevation/blob/master/client/images/form.png)

With Valid Latitude and Longitude input, the output result will look like 
![Altitude](https://github.com/eyobw/elevation/blob/master/client/images/main_view.png)

# Installing the app

Remember to insert your own [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)  on app.js before running the application, 


`//Google map client for node`

`var googleMapsClient = require('@google/maps').createClient({`

  `key: '' // Insert your own Key`

`});`


You need to have npm and bower installed on your computer. Then install all dependencies using the following command on terminal.

`npm install` &

`bower install`

Finally

`node app`  

and your app will run on [http://localhost:3000/](http://localhost:3000/)
