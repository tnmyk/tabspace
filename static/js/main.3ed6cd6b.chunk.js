(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},225:function(e,t,a){},241:function(e,t,a){},243:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(74),o=a.n(l),i=(a(102),a(17)),c=a(37);a(104),a(106);var s=function(e){var t=e.theme,a=e.setTheme,l=function(e){a(e),localStorage.setItem("theme",e),document.documentElement.setAttribute("saved-theme",e)};return Object(n.useEffect)(function(){var e=function(e){e.storageArea===localStorage&&"theme"===e.key&&null!==e.newValue&&l(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[]),r.a.createElement("div",{className:"settings-bar"},r.a.createElement(c.a,{href:"/index.html/help"},r.a.createElement("div",{className:"settings-item helpbutton"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"})))),r.a.createElement("div",{className:"settings-item darkmode"},r.a.createElement("input",{className:"toggle",id:"darkmode-toggle",type:"checkbox",tabIndex:-1,onChange:function(){l("dark"===t?"light":"dark")},checked:"dark"===t}),r.a.createElement("label",{id:"toggle-label-light",htmlFor:"darkmode-toggle",tabIndex:-1},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"dayIcon",x:"0px",y:"0px",viewBox:"0 0 35 35"},r.a.createElement("title",null,"Light Mode"),r.a.createElement("path",{d:"M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z"}))),r.a.createElement("label",{id:"toggle-label-dark",htmlFor:"darkmode-toggle",tabIndex:-1},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"nightIcon",x:"0px",y:"0px",viewBox:"0 0 100 100"},r.a.createElement("title",null,"Dark Mode"),r.a.createElement("path",{d:"M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z"})))))},u=a(66),m=a(86),d=JSON.stringify({type:"doc",content:[{type:"heading",attrs:{level:2},content:[{type:"text",text:"\ud83e\udeb4 Welcome to your Tabspace"}]},{type:"paragraph",content:[{type:"text",text:"Treat this as your own little scratch space in the comfort of your new tab page. Text here is saved as you write and your notes and tasks never leave your computer."}]},{type:"paragraph",content:[{type:"text",marks:[{type:"bold"}],text:"This is your new digital home, set it up however you'd like!"}]},{type:"heading",attrs:{level:3},content:[{type:"text",text:"Getting Started"}]},{type:"bulletList",content:[{type:"listItem",content:[{type:"paragraph",content:[{type:"text",text:"Not sure what you can do? Check out the "},{type:"text",marks:[{type:"bold"}],text:"help guide"},{type:"text",text:" by clicking on the question mark icon in the bottom right corner."}]}]}]},{type:"bulletList",content:[{type:"listItem",content:[{type:"paragraph",content:[{type:"text",text:"Delete this start text and make this page your own! "},{type:"text",marks:[{type:"timedTask",attrs:{time:16642548e5,uid:"RiDD0iLlc7SUnkfMWPe_W",color:"#ffa33355"}}],text:"due tonight"}]}]}]},{type:"horizontalRule"},{type:"paragraph",content:[{type:"text",text:"Found an issue or want to contribute a feature? Check out the code on "},{type:"text",marks:[{type:"link",attrs:{href:"https://github.com/jackyzha0/tabspace",target:"_blank",class:null}}],text:"Github!"}]}]});a(108);var p=a(75),h=a(87),g=a(76),f=a(77),v=a(12),E=a(4),w=a(24),y=a(78),b="#ff333355",k="#ffa33355",x="#fff00055",T="#99999933",C=864e5;function M(e){var t=e.getTime()-(new Date).getTime();return t<0?b:t<=C?k:t<=3*C?x:T}function S(e){var t=w.parse(e||"");return t.length>0&&{time:t[0].start.date().getTime()}}function I(e){return S(e.input)}var O=E.c.create({name:"timedTask",addAttributes:function(){return{time:{default:"",parseHTML:function(e){return e.getAttribute("data-time")||(new Date).getTime()},renderHTML:function(e){return{"data-time":e.time,"locale-string":new Date(e.time).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}}},uid:{default:null,renderHTML:function(e){return{id:e.uid}}},color:{default:T,renderHTML:function(e){return{style:"background: ".concat(e.color)}}}}},addCommands:function(){var e=this;return{toggleDue:function(){return function(t){var a=t.commands;return a.toggleMark(e.name),a.insertContent("due ")}}}},addKeyboardShortcuts:function(){var e=this;return{"Mod-d":function(){return e.editor.commands.toggleDue()},"Mod-D":function(){return e.editor.commands.toggleDue()}}},onCreate:function(){var e=this,t=this.editor.state.tr;this.editor.state.doc.descendants(function(a,n){if("text"===a.type.name){var r=a.marks.find(function(t){return t.type.name===e.name});if(void 0!==r){var l=n,o=n+a.nodeSize;t.removeMark(l,o,r);var i=e.type.create({color:M(new Date(r.attrs.time)),time:r.attrs.time,uid:Object(y.a)()});t.addMark(l,o,i)}}}),t.setMeta("addToHistory",!1),t.setMeta("preventUpdate",!0),this.editor.view.dispatch(t)},onUpdate:function(){var e=this,t=this.editor.state.tr;this.editor.state.doc.descendants(function(a,n){if("text"===a.type.name){var r=a.marks.find(function(t){return t.type.name===e.name});if(void 0!==r){var l=n,o=n+a.nodeSize,i=S(a.text);if(i){var c=e.type.create(Object(v.a)({},i,{uid:r.attrs.uid,color:M(new Date(i.time))}));t.removeMark(l,o,r),t.addMark(l,o,c)}}}}),t.setMeta("addToHistory",!1),t.setMeta("preventUpdate",!0),this.editor.view.dispatch(t)},parseHTML:function(){return[{tag:"span[data-time]"}]},addInputRules:function(){return[Object(E.o)({find:/(?:\s\()(due\s.+)(?:\))/,type:this.type,getAttributes:I})]},addPasteRules:function(){return[Object(E.p)({find:/(?:\s\()(due\s.+)(?:\))/g,type:this.type,getAttributes:I})]},renderHTML:function(e){return["span",e.HTMLAttributes,0]}}),L=a(79),j=function(e){var t=e.setTasks,a=function(e){var a=[];e.state.doc.descendants(function(e){if("text"===e.type.name){var t=e.marks.find(function(e){return"timedTask"===e.type.name});void 0!==t&&a.push({due:t.attrs.time,uid:t.attrs.uid})}}),t(function(e){return JSON.stringify(e)!==JSON.stringify(a)?a:e})},l=Object(u.b)({extensions:[m.a.configure({heading:{levels:[1,2,3]},codeBlock:{HTMLAttributes:{class:"highlight"}}}),p.a.configure({mode:"deepest"}),h.a.configure({protocols:["mailto"]}),L.a.configure({placeholder:"What's on your mind?"}),g.a,f.a,O],content:JSON.parse(localStorage.getItem("blocks")||d),onCreate:function(e){var t=e.editor;return a(t)},onUpdate:function(e){var t,n=e.editor;a(n),t=n.getJSON(),localStorage.setItem("blocks",JSON.stringify(t))}});window.tabspace={dump:function(){return l?l.getJSON():null}},Object(n.useEffect)(function(){var e=function(e){e.storageArea===localStorage&&"blocks"===e.key&&null!==e.newValue&&l&&(l.commands.setContent(JSON.parse(e.newValue)),a(l))};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[l]);var o=function(e){var t=new FileReader;t.addEventListener("load",function(e){if(e.target&&l){var t=""+e.target.result;l.chain().focus().setImage({src:t}).run()}}),t.readAsDataURL(e)};return l?r.a.createElement(u.a,{onDrop:function(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer.files;if(t.length>=1){var a=t[0];o(a)}},editor:l,onPaste:function(e){if(e.clipboardData.files.length>0){var t=e.clipboardData.files[0];o(t)}}}):null},z=(a(225),a(80)),D=a.n(z),N=[{heading:"Tasks",items:[{name:"Due date",wide:!0,description:"Turn a block into a task that will be highlighted depending on how soon it is due. Red corresponds to overdue, orange is due today, yellow is due within the next 3 days, and grey is any non-urgent task. It will also appear in the visualization. Works with natural language (you can specific dates and times like 'tomorrow', 'tonight', etc).",howToCreate:r.a.createElement(r.a.Fragment,null,"pressing \u2318D to insert a due date, or typing ",r.a.createElement("code",null,"(due TIME)")," after your task where ",r.a.createElement("code",null,"TIME")," is some due date"),preview:r.a.createElement("ul",null,r.a.createElement("li",null,"Assignment 1 ",r.a.createElement("span",{"data-time":!0,"locale-string":"Sept 25, 12:00 PM",style:{background:"#ff333355"}},"due sept 25 at noon")),r.a.createElement("li",null,"Assignment 2 ",r.a.createElement("span",{"data-time":!0,"locale-string":"Sept 27, 8:00 PM",style:{background:"#ffa33355"}},"due tomorrow night")),r.a.createElement("li",null,"Essay 2 ",r.a.createElement("span",{"data-time":!0,"locale-string":"Sept 28, 12:00 PM",style:{background:"#fff00055"}},"due in two days")),r.a.createElement("li",null,"Midterm ",r.a.createElement("span",{"data-time":!0,"locale-string":"Oct 1, 12:15 PM",style:{background:"#99999933"}},"due oct 1")))}]},{heading:"Lists",items:[{name:"Numbered List",description:"A list that counts the number of items it contains.",howToCreate:r.a.createElement(r.a.Fragment,null,"typing ",r.a.createElement("code",null,"1.")," followed by a space."),preview:r.a.createElement("ol",null,r.a.createElement("li",null,"Item 1"),r.a.createElement("li",null,"Item 2",r.a.createElement("ol",null,r.a.createElement("li",null,"Item 2.1"))))},{name:"Bulleted List",description:"A regular bulleted list.",howToCreate:r.a.createElement(r.a.Fragment,null,"typing a dash ",r.a.createElement("code",null,"-")," followed by a space."),preview:r.a.createElement("ul",null,r.a.createElement("li",null,"Item 1"),r.a.createElement("li",null,"Item 2",r.a.createElement("ul",null,r.a.createElement("li",null,"Item 2.1"))))}]},{heading:"Headers",items:[{name:"Title",description:"Equivalent to an H1. Each header takes up a full line.",howToCreate:r.a.createElement(r.a.Fragment,null,"typing ",r.a.createElement("code",null,"#")," followed by a space."),preview:r.a.createElement("div",null,r.a.createElement("h1",null,"Header"),r.a.createElement("p",null,"Lorem ipsum"))},{name:"Sub-heading",description:"Slightly smaller than a title. Equivalent to an H2",howToCreate:r.a.createElement(r.a.Fragment,null,"typing ",r.a.createElement("code",null,"##")," followed by a space."),preview:r.a.createElement("div",null,r.a.createElement("h2",null,"Header"),r.a.createElement("p",null,"Lorem ipsum"))},{name:"Sub-sub-heading",description:"An even smaller heading. Equivalent to an H3",howToCreate:r.a.createElement(r.a.Fragment,null,"typing ",r.a.createElement("code",null,"###")," followed by a space."),preview:r.a.createElement("div",null,r.a.createElement("h3",null,"Header"),r.a.createElement("p",null,"Lorem ipsum"))}]},{heading:"Text formatting",items:[{name:"Bold",description:"",howToCreate:r.a.createElement(r.a.Fragment,null,"selecting some text then pressing \u2318B"),preview:r.a.createElement("p",null,"Some text with a ",r.a.createElement("strong",null,"bold portion"))},{name:"Italics",description:"",howToCreate:r.a.createElement(r.a.Fragment,null,"selecting some text then pressing \u2318I"),preview:r.a.createElement("p",null,"Some text with an ",r.a.createElement("em",null,"italicized portion"))},{name:"Strikethrough",description:"",howToCreate:r.a.createElement(r.a.Fragment,null,"selecting some text then pressing \u2318\u21e7X"),preview:r.a.createElement("p",null,"Some text with portions ",r.a.createElement("s",null,"removed"))},{name:"Code",description:"Display some inline code. Code in Tabspace is not formatted.",howToCreate:r.a.createElement(r.a.Fragment,null,"selecting some text then pressing \u2318E"),preview:r.a.createElement("p",null,"Some text with inline code: ",r.a.createElement("code",null,'print("Hello world")'))},{name:"Blockquote",description:"An extended quotation or excerpt, good for making callouts.",howToCreate:r.a.createElement(r.a.Fragment,null,"selecting some text then pressing \u2318\u21e7B"),preview:r.a.createElement("blockquote",null,r.a.createElement("p",null,"You can nest other formatting like ",r.a.createElement("strong",null,"bold")," or headers"))}]},{heading:"Miscellaneous",items:[{name:"Images",description:"Images are stored in local storage so there may be a cap on number of images you can include.",howToCreate:r.a.createElement(r.a.Fragment,null,"either dragging and dropping an image into the page or pasting an image directly"),preview:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Here's an image"),r.a.createElement("img",{src:".".concat(D.a),alt:"Example"}))},{name:"Horizontal Rule",description:"A horizontal divider to seperate content.",howToCreate:r.a.createElement(r.a.Fragment,null,"typing ",r.a.createElement("code",null,"---")," followed by pressing Enter."),preview:r.a.createElement("p",null,"Some text ",r.a.createElement("hr",null)," Woah! There's a break")}]}];var H=function(){return r.a.createElement("div",{className:"help"},r.a.createElement(c.a,{href:"/index.html"},r.a.createElement("h2",null,"\u2190 Back")),r.a.createElement("p",null,"Below is a list of all the notable supported keyboard shortcuts."),N.map(function(e){return r.a.createElement("div",{className:"section"},r.a.createElement("hr",null),r.a.createElement("h2",null,e.heading),r.a.createElement("div",{className:"item-container"},e.items.map(function(e){return r.a.createElement("div",{className:"item ".concat(e.wide?"wide":"")},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description," Create by ",e.howToCreate),r.a.createElement("div",{className:"preview"},e.preview))})))}))},A=a(266),F=a(264),B=a(85),P=a(81);a(241);var R=function(e){var t=function(){var e=(new Date).getHours();return e<12?"Good morning":e<18?"Good afternoon":"Good evening"}(),a=function(){return(new Date).toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"})},l=Object(n.useState)(a()),o=Object(i.a)(l,2),c=o[0],s=o[1];return Object(n.useEffect)(function(){var e=setInterval(function(){return s(a())},1e3);return function(){return clearInterval(e)}},[]),r.a.createElement("div",{className:"overlay"},r.a.createElement("h1",null,c),r.a.createElement("p",null,t,". ",function(e,t){if(0===e)return"You have nothing due.";var a=1===e?"task":"tasks";return"You have ".concat(e," ").concat(a," due, ").concat(t," of which need to be done soon.")}(e.numTasks,e.numUrgentTasks)))};a(243);function J(e){return Math.max(0,e-(new Date).getTime())/C}function q(e){return J(e.due)<3}var U=Object(P.withSize)()(function(e){var t=Object(n.useRef)(),a=e.tasks.map(function(e){return{id:e.uid,val:(t=e.due,29*Math.pow(1.5,-J(t))+1)};var t});Object(n.useEffect)(function(){var e=t.current;e&&(e.d3Force("charge",Object(A.a)().strength(15)),e.d3Force("collide",Object(F.a)().radius(function(e){return 4*Math.sqrt(e.val)})),e.d3ReheatSimulation())},[t.current]);var l=Object(n.useCallback)(function(t,a){var n="dark"===e.theme;a.fillStyle=n?"#444444":"#cacaca",a.beginPath(),a.arc(t.x,t.y,4*Math.sqrt(t.val),0,2*Math.PI,!1),a.fill()},[e.theme]);return r.a.createElement("div",{className:"visualization"},r.a.createElement(R,{numTasks:e.tasks.length,numUrgentTasks:e.tasks.filter(q).length}),r.a.createElement(B.a,{ref:t,height:450,width:e.size.width,nodeLabel:"",onNodeClick:function(e){var t=document.getElementById((e.id||"").toString());t&&(t.classList.add("highlight"),t.scrollIntoView(),setTimeout(function(){return t.classList.remove("highlight")},800))},enablePanInteraction:!1,enableZoomInteraction:!1,nodeCanvasObject:l,graphData:{nodes:a,links:[]}}))});function V(e){var t=e.tasks,a=e.theme,n=e.setTasks;return r.a.createElement("div",null,r.a.createElement(U,{tasks:t,theme:a}),r.a.createElement(j,{setTasks:n}))}var W=function(){var e=Object(c.d)(),t=Object(i.a)(e,1)[0],a=Object(n.useState)([]),l=Object(i.a)(a,2),o=l[0],u=l[1],m=Object(n.useState)(function(){var e=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",t=localStorage.getItem("theme")||e;return document.documentElement.setAttribute("saved-theme",t),t}()),d=Object(i.a)(m,2),p=d[0],h=d[1];return Object(n.useEffect)(function(){window.scrollTo(0,0)},[t]),r.a.createElement("div",{className:"App"},r.a.createElement(s,{theme:p,setTheme:h}),r.a.createElement("div",{className:"App-content"},r.a.createElement(c.c,null,r.a.createElement(c.b,{path:"/index.html/help"},r.a.createElement(H,null)),r.a.createElement(c.b,{path:"/index.html"},r.a.createElement(V,{tasks:o,theme:p,setTasks:u})))))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)))},80:function(e,t,a){e.exports=a.p+"static/media/example-img.df6899ce.png"},95:function(e,t,a){e.exports=a(252)}},[[95,2,1]]]);
//# sourceMappingURL=main.3ed6cd6b.chunk.js.map