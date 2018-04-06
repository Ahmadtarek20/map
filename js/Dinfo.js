var map;

// Start To be are first view and disblay Shops
function Startapp() {
    "use strict";
    map = new google.maps.Map(document.getElementById('DataMab'), {
	
        center: {lat: 30.080799, lng:  31.222278},
			zoom: 15,
    });
   
    ko.applyBindings(new Contener());
}

// locations lat & lng  & id 
var locations = [
  {
        name: "Pizza Hut",
        lat: 30.069283 ,
        lng: 31.215338,
        id: "4eff17ac6c25c5ce80902599"
    },
    {
       name: "Cook door",
    lat: 30.009350 ,
    lng: 31.306123,
        id: "4d1f3ca45c4ca1cdd4d6973d"
    },
    {
        name: "Mc Donalds",
    lat: 30.117983 ,
    lng: 31.348572,
        id: "4ce221b300166ea8ce374588"
    },
    {
       name: "KFC",
    lat: 30.059690 ,
    lng: 31.204173,
        id: "4d6049cf196ba09397491856"
    },
	{
       name: "Burger Factory",
    lat: 30.060573, 
    lng: 31.221911,
        id: "50bce0b2e4b03e84dc849b0e"
    },
	{
       name: "Mori Sushi",
    lat: 30.058793, 
    lng: 31.217661,
        id: "4ca4d201a73cb60cdb6f2478"
    },
	{
       name: "Chick Shack",
    lat: 30.061425,
    lng: 31.219625,
        id: "56911d0b498ee79af8bc853a"
    },
	{
       name: "Brioche Dorée",
    lat: 30.067910, 
    lng: 31.222567,
        id: "4e469e33e4cd9d94fb23f17b"
    },
	{
       name: "Starbucks",
    lat: 30.088877,
    lng: 31.323729,
        id: "58dc0bb1ef469469d1e8c9f2"
    },
	{
       name: "Zööba",
    lat: 30.061353, 
    lng: 31.219057,
        id: "5516f44c498ec1fbae926456"
    },

];


//Data to Box

var Loc = function (data) {

	this.DataOfLocathan = ko.observable('');
    this.rating = ko.observable('');
    this.phone = ko.observable('');
   
	this.name = ko.observable(data.name);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.id = ko.observable(data.id);
	
   
};

function Handling_Error() {
   
	alert("Please try again. Google Maps is not loading.");
}

