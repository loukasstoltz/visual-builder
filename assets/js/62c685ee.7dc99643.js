"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[371],{3326:function(e,o,t){t.d(o,{n:function(){return a}});var r=t(845),i=t(4159),n=t(1373),l={Text:r.xv,HTMLText:r.Jv,Number:r.Mr,Checkbox:r.XZ,Color:r.Il,ImageUrl:r.ef,Range:r.e6,Select:r.Ph,Alignment:r.v2,TextAlign:r.PH,DatePicker:r.Mt};function a(e){var o=e.type,t=e.args,r=e.defaultValue,a=void 0===r?"":r,s=(0,i.useState)(a),c=s[0],d=s[1],u=l[o](t).render;return i.createElement(n.T,null,u&&i.createElement(u,{value:c,onChange:d,options:t}))}},1860:function(e,o,t){t.r(o),t.d(o,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=t(2208),i=t(9161),n=(t(4159),t(4758)),l=t(3326),a=["components"],s={sidebar_position:6},c="Color",d={unversionedId:"Fields/Color",id:"Fields/Color",title:"Color",description:"Generate a color picker to select a specific color",source:"@site/docs/Fields/Color.mdx",sourceDirName:"Fields",slug:"/Fields/Color",permalink:"/visual-editor/docs/Fields/Color",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Fields/Color.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/visual-editor/docs/Fields/Checkbox"},next:{title:"ImageURL",permalink:"/visual-editor/docs/Fields/ImageUrl"}},u={},p=[{value:"Options",id:"options",level:2}],m={toc:p};function f(e){var o=e.components,t=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"Color"),(0,n.kt)("p",null,"Generate a color picker to select a specific color"),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Color('fieldName', {\n  label: 'Label of the field',           // (optional)\n  help: 'Some additional informations',  // (optional)\n  colors: ['red', '#F00FF0', '--primary']// Available colors for the text (optional)\n})\n")),(0,n.kt)(l.n,{type:"Color",args:{label:"A simple color picker",colors:["red","blue","yellow","green","orange","pink","grey"]},mdxType:"FieldPreview"}))}f.isMDXComponent=!0}}]);