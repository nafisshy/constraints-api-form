(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"#open{\n    background-color: rgb(153, 95, 95);\n    border:none;\n    border-radius: .15rem;\n    padding: .75rem;\n    color: whitesmoke;\n}\n\n.dropdown{\n    position:relative;\n}\n\n.dropdown-menu{\n    position: absolute;\n    left:0;\n    margin-top: .25rem;\n    margin-left: .25rem ;\n    background-color: rgb(223, 198, 166);\n    padding: .75rem;\n    border-radius: .25rem;\n    box-shadow: 0 10px 10px 0 rgba(0,0,0,.2);\n    opacity: 0;\n    transform: translateY(-20px);\n    transition: opacity 360ms ease-in-out;\n    transition: transform 360ms ease-in-out;\n    pointer-events: none;\n}\n\n.dropdown-menu-active{\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n}\n\n.field{\n    border-radius: .25rem;\n}\n\n.field *{\n    display: block;\n}\n\n.submitBtn{\n    margin: .75rem;\n}\n\n.error {\n    width: 100%;\n    padding: 0;\n    font-size: 80%;\n    color: white;\n    background-color: #900;\n    border-radius: 0 0 5px 5px;\n  \n    box-sizing: border-box;\n}\n\n.error.active {\n    padding: 0.3em;\n}\n\ninput{\n    appearance: none;\n  \n    width: 100%;\n    border: 1px solid #333;\n    border-radius: .25rem;\n    margin: 0;\n  \n    font-family: inherit;\n    font-size: 90%;\n  \n    box-sizing: border-box;\n  }\n  \n  /* This is our style for the invalid fields */\n  input:invalid {\n    border-color: #900;\n    background-color: #fdd;\n  }\n  \n  input:focus:invalid {\n    outline: none;\n  }",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var m=r(v,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),p=n.n(u),v=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const f=document.getElementById("open");f.addEventListener("click",(function(){f.textContent.includes("Open Form")?f.textContent="Close Form":f.textContent="Open Form",document.querySelector(".dropdown-menu").classList.toggle("dropdown-menu-active")}));const y=document.querySelector("form"),g=document.getElementById("mail"),h=document.querySelector("#mail + .error"),b=document.getElementById("country"),x=document.querySelector("#country + .error"),C=document.getElementById("pin"),L=document.querySelector("#pin + .error"),w=document.getElementById("pass"),E=document.querySelector("#pass + .error"),M=document.getElementById("passcon"),S=document.querySelector("#passcon + .error");function I(){g.validity.typeMismatch&&(h.textContent="Entered value must be an email"),g.validity.tooShort&&(h.textContent=`Email must be at least ${g.minLength} characters. You entered ${g.value.length}.`),g.validity.valueMissing&&(h.textContent="You need to enter an email")}function P(){b.validity.patternMismatch&&(x.textContent="Entered value must be only alphabets"),b.validity.valueMissing&&(x.textContent="You need to enter your country")}function T(){(C.validity.tooShort||C.validity.tooLong)&&(L.textContent="PIN code must be a six digit number"),C.validity.patternMismatch&&(L.textContent="Entered value must be a number"),C.validity.valueMissing&&(L.textContent="You need to enter your PIN code.")}function Y(){w.validity.tooShort&&(E.textContent=`Password must be atleast 8 characters. You entered ${w.value.length}.`),w.validity.patternMismatch&&(E.textContent="Password must contain  atleast one lowercase character, atleast one uppercase character, atleast one number and atleast one special character from @#$%!&_+=(). Password must not contain a whitespace. "),w.validity.valueMissing&&(E.textContent="You need to enter your password.")}function k(){w.value!=M.value?(S.textContent="Passwords do not match",S.classList.toggle("active",!0)):M.validity.valueMissing?(S.textContent="You need to confirm your password",S.classList.toggle("active",!0)):(S.textContent="",S.classList.toggle("active",!1))}g.addEventListener("input",(function(){g.validity.valid?(h.textContent="",h.classList.toggle("active",!1)):(h.classList.toggle("active",!0),I())})),b.addEventListener("input",(function(){b.validity.valid?(x.textContent="",x.classList.toggle("active",!1)):(x.classList.toggle("active",!0),P())})),C.addEventListener("input",(function(){C.validity.valid?(L.textContent="",L.classList.toggle("active",!1)):(L.classList.toggle("active",!0),T())})),w.addEventListener("input",(function(){w.validity.valid?(E.textContent="",E.classList.toggle("active",!1)):(E.classList.toggle("active",!0),Y())})),M.addEventListener("input",k),M.addEventListener("input",(()=>{w.addEventListener("input",k)})),y.addEventListener("submit",(t=>{w.value!=M.value&&(k(),t.preventDefault()),g.validity.valid||(I(),t.preventDefault()),w.validity.valid||(Y(),t.preventDefault()),C.validity.valid||(T(),t.preventDefault()),b.validity.valid||(P(),t.preventDefault())}))})()})();