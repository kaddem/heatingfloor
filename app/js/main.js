$(document).ready(function(){

    $('#owl-reviews').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        navText:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

     $('#owl-sertificate').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });

});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 60.0679, lng: 30.3600},
    scrollwheel: false
  });

  var image = '../img/icon-for-map.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 60.0679, lng: 30.3600},
    map: map,
    icon: image
  });
}