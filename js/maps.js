/**
 * Created by nakita on 05/05/2017.
 */

function initMap() {
    //Location coordinates
    var ceremony = {lat: 51.52646957649372, lng: -9.34382131558693};
    var reception = {lat: 51.527147630800215, lng: -9.342824865642365};
    var bnb = {lat: 51.51924932468773, lng: -9.340397496413875 };
    var mapOptions = {
        zoom: 14,
        center: reception,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        /*
       * gesture handling mode set to 'cooperative',
       * which means that on a mobile device, the user must swipe with one
       * finger to scroll the page and two fingers to pan the map.
       */
        gestureHandling: 'cooperative',
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },

        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false,

        styles: [{
            "stylers": [{
                "saturation": -100
            }, {
                "gamma": 1
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": 50
            }, {
                "gamma": 0
            }, {
                "hue": "#50a5d1"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#333333"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
                "weight": 0.5
            }, {
                "color": "#333333"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
                "gamma": 1
            }, {
                "saturation": 50
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('map'),mapOptions);

    //ceremony marker and pop up box
    var ceremonyPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Ceremony</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/NikLoVfacAA24ZNq9" target=_blank>' + '<i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Inish Beg Estate, Baltimore, Co. Cork</span></p>' +
        '<p><a href="https://www.inishbeg.com/weddings/" target=_blank>' + '<i class="mapicon fa fa-globe"></i><span class="mapdetail">www.inishbeg.com</span></a></p>' +
        '<p><a href="tel:003532821745"><i class="mapicon fa fa-phone"></i><span class="mapdetail">(028) 21745</span></a></p>' +
        '</div>' +
        '</div>';

    var ceremonyinfowindow = new google.maps.InfoWindow({
        content: ceremonyPopUp
    });
    var ceremonymarker = new google.maps.Marker({
        position: ceremony,
        title: 'Wedding ceremony',
        map: map,
        icon: "img/mapmarkers/ceremony.png"
    });
    ceremonymarker.addListener('click', function () {
        ceremonyinfowindow.open(map, ceremonymarker);
        receptioninfowindow.close(map, receptionmarker);
        bnbinfowindow.close(map, bnbmarker);
    });

    //Reception marker and pop up box
    var receptionPopUp = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">Wedding Reception</h3>' +
        '<div id="bodyContent">' +
        '<p><a href="https://goo.gl/maps/NikLoVfacAA24ZNq9" target=_blank>' + '<i class="mapicon fa fa-map-marker"></i><span class="mapdetail">The Boathouse, Inish Beg Estate, Baltimore, Co. Cork</span></p>' +
        '<p><a href="https://www.inishbeg.com/weddings/" target=_blank>' + '<i class="mapicon fa fa-globe"></i><span class="mapdetail">www.inishbeg.com</span></a></p>' +
        '<p><a href="tel:003532821745"><i class="mapicon fa fa-phone"></i><span class="mapdetail">(028) 21745</span></a></p>' +
        '</div>' +
        '</div>';

    var receptioninfowindow = new google.maps.InfoWindow({
        content: receptionPopUp
    });
    var receptionmarker = new google.maps.Marker({
        position: reception,
        title: 'Wedding reception',
        map: map,
        icon: "img/mapmarkers/hotel.png"
    });
    receptionmarker.addListener('click', function () {
        receptioninfowindow.open(map, receptionmarker);
        ceremonyinfowindow.close(map, ceremonymarker);
        bnbinfowindow.close(map, bnbmarker);
    });

    //BnB marker and pop up box
    var bnbPopUp = '<div id="content">' +
        '<div id="siteNot ice">' +
        '</div>' +
        '<h3 id="firstHeading" class="firstHeading">B&B Accommodation</h3>' +
        '<div id="bodyContent">' +
        '<p><i class="mapicon fa fa-map-marker"></i><span class="mapdetail">Killeena House, Creagh, Baltimore, Co. Cork</span></p>' +
        '<p><a href="https://www.killeenahouse.ie/" target=_blank>' + '<i class="mapicon fa fa-globe"></i><span class="mapdetail">www.killeenahouse.ie/</span></a></p>' +
        '<p><a href="tel:003532821029"><i class="mapicon fa fa-phone"></i><span class="mapdetail">(028) 21029</span></a></p>' +
        '</div>' +
        '</div>';
    var bnbinfowindow = new google.maps.InfoWindow({
        content: bnbPopUp
    });
    var bnbmarker = new google.maps.Marker({
        position: bnb,
        title: 'BnB accommodation',
        map: map,
        icon: "img/mapmarkers/bnb.png"
    });
    bnbmarker.addListener('click', function () {
        bnbinfowindow.open(map, bnbmarker);
        ceremonyinfowindow.close(map, ceremonymarker);
        receptioninfowindow.close(map, receptionmarker);
    });

}
