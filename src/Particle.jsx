import React from "react";
import Particles from "react-tsparticles";

export default function App() {
  return (
    <Particles
options={
{
"particles":{
"number":{
"value":100,
"density":{
"enable":true,
// "value_area":552.4033491425909
}
},
"color":{
"value":"random"
},
"shape":{
"type":"circle",
"stroke":{
"width":0,
"color":"#0"
},
"polygon":{
"nb_sides":3
},
"image":{
"src":"img/github.svg",
"width":70,
"height":100
}
},
"opacity":{
"value":0.2,
"random":true,
"anim":{
"enable":false,
"speed":2,
"opacity_min":0.2,
"sync":false
}
},
"size":{
"value":4,
"random":true,
"anim":{
"enable":false,
"speed":40,
"size_min":0.1,
"sync":false
}
},
"line_linked":{
"enable":false,
"distance":150,
"color":"#ffffff",
"opacity":0.4,
"width":1
},
"move":{
"enable":true,
"speed":1.5782952832645452,
"direction":"none",
"random":true,
"straight":false,
"out_mode":"out",
"bounce":false,
"attract":{
"enable":false,
"rotateX":600,
"rotateY":1200
}
}
},
"interactivity":{
"detect_on":"canvas",
"events":{
"onhover":{
"enable":false,
"mode":"repulse"
},
"onclick":{
"enable":true,
"mode":"repulse"
},
"onresize":{
"enable":true,
"density_auto":true,
"density_area":400
}
},
"modes":{
"grab":{
"distance":400,
"line_linked":{
"opacity":1
}
},
"bubble":{
"distance":400,
"size":40,
"duration":2,
"opacity":8,
"speed":3
},
"repulse":{
"distance":200,
"duration":0.4
},
"push":{
"particles_nb":4
},
"remove":{
"particles_nb":2
}
}
},
"retina_detect":true
}
}
style={{
borderTop:'1px solid #e2edf6',
borderBottom:'1px solid #e2edf6',
boxShadow : 'inset 3px 3px 30px 5px #e2edf6',
}}
/>
  );
}
