var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_PrediccionesreaRural_0 = new ol.format.GeoJSON();
var features_PrediccionesreaRural_0 = format_PrediccionesreaRural_0.readFeatures(json_PrediccionesreaRural_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediccionesreaRural_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PrediccionesreaRural_0.addFeatures(features_PrediccionesreaRural_0);var lyr_PrediccionesreaRural_0 = new ol.layer.Vector({
                source:jsonSource_PrediccionesreaRural_0, 
                style: style_PrediccionesreaRural_0,
    title: 'Predicciones área Rural<br />\
    <img src="styles/legend/PrediccionesreaRural_0_0.png" />  1473 - 3432 <br />\
    <img src="styles/legend/PrediccionesreaRural_0_1.png" />  3432 - 6877 <br />\
    <img src="styles/legend/PrediccionesreaRural_0_2.png" />  6877 - 11920 <br />\
    <img src="styles/legend/PrediccionesreaRural_0_3.png" />  11920 - 18713 <br />\
    <img src="styles/legend/PrediccionesreaRural_0_4.png" />  18713 - 24736 <br />'
        });var format_Prediccionesreaurbana_1 = new ol.format.GeoJSON();
var features_Prediccionesreaurbana_1 = format_Prediccionesreaurbana_1.readFeatures(json_Prediccionesreaurbana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prediccionesreaurbana_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Prediccionesreaurbana_1.addFeatures(features_Prediccionesreaurbana_1);var lyr_Prediccionesreaurbana_1 = new ol.layer.Vector({
                source:jsonSource_Prediccionesreaurbana_1, 
                style: style_Prediccionesreaurbana_1,
    title: 'Predicciones área urbana<br />\
    <img src="styles/legend/Prediccionesreaurbana_1_0.png" />  1.0967 - 25.9455 <br />\
    <img src="styles/legend/Prediccionesreaurbana_1_1.png" />  25.9455 - 52.2479 <br />\
    <img src="styles/legend/Prediccionesreaurbana_1_2.png" />  52.2479 - 79.2811 <br />\
    <img src="styles/legend/Prediccionesreaurbana_1_3.png" />  79.2811 - 107.5547 <br />\
    <img src="styles/legend/Prediccionesreaurbana_1_4.png" />  107.5547 - 142.7365 <br />'
        });

lyr_PrediccionesreaRural_0.setVisible(true);lyr_Prediccionesreaurbana_1.setVisible(true);
var layersList = [baseLayer,lyr_PrediccionesreaRural_0,lyr_Prediccionesreaurbana_1];
lyr_PrediccionesreaRural_0.set('fieldAliases', {'id1': 'id1', 'acc_t_za': 'acc_t_za', 'acc_za_km': 'acc_za_km', 'acc_pa_min': 'acc_pa_min', 'acc_pa_km': 'acc_pa_km', 'i_d_ce': 'i_d_ce', 'i_t_ce': 'i_t_ce', 'area': 'area', 'P_predicte': 'P_predicte', 'P_VALOR': 'Valor de oferta por hectárea', 'v_predio': 'v_predio', 'tasa0_8': 'Tasa al 0.8 por mil', 'tasa_3': 'Tasa al 3 por mil', 'tasa_08_ha': 'tasa_08_ha', 'tasa_3_ha': 'tasa_3_ha', 'val_tot': 'Valor de oferta del predio', });
lyr_Prediccionesreaurbana_1.set('fieldAliases', {'FID_1': 'FID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Frent_Fach': 'Frent_Fach', 'Ancho_via': 'Ancho_via', 'd_ce': 'd_ce', 'Cap_rodaur': 'Cap_rodaur', 'uso': 'uso', 'V_ln_valor': 'V_ln_valor', 'V_valor': 'valor del lote por metro cuadrado', 'val_1000': 'val_1000', 'zona': 'zona', 'val_pred': 'Valor de oferta del lote', 'tasa_1_05': 'Tasa al 1.05 por mil', 'tasa_5': 'Tasa al 5 por mil', });
lyr_PrediccionesreaRural_0.set('fieldImages', {'id1': 'Hidden', 'acc_t_za': 'Hidden', 'acc_za_km': 'Hidden', 'acc_pa_min': 'Hidden', 'acc_pa_km': 'Hidden', 'i_d_ce': 'Hidden', 'i_t_ce': 'Hidden', 'area': 'Hidden', 'P_predicte': 'Hidden', 'P_VALOR': 'TextEdit', 'v_predio': 'Hidden', 'tasa0_8': 'TextEdit', 'tasa_3': 'TextEdit', 'tasa_08_ha': 'Hidden', 'tasa_3_ha': 'Hidden', 'val_tot': 'TextEdit', });
lyr_Prediccionesreaurbana_1.set('fieldImages', {'FID_1': 'Hidden', 'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Frent_Fach': 'Hidden', 'Ancho_via': 'Hidden', 'd_ce': 'Hidden', 'Cap_rodaur': 'Hidden', 'uso': 'Hidden', 'V_ln_valor': 'Hidden', 'V_valor': 'TextEdit', 'val_1000': 'Hidden', 'zona': 'Hidden', 'val_pred': 'TextEdit', 'tasa_1_05': 'TextEdit', 'tasa_5': 'TextEdit', });
lyr_PrediccionesreaRural_0.set('fieldLabels', {'P_VALOR': 'inline label', 'tasa0_8': 'inline label', 'tasa_3': 'inline label', 'val_tot': 'inline label', });
lyr_Prediccionesreaurbana_1.set('fieldLabels', {'V_valor': 'inline label', 'val_pred': 'inline label', 'tasa_1_05': 'inline label', 'tasa_5': 'inline label', });
lyr_Prediccionesreaurbana_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Prediccionesreaurbana_1.on("postcompose", update);

    var listenerKey = lyr_Prediccionesreaurbana_1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });