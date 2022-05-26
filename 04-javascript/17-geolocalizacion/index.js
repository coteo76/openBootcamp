let map;

function initMap() {

    const pos_oviedo = { lat: 43.3695167, lng: -5.8662103 };
    const pos_brujas = { lat: 51.260914, lng: 3.0816831 };
    const pos_disney = { lat: 48.8673893, lng: 2.781399 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: pos_disney,
    });

    const marker1 = new google.maps.Marker({
        position: pos_oviedo,
        map: map,
        title: "Lugar favorito: Oviedo"
    });

    const marker2 = new google.maps.Marker({
        position: pos_brujas,
        map: map,
        title: "Lugar favorito: Brujas"
    });

    const marker3 = new google.maps.Marker({
        position: pos_disney,
        map: map,
        title: "Lugar favorito: Disney"
    });

    geoPosiciona();
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = { timeout: 60000 };
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
    } else {
        alert("Geolocalización no admitida.");
    }
}

function centraMapa(position) {

    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    const marker = new google.maps.Marker({
        position: nuevaPos,
        map: map,
        title: "Posicion geolocalizada"
    });

    map.setCenter(nuevaPos);
}

function onError(error) {
    console.log("Se ha producido un error.");
    console.error(error);
}

window.initMap = initMap;