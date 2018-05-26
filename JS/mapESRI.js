require(["esri/map", 
        "dojo/on",
        "esri/dijit/Search",
        "esri/layers/FeatureLayer",
        "esri/graphic",
        "esri/symbols/PictureMarkerSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/Color",
        "esri/geometry/Point",
        "esri/InfoTemplate",
        "dojo/domReady!"], function(Map, on, Search,FeatureLayer, Graphic,PictureMarkerSymbol,SimpleMarkerSymbol, SimpleLineSymbol,  Color, Point, InfoTemplate) {
         var map = new Map("map", {
            // center: [100.493550,13.653851],
            center: [100.496347, 13.65109], // long,lat
             zoom: 16,
             basemap: "topo",
            //  isPan:false
             });
             on(map,'load', function(){
                //alert('map-load');
               // var featureLayer = new FeatureLayer("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Earthquakes/EarthquakesFromLastSevenDays/MapServer/0");
                //map.addLayer(featureLayer); 
              /* on(map,'click', function(evt){
                    console.log(evt);
                    var graphic = new Graphic(evt.mapPoint);
                    var symbols = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 1000,
                                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                    new Color([0,0,0]), 1),
                                      new Color([255,0,0,0.5]));
                    graphic.setSymbol(symbols);
                    console.log("graphic",graphic);
                    map.graphics.add(graphic);
                    
                });*/
                var x = 21;
                var X = 35;
                var y = 30;
                var Y = 50;
                var search = new Search({
                  map:map
                },"Search");
               search.startup();
                
                  //--------------------------   Education     ------------------------
                  //`KMUTT
                var myPoint = {
                  "geometry":
                    {"x":100.494064,
                     "y":13.650826,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.494064,
                     "YCoord":13.650826,
                     "Name":"มจธ",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/edu.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                  //`โรงเรียนนาหลวง
                var myPoint = {
                  "geometry":
                    {"x":100.494676,
                     "y":13.648172,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.494676,
                     "YCoord":13.648172,
                     "Name":"โรงเรียนนาหลวง",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/edu.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);


                  
                  //`โรงเรียนฝึกอาชีพ กรุงเทพฯ
                var myPoint = {
                  "geometry":
                    {"x":100.491962,
                     "y":13.648897,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.491962,
                     "YCoord":13.648897,
                     "Name":"โรงเรียนฝึกอาชีพ กรุงเทพฯ",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/edu.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //`โรงเรียนดรุณสิกขาลัย
                var myPoint = {
                  "geometry":
                    {"x":100.495303,
                     "y":13.649942,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.495303,
                     "YCoord":13.649942,
                     "Name":"โรงเรียนฝึกอาชีพ กรุงเทพฯ",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/edu.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //`โรงเรียนขจรโรจน์วิทยา
                var myPoint = {
                  "geometry":
                    {"x":100.498677,
                     "y":13.655937,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.498677,
                     "YCoord":13.655937,
                     "Name":"โรงเรียนขจรโรจน์วิทยา",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/edu.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);
                   //`โรงเรียนขจรโรจน์วิทยา แผนกอนุบาล
                   var myPoint = {
                    "geometry":
                      {"x":100.499417,
                       "y":13.656119,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.499417,
                       "YCoord":13.656119,
                       "Name":"โรงเรียนขจรโรจน์วิทยา แผนกอนุบาล",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/edu.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                    {"title":"สถาศึกษา",
                    "content":"${Name}"}
                  };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);

                    //------------------- Hospital ------------------------------

                    //`โรงพยาบาลสัตว์วันใส
                   var myPoint = {
                    "geometry":
                      {"x":100.496250,
                       "y":13.649095,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.496250,
                       "YCoord":13.649095,
                       "Name":"โรงพยาบาลสัตว์วันใส",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/hos.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                      {"title":"โรงพยาบาล",
                      "content":"${Name}"}
                    };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);

                      //`กิโลเก้ารักษาสัตว์
                   var myPoint = {
                    "geometry":
                      {"x":100.496366,
                       "y":13.649814,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.496366,
                       "YCoord":13.649814,
                       "Name":"กิโลเก้ารักษาสัตว์",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/hos.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                      {"title":"โรงพยาบาล",
                      "content":"${Name}"}
                    };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);

                      //`มีฤทธิ์เภสัช
                   var myPoint = {
                    "geometry":
                      {"x":100.497035,
                       "y":13.651309,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.497035,
                       "YCoord":13.651309,
                       "Name":"มีฤทธิ์เภสัช",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/hos.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                      {"title":"โรงพยาบาล",
                      "content":"${Name}"}
                    };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);

                     //`คลินิกแพทย์สุภาพร
                   var myPoint = {
                    "geometry":
                      {"x":100.496919,
                       "y":13.652151,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.496919,
                       "YCoord":13.652151,
                       "Name":"คลินิกแพทย์สุภาพร",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/hos.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                      {"title":"โรงพยาบาล",
                      "content":"${Name}"}
                    };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);


                      //ร้านขายยา
                   var myPoint = {
                    "geometry":
                      {"x":100.497224,
                       "y":13.651840,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.497224,
                       "YCoord":13.651840,
                       "Name":"ร้านขายยา",
                       "onClick":"document.getElementById('id01').style.display='block'",
                       "picStyle":"height:100px;width:auto",
                       "class":"image",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/hos.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : x, 
                      "height" : y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                      {"title":"โรงพยาบาล",
                      "content":"${Name}"}
                    };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);
              //--------------------- Cafe ---------------------

                 //D'oro Coffee House
                 var myPoint = {
                  "geometry":
                    {"x":100.495689,
                     "y":13.650438,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.495689,
                     "YCoord":13.650438,
                     "Name":"D'oro Coffee House",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/cafe.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Cafe",
                    "content":"Condo Name:${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                  //Pronto Coffee
                 var myPoint = {
                  "geometry":
                    {"x":100.495688,
                     "y":13.647038,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.495688,
                     "YCoord":13.647038,
                     "Name":"Pronto Coffee",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/cafe.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Cafe",
                    "content":"Condo Name:${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //Milk'sic House
                 var myPoint = {
                  "geometry":
                    {"x":100.494985,
                     "y":13.646152,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.494985,
                     "YCoord":13.646152,
                     "Name":"Milk'sic House",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/cafe.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Cafe",
                    "content":"Condo Name:${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);


                    //Can Do Cafe
                 var myPoint = {
                  "geometry":
                    {"x":100.496939,
                     "y":13.650566,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496939,
                     "YCoord":13.650566,
                     "Name":"Can Do Cafe",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/cafe.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Cafe",
                    "content":"Condo Name:${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);


                  //------------- Restaurant -----------

                    //ร้านชมพิศ
                 var myPoint = {
                  "geometry":
                    {"x":100.496063,
                     "y":13.647017,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496063,
                     "YCoord":13.647017,
                     "Name":"ร้านชมพิศ",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Restuarant",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                    //นาย9ราดหน้า
                 var myPoint = {
                  "geometry":
                    {"x":100.496376,
                     "y":13.648132,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496376,
                     "YCoord":13.648132,
                     "Name":"นาย9ราดหน้า",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Restuarant",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                //ส้มตำโคราช
                 var myPoint = {
                  "geometry":
                    {"x":100.497139,
                     "y":13.653503,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.497139,
                     "YCoord":13.653503,
                     "Name":"ส้มตำโคราช",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Restuarant",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);



                  //8TTc Cafe
                 var myPoint = {
                  "geometry":
                    {"x":100.496745,
                     "y":13.652554,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496745,
                     "YCoord":13.652554,
                     "Name":"8TTc Cafe",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Restuarant",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                  //ก๋วยเตี๋ยวเรืออยุธยา
                 var myPoint = {
                  "geometry":
                    {"x":100.496933,
                     "y":13.652241,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496933,
                     "YCoord":13.652241,
                     "Name":"ก๋วยเตี๋ยวเรืออยุธยา",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"Restuarant",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //ชาบูนางใน
                 var myPoint = {
                  "geometry":
                    {"x":100.497292,
                     "y":13.651720,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.497292,
                     "YCoord":13.651720,
                     "Name":"ชาบูนางใน",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/res.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                  {"title":"Restuarant",
                  "content":"${Name}"}
                };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);
              //--------------------- 7 -11  ---------------------------------- 
                  //วัฒนวงศ์
                 var myPoint = {
                  "geometry":
                    {"x":100.496848,
                     "y":13.651449,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496848,
                     "YCoord":113.651449,
                     "Name":"วัฒนวงศ์",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/shop.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"ร้านสะดวกซื้อ",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //ตึกวิศวะ
                 var myPoint = {
                  "geometry":
                    {"x":100.493722,
                     "y":13.650291,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496848,
                     "YCoord":113.651449,
                     "Name":"ตึกวิศวะ",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/shop.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"ร้านสะดวกซื้อ",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                    //หอหญิง
                 var myPoint = {
                  "geometry":
                    {"x":100.494753,
                     "y":13.648785,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496848,
                     "YCoord":113.651449,
                     "Name":"หอหญิง",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/shop.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"ร้านสะดวกซื้อ",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //ประชาอุทิศ 28
                 var myPoint = {
                  "geometry":
                    {"x":100.497519,
                     "y":13.654108,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496848,
                     "YCoord":113.651449,
                     "Name":"ประชาอุทิศ 28",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/shop.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"ร้านสะดวกซื้อ",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                   //ขจรโรจน์
                 var myPoint = {
                  "geometry":
                    {"x":100.499382,
                     "y":13.656642,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.496848,
                     "YCoord":113.651449,
                     "Name":"ขจรโรจน์",
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:100px;width:auto",
                     "class":"image",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/shop.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : x, 
                    "height" : y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                    {"title":"ร้านสะดวกซื้อ",
                    "content":"${Name}"}
                  };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);

                  //-----------------------------------------Condo -------------------------------------------
                // Parque Condo
                var myPoint = {
                  "geometry":
                    {"x":100.495065,
                     "y":13.646991,
                  "spatialReference":
                    {"wkid":4326}
                    },
                  "attributes":
                    {"XCoord":100.495065,
                     "YCoord":13.646991,
                     "Name":"Parque Condo",
                     "pic": "Picture/P.jpg", 
                     "onClick":"document.getElementById('id01').style.display='block'",
                     "picStyle":"height:auto;width:100%",
                     "class":"image",
                     "scroll":"#about",
                     "mapID":"map"},
                  "symbol":
                  {
                    "type" : "esriPMS", 
                    "url" : "Picture/condo.png", 
                    "contentType" : "image/png", 
                    "color" : null, 
                    "width" : X, 
                    "height" : Y, 
                    "angle" : 0, 
                    "xoffset" : 0, 
                    "yoffset" : 0
                  },
                  "infoTemplate":
                  {"title":"Condo",
                  "content":"<div><h4>${Name}</h4>  <img  src=${pic} style=${picStyle} > <br> <a href=${scroll}> <h6 onClick=${onClick}>คลิกที่นี่เพื่อดูรายละเอียดห้อง</h6> </a></div>"}
                };
        
                  var gra = new Graphic(myPoint);
                  map.graphics.add(gra);
                  
                  //Library Houze Condo
                  var myPoint = {
                    "geometry":
                      {"x":100.498031,
                       "y":13.654933,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.498031,
                       "YCoord":13.654933,
                       "pic": "Picture/L.jpg",
                       "Name":"Library Houze Condo",
                       "onClick":"document.getElementById('id02').style.display='block'",
                       "picStyle":"height:auto;width:100%",
                       "class":"image",
                       "scroll":"#about",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/condo.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : X, 
                      "height" : Y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                    {"title":"Condo",
                    "content":"<div> <h4>${Name}</h4>  <img  src=${pic} style=${picStyle} > <br>  <br> <a href=${scroll}> <h6 onClick=${onClick}>คลิกที่นี่เพื่อดูรายละเอียดห้อง</h6> </a></div>"}
                  };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);
    
  
                    //he Cube Condo
                  var myPoint = {
                    "geometry":
                      {"x":100.499221,
                       "y":13.655017,
                    "spatialReference":
                      {"wkid":4326}
                      },
                    "attributes":
                      {"XCoord":100.499221,
                       "YCoord":13.655017,
                       "Name":"The Cube Condo",
                       "pic": "Picture/C.jpg",
                       "onClick":"document.getElementById('id03').style.display='block'",
                       "picStyle":"height:auto;width:100%",
                       "class":"image",
                       "scroll":"#about",
                       "mapID":"map"},
                    "symbol":
                    {
                      "type" : "esriPMS", 
                      "url" : "Picture/condo.png", 
                      "contentType" : "image/png", 
                      "color" : null, 
                      "width" : X, 
                      "height" : Y, 
                      "angle" : 0, 
                      "xoffset" : 0, 
                      "yoffset" : 0
                    },
                    "infoTemplate":
                    {"title":"Condo",
                    "content":"_<div><h4>${Name}</h4>  <img  src=${pic} style=${picStyle} >  <br> <a href=${scroll}> <h6 onClick=${onClick}>คลิกที่นี่เพื่อดูรายละเอียดห้อง</h6> </a> </div>"}
                  };
          
                    var gra = new Graphic(myPoint);
                    map.graphics.add(gra);
                  
  
             });
             

             

        }); 
       /* require([
    "esri/basemaps",
    "esri/map",
    "dojo/domReady!"
  ], function (esriBasemaps, Map){
    esriBasemaps.delorme = {
      baseMapLayers: [{url: "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"}
      ],
      thumbnailUrl: "https://www.example.com/images/thumbnail_2014-11-25_61051.png",
      title: "Delorme"
    };

    var map = new Map("ui-map", {
      basemap: "satellite",
      center: [100.493550,13.653851], // long, lat
      zoom: 12,
      sliderStyle: "small"
    });

});*/

$(document).ready(function(){
    $(map).hover(function(){
        $(this).next(map1).show("medium");
    });
});