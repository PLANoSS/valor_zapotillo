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
        });var format_Muestreoenelrearural_2 = new ol.format.GeoJSON();
var features_Muestreoenelrearural_2 = format_Muestreoenelrearural_2.readFeatures(json_Muestreoenelrearural_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muestreoenelrearural_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Muestreoenelrearural_2.addFeatures(features_Muestreoenelrearural_2);var lyr_Muestreoenelrearural_2 = new ol.layer.Vector({
                source:jsonSource_Muestreoenelrearural_2, 
                style: style_Muestreoenelrearural_2,
                title: '<img src="styles/legend/Muestreoenelrearural_2.png" /> Muestreo en el área rural'
            });var format_Muestreoenelreaurbana_3 = new ol.format.GeoJSON();
var features_Muestreoenelreaurbana_3 = format_Muestreoenelreaurbana_3.readFeatures(json_Muestreoenelreaurbana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muestreoenelreaurbana_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Muestreoenelreaurbana_3.addFeatures(features_Muestreoenelreaurbana_3);var lyr_Muestreoenelreaurbana_3 = new ol.layer.Vector({
                source:jsonSource_Muestreoenelreaurbana_3, 
                style: style_Muestreoenelreaurbana_3,
                title: '<img src="styles/legend/Muestreoenelreaurbana_3.png" /> Muestreo en el área urbana'
            });

lyr_PrediccionesreaRural_0.setVisible(true);lyr_Prediccionesreaurbana_1.setVisible(true);lyr_Muestreoenelrearural_2.setVisible(true);lyr_Muestreoenelreaurbana_3.setVisible(true);
var layersList = [baseLayer,lyr_PrediccionesreaRural_0,lyr_Prediccionesreaurbana_1,lyr_Muestreoenelrearural_2,lyr_Muestreoenelreaurbana_3];
lyr_PrediccionesreaRural_0.set('fieldAliases', {'id1': 'id1', 'acc_t_za': 'acc_t_za', 'acc_za_km': 'acc_za_km', 'acc_pa_min': 'acc_pa_min', 'acc_pa_km': 'acc_pa_km', 'i_d_ce': 'i_d_ce', 'i_t_ce': 'i_t_ce', 'area': 'area', 'P_predicte': 'P_predicte', 'P_VALOR': 'Valor de oferta por hectárea', 'v_predio': 'v_predio', 'tasa0_8': 'Tasa al 0.8 por mil', 'tasa_3': 'Tasa al 3 por mil', 'tasa_08_ha': 'tasa_08_ha', 'tasa_3_ha': 'tasa_3_ha', 'val_tot': 'Valor de oferta del predio', });
lyr_Prediccionesreaurbana_1.set('fieldAliases', {'FID_1': 'FID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Frent_Fach': 'Frent_Fach', 'Ancho_via': 'Ancho_via', 'd_ce': 'd_ce', 'Cap_rodaur': 'Cap_rodaur', 'uso': 'uso', 'V_ln_valor': 'V_ln_valor', 'V_valor': 'valor del lote por metro cuadrado', 'val_1000': 'val_1000', 'zona': 'zona', 'val_pred': 'Valor de oferta del lote', 'tasa_1_05': 'Tasa al 1.05 por mil', 'tasa_5': 'Tasa al 5 por mil', });
lyr_Muestreoenelrearural_2.set('fieldAliases', {'ai_d_ce': 'distancia a cabecera cantonal', 'ai_t_ce': 'tiempo ', 'ap0_2': 'ap0_2', 'ap12_25': 'ap12_25', 'ap2_5': 'ap2_5', 'ap25_40': 'ap25_40', 'ap40_70': 'ap40_70', 'ap5_12': 'ap5_12', 'ap70_100': 'ap70_100', 'apdominant': 'Pendiente dominante', 'aCUS_P_III': 'aCUS_P_III', 'aCUS_P_IV': 'aCUS_P_IV', 'aCUS_P_V': 'aCUS_P_V', 'aCUS_P_VI': 'aCUS_P_VI', 'aCUS_P_VII': 'aCUS_P_VII', 'aCUS_P_V_1': 'aCUS_P_V_1', 'aCUS_MISC': 'aCUS_MISC', 'aUAS_AGR': 'aUAS_AGR', 'aUAS_AGFOR': 'aUAS_AGFOR', 'aUAS_AGMX': 'aUAS_AGMX', 'aUAS_AGUA': 'aUAS_AGUA', 'aUAS_ANTRO': 'aUAS_ANTRO', 'aUAS_CONSE': 'aUAS_CONSE', 'aUAS_PECUA': 'aUAS_PECUA', 'aUAS_DESCA': 'aUAS_DESCA', 'aUAS_IMPRO': 'aUAS_IMPRO', 'aAGUA': 'Agua', 'aELECTRICI': 'Electricidad', 'aALCANTARI': 'Alcantarillado', 'aHABITACIO': 'Vivienda', 'aln_D_CE': 'Distancia a cabecera cantonal', 'aln_D_PARR': 'Distancia a cabecera parroquial', 'aln_T_CE': 'Tiempo a cabecera cantonal', 'aln_T_PARR': 'Tiempo a cabecera parroquial', 'aln_AREA_H': 'Área', 'aTIPO_VALO': 'Tipo de valor', 'afecha_2': 'Fecha', 'ariego': 'Superficie bajo riego', 'aln_VALOR_': 'aln_VALOR_', 'avalor': 'Precio', });
lyr_Muestreoenelreaurbana_3.set('fieldAliases', {'Barrio': 'Barrio', 'Entrevista': 'Entrevista', '¿Cuál es': 'Relación con el predio', '¿Cuál _1': '¿Cuál _1', '¿Cuál _2': '¿Cuál _2', '¿Cuál _3': '¿Cuál _3', '¿Cuál _4': '¿Cuál _4', 'El comprad': 'El comprador era:', 'En el mome': 'El predio tenía:', 'En el mo_1': 'En el mo_1', 'En el mo_2': 'En el mo_2', 'En el mo_3': 'En el mo_3', 'Si compró': 'Cuánto pagó o le pagaron por el predio?', 'Qué super': 'Superficie', 'Si compr_1': 'Cuándo compró/vendió?', 'Si es vend': 'Si es vend', 'Cuál fue': 'Cuál fue', 'Cuál es e': 'Cuál es e', 'Cuál fu_1': 'Cuál fu_1', 'Cuál es_1': 'Cuál es_1', 'Cuál era': 'Cuál era', 'Cuál es l': 'Cuál es l', 'Cuál er_1': 'Cuál er_1', 'Cuál es_2': 'Cuál es_2', 'Tenía agu': 'Tenía agu', 'Tiene actu': 'Tiene actu', 'Tenía acc': 'Tenía acc', 'Tiene ac_1': 'Tiene ac_1', 'Tenía a_1': 'Tenía a_1', 'Tiene ac_2': 'Tiene ac_2', 'Tenía a_2': 'Tenía a_2', 'Tiene ac_3': 'Tiene ac_3', 'Tenía tel': 'Tenía tel', 'Tiene ac_4': 'Tiene ac_4', 'Cuál er_2': 'Cuál er_2', 'Cuál es_3': 'Cuál es_3', 'Cuál er_3': 'Cuál er_3', 'Cuál es a': 'Cuál es a', 'El lote te': 'El lote te', 'Actualment': 'Actualment', 'Qué tipo': 'Qué tipo', 'Qué tip_1': 'Qué tip_1', 'Si tiene c': 'Si tiene c', 'Si tenía': 'Si tenía', 'En caso de': 'Valor mínimo de oferta', });
lyr_PrediccionesreaRural_0.set('fieldImages', {'id1': 'Hidden', 'acc_t_za': 'Hidden', 'acc_za_km': 'Hidden', 'acc_pa_min': 'Hidden', 'acc_pa_km': 'Hidden', 'i_d_ce': 'Hidden', 'i_t_ce': 'Hidden', 'area': 'Hidden', 'P_predicte': 'Hidden', 'P_VALOR': 'TextEdit', 'v_predio': 'Hidden', 'tasa0_8': 'TextEdit', 'tasa_3': 'TextEdit', 'tasa_08_ha': 'Hidden', 'tasa_3_ha': 'Hidden', 'val_tot': 'TextEdit', });
lyr_Prediccionesreaurbana_1.set('fieldImages', {'FID_1': 'Hidden', 'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Frent_Fach': 'Hidden', 'Ancho_via': 'Hidden', 'd_ce': 'Hidden', 'Cap_rodaur': 'Hidden', 'uso': 'Hidden', 'V_ln_valor': 'Hidden', 'V_valor': 'TextEdit', 'val_1000': 'Hidden', 'zona': 'Hidden', 'val_pred': 'TextEdit', 'tasa_1_05': 'TextEdit', 'tasa_5': 'TextEdit', });
lyr_Muestreoenelrearural_2.set('fieldImages', {'ai_d_ce': 'Hidden', 'ai_t_ce': 'Hidden', 'ap0_2': 'Hidden', 'ap12_25': 'Hidden', 'ap2_5': 'Hidden', 'ap25_40': 'Hidden', 'ap40_70': 'Hidden', 'ap5_12': 'Hidden', 'ap70_100': 'Hidden', 'apdominant': 'TextEdit', 'aCUS_P_III': 'Hidden', 'aCUS_P_IV': 'Hidden', 'aCUS_P_V': 'Hidden', 'aCUS_P_VI': 'Hidden', 'aCUS_P_VII': 'Hidden', 'aCUS_P_V_1': 'Hidden', 'aCUS_MISC': 'Hidden', 'aUAS_AGR': 'Hidden', 'aUAS_AGFOR': 'Hidden', 'aUAS_AGMX': 'Hidden', 'aUAS_AGUA': 'Hidden', 'aUAS_ANTRO': 'Hidden', 'aUAS_CONSE': 'Hidden', 'aUAS_PECUA': 'Hidden', 'aUAS_DESCA': 'Hidden', 'aUAS_IMPRO': 'Hidden', 'aAGUA': 'TextEdit', 'aELECTRICI': 'TextEdit', 'aALCANTARI': 'TextEdit', 'aHABITACIO': 'TextEdit', 'aln_D_CE': 'TextEdit', 'aln_D_PARR': 'TextEdit', 'aln_T_CE': 'TextEdit', 'aln_T_PARR': 'TextEdit', 'aln_AREA_H': 'TextEdit', 'aTIPO_VALO': 'TextEdit', 'afecha_2': 'TextEdit', 'ariego': 'TextEdit', 'aln_VALOR_': 'Hidden', 'avalor': 'TextEdit', });
lyr_Muestreoenelreaurbana_3.set('fieldImages', {'Barrio': 'Hidden', 'Entrevista': 'Hidden', '¿Cuál es': 'TextEdit', '¿Cuál _1': 'Hidden', '¿Cuál _2': 'Hidden', '¿Cuál _3': 'Hidden', '¿Cuál _4': 'Hidden', 'El comprad': 'TextEdit', 'En el mome': 'TextEdit', 'En el mo_1': 'Hidden', 'En el mo_2': 'Hidden', 'En el mo_3': 'Hidden', 'Si compró': 'TextEdit', 'Qué super': 'TextEdit', 'Si compr_1': 'TextEdit', 'Si es vend': 'Hidden', 'Cuál fue': 'Hidden', 'Cuál es e': 'Hidden', 'Cuál fu_1': 'Hidden', 'Cuál es_1': 'Hidden', 'Cuál era': 'Hidden', 'Cuál es l': 'Hidden', 'Cuál er_1': 'Hidden', 'Cuál es_2': 'Hidden', 'Tenía agu': 'Hidden', 'Tiene actu': 'Hidden', 'Tenía acc': 'Hidden', 'Tiene ac_1': 'Hidden', 'Tenía a_1': 'Hidden', 'Tiene ac_2': 'Hidden', 'Tenía a_2': 'Hidden', 'Tiene ac_3': 'Hidden', 'Tenía tel': 'Hidden', 'Tiene ac_4': 'Hidden', 'Cuál er_2': 'Hidden', 'Cuál es_3': 'Hidden', 'Cuál er_3': 'Hidden', 'Cuál es a': 'Hidden', 'El lote te': 'Hidden', 'Actualment': 'Hidden', 'Qué tipo': 'Hidden', 'Qué tip_1': 'Hidden', 'Si tiene c': 'Hidden', 'Si tenía': 'Hidden', 'En caso de': 'TextEdit', });
lyr_PrediccionesreaRural_0.set('fieldLabels', {'P_VALOR': 'inline label', 'tasa0_8': 'inline label', 'tasa_3': 'inline label', 'val_tot': 'inline label', });
lyr_Prediccionesreaurbana_1.set('fieldLabels', {'V_valor': 'inline label', 'val_pred': 'inline label', 'tasa_1_05': 'inline label', 'tasa_5': 'inline label', });
lyr_Muestreoenelrearural_2.set('fieldLabels', {'apdominant': 'inline label', 'aAGUA': 'inline label', 'aELECTRICI': 'inline label', 'aALCANTARI': 'inline label', 'aHABITACIO': 'inline label', 'aln_D_CE': 'inline label', 'aln_D_PARR': 'inline label', 'aln_T_CE': 'inline label', 'aln_T_PARR': 'inline label', 'aln_AREA_H': 'inline label', 'aTIPO_VALO': 'inline label', 'afecha_2': 'inline label', 'ariego': 'inline label', 'avalor': 'inline label', });
lyr_Muestreoenelreaurbana_3.set('fieldLabels', {'¿Cuál es': 'inline label', 'El comprad': 'inline label', 'En el mome': 'inline label', 'Si compró': 'inline label', 'Qué super': 'inline label', 'Si compr_1': 'inline label', 'En caso de': 'inline label', });
lyr_Muestreoenelreaurbana_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Muestreoenelreaurbana_3.on("postcompose", update);

    var listenerKey = lyr_Muestreoenelreaurbana_3.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });