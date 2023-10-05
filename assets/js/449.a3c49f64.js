"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{4449:function(e,t,o){o.r(t);var i=o(9437),l=["--bs-blue","--bs-indigo","--bs-purple","--bs-pink","--bs-red","--bs-orange","--bs-yellow","--bs-green","--bs-teal","--bs-cyan","--bs-white","--bs-gray","--bs-gray-dark","--bs-primary","--bs-secondary","--bs-success","--bs-info","--bs-warning","--bs-danger","--bs-light","--bs-dark"],n=function(e,t){return void 0===e&&(e="image"),void 0===t&&(t="image"),(0,i.ef)(e,{label:t,onBrowse:function(e){return Promise.resolve("https://picsum.photos/425/458")}})},a=function(){return(0,i.X2)([(0,i.xv)("label",{label:"Libell\xe9",default:"Call to action"}),(0,i.xv)("url",{label:"Lien"}),(0,i.Ph)("type",{default:"primary",label:"type",options:[{label:"Primaire",value:"primary"},{label:"Secondaire",value:"secondary"}]})])},r=function(e,t){return(0,i.Il)(e,{label:t,colors:l})},u=function(e,t){return void 0===e&&(e="title"),void 0===t&&(t="Titre"),(0,i.X2)([(0,i.Jv)(e,{default:"Lorem ipsum dolor sit amet",label:t,multiline:!1,colors:l}),(0,i.PH)(e+"Align",{label:"Alignement"})],{columns:"1fr max-content"})},s=function(e,t){return void 0===e&&(e="content"),void 0===t&&(t="Description"),(0,i.Jv)(e,{label:t,default:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>",multiline:!0,colors:l,variables:{background:"backgroundColor",color:"textColor"}})},c=function(e,t){return void 0===t&&(t=[]),[(0,i.mQ)({label:"Contenu",fields:e},{label:"Apparence",fields:[].concat(t,[(0,i.X2)([r("backgroundColor","Background"),r("textColor","Text"),n("background","Background"),n("backgroundMobile","Background (mobile)")],{columns:"50px 50px 1fr 1fr"}),(0,i.X2)([(0,i.Ph)("backgroundSize",{default:"cover",label:"Size",options:[{label:"Remplir",value:"cover"},{label:"Contenir",value:"contain"},{label:"Original",value:"auto"}]}),(0,i.Ph)("backgroundRepeat",{default:"no-repeat",label:"Repeat",options:[{label:"Aucune",value:"no-repeat"},{label:"x",value:"repeat-x"},{label:"y",value:"repeat-y"},{label:"x & y",value:"repeat"}]}),(0,i.Ph)("backgroundXPosition",{default:"center",label:"Position (X)",options:[{label:"Centrer",value:"center"},{label:"Gauche",value:"left"},{label:"Droite",value:"right"}]}),(0,i.Ph)("backgroundYPosition",{default:"center",label:"Position (Y)",options:[{label:"Centrer",value:"center"},{label:"Haut",value:"top"},{label:"Bas",value:"bottom"}]})]).when("background",(function(e){return e})),(0,i.e6)("padding",{label:"Vertical Padding",default:3})])})]},d=new i.oW;d.registerComponent("hero",{title:"Hero",fields:c([u(),s(),(0,i.ZN)("buttons",{title:"Boutons",addLabel:"Add a button",fields:[a()]})])}),d.registerComponent("pricing",{title:"Pricing",category:"Commerce",fields:c([u(),s(),(0,i.ZN)("prices",{min:1,max:5,collapsed:"title",fields:[(0,i.Jv)("title",{label:"Title",default:"Pro",multiline:!1}),(0,i.xv)("price",{label:"Price",default:"15\u20ac"}),(0,i.xv)("features",{label:"Features",multiline:!0}),a()]})])}),d.registerComponent("icons-columns",{title:"Icons columns",fields:c([(0,i.ZN)("icons",{min:1,max:5,collapsed:"title",fields:[(0,i.xv)("title",{label:"Title",default:"Featured title"}),s()]})])}),d.registerComponent("text",{title:"Formatted text",fields:[s()]}),d.registerTemplate({name:"Homepage",description:"A simple page to show the template feature",image:"/visual-editor/img/template1.png",data:[{title:"Album example",titleAlign:"center",content:"<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>",buttons:[{label:"Main call to action",url:"#",type:"primary"},{label:"Secondary action",url:"#",type:"secondary"}],backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundXPosition:"center",backgroundYPosition:"center",padding:5,_name:"hero",backgroundColor:null,textColor:"--bs-primary",background:"",backgroundMobile:""},{icons:[{title:"First title",content:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p><br></p>"},{title:"Second title",content:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"},{title:"Third title",content:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"}],backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundXPosition:"center",backgroundYPosition:"center",padding:5,_name:"icons-columns",backgroundColor:"",textColor:"",background:"",backgroundMobile:""},{title:"Pricing",titleAlign:"center",content:"<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>",prices:[{title:"Free",price:"0\u20ac",features:"10 users included\n2 GB of storage\nEmail support\nHelp center access",label:"Sign up for free",url:"#",type:"secondary"},{title:"Pro",price:"15\u20ac",features:"20 users included\n10 GB of storage\nPriority email support\nHelp center access",label:"Get started",url:"#",type:"primary"},{title:"Enterprise",price:"29\u20ac",features:"30 users included\n15 GB of storage\nPhone and email support\nHelp center access",label:"Contact us",url:"#",type:"primary"}],backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundXPosition:"center",backgroundYPosition:"center",padding:5,_name:"pricing",backgroundColor:"",textColor:"",background:"",backgroundMobile:""},{title:"Lorem ipsum dolor sit amet",titleAlign:"right",content:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>",buttons:[{label:"Call to action",url:"",type:"primary"},{label:"Call to action",url:"",type:"secondary"}],backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundXPosition:"center",backgroundYPosition:"center",padding:3,_name:"hero",backgroundColor:null,textColor:"",background:"",backgroundMobile:""}]}),d.defineElement()}}]);