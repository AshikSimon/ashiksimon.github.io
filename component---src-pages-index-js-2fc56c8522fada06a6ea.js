/*! For license information please see component---src-pages-index-js-2fc56c8522fada06a6ea.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"90a3":function(e,a,t){e.exports=t.p+"static/craftvue-1-4955afd917b488b20e0766f06b7053c9.png"},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz");t("i8i4"),t("oqc9");function i(){document.getElementById("header").classList.remove("active")}var c=function(e){e.siteTitle;return r.a.createElement("header",{id:"header"},r.a.createElement("div",{onClick:i,id:"mobile-menu-close"},r.a.createElement("span",null,"Close")," ",r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),r.a.createElement("ul",{id:"menu",onClick:i,className:"shadow"},r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#experience"},"Experience")),r.a.createElement("li",null,r.a.createElement("a",{href:"#education"},"Education")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#skills"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact"))))};c.defaultProps={siteTitle:""};var s=c;t("aN63"),t("8ypT"),a.a=function(e){var a,t=e.children,n=Object(l.useStaticQuery)("3649515864");return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{siteTitle:(null===(a=n.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),r.a.createElement("div",null,r.a.createElement("main",null,t),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-5 copyright"},r.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Ashik Simon")),r.a.createElement("div",{className:"col-sm-5 social"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://linkedin.com/in/ashiksimon",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))))))))))}},C6UR:function(e,a,t){e.exports=t.p+"static/FIRST-1-0760d3f00446ef717182d46ae45240f5.jpg"},R4SM:function(e,a,t){e.exports=t.p+"static/yonder-1-9a46f96053f161c5110cc33ad8a11341.png"},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return G}));var n=t("q1tI"),r=t.n(n),l=t("Bl7J"),i=t("Wbzz"),c=t("vrFN"),s=t("wx14");function o(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var m=t("TSYQ"),d=t.n(m),u=r.a.createContext({});u.Consumer,u.Provider;function v(e,a){var t=Object(n.useContext)(u);return e||t[a]||a}var p=/-(.)/g;var h=function(e){return e[0].toUpperCase()+(a=e,a.replace(p,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,n=t.displayName,l=void 0===n?h(e):n,i=t.Component,c=t.defaultProps,m=r.a.forwardRef((function(a,t){var n=a.className,l=a.bsPrefix,c=a.as,m=void 0===c?i||"div":c,u=o(a,["className","bsPrefix","as"]),p=v(l,e);return r.a.createElement(m,Object(s.a)({ref:t,className:d()(n,p)},u))}));return m.defaultProps=c,m.displayName=l,m}var E=function(e){return r.a.forwardRef((function(a,t){return r.a.createElement("div",Object(s.a)({},a,{ref:t,className:d()(a.className,e)}))}))},b=r.a.createContext(null);b.displayName="CardContext";var g=b,N=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.variant,i=e.as,c=void 0===i?"img":i,m=o(e,["bsPrefix","className","variant","as"]),u=v(t,"card-img");return r.a.createElement(c,Object(s.a)({ref:a,className:d()(l?u+"-"+l:u,n)},m))}));N.displayName="CardImg",N.defaultProps={variant:null};var y=N,w=E("h5"),x=E("h6"),k=f("card-body"),T=f("card-title",{Component:w}),j=f("card-subtitle",{Component:x}),C=f("card-link",{Component:"a"}),P=f("card-text",{Component:"p"}),S=f("card-header"),D=f("card-footer"),O=f("card-img-overlay"),R=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.bg,c=e.text,m=e.border,u=e.body,p=e.children,h=e.as,f=void 0===h?"div":h,E=o(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=v(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return r.a.createElement(g.Provider,{value:N},r.a.createElement(f,Object(s.a)({ref:a},E,{className:d()(l,b,i&&"bg-"+i,c&&"text-"+c,m&&"border-"+m)}),u?r.a.createElement(k,null,p):p))}));R.displayName="Card",R.defaultProps={body:!1},R.Img=y,R.Title=T,R.Subtitle=j,R.Body=k,R.Link=C,R.Text=P,R.Header=S,R.Footer=D,R.ImgOverlay=O;var I=R;var A=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.apply(this,n),a.apply(this,n)}}),null)};function B(e){return!e||"#"===e.trim()}var F=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,l=e.disabled,i=e.onKeyDown,c=o(e,["as","disabled","onKeyDown"]),m=function(e){var a=c.href,t=c.onClick;(l||B(a))&&e.preventDefault(),l?e.stopPropagation():t&&t(e)};return B(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),l&&(c.tabIndex=-1,c["aria-disabled"]=!0),r.a.createElement(n,Object(s.a)({ref:a},c,{onClick:m,onKeyDown:A((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));F.displayName="SafeAnchor";var M=F,q=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,l=e.size,i=e.active,c=e.className,m=e.block,u=e.type,p=e.as,h=o(e,["bsPrefix","variant","size","active","className","block","type","as"]),f=v(t,"btn"),E=d()(c,f,i&&"active",f+"-"+n,m&&f+"-block",l&&f+"-"+l);if(h.href)return r.a.createElement(M,Object(s.a)({},h,{as:p,ref:a,className:d()(E,h.disabled&&"disabled")}));a&&(h.ref=a),u?h.type=u:p||(h.type="button");var b=p||"button";return r.a.createElement(b,Object(s.a)({},h,{className:E}))}));q.displayName="Button",q.defaultProps={variant:"primary",active:!1,disabled:!1};var L=q,z=f("card-deck");function U(){document.getElementById("header").classList.add("active")}var V,Y,_=(V=t("tvlH"),Y={},V.keys().map((function(e,a){Y[e.replace("./","")]=V(e)})),Y);function G(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement("div",{onClick:U,id:"mobile-menu-open",className:"shadow-large"},r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),r.a.createElement("div",{id:"lead"},r.a.createElement("div",{id:"lead-content"},r.a.createElement("h1",null,"Ashik Simon"),r.a.createElement("h2",null,"Mechanical Engineer"),r.a.createElement("a",{href:"Ashik_Simon_Resume.pdf",className:"btn-rounded-dark",target:"_blank",download:!0},"Download Resume")),r.a.createElement("div",{id:"lead-overlay"})),r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"heading"},"About Me")),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo."))))),r.a.createElement("div",{id:"experience",className:"background-alt"},r.a.createElement("h2",{className:"heading"},"Experience"),r.a.createElement("div",{id:"experience-timeline"},r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),r.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},r.a.createElement("h3",null,"Design/Build/Fly"),r.a.createElement("h4",null,"Fabrications Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective"),r.a.createElement("li",null,"Construct lightweight RC airplane airframes utilizing various composites and adhesives includingcarbon fiber, kevlar, and fiberglass"),r.a.createElement("li",null,"Prepare control surfaces and mount servos in innovative ways to minimize drag"),r.a.createElement("li",null,"Create positive molds from foam using hot-wire and sanding with a high attention to detail inorder to prevent imperfections in final product"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),r.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},r.a.createElement("h3",null,"Yonder Dynamics"),r.a.createElement("h4",null,"Motions Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"Build a functioning mars rover style robot for the University Rover Challenge"),r.a.createElement("li",null,"Responsible for creating a light weight high dexterity robot arm with six degrees of freedom"),r.a.createElement("li",null,"Work with Solidworks modeling/simulation as well as physics risk reduction calculations"),r.a.createElement("li",null,"Developed rotating base out of acetyl that is capable of withstanding high loads while remaining lightweight"),r.a.createElement("li",null,"Designed cost-effective parts that are manufacturable with on campus equipment, primarily 3Dprinting and lasercutting"),r.a.createElement("li",null,"Review technical documentation to look for design improvements"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"2017 - 2018"),r.a.createElement("div",{"data-date":"2017 - 2018",className:"vtimeline-content"},r.a.createElement("h3",null,"FIRST Robotics"),r.a.createElement("h4",null,"Senior Subsystem Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"Team of students and mentors construct a competitive robot within six weeks"),r.a.createElement("li",null,"Oversee the integration of various subsystems by designing and fabricating parts as well asdelegating tasks to newer members"),r.a.createElement("li",null,"Thoroughly researched components to not violate competition rules and regulations"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"2015 – 2016"),r.a.createElement("div",{"data-date":"2015 – 2016",className:"vtimeline-content"},r.a.createElement("h3",null,"Northrup Grumman Challenge"),r.a.createElement("h4",null,"Engineering Team Member"),r.a.createElement("ul",null,r.a.createElement("li",null,"Team-based competitions that are organized by Northrop Grumman with strict time constraints,budget constraints, and on the spot thinking for troubleshooting"),r.a.createElement("li",null,"Developed a helium airship design the first year by manufacturing a custom aerodynamic balloonand implementing model RC aircraft controls"),r.a.createElement("li",null," ","Designed a hovercraft capable of carrying 15 lbs of payload through an obstacle course"))))))),r.a.createElement("div",{id:"education"},r.a.createElement("h2",{className:"heading"},"Education"),r.a.createElement("div",{className:"education-block"},r.a.createElement("h4",null,"University of California San Diego, La Jolla"),r.a.createElement("span",{className:"education-date"},"September 2018 - Present"),r.a.createElement("h5",null,"B.S. Mechanical Engineering"),r.a.createElement("p",null,r.a.createElement("b",null," Relevant Coursework: "),"Introductory Mathematical Physics, Elements of Materials Science, Engineering Graphics and Design, Business Project Management, Introductory Fluid Mechanics, MATLAB Programming for Engineering Analysis, Dynamics and Vibrations, Heat Transfer, Solid Mechanics I"))),r.a.createElement("div",{id:"projects",className:"background-alt"},r.a.createElement("h2",{className:"heading"},"Projects"),r.a.createElement("div",{className:"container"},r.a.createElement(z,null,r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:_["yonder-1.png"],alt:"Yonder Dynamics"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"Yonder Dynamics Arm"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional This is a wider card with supporting text below as a natural lead-in to additional content. Th content. Thdgfgggggggis content is a little bit longer.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(i.Link,{className:"btn project-button mt-2",variant:"outline-primary",to:"/projects/yonder-dynamics-arm"},"View Project"))),r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:_["dbf-1.jpg"],alt:"AIAA DBF"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"AIAA Design Build Fly"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(i.Link,{className:"btn project-button mt-2",variant:"outline-primary",to:"/projects/aiaa-design-build-fly"},"View Project"))),r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:_["rover-1.png"],alt:"Covid Rover"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"Covid Rover"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(L,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project")))),r.a.createElement(z,null,r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:_["FIRST-1.jpg"],alt:"FIRST Robotics"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"FIRST Crusader"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(L,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project"))),r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300",alt:"Craftvue"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"Craftvue"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(L,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project"))),r.a.createElement(I,{className:"m-3"},r.a.createElement(I.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300",alt:"Northrop Grumman Airship"}),r.a.createElement(I.Body,{className:"p-3"},r.a.createElement(I.Title,null,"Northrop Grumman Airship"),r.a.createElement(I.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(L,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project")))))),r.a.createElement("div",{id:"skills"},r.a.createElement("h2",{className:"heading"},"Skills"),r.a.createElement("ul",null,r.a.createElement("li",{className:"vibrate-1"},"Modeling and Analysis "),r.a.createElement("li",{className:"vibrate-1"},"Autodesk Fusion 360 "),r.a.createElement("li",{className:"vibrate-1"},"Autodesk Inventor "),r.a.createElement("li",{className:"vibrate-1"},"Solidworks"),r.a.createElement("li",{className:"vibrate-1"},"MS Office"),r.a.createElement("li",{className:"vibrate-1"}," LaTeX"),r.a.createElement("li",{className:"vibrate-1"}," PhpStorm"),r.a.createElement("li",{className:"vibrate-1"}," Github "),r.a.createElement("li",{className:"vibrate-1"},"Arduino "),r.a.createElement("li",{className:"vibrate-1"},"Java"),r.a.createElement("li",{className:"vibrate-1"},"Php "),r.a.createElement("li",{className:"vibrate-1"},"C++"),r.a.createElement("li",{className:"vibrate-1"},"MatLab"),r.a.createElement("li",{className:"vibrate-1"},"Laravel Framework"),r.a.createElement("li",{className:"vibrate-1"},"Fabrication Prototyping "),r.a.createElement("li",{className:"vibrate-1"},"Woodshop Machinery"),r.a.createElement("li",{className:"vibrate-1"}," CNC"),r.a.createElement("li",{className:"vibrate-1"}," Lasercutter"),r.a.createElement("li",{className:"vibrate-1"}," 3D Printing"),r.a.createElement("li",{className:"vibrate-1"}," Soldering"),r.a.createElement("li",{className:"vibrate-1"}," Web Design"))),r.a.createElement("div",{id:"contact"},r.a.createElement("h2",null,"Get in Touch"),r.a.createElement("div",{id:"contact-form"},r.a.createElement("form",{method:"POST",action:"https://formspree.io/mrgobevp"},r.a.createElement("input",{type:"hidden",name:"_subject",value:"Contact request from personal website"}),r.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),r.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),r.a.createElement("button",{type:"submit"},"Send")))))}},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},fjEt:function(e,a,t){e.exports=t.p+"static/rover-1-eb50b8ae73bdd79d020742969edd6fd8.png"},tvlH:function(e,a,t){var n={"./FIRST-1.jpg":"C6UR","./craftvue-1.png":"90a3","./dbf-1.jpg":"xofO","./rover-1.png":"fjEt","./yonder-1.png":"R4SM"};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id="tvlH"},wx14:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return n}))},xofO:function(e,a,t){e.exports=t.p+"static/dbf-1-47dc591b931937b320f12502eec59881.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-2fc56c8522fada06a6ea.js.map