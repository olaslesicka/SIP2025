ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2180").setExtent([641413.208916, 518304.842737, 646529.688396, 524440.372072]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_c2002_HYDRO_WODY_POWIE_merge_1 = new ol.format.GeoJSON();
var features_c2002_HYDRO_WODY_POWIE_merge_1 = format_c2002_HYDRO_WODY_POWIE_merge_1.readFeatures(json_c2002_HYDRO_WODY_POWIE_merge_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_c2002_HYDRO_WODY_POWIE_merge_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c2002_HYDRO_WODY_POWIE_merge_1.addFeatures(features_c2002_HYDRO_WODY_POWIE_merge_1);
var lyr_c2002_HYDRO_WODY_POWIE_merge_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_c2002_HYDRO_WODY_POWIE_merge_1, 
                style: style_c2002_HYDRO_WODY_POWIE_merge_1,
                popuplayertitle: 'c2002_HYDRO_WODY_POWIE_merge',
                interactive: false,
                title: '<img src="styles/legend/c2002_HYDRO_WODY_POWIE_merge_1.png" /> c2002_HYDRO_WODY_POWIE_merge'
            });
var format_wody_pow_bug_sentinel_2 = new ol.format.GeoJSON();
var features_wody_pow_bug_sentinel_2 = format_wody_pow_bug_sentinel_2.readFeatures(json_wody_pow_bug_sentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_wody_pow_bug_sentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wody_pow_bug_sentinel_2.addFeatures(features_wody_pow_bug_sentinel_2);
var lyr_wody_pow_bug_sentinel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wody_pow_bug_sentinel_2, 
                style: style_wody_pow_bug_sentinel_2,
                popuplayertitle: 'wody_pow_bug_sentinel',
                interactive: false,
                title: '<img src="styles/legend/wody_pow_bug_sentinel_2.png" /> wody_pow_bug_sentinel'
            });
var format_bug_historyczna_1940_3 = new ol.format.GeoJSON();
var features_bug_historyczna_1940_3 = format_bug_historyczna_1940_3.readFeatures(json_bug_historyczna_1940_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_bug_historyczna_1940_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bug_historyczna_1940_3.addFeatures(features_bug_historyczna_1940_3);
var lyr_bug_historyczna_1940_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bug_historyczna_1940_3, 
                style: style_bug_historyczna_1940_3,
                popuplayertitle: 'bug_historyczna_1940',
                interactive: true,
                title: '<img src="styles/legend/bug_historyczna_1940_3.png" /> bug_historyczna_1940'
            });
var format_siatka_4 = new ol.format.GeoJSON();
var features_siatka_4 = format_siatka_4.readFeatures(json_siatka_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_siatka_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_4.addFeatures(features_siatka_4);
var lyr_siatka_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_4, 
                style: style_siatka_4,
                popuplayertitle: 'siatka',
                interactive: false,
    title: 'siatka<br />\
    <img src="styles/legend/siatka_4_0.png" /> -100 - -38,5<br />\
    <img src="styles/legend/siatka_4_1.png" /> -38,5 - -7,4<br />\
    <img src="styles/legend/siatka_4_2.png" /> -7,4 - 0<br />\
    <img src="styles/legend/siatka_4_3.png" /> 0 - 33,5<br />\
    <img src="styles/legend/siatka_4_4.png" /> 33,5 - 100<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_c2002_HYDRO_WODY_POWIE_merge_1.setVisible(true);lyr_wody_pow_bug_sentinel_2.setVisible(true);lyr_bug_historyczna_1940_3.setVisible(true);lyr_siatka_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_c2002_HYDRO_WODY_POWIE_merge_1,lyr_wody_pow_bug_sentinel_2,lyr_bug_historyczna_1940_3,lyr_siatka_4];
lyr_c2002_HYDRO_WODY_POWIE_merge_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_wody_pow_bug_sentinel_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_bug_historyczna_1940_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', 'wsp_zw': 'wsp_zw', });
lyr_siatka_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'procent_historyczna': 'procent_historyczna', 'procent_vmap': 'procent_vmap', 'proceny_sentinel': 'proceny_sentinel', 'hist_vmap': 'hist_vmap', 'vmap_sentinel': 'vmap_sentinel', 'sentinel_historyczna': 'sentinel_historyczna', });
lyr_c2002_HYDRO_WODY_POWIE_merge_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_wody_pow_bug_sentinel_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_bug_historyczna_1940_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_siatka_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'procent_historyczna': 'TextEdit', 'procent_vmap': 'TextEdit', 'proceny_sentinel': 'TextEdit', 'hist_vmap': 'TextEdit', 'vmap_sentinel': 'TextEdit', 'sentinel_historyczna': 'TextEdit', });
lyr_c2002_HYDRO_WODY_POWIE_merge_1.set('fieldLabels', {'OBJECTID': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_wody_pow_bug_sentinel_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obw': 'no label', 'wsp_zw': 'no label', });
lyr_bug_historyczna_1940_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'pow': 'inline label - always visible', 'obw': 'no label', 'wsp_zw': 'inline label - always visible', });
lyr_siatka_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'procent_historyczna': 'no label', 'procent_vmap': 'no label', 'proceny_sentinel': 'no label', 'hist_vmap': 'no label', 'vmap_sentinel': 'no label', 'sentinel_historyczna': 'no label', });
lyr_siatka_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});