var map = L.map('map', {
    center: [-17.98863947581346, -70.23912162615784],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.995393,-70.25349], [-17.970902,-70.224226]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);

var Vereda = L.tileLayer.wms("http://localhost:8080/geoserver/lotizacion_sencico/wms?", {
    layers: "lotizacion_sencico:VEREDAS", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Vereda.addTo(map);

 var Area_Verde = L.tileLayer.wms("http://localhost:8080/geoserver/lotizacion_sencico/wms?", {
    layers: "lotizacion_sencico:AREAS_VERDES", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
 Area_Verde.addTo(map);

 var Manzana = L.tileLayer.wms("http://localhost:8080/geoserver/lotizacion_sencico/wms?", {
    layers: "lotizacion_sencico:manzanas", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Manzana.addTo(map);

var Lotes = L.tileLayer.wms("http://localhost:8080/geoserver/lotizacion_sencico/wms?", {
    layers: "lotizacion_sencico:lote", //gisweb: lotes sencico
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
Lotes.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Satelite": bgoogleSat
};

var overlayMaps = {
    "Vereda": Vereda,    "Area Verde": Area_Verde,
    "Manzana": Manzana,
    "Lotes": Lotes
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
