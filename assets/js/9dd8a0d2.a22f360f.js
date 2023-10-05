"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{4094:function(e,t,n){n.d(t,{I:function(){return l}});var o=n(4159),a=n(8410),r=JSON.parse('[{"title":"Album example","titleAlign":"center","content":"<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.</p>","buttons":[{"label":"Main call to action","url":"#","type":"primary"},{"label":"Secondary action","url":"#","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"hero","backgroundColor":null,"textColor":"--bs-primary","background":"","backgroundMobile":""},{"icons":[{"title":"First title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p><br></p>"},{"title":"Second title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"},{"title":"Third title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"icons-columns"},{"title":"Pricing","titleAlign":"center","content":"<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>","prices":[{"title":"Free","price":"0\u20ac","features":"10 users included\\n2 GB of storage\\nEmail support\\nHelp center access","label":"Sign up for free","url":"#","type":"secondary"},{"title":"Pro","price":"15\u20ac","features":"20 users included\\n10 GB of storage\\nPriority email support\\nHelp center access","label":"Get started","url":"#","type":"primary"},{"title":"Enterprise","price":"29\u20ac","features":"30 users included\\n15 GB of storage\\nPhone and email support\\nHelp center access","label":"Contact us","url":"#","type":"primary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"pricing"},{"title":"Lorem ipsum dolor sit amet","titleAlign":"right","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>","buttons":[{"label":"Call to action","url":"","type":"primary"},{"label":"Call to action","url":"","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":3,"_name":"hero","backgroundColor":null}]');function l(e){var t=e.className,l=e.withoutContent,i=e.title,c=(0,o.useState)("hidden"),s=c[0],u=c[1],d=(0,o.useRef)();return(0,o.useEffect)((function(){Promise.all([n.e(592),n.e(449)]).then(n.bind(n,4449)),d.current.addEventListener("close",(function(){return u("hidden")}))}),[d.current]),o.createElement(o.Fragment,null,o.createElement("button",{className:"button button--secondary "+t,onClick:function(){return u((function(e){return void 0===e?"hidden":void 0}))}},null!=i?i:"Test the editor"),"undefined"!=typeof document&&a.createPortal(o.createElement("div",{style:{zIndex:9999,position:"relative",isolation:"isolate"}},o.createElement("visual-editor",{hidden:s,name:"content",preview:"https://visual-editor.droapp.com",iconsUrl:"/visual-editor/img/[name].svg",value:l?"[]":JSON.stringify(r),ref:d})),document.body))}},4251:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(4159),a=n(1506),r=n(896),l=n(5862),i=n(1814),c=n(5997),s="heroBanner_qdFl",u="buttons_AeoN",d="video__Zov",m=n(4094);function p(){var e=(0,c.Z)().siteConfig;return o.createElement(r.Z,{title:""+e.title,description:"Edit your page block by block"},o.createElement("header",{className:(0,a.Z)("hero hero--secondary hero--dark",s)},o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__title"},e.title),o.createElement("p",{className:"hero__subtitle"},e.tagline),o.createElement("iframe",{className:"margin-bottom--lg "+d,src:"https://www.youtube-nocookie.com/embed/xpDM5UQ5VPk?controls=0",title:"Tutorial in french",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),o.createElement("div",{className:u},o.createElement(i.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Getting started"),o.createElement(m.I,{className:"button--lg margin-left--sm"})))),o.createElement("main",null,o.createElement("div",{className:"container container padding-vert--lg"},o.createElement("div",{className:"row",style:{alignItems:"center"}},o.createElement("div",{className:"col col--offset-2 col--4 margin-right--lg"},o.createElement("h2",null,"Focus on the data"),o.createElement("p",null,"Instead of trying to give a full blown visual editor that has too much features `visual-editor` focus on the data. You choose what data you want and what kind of field you need for every block on your page. The user focus on the data while you can focus on the layout.")),o.createElement("div",{className:"col col--4"},o.createElement(l.Z,{className:"language-js"},"\neditor.registerComponent('hero', {\n  title: 'Hero',\n  category: 'Banner',\n  fields: [\n    Text('title', {multiline: false}),\n    HTMLText('content'),\n    Repeater('buttons', {\n      title: 'Buttons',\n      addLabel: 'Add a new button',\n      fields: [\n        ButtonFields()\n      ],\n    })\n  ],\n})\n")))),o.createElement("div",{className:"container container padding-vert--lg"},o.createElement("div",{className:"row",style:{alignItems:"center"}},o.createElement("div",{className:"col col--4 col--offset-2 "},o.createElement("img",{src:"/visual-editor/img/frameworks.svg",alt:""})),o.createElement("div",{className:"col col--4 margin-left--lg"},o.createElement("h2",null,"Framework agnostic"),o.createElement("p",null,"The editor does not care about the framework you use, you get the value and you are responsible of transforming the date into HTML. You can use any language / framework you want for rendering your page.")))),o.createElement("div",{className:"container container padding-vert--lg"},o.createElement("div",{className:"row",style:{alignItems:"center"}},o.createElement("div",{className:"col col--offset-2 col--4 margin-right--lg"},o.createElement("h2",null,"Based on the specs"),o.createElement("p",null,"The editor uses custom element and HTML Attributes so it can be easily inserted anywhere.")),o.createElement("div",{className:"col col--4"},o.createElement(l.Z,{className:"language-html"},'<visual-editor\n  name="content"\n  preview="https://renderer:8000/preview"\n  iconsUrl="/icons/[name].svg"\n  id="editor1"\n  value=""\n></visual-editor>'))))))}},5862:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(2208),a=n(4159),r=n(1506),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(7948).default,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function g(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=s({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==a&&(r.style=void 0!==r.style?s({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var l=o?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,l=s({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),c(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var r=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,l=0,i=[],c=[i];l>-1;){for(;(r=o[l]++)<a[l];){var s=void 0,p=t[l],g=n[l][r];if("string"==typeof g?(p=l>0?p:["plain"],s=g):(p=m(p,g.type),g.alias&&(p=m(p,g.alias)),s=g.content),"string"==typeof s){var y=s.split(u),h=y.length;i.push({types:p,content:y[0]});for(var f=1;f<h;f++)d(i),c.push(i=[]),i.push({types:p,content:y[f]})}else l++,t.push(p),n.push(s),o.push(0),a.push(s.length)}l--,t.pop(),n.pop(),o.pop(),a.pop()}return d(i),c}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),h=y,f=n(3793);var v=n(8153),b="copyButton_jELz",k="copyButtonCopied_Ew9l",E="copyButtonIcons_Ih6n",N="copyButtonIcon_Kslo",w="copyButtonSuccessIcon_Jd34";function B(e){var t=e.code,n=(0,a.useState)(!1),o=n[0],l=n[1],i=(0,a.useRef)(void 0),c=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),o.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),r&&r.focus()}(t),l(!0),i.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(b,"clean-btn",o&&k),onClick:c},a.createElement("span",{className:E,"aria-hidden":"true"},a.createElement("svg",{className:N,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:w,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var L="codeBlockContainer_fVIJ",C="codeBlockContent_ijD3",T="codeBlockTitle_RAln",x="codeBlock_tGd5",P="codeBlockStandalone_zuoH",_="codeBlockLines_kSay";function S(e){var t,n=e.children,l=e.className,c=void 0===l?"":l,s=e.metastring,u=e.title,d=e.language,m=(0,f.LU)().prism,p=(0,a.useState)(!1),g=p[0],y=p[1];(0,a.useEffect)((function(){y(!0)}),[]);var v=(0,f.bc)(s)||u,b=(0,f.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(h,(0,o.Z)({},i,{key:String(g),theme:b,code:"",language:"text"}),(function(e){var t=e.className,o=e.style;return a.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,P,"thin-scrollbar",L,c,f.kM.common.codeBlock),style:o},a.createElement("code",{className:_},n))}));var k=Array.isArray(n)?n.join(""):n,E=null!=(t=null!=d?d:(0,f.Vo)(c))?t:m.defaultLanguage,N=(0,f.nZ)(k,s,E),w=N.highlightLines,S=N.code;return a.createElement(h,(0,o.Z)({},i,{key:String(g),theme:b,code:S,language:null!=E?E:"text"}),(function(e){var t,n=e.className,l=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,r.Z)(L,c,(t={},t["language-"+E]=E&&!c.includes("language-"+E),t),f.kM.common.codeBlock)},v&&a.createElement("div",{style:l,className:T},v),a.createElement("div",{className:C,style:l},a.createElement("pre",{tabIndex:0,className:(0,r.Z)(n,x,"thin-scrollbar")},a.createElement("code",{className:_},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return w.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,o.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(B,{code:S})))}))}}}]);