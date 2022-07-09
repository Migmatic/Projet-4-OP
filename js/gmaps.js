let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.769, lng: 4.830 },
    zoom: 8,
  });
}

window.initMap = initMap;
