/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'_01outerPetals',
            type:'image',
            rect:['116px','41px','317px','318px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"01outerPetals.svg",'0px','0px']
         },
         {
            id:'_02circle',
            type:'image',
            rect:['116px','46px','317px','318px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"02circle.svg",'0px','0px']
         },
         {
            id:'_03sunflower',
            type:'image',
            rect:['173px','148px','190px','110px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"03sunflower.svg",'0px','0px']
         },
         {
            id:'_04sunflowerText',
            type:'image',
            rect:['160px','99px','216px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"04sunflowerText.svg",'0px','0px']
         },
         {
            id:'_05sunshineText',
            type:'image',
            rect:['182px','90px','185px','205px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"05sunshineText.svg",'0px','0px']
         },
         {
            id:'_06seedsText',
            type:'image',
            rect:['167px','101px','216px','216px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"06seedsText.svg",'0px','0px']
         },
         {
            id:'_07seedRight',
            type:'image',
            rect:['314px','174px','46px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"07seedRight.svg",'0px','0px']
         },
         {
            id:'_08seedLeft',
            type:'image',
            rect:['281px','213px','68px','37px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"08seedLeft.svg",'0px','0px']
         },
         {
            id:'pieShape',
            type:'image',
            rect:['279px','33px','167px','167px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pieShape.png",'0px','0px']
         },
         {
            id:'pieShapeCopy',
            type:'image',
            rect:['279px','33px','167px','167px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pieShape.png",'0px','0px'],
            transform:[[],['90']]
         },
         {
            id:'pieShapeCopy2',
            type:'image',
            rect:['279px','32px','167px','167px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pieShape.png",'0px','0px'],
            transform:[[],['180']]
         },
         {
            id:'pieShapeCopy3',
            type:'image',
            rect:['279px','33px','167px','167px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pieShape.png",'0px','0px'],
            transform:[[],['270']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__06seedsText}": [
            ["style", "-webkit-transform-origin", [82.07,81.2], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [82.07,81.2],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [82.07,81.2],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [82.07,81.2],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [82.07,81.2],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '167px'],
            ["style", "top", '101px']
         ],
         "${__04sunflowerText}": [
            ["style", "-webkit-transform-origin", [27.87,88.84], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [27.87,88.84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [27.87,88.84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [27.87,88.84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [27.87,88.84],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '160px'],
            ["style", "top", '99px']
         ],
         "${_pieShapeCopy}": [
            ["style", "top", '32px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "display", 'block'],
            ["style", "left", '278px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${__01outerPetals}": [
            ["style", "top", '41px'],
            ["style", "left", '116px'],
            ["transform", "rotateZ", '-180deg']
         ],
         "${__08seedLeft}": [
            ["style", "left", '281px'],
            ["style", "top", '-41px']
         ],
         "${__05sunshineText}": [
            ["style", "top", '90px'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "left", '182px'],
            ["style", "-webkit-transform-origin", [50.79,9.14], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.79,9.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.79,9.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.79,9.14],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.79,9.14],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${__07seedRight}": [
            ["style", "left", '314px'],
            ["style", "top", '-75px']
         ],
         "${__03sunflower}": [
            ["style", "left", '173px'],
            ["style", "top", '148px']
         ],
         "${__02circle}": [
            ["style", "left", '116px'],
            ["style", "top", '46px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '550px']
         ],
         "${_pieShape}": [
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '1'],
            ["style", "left", '278px'],
            ["style", "top", '33px']
         ],
         "${_pieShapeCopy2}": [
            ["style", "top", '32px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "display", 'block'],
            ["style", "left", '279px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pieShapeCopy3}": [
            ["style", "top", '33px'],
            ["transform", "rotateZ", '270deg'],
            ["style", "display", 'block'],
            ["style", "left", '279px'],
            ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12000,
         autoPlay: true,
         labels: {
            "90": 125,
            "180": 250,
            "270": 375,
            "360": 500,
            "loop": 4000
         },
         timeline: [
            { id: "eid21", tween: [ "style", "${__07seedRight}", "top", '174px', { fromValue: '-75px'}], position: 500, duration: 750, easing: "easeOutBounce" },
            { id: "eid24", tween: [ "style", "${__08seedLeft}", "top", '213px', { fromValue: '-41px'}], position: 750, duration: 750, easing: "easeOutBounce" },
            { id: "eid43", tween: [ "transform", "${__06seedsText}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid8", tween: [ "style", "${_pieShapeCopy}", "display", 'block', { fromValue: 'block'}], position: 115, duration: 0 },
            { id: "eid7", tween: [ "style", "${_pieShapeCopy}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid37", tween: [ "transform", "${__04sunflowerText}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 1500, easing: "easeOutBounce" },
            { id: "eid47", tween: [ "transform", "${__01outerPetals}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 0, duration: 4000 },
            { id: "eid48", tween: [ "transform", "${__01outerPetals}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4000, duration: 8000 },
            { id: "eid10", tween: [ "style", "${_pieShapeCopy2}", "display", 'block', { fromValue: 'block'}], position: 242, duration: 0 },
            { id: "eid9", tween: [ "style", "${_pieShapeCopy2}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "transform", "${__05sunshineText}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 1500, easing: "easeOutElastic" },
            { id: "eid42", tween: [ "transform", "${__06seedsText}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 1500, easing: "easeOutBounce" },
            { id: "eid29", tween: [ "transform", "${__05sunshineText}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 1500, easing: "easeOutElastic" },
            { id: "eid15", tween: [ "style", "${_pieShape}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 },
            { id: "eid3", tween: [ "transform", "${_pieShape}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid13", tween: [ "style", "${_pieShapeCopy3}", "display", 'block', { fromValue: 'block'}], position: 367, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pieShapeCopy3}", "display", 'none', { fromValue: 'block'}], position: 375, duration: 0 },
            { id: "eid36", tween: [ "transform", "${__04sunflowerText}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 1500, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8338447");
