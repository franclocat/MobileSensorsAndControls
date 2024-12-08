const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const map = document.querySelector("#map");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude.innerHTML = position.coords.latitude;
        longitude.innerHTML = position.coords.longitude;
        showLocationMap();
    });
} else {
    latitude.innerHTML = "Geolocation is not supported by this browser.";
}

function showLocationMap() {
    map.innerHTML =  `
    <iframe 
        class="rounded"
        width="100%" 
        height="100%" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude.innerHTML}%2C${latitude.innerHTML}%2C${longitude.innerHTML}%2C${latitude.innerHTML}&amp;layer=mapnik&amp;marker=${latitude.innerHTML}%2C${longitude.innerHTML}" 
        >
    </iframe>
    <br/>
    <small>
        <a href="https://www.openstreetmap.org/?mlat=${latitude.innerHTML}&mlon=${longitude.innerHTML}#map=19/${latitude.innerHTML}/${longitude.innerHTML}">
            Größere Karte anzeigen
        </a>
    </small>
`
}