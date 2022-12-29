ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([318542.541652, 4061568.612676, 328156.825357, 4071067.656680]);
var wms_layers = [];

var lyr_Distancia_a_canales_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia_a_canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distancia_a_canales_0.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320925.000000, 4063580.000000, 327005.000000, 4069340.000000]
                            })
                        });
var lyr_Orientacin_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orientacin_1.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.500000, 4063577.500000, 327012.500000, 4069342.500000]
                            })
                        });
var lyr_Densidad_pinsapo_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad_pinsapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidad_pinsapo_2.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320927.000000, 4063578.000000, 327007.000000, 4069338.000000]
                            })
                        });
var lyr_Indice_Shannon_10m_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Indice_Shannon_10m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Indice_Shannon_10m_3.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320923.992600, 4063583.043300, 327013.992600, 4069343.043300]
                            })
                        });
var lyr_Raster_virtual_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster_virtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Raster_virtual_4.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.500000, 4063576.793300, 327012.500000, 4069343.043300]
                            })
                        });
var lyr_Segmentacion_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Segmentacion",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Segmentacion_5.png",
    attributions: ' ',
                                projection: 'EPSG:25830',
                                alwaysInRange: true,
                                imageExtent: [320922.500000, 4063576.793300, 327012.500000, 4069343.043300]
                            })
                        });

lyr_Distancia_a_canales_0.setVisible(true);lyr_Orientacin_1.setVisible(true);lyr_Densidad_pinsapo_2.setVisible(true);lyr_Indice_Shannon_10m_3.setVisible(true);lyr_Raster_virtual_4.setVisible(true);lyr_Segmentacion_5.setVisible(true);
var layersList = [lyr_Distancia_a_canales_0,lyr_Orientacin_1,lyr_Densidad_pinsapo_2,lyr_Indice_Shannon_10m_3,lyr_Raster_virtual_4,lyr_Segmentacion_5];
