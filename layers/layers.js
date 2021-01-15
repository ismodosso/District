ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-282916.743953, 477677.670026, 750932.428774, 1218694.563776]);
var wms_layers = [];

var format_cidistrict_0 = new ol.format.GeoJSON();
var features_cidistrict_0 = format_cidistrict_0.readFeatures(json_cidistrict_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidistrict_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cidistrict_0.addFeatures(features_cidistrict_0);
var lyr_cidistrict_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cidistrict_0, 
                style: style_cidistrict_0,
                interactive: true,
                title: '<img src="styles/legend/cidistrict_0.png" /> ci-district'
            });
var format_TerritoirecommercialdeJumiaKorhogo22_1 = new ol.format.GeoJSON();
var features_TerritoirecommercialdeJumiaKorhogo22_1 = format_TerritoirecommercialdeJumiaKorhogo22_1.readFeatures(json_TerritoirecommercialdeJumiaKorhogo22_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerritoirecommercialdeJumiaKorhogo22_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerritoirecommercialdeJumiaKorhogo22_1.addFeatures(features_TerritoirecommercialdeJumiaKorhogo22_1);
var lyr_TerritoirecommercialdeJumiaKorhogo22_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TerritoirecommercialdeJumiaKorhogo22_1, 
                style: style_TerritoirecommercialdeJumiaKorhogo22_1,
                interactive: true,
                title: '<img src="styles/legend/TerritoirecommercialdeJumiaKorhogo22_1.png" /> Territoire commercial de Jumia Korhogo22'
            });
var format_limiteDistrict_2 = new ol.format.GeoJSON();
var features_limiteDistrict_2 = format_limiteDistrict_2.readFeatures(json_limiteDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_limiteDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiteDistrict_2.addFeatures(features_limiteDistrict_2);
var lyr_limiteDistrict_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limiteDistrict_2, 
                style: style_limiteDistrict_2,
                interactive: true,
                title: '<img src="styles/legend/limiteDistrict_2.png" /> limite District'
            });
var format_agenceregionaljumiadeKorhogo_3 = new ol.format.GeoJSON();
var features_agenceregionaljumiadeKorhogo_3 = format_agenceregionaljumiadeKorhogo_3.readFeatures(json_agenceregionaljumiadeKorhogo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_agenceregionaljumiadeKorhogo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agenceregionaljumiadeKorhogo_3.addFeatures(features_agenceregionaljumiadeKorhogo_3);
var lyr_agenceregionaljumiadeKorhogo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agenceregionaljumiadeKorhogo_3, 
                style: style_agenceregionaljumiadeKorhogo_3,
                interactive: true,
                title: '<img src="styles/legend/agenceregionaljumiadeKorhogo_3.png" /> agence regional jumia de Korhogo'
            });
var format_CheflieudeDepartement_4 = new ol.format.GeoJSON();
var features_CheflieudeDepartement_4 = format_CheflieudeDepartement_4.readFeatures(json_CheflieudeDepartement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CheflieudeDepartement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheflieudeDepartement_4.addFeatures(features_CheflieudeDepartement_4);
var lyr_CheflieudeDepartement_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheflieudeDepartement_4, 
                style: style_CheflieudeDepartement_4,
                interactive: true,
                title: '<img src="styles/legend/CheflieudeDepartement_4.png" /> Chef-lieu de Departement'
            });

lyr_cidistrict_0.setVisible(true);lyr_TerritoirecommercialdeJumiaKorhogo22_1.setVisible(true);lyr_limiteDistrict_2.setVisible(false);lyr_agenceregionaljumiadeKorhogo_3.setVisible(true);lyr_CheflieudeDepartement_4.setVisible(true);
var layersList = [lyr_cidistrict_0,lyr_TerritoirecommercialdeJumiaKorhogo22_1,lyr_limiteDistrict_2,lyr_agenceregionaljumiadeKorhogo_3,lyr_CheflieudeDepartement_4];
lyr_cidistrict_0.set('fieldAliases', {'LIBREG': 'LIBREG', 'LIBDEP': 'LIBDEP', 'LIBDIST': 'LIBDIST', });
lyr_TerritoirecommercialdeJumiaKorhogo22_1.set('fieldAliases', {'NOM': 'NOM', 'LIBREG': 'LIBREG', 'LIBDEP': 'LIBDEP', 'LIBDIST': 'LIBDIST', });
lyr_limiteDistrict_2.set('fieldAliases', {'id': 'id', });
lyr_agenceregionaljumiadeKorhogo_3.set('fieldAliases', {'id': 'id', });
lyr_CheflieudeDepartement_4.set('fieldAliases', {'NOM': 'NOM', 'HOMMES': 'HOMMES', 'FEMMES': 'FEMMES', 'TOTAL': 'TOTAL', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'USER': 'USER', });
lyr_cidistrict_0.set('fieldImages', {'LIBREG': 'TextEdit', 'LIBDEP': 'TextEdit', 'LIBDIST': 'TextEdit', });
lyr_TerritoirecommercialdeJumiaKorhogo22_1.set('fieldImages', {'NOM': 'TextEdit', 'LIBREG': 'TextEdit', 'LIBDEP': 'TextEdit', 'LIBDIST': 'TextEdit', });
lyr_limiteDistrict_2.set('fieldImages', {'id': 'TextEdit', });
lyr_agenceregionaljumiadeKorhogo_3.set('fieldImages', {'id': 'TextEdit', });
lyr_CheflieudeDepartement_4.set('fieldImages', {'NOM': 'TextEdit', 'HOMMES': 'TextEdit', 'FEMMES': 'TextEdit', 'TOTAL': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'USER': 'TextEdit', });
lyr_cidistrict_0.set('fieldLabels', {'LIBREG': 'no label', 'LIBDEP': 'no label', 'LIBDIST': 'no label', });
lyr_TerritoirecommercialdeJumiaKorhogo22_1.set('fieldLabels', {'NOM': 'no label', 'LIBREG': 'no label', 'LIBDEP': 'no label', 'LIBDIST': 'no label', });
lyr_limiteDistrict_2.set('fieldLabels', {'id': 'no label', });
lyr_agenceregionaljumiadeKorhogo_3.set('fieldLabels', {'id': 'no label', });
lyr_CheflieudeDepartement_4.set('fieldLabels', {'NOM': 'no label', 'HOMMES': 'no label', 'FEMMES': 'no label', 'TOTAL': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'USER': 'no label', });
lyr_CheflieudeDepartement_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});