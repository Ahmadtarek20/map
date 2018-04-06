var Contener = function () {
    "use strict";
     var marker;    
    var self = this;
    
    this.LocList = ko.observableArray([]);

    locations.forEach(function (LocItem) {
        self.LocList.push(new Loc(LocItem));
    });

	 
	 
	    self.LocList().forEach(function (LocItem) {

 
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(LocItem.lat(), LocItem.lng()),
            map: map,
       
        });
		
		
		
        var infowindow = new google.maps.InfoWindow({ maxWidth: 200, });

        var id = "JNMOL1V3XPFK0EZSVKYYOUJ5OJXTD0EH5JUT2P50IF0HLK4I";
		var secret = "QW105ZAURHDPTHCARUJWLXGLM10JVO3XIY44LQGRTVP2T4OC";
       
		
        LocItem.marker = marker;
        
        //   Request by api.foursquare 
        $.ajax({
            url: 'https://api.foursquare.com/v2/venues/' + LocItem.id() +
            '?client_id='+id+'&client_secret='+secret+'&v=20180404',
            dataType: "json",
            success: function (data) {
                
                var result = data.response.venue;
				
               
                var rating = result.hasOwnProperty('rating') ? result.rating : ''; 
				LocItem.rating(rating);

				var contact = result.hasOwnProperty('contact') ? result.contact : '';
                 LocItem.phone(contact.formattedPhone ); 
					
                var DataOfLocathan = '<div id="iWindow"><h1>'+' <img id="home" src="img_navsprites.gif"> '+ LocItem.name() + 
				         '</h1><h3>' + LocItem.phone() + '</h3>'+'</h3><h3>Rating: 10 / ' + LocItem.rating() ;

                
                google.maps.event.addListener(LocItem.marker, 'click', function () {
                    infowindow.open(map, this);
                   
                    LocItem.marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(function () {
                        LocItem.marker.setAnimation(null);
                    });
                    infowindow.setContent(DataOfLocathan);
                    map.setCenter(LocItem.marker.getPosition());
                });
            },
			error: function (e) {
  
				alert("Error with the Foursquare API is unavailable. Please refresh the page.");
            }
        });

		
		
		 self.showInfo = function (LocItem) {
        google.maps.event.trigger(LocItem.marker, 'click');
        self.hideElements();
		};
		
       
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, this);
            LocItem.marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function () {
                LocItem.marker.setAnimation(null);
            });
        });
    });

   
	  self.carant = ko.observable(false);
    this.navStatus = ko.pureComputed (function () {
        return self.carant() === false ? 'nav' : 'navClosed';
        }, this);

    self.hideElements = function (carant) {
        self.carant(true);
       
        return true;
    };

    self.showElements = function (carant) {
        self.carant(false);
        return true;
    };

    self.visible = ko.observableArray();

    
    self.LocList().forEach(function (Loc) {
        self.visible.push(Loc);
    });

    
    self.valueapp = ko.observable('');

    self.MarkerUp = function () {
      
        var searchInput = self.valueapp().toLowerCase();
        self.visible.removeAll();
        self.LocList().forEach(function (Loc) {
            Loc.marker.setVisible(false);
            
            if (Loc.name().toLowerCase().indexOf(searchInput) !== -1) {
                self.visible.push(Loc);
            }
        });
        self.visible().forEach(function (Loc) {
            Loc.marker.setVisible(true);
        });
    };

}; 


	 
	 
	 	
	 

 