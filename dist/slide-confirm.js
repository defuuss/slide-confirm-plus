/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=/* @__PURE__ */ new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,{is:u,defineProperty:d,getOwnPropertyDescriptor:f,getOwnPropertyNames:ee,getOwnPropertySymbols:p,getPrototypeOf:te}=Object,m=globalThis,h=m.trustedTypes,g=h?h.emptyScript:``,_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ne=(e,t)=>!u(e,t),re={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:ne};(l=Symbol).metadata??(l.metadata=Symbol(`metadata`)),m.litPropertyMetadata??(m.litPropertyMetadata=/* @__PURE__ */ new WeakMap);var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(v(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v(`properties`))){let e=this.properties,t=[...ee(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=/* @__PURE__ */ new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?y:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?y:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??(n=a.getPropertyOptions(e)),!((n.hasChanged??ne)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??(this._$Ej=/* @__PURE__ */ new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??(this._$Eq=/* @__PURE__ */ new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:`open`},b[v(`elementProperties`)]=/* @__PURE__ */ new Map,b[v(`finalized`)]=/* @__PURE__ */ new Map,_?.({ReactiveElement:b}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var x=globalThis,ie=e=>e,S=x.trustedTypes,ae=S?S.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,oe=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,se=`?`+C,ce=`<${se}>`,w=document,T=()=>w.createComment(``),E=e=>e===null||typeof e!=`object`&&typeof e!=`function`,le=Array.isArray,ue=e=>le(e)||typeof e?.[Symbol.iterator]==`function`,de=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,pe=/>/g,O=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),me=/'/g,he=/"/g,ge=/^(?:script|style|textarea|title)$/i,k=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),A=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),_e=/* @__PURE__ */ new WeakMap,M=w.createTreeWalker(w,129);function ve(e,t){if(!le(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ae===void 0?t:ae.createHTML(t)}var ye=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=D;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===D?c[1]===`!--`?o=fe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=O):(ge.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=O):o=pe:o===O?c[0]===`>`?(o=i??D,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?O:c[3]===`"`?he:me):o===he||o===me?o=O:o===fe||o===pe?o=D:(o=O,i=void 0);let d=o===O&&e[t+1].startsWith(`/>`)?` `:``;a+=o===D?n+ce:l>=0?(r.push(s),n.slice(0,l)+oe+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[ve(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},be=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ye(t,n);if(this.el=e.createElement(l,r),M.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=M.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(oe)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:F}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ge.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],T()),M.nextNode(),c.push({type:2,index:++a});i.append(e[t],T())}}}else if(i.nodeType===8){if(i.data===se)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}}a++}}static createElement(e,t){let n=w.createElement(`template`);return n.innerHTML=e,n}};function N(e,t,n=e,r){if(t===A)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=E(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??(n._$Co=[]))[r]=i),i!==void 0&&(t=N(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);M.currentNode=r;let i=M.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new P(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=M.nextNode(),a++)}return M.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},P=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),E(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==A&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ue(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=be.createElement(ve(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=_e.get(e.strings);return t===void 0&&_e.set(e.strings,t=new be(e)),t}k(t){le(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(T()),this.O(T()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ie(e).nextSibling;ie(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},F=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=N(this,e,t,0),a=!E(e)||e!==this._$AH&&e!==A,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=N(this,r[n+o],t,o),s===A&&(s=this._$AH[o]),a||(a=!E(s)||s!==this._$AH[o]),s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Ce=class extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},we=class extends F{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??j)===A)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}},Ee=x.litHtmlPolyfillSupport;Ee?.(be,P),(x.litHtmlVersions??(x.litHtmlVersions=[])).push(`3.3.3`);var De=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new P(t.insertBefore(T(),e),e,void 0,n??{})}return i._$AI(e),i},I=globalThis,L=class extends b{constructor(){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};L._$litElement$=!0,L.finalized=!0,I.litElementHydrateSupport?.({LitElement:L});var Oe=I.litElementPolyfillSupport;Oe?.({LitElement:L}),(I.litElementVersions??(I.litElementVersions=[])).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var ke={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:ne},Ae=(e=ke,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function R(e){return(t,n)=>typeof n==`object`?Ae(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function z(e){return R({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var je=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Me(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return je(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return je(n,r,{get(){return a(this)}})}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var Ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pe=e=>(...t)=>({_$litDirective$:e,values:t}),Fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Ie=`important`,Le=` !`+Ie,Re=Pe(class extends Fe{constructor(e){
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==Ne.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Le);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ie:``):n[e]=r}}return A}}),ze=[`ltr`,`rtl`],B=[`ios`,`minimal`,`glow`,`glass`,`tonal`,`sunrise`,`outline`,`soft`,`arrows`,`mono`,`hazard`,`aurora`],Be=[`track_color`,`handle_color`,`handle_border_color`,`confirmed_color`,`confirmed_text_color`,`text_color`,`handle_size`,`track_height`,`border_radius`,`font_size`,`fill_opacity`],Ve=[`perform-action`,`toggle`,`more-info`,`navigate`,`url`,`fire-dom-event`,`assist`,`none`],He=e=>typeof e==`string`&&Ve.includes(e),Ue=/^[a-z_]+\.[a-z0-9_]+$/,We=[`direction`,`text_unconfirmed`,`text_confirmed`,`icon_unconfirmed`,`icon_confirmed`,`confirm_action`,`style`],V={direction:`ltr`,reset_delay:1500,haptic:!1,text_unconfirmed:`Slide to confirm`,text_confirmed:`Confirmed`,icon_confirmed:`mdi:check`,icon_unconfirmed:{ltr:`mdi:chevron-right`,rtl:`mdi:chevron-left`}},H=(e,t,n,r)=>{let i=typeof e==`number`?e:Number(e);return Number.isFinite(i)?Math.max(n,Math.min(r,i)):t},U=(e,t)=>typeof e==`string`&&/^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(e)?e:t;function Ge(e){if(e==null)return;if(typeof e!=`object`||Array.isArray(e))throw Error(`appearance must be an object`);let t=e,n=H(t.height,56,40,120);return{background_color:U(t.background_color,`#1976d2`),handle_color:U(t.handle_color,`#ffffff`),text_color:U(t.text_color,`#ffffff`),confirmed_background_color:U(t.confirmed_background_color,`#2e7d32`),confirmed_handle_color:U(t.confirmed_handle_color,`#ffffff`),background_opacity:H(t.background_opacity,.92,0,1),confirmed_background_opacity:H(t.confirmed_background_opacity,.96,0,1),height:n,handle_size:Math.min(H(t.handle_size,48,32,100),n-4),border_radius:H(t.border_radius,Math.round(n/2),0,60),handle_style:t.handle_style===`flat`?`flat`:`3d`,handle_position:t.handle_position===`left`?`left`:`center`}}var Ke=e=>H(e,1500,500,1e4);function qe(e){return e?{"--slide-confirm-track-color":e.background_color,"--slide-confirm-handle-color":e.handle_color,"--slide-confirm-text-color":e.text_color,"--slide-confirm-confirmed-color":e.confirmed_background_color,"--slide-confirm-confirmed-handle-color":e.confirmed_handle_color,"--slide-confirm-track-opacity":String(e.background_opacity),"--slide-confirm-confirmed-track-opacity":String(e.confirmed_background_opacity),"--slide-confirm-track-height":`${e.height}px`,"--slide-confirm-handle-size":`${e.handle_size}px`,"--slide-confirm-border-radius":`${e.border_radius}px`}:{}}var W=class extends Error{constructor(e){super(e),this.name=`ConfigError`}},Je={textUnconfirmed:`text_unconfirmed`,textConfirmed:`text_confirmed`,iconUnconfirmed:`icon_unconfirmed`,iconConfirmed:`icon_confirmed`},Ye=/* @__PURE__ */ new Set([`name`,`icon`,`label`,`entity`,`text_unconfirmed`,`text_confirmed`,`icon_unconfirmed`,`icon_confirmed`,`direction`,`reset_delay`,`confirmation_duration`,`appearance`,`haptic`,`show_header`,`theme`,`disabled_states`,`confirm_action`,`states`,`style`,...Object.keys(Je)]),G=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Xe=e=>typeof e==`string`&&ze.includes(e);function K(e,t){if(e!=null&&e!==``){if(typeof e!=`string`)throw new W(`${t} must be a string`);return e}}function Ze(e){if(!G(e))throw new W(`Card config must be an object`);let t=e,n=[],r=!1;if(!Array.isArray(t.sliders)||t.sliders.length===0)throw new W("`sliders` must be a non-empty list");let i=Qe(t.direction,"`direction`")??V.direction,a=$e(t.theme,B,"`theme`"),o=et(t.style,"`style`",n),s=t.sliders.map((e,t)=>{let o=tt(e,t,i,a);return n.push(...o.warnings),r||(r=o.legacy),o.config}),c={type:typeof t.type==`string`?t.type:`custom:slide-confirm-card`,direction:i,sliders:s},l=K(t.header,"`header`");return l!==void 0&&(c.header=l),a!==void 0&&(c.theme=a),o&&(c.style=o),{config:c,warnings:n,legacy:r}}function Qe(e,t){if(e!=null&&e!==``){if(!Xe(e))throw new W(`${t} must be one of: ${ze.join(`, `)}`);return e}}function $e(e,t,n){if(e!=null&&e!==``){if(!t.includes(e))throw new W(`${n} must be one of: ${t.join(`, `)}`);return e}}function et(e,t,n){if(e==null)return;if(!G(e))throw new W(`${t} must be an object`);let r={};for(let[i,a]of Object.entries(e))if(!Be.includes(i))n.push(`${t}: unknown option \`${i}\` ignored`);else if(a!=null&&a!==``){if(typeof a!=`string`&&typeof a!=`number`)throw new W(`${t}.${i} must be a string or number`);r[i]=a}return Object.keys(r).length?r:void 0}function tt(e,t,n,r){let i=`Slider ${t+1}`;if(!G(e))throw new W(`${i} must be an object`);let a=e,o=[],s=!1,c={};for(let[e,t]of Object.entries(Je)){let n=a[e],r=a[t];n!==void 0&&(s=!0,r===void 0?o.push(`${i}: \`${e}\` is deprecated, use \`${t}\``):o.push(`${i}: both \`${e}\` and \`${t}\` set; using \`${t}\``));let l=K(r===void 0?n:r,`${i}.${t}`);l!==void 0&&(c[t]=l)}for(let e of Object.keys(a))Ye.has(e)||o.push(`${i}: unknown option \`${e}\` ignored`);let l=Qe(a.direction,`${i}.direction`)??n,u=a.states!==void 0&&a.states!==null,d=u&&(a.confirm_action===void 0||a.confirm_action===null)?void 0:ot(a.confirm_action,`${i}.confirm_action`);d&&(o.push(...d.warnings),s||(s=d.legacy));let f={text_unconfirmed:c.text_unconfirmed??V.text_unconfirmed,text_confirmed:c.text_confirmed??V.text_confirmed,icon_unconfirmed:c.icon_unconfirmed??V.icon_unconfirmed[l],icon_confirmed:c.icon_confirmed??V.icon_confirmed,direction:l,reset_delay:a.reset_delay===void 0?a.confirmation_duration===void 0?V.reset_delay:Ke(a.confirmation_duration):rt(a.reset_delay,i),appearance:Ge(a.appearance),haptic:it(a.haptic,`${i}.haptic`)??V.haptic,confirm_action:d?.config??{action:`none`}},ee=$e(a.theme,B,`${i}.theme`)??r;ee!==void 0&&(f.theme=ee),it(a.show_header,`${i}.show_header`)===!1&&(f.show_header=!1);let p=et(a.style,`${i}.style`,o);p&&(f.style=p);let te=K(a.name,`${i}.name`),m=K(a.icon,`${i}.icon`),h=K(a.label,`${i}.label`),g=K(a.entity,`${i}.entity`);te!==void 0&&(f.name=te),m!==void 0&&(f.icon=m),h!==void 0&&(f.label=h),g!==void 0&&(f.entity=g);let _=at(a.disabled_states,`${i}.disabled_states`);if(_&&(f.disabled_states=_,g||o.push(`${i}: \`disabled_states\` has no effect without \`entity\``)),u){if(!g)throw new W(`${i}.states needs \`entity\``);let e=nt(a.states,i,{direction:l,text:c,action:d?.config,style:p});o.push(...e.warnings),f.states=e.states}return f.reset_delay===0&&!g&&o.push(`${i}: \`reset_delay: 0\` needs \`entity\` to know when to reset`),{config:f,warnings:o,legacy:s}}function nt(e,t,n){if(!G(e)||Object.keys(e).length===0)throw new W(`${t}.states must map entity states to options`);let r=[],i=Object.create(null);for(let[a,o]of Object.entries(e)){let e=`${t}.states.${a}`,s=o??{};if(!G(s))throw new W(`${e} must be an object`);for(let t of Object.keys(s))We.includes(t)||r.push(`${e}: unknown option \`${t}\` ignored`);let c=Qe(s.direction,`${e}.direction`)??n.direction,l=n.action;if(s.confirm_action!==void 0&&s.confirm_action!==null){let t=ot(s.confirm_action,`${e}.confirm_action`);r.push(...t.warnings),l=t.config}if(!l)throw new W(`${e}.confirm_action is required (or set confirm_action on the slider)`);let u=t=>K(s[t],`${e}.${t}`),d=et(s.style,`${e}.style`,r),f=n.style||d?{...n.style,...d}:void 0;i[a]={direction:c,text_unconfirmed:u(`text_unconfirmed`)??n.text.text_unconfirmed??V.text_unconfirmed,text_confirmed:u(`text_confirmed`)??n.text.text_confirmed??V.text_confirmed,icon_unconfirmed:u(`icon_unconfirmed`)??n.text.icon_unconfirmed??V.icon_unconfirmed[c],icon_confirmed:u(`icon_confirmed`)??n.text.icon_confirmed??V.icon_confirmed,confirm_action:l},f&&(i[a].style=f)}return{states:i,warnings:r}}function rt(e,t){if(e==null)return V.reset_delay;if(typeof e!=`number`||!Number.isFinite(e)||e<0)throw new W(`${t}.reset_delay must be a number of milliseconds >= 0`);return e}function it(e,t){if(e!=null){if(typeof e!=`boolean`)throw new W(`${t} must be true or false`);return e}}function at(e,t){if(e==null)return;let n=Array.isArray(e)?e:[e];if(!n.every(e=>typeof e==`string`))throw new W(`${t} must be a list of strings`);return n.length?n:void 0}function ot(e,t){if(e==null)throw new W(`${t} is required`);if(!G(e))throw new W(`${t} must be an object`);let n=e,r=[],i=!1,{action:a,service:o,service_data:s,...c}=n,l={...c};if(s!==void 0&&(i=!0,l.data===void 0&&(l.data=s),r.push(`${t}: \`service_data\` is deprecated, use \`data\``)),typeof a!=`string`||a===``)throw new W(`${t}.action is required`);let u;if(a===`call-service`)i=!0,u=`perform-action`,l.perform_action===void 0&&(l.perform_action=o),r.push(`${t}: \`action: call-service\` + \`service\` is deprecated, use \`action: perform-action\` + \`perform_action\``);else if(He(a))u=a,o!==void 0&&l.perform_action===void 0&&(i=!0,l.perform_action=o,r.push(`${t}: \`service\` is deprecated, use \`perform_action\``));else if(Ue.test(a))u=`perform-action`,l.perform_action=a,r.push(`${t}: \`action: ${a}\` interpreted as \`action: perform-action\` + \`perform_action: ${a}\``);else throw new W(`${t}.action must be one of: ${Ve.join(`, `)}`);if(u===`perform-action`){if(typeof l.perform_action!=`string`||!l.perform_action.includes(`.`))throw new W(`${t}.perform_action must be \`domain.service\``);if(l.target!==void 0&&!G(l.target))throw new W(`${t}.target must be an object`);if(l.data!==void 0&&!G(l.data))throw new W(`${t}.data must be an object`)}return{config:{...l,action:u},warnings:r,legacy:i}}var st=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function ct(e){let t={...e};return t.service_data!==void 0&&(t.data===void 0&&(t.data=t.service_data),delete t.service_data),t.action===`call-service`&&(t.action=`perform-action`),t.service!==void 0&&(t.perform_action===void 0&&(t.perform_action=t.service),delete t.service),typeof t.action==`string`&&!He(t.action)&&Ue.test(t.action)&&(t.perform_action=t.action,t.action=`perform-action`),t}function lt(e){let t={...e};for(let[e,n]of Object.entries(Je))e in t&&(t[n]===void 0&&(t[n]=t[e]),delete t[e]);return t.confirmation_duration!==void 0&&(t.reset_delay===void 0&&(t.reset_delay=Ke(t.confirmation_duration)),delete t.confirmation_duration),st(t.confirm_action)&&(t.confirm_action=ct(t.confirm_action)),t}function ut(e){return Array.isArray(e.sliders)?{...e,sliders:e.sliders.map(e=>st(e)?lt(e):e)}:{...e}}function dt(e){return st(e)?JSON.stringify(ut(e))!==JSON.stringify(e):!1}var ft=.1;function pt(e){return Math.max(0,e.trackWidth-e.handleWidth)}function mt(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function ht(e,t,n){let r=pt(t);if(r<=0)return 0;let i=(e-t.trackLeft-t.handleWidth/2)/r;return mt(n===`rtl`?1-i:i)}function gt(e,t){return mt(e)*pt(t)}function _t(e,t,n){let r=gt(e,t);return n===`rtl`?-r:r}function vt(e,t){return gt(e,t)+t.handleWidth}function yt(e,t,n=2){let r=pt(t);return r<=0?!1:r-gt(e,t)<=n+1e-6}function bt(e,t,n,r=ft){let i=n===`rtl`?-1:1;switch(t){case`ArrowRight`:return q(e+i*r);case`ArrowLeft`:return q(e-i*r);case`ArrowUp`:return q(e+r);case`ArrowDown`:return q(e-r);case`Home`:return 0;default:return null}}function q(e){let t=mt(e);return t>1-1e-9?1:t<1e-9?0:t}var xt=`--slide-confirm-`;function St(e){return xt+e.replace(/_/g,`-`)}var Ct=Object.fromEntries(Be.map(e=>[e,St(e)])),wt=/* @__PURE__ */ new Set([`handle_size`,`track_height`,`border_radius`,`font_size`]);function Tt(e,t){return typeof t==`number`?wt.has(e)?`${t}px`:String(t):t.trim()}function Et(e){let t={};if(!e)return t;for(let n of Be){let r=e[n];r!=null&&r!==``&&(t[Ct[n]]=Tt(n,r))}return t}var Dt=o`
	:host {
		display: block;
	}

	ha-card {
		height: 100%;
		box-sizing: border-box;
	}

	slide-confirm-slider:first-child::part(slider) {
		margin-top: 0;
	}

	slide-confirm-slider:last-child::part(slider) {
		margin-bottom: 0;
	}
`;function J(e,t,n,r={}){let i=new CustomEvent(t,{detail:n,bubbles:r.bubbles??!0,composed:r.composed??!0,cancelable:r.cancelable??!1});return e.dispatchEvent(i),i}function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Ot,X={cardPadding:32,cardHeader:60,sliderTrack:50,sliderHeader:28,sliderGap:8,gridRow:56,gridGap:8,cardSizeUnit:50},Z=class extends L{constructor(...e){super(...e),this._lastWarnings=``}get config(){return this._config}setConfig(e){let{config:t,warnings:n}=Ze(e);this._config=t;let r=n.join(`
`);r&&r!==this._lastWarnings&&console.warn(`slide-confirm-card: config notes\n${n.map(e=>`  - ${e}`).join(`
`)}`),this._lastWarnings=r}_estimatedHeight(){let e=this._config;if(!e)return X.cardPadding+X.sliderTrack;let t=X.cardPadding+(e.header?X.cardHeader:0);return e.sliders.forEach((e,n)=>{let r=e.show_header!==!1&&(e.name!==void 0||e.icon!==void 0||e.label!==void 0||e.entity!==void 0);t+=(e.appearance?.height??X.sliderTrack)+(r?X.sliderHeader:0)+(n>0?X.sliderGap:0)}),t}getCardSize(){return Math.max(1,Math.ceil(this._estimatedHeight()/X.cardSizeUnit))}getGridOptions(){let e=Math.max(1,Math.ceil((this._estimatedHeight()+X.gridGap)/(X.gridRow+X.gridGap)));return{columns:`full`,rows:e,min_columns:6,min_rows:e}}static getConfigElement(){return document.createElement(`slide-confirm-card-editor`)}static getStubConfig(){return{type:`custom:slide-confirm-card`,sliders:[{name:`Front Door`,icon:`mdi:door`,text_unconfirmed:`Slide to Unlock`,text_confirmed:`Door Unlocked!`,icon_unconfirmed:`mdi:lock`,icon_confirmed:`mdi:lock-open`,confirm_action:{action:`perform-action`,perform_action:`input_boolean.turn_on`,target:{entity_id:`input_boolean.slide_confirm`}}}]}}_onConfirmed(e){e.stopPropagation();let{action:t,config:n}=e.detail;if(!this.isConnected||!this._config?.sliders.includes(n))return;let r=n.entity?this.hass?.states[n.entity]?.state:void 0;if(n.entity&&n.disabled_states?.includes(r??`unavailable`)||n.states&&e.detail.state!==r||t!==(n.states?r!==void 0&&Object.prototype.hasOwnProperty.call(n.states,r)?n.states[r].confirm_action:void 0:n.confirm_action))return;let i={tap_action:t};n.entity&&(i.entity=n.entity),J(this,`hass-action`,{config:i,action:`tap`})}render(){let e=this._config;return e?k`
			<ha-card .header=${e.header}>
				<div class="card-content" style=${Re(Et(e.style))}>
					${e.sliders.map(e=>k`
							<slide-confirm-slider
								.config=${e}
								.hass=${this.hass}
								@slide-confirmed=${this._onConfirmed}
							></slide-confirm-slider>
						`)}
				</div>
			</ha-card>
		`:j}};Ot=Z,Ot.styles=Dt,Y([R({attribute:!1})],Z.prototype,`hass`,void 0),Y([z()],Z.prototype,`_config`,void 0);var kt=o`
	:host {
		display: block;
	}

	ha-alert {
		display: block;
		margin-bottom: 16px;
	}

	.section {
		margin: 24px 0 8px;
		font-size: 1rem;
		font-weight: 500;
		color: var(--primary-text-color);
	}

	ha-expansion-panel.slider {
		margin-bottom: 8px;
		--expansion-panel-summary-padding: 0 8px;
	}

	.slider .content {
		padding: 12px;
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.add {
		margin-top: 8px;
	}
`;function At(e,t=/* @__PURE__ */ new Set,n=/* @__PURE__ */ new Set){return jt(e,t,n,!0)}function jt(e,t,n,r){if(e!=null&&e!==``){if(Array.isArray(e)){let i=e.map(e=>jt(e,t,n,!1)).filter(e=>e!==void 0);return i.length||r?i:void 0}if(typeof e==`object`){let i={};for(let[r,a]of Object.entries(e)){let e=jt(a,t,n,!1);e===void 0?t.has(r)&&Array.isArray(a)&&(i[r]=[]):Object.defineProperty(i,r,{value:e,enumerable:!0,writable:!0,configurable:!0})}return Object.keys(i).length||r||n.has(e)?i:void 0}return e}}var Mt=[`ha-form`,`ha-expansion-panel`,`ha-alert`,`ha-icon-button`],Nt;function Pt(){return Mt.every(e=>customElements.get(e))?Promise.resolve():(Nt??(Nt=Ft().catch(()=>void 0)),Nt)}async function Ft(){for(let e of[`hui-button-card`,`hui-entities-card`])await customElements.get(e)?.getConfigElement?.();if(customElements.get(`ha-form`))return;let e=await window.loadCardHelpers?.();e&&await e.createCardElement({type:`button`,entity:`light.none`}).constructor.getConfigElement?.()}var It,Lt={select:{mode:`dropdown`,options:[{value:`ltr`,label:`Left to right`},{value:`rtl`,label:`Right to left`}]}},Rt={select:{mode:`dropdown`,options:B.map(e=>({value:e,label:e===`ios`?`iOS`:e[0].toUpperCase()+e.slice(1)}))}},zt=[{type:`grid`,name:``,schema:[{name:`handle_size`,selector:{text:{}}},{name:`track_height`,selector:{text:{}}},{name:`border_radius`,selector:{text:{}}},{name:`font_size`,selector:{text:{}}}]},{type:`grid`,name:``,schema:[{name:`track_color`,selector:{text:{}}},{name:`handle_color`,selector:{text:{}}},{name:`handle_border_color`,selector:{text:{}}},{name:`text_color`,selector:{text:{}}},{name:`confirmed_color`,selector:{text:{}}},{name:`confirmed_text_color`,selector:{text:{}}}]},{name:`fill_opacity`,selector:{number:{min:0,max:1,step:.05,mode:`slider`}}}],Bt=[{type:`grid`,name:``,schema:[{name:`header`,selector:{text:{}}},{name:`direction`,selector:Lt}]},{name:`theme`,selector:Rt},{type:`expandable`,name:`style`,title:`Style defaults for all sliders`,schema:zt}],Vt=[...[`background_color`,`handle_color`,`text_color`,`confirmed_background_color`,`confirmed_handle_color`].map(e=>({name:e,selector:{text:{}}})),...[`background_opacity`,`confirmed_background_opacity`].map(e=>({name:e,selector:{number:{min:0,max:1,step:.01,mode:`slider`}}})),...[[`height`,40,120],[`handle_size`,32,100],[`border_radius`,0,60]].map(([e,t,n])=>({name:e,selector:{number:{min:t,max:n,mode:`box`}}})),{name:`handle_style`,selector:{select:{options:[`3d`,`flat`]}}},{name:`handle_position`,selector:{select:{options:[`left`,`center`]}}}],Ht=[{name:`entity`,selector:{entity:{}}},{type:`grid`,name:``,schema:[{name:`name`,selector:{text:{}}},{name:`icon`,selector:{icon:{}},context:{icon_entity:`entity`}}]},{name:`label`,selector:{text:{}}},{type:`grid`,name:``,schema:[{name:`text_unconfirmed`,selector:{text:{}}},{name:`text_confirmed`,selector:{text:{}}}]},{type:`grid`,name:``,schema:[{name:`icon_unconfirmed`,selector:{text:{}}},{name:`icon_confirmed`,selector:{text:{}}}]},{name:`confirm_action`,selector:{ui_action:{default_action:`perform-action`,actions:[`perform-action`,`toggle`,`more-info`,`navigate`,`url`,`assist`,`none`]}}},{type:`expandable`,name:``,flatten:!0,title:`Behaviour`,schema:[{type:`grid`,name:``,schema:[{name:`direction`,selector:Lt},{name:`theme`,selector:Rt},{name:`reset_delay`,selector:{number:{min:0,step:100,mode:`box`,unit_of_measurement:`ms`}}}]},{type:`grid`,name:``,schema:[{name:`show_header`,selector:{boolean:{}}},{name:`haptic`,selector:{boolean:{}}}]},{name:`disabled_states`,selector:{text:{multiple:!0}}}]},{type:`expandable`,name:`style`,title:`Style`,schema:zt},{type:`expandable`,name:`appearance`,title:`Plus appearance (legacy compatible)`,schema:Vt}],Ut={header:`Card title`,direction:`Slide direction`,theme:`Theme`,entity:`Entity`,name:`Name`,icon:`Icon`,label:`Secondary text`,text_unconfirmed:`Text before confirming`,text_confirmed:`Text after confirming`,icon_unconfirmed:`Handle icon`,icon_confirmed:`Handle icon after confirming`,confirm_action:`Action on confirm`,reset_delay:`Reset after`,haptic:`Haptic feedback`,show_header:`Show name and icon`,disabled_states:`Disable when entity state is`,track_color:`Track color`,handle_color:`Handle color`,handle_border_color:`Handle border color`,confirmed_color:`Confirmed color`,confirmed_text_color:`Confirmed text color`,text_color:`Text color`,handle_size:`Handle size`,track_height:`Track height`,border_radius:`Border radius`,font_size:`Font size`,fill_opacity:`Fill opacity`},Wt={direction:`Leave empty to use the card default (left to right).`,theme:`Built-in look. Leave empty for the classic look (or the card's theme).`,entity:`Optional. Supplies the default name and icon and enables the state options below.`,reset_delay:`Milliseconds. 0 keeps the confirmed state until the entity changes state.`,disabled_states:`Press Enter after each state, e.g. unlocked, unavailable.`,handle_size:`CSS length, e.g. 44px. Default 50px.`,track_height:`CSS length. Defaults to the handle size.`,border_radius:`CSS length. Defaults to half the handle size.`,font_size:`CSS size, e.g. 0.9rem.`,track_color:`Any CSS color, e.g. #9e9e9e or var(--divider-color).`,confirmed_color:`Fill and handle color after a successful slide.`},Gt=e=>Ut[e.name]??e.name,Kt=e=>Wt[e.name],qt=/* @__PURE__ */ new Set([`sliders`]),Jt=()=>({text_unconfirmed:`Slide to confirm`,text_confirmed:`Confirmed`,icon_unconfirmed:`mdi:chevron-right`,icon_confirmed:`mdi:check`,confirm_action:{action:`perform-action`}}),Yt=(e,t)=>typeof e.name==`string`&&e.name||typeof e.text_unconfirmed==`string`&&e.text_unconfirmed||typeof e.textUnconfirmed==`string`&&e.textUnconfirmed||`Slider ${t+1}`,Xt=e=>{if(e.states&&typeof e.states==`object`)return`Actions per entity state`;let t=e.confirm_action;return!t||typeof t!=`object`?`No action`:t.action===`perform-action`?t.perform_action||`Choose an action`:typeof t.action==`string`?t.action:`No action`},Q=class extends L{constructor(...e){super(...e),this._legacy=!1}get config(){return this._config}connectedCallback(){super.connectedCallback(),Pt().then(()=>this.requestUpdate())}setConfig(e){this._config=e&&typeof e==`object`?e:{},this._legacy=dt(this._config);try{Ze(this._config),this._error=void 0}catch(e){this._error=e instanceof Error?e.message:String(e)}}_sliders(){return Array.isArray(this._config?.sliders)?this._config.sliders:[]}_commit(e){let t=/* @__PURE__ */ new Set;for(let n of Array.isArray(e.sliders)?e.sliders:[])if(n.states&&typeof n.states==`object`&&!Array.isArray(n.states)){t.add(n.states);for(let e of Object.values(n.states))e&&typeof e==`object`&&!Array.isArray(e)&&t.add(e)}let n=At(e,qt,t)??{};this.setConfig(n),J(this,`config-changed`,{config:n})}_cardChanged(e){if(e.stopPropagation(),!this._config)return;let{header:t,direction:n,theme:r,style:i}=e.detail.value;this._commit({...this._config,header:t,direction:n,theme:r,style:i})}_sliderChanged(e,t){if(t.stopPropagation(),!this._config)return;let n=[...this._sliders()],{show_header:r,...i}=t.detail.value;n[e]=r===!1?{...i,show_header:r}:i,this._commit({...this._config,sliders:n})}_addSlider(){this._config&&this._commit({...this._config,sliders:[...this._sliders(),Jt()]})}_removeSlider(e){this._config&&this._commit({...this._config,sliders:this._sliders().filter((t,n)=>n!==e)})}_moveSlider(e,t){if(!this._config)return;let n=[...this._sliders()],r=e+t;r<0||r>=n.length||([n[e],n[r]]=[n[r],n[e]],this._commit({...this._config,sliders:n}))}_upgrade(){this._config&&this._commit(ut(this._config))}render(){let e=this._config;if(!e)return j;let t=this._sliders(),n={header:e.header??void 0,direction:e.direction,theme:e.theme,style:e.style};return k`
			${this._legacy?k`
							<ha-alert alert-type="info" title="Older option names" class="legacy">
								This card still uses the v1 option names (for example
								<code>textUnconfirmed</code>). Upgrading renames them; nothing else changes.
								<ha-button slot="action" class="upgrade" @click=${this._upgrade}>Upgrade</ha-button>
							</ha-alert>
						`:j}
			${this._error?k`<ha-alert alert-type="warning" class="error">${this._error}</ha-alert>`:j}

			<ha-form
				class="card-form"
				.hass=${this.hass}
				.data=${n}
				.schema=${Bt}
				.computeLabel=${Gt}
				.computeHelper=${Kt}
				@value-changed=${this._cardChanged}
			></ha-form>

			<h3 class="section">Sliders</h3>
			${t.map((e,n)=>this._renderSlider(e,n,t.length))}

			<ha-button class="add" @click=${this._addSlider}>
				<ha-icon slot="icon" icon="mdi:plus"></ha-icon>
				Add slider
			</ha-button>
		`}_renderSlider(e,t,n){let r=lt(e);return k`
			<ha-expansion-panel
				outlined
				class="slider"
				.header=${Yt(e,t)}
				.secondary=${Xt(r)}
			>
				<div slot="icons" class="actions" @click=${e=>e.stopPropagation()}>
					<ha-icon-button
						class="up"
						label="Move up"
						.disabled=${t===0}
						@click=${()=>this._moveSlider(t,-1)}
					>
						<ha-icon icon="mdi:arrow-up"></ha-icon>
					</ha-icon-button>
					<ha-icon-button
						class="down"
						label="Move down"
						.disabled=${t===n-1}
						@click=${()=>this._moveSlider(t,1)}
					>
						<ha-icon icon="mdi:arrow-down"></ha-icon>
					</ha-icon-button>
					<ha-icon-button class="remove" label="Remove" @click=${()=>this._removeSlider(t)}>
						<ha-icon icon="mdi:delete"></ha-icon>
					</ha-icon-button>
				</div>
				<div class="content">
					${r.states&&typeof r.states==`object`?k`
									<ha-alert alert-type="info" class="states-note">
										This slider has per-state options (<code>states:</code>). Edit them in the code
										editor; the fields below are the defaults they fall back to.
									</ha-alert>
								`:j}
					<ha-form
						class="slider-form"
						.hass=${this.hass}
						.data=${{...r,show_header:r.show_header!==!1}}
						.schema=${Ht}
						.computeLabel=${Gt}
						.computeHelper=${Kt}
						@value-changed=${e=>this._sliderChanged(t,e)}
					></ha-form>
				</div>
			</ha-expansion-panel>
		`}};It=Q,It.styles=kt,Y([R({attribute:!1})],Q.prototype,`hass`,void 0),Y([R({attribute:!1})],Q.prototype,`lovelace`,void 0),Y([z()],Q.prototype,`_config`,void 0),Y([z()],Q.prototype,`_error`,void 0),Y([z()],Q.prototype,`_legacy`,void 0);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Zt=Pe(class extends Fe{constructor(e){if(super(e),e.type!==Ne.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return A}});function Qt(e,t,n,r){if(!e.trim().startsWith(`[[[`)||!e.trim().endsWith(`]]]`))return e;try{let i=e.trim().slice(3,-3),a=Function(`states`,`entity`,`"use strict"; ${i}`)(n?.states??{},r);return typeof a==`string`&&a.trim()?a:t}catch{return t}}var $t=o`
	:host {
		display: block;
	}

	.slider {
		--_handle-size: var(--slide-confirm-handle-size, 50px);
		--_track-height: var(--slide-confirm-track-height, var(--_handle-size));
		--_radius: var(--slide-confirm-border-radius, calc(var(--_handle-size) / 2));
		--_track-color: var(
			--slide-confirm-track-color,
			var(--slider-track-color, var(--secondary-text-color, #9e9e9e))
		);
		--_handle-color: var(
			--slide-confirm-handle-color,
			var(
				--switch-unchecked-button-color,
				var(--card-background-color, var(--ha-card-background, #fff))
			)
		);
		--_handle-border-color: var(
			--slide-confirm-handle-border-color,
			var(--divider-color, rgba(0, 0, 0, 0.12))
		);
		--_confirmed-color: var(
			--slide-confirm-confirmed-color,
			var(--switch-checked-track-color, var(--primary-color, #03a9f4))
		);
		--_confirmed-text-color: var(
			--slide-confirm-confirmed-text-color,
			var(--text-primary-color, #fff)
		);
		--_text-color: var(--slide-confirm-text-color, var(--primary-text-color, #212121));
		--_font-size: var(--slide-confirm-font-size, 1rem);
		--_fill-opacity: var(--slide-confirm-fill-opacity, 0.54);

		color: var(--_text-color);
		margin: 8px 0;
		user-select: none;
		-webkit-user-select: none;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 4px;
		min-height: 24px;
	}

	.label {
		color: var(--secondary-text-color, inherit);
		font-size: 0.875em;
	}

	.track {
		position: relative;
		height: var(--_track-height);
		min-height: var(--_handle-size);
		border-radius: var(--_radius);
	}

	/* The track colour shows through at 38% (as in v1) without dimming the children. */
	.track::before {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-color: var(--_track-color);
		opacity: 0.38;
	}

	/* Clips the fill to the track's rounded shape while it shrinks (its own corners
	   would otherwise poke out past the track's curve). The handle stays outside. */
	.fill-clip {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		overflow: hidden;
	}

	.fill {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: var(--_fill, 0px);
		border-radius: var(--_radius);
		background-color: var(--_confirmed-color);
		opacity: var(--_fill-opacity);
		transition: width 300ms;
	}

	.rtl .fill {
		left: auto;
		right: 0;
	}

	.confirmed .fill {
		width: 100%;
	}

	.text {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--_font-size);
		text-align: center;
		padding: 0 8px;
		pointer-events: none;
	}

	.handle {
		position: absolute;
		top: 50%;
		left: 0;
		width: var(--_handle-size);
		height: var(--_handle-size);
		box-sizing: border-box;
		border-radius: 50%;
		border: 1px solid var(--_handle-border-color);
		background-color: var(--_handle-color);
		box-shadow:
			rgba(0, 0, 0, 0.2) 0 3px 1px -2px,
			rgba(0, 0, 0, 0.14) 0 2px 2px 0,
			rgba(0, 0, 0, 0.12) 0 1px 5px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		--mdc-icon-size: calc(var(--_handle-size) * 0.5);
		cursor: grab;
		touch-action: none;
		transform: translate(var(--_x, 0px), -50%);
		transition:
			transform 300ms,
			translate 300ms,
			background-color 300ms,
			border-color 300ms;
		outline: none;
	}

	/* Where supported, the translate property instead, so a theme's scale (or card_mod's)
	   never scales the offset. Older WebViews keep transform; they lack scale too. */
	@supports (translate: 0) {
		.handle {
			transform: none;
			translate: var(--_x, 0px) -50%;
		}
	}

	.rtl .handle {
		left: auto;
		right: 0;
	}

	/* Plus appearance uses independent track opacity so text/handle stay opaque. */
	.plus .track::before {
		opacity: var(--slide-confirm-track-opacity);
	}
	.plus.confirmed .track::before {
		background: var(--_confirmed-color);
		opacity: var(--slide-confirm-confirmed-track-opacity);
	}
	.plus .handle:focus-visible {
		outline: 3px solid var(--_confirmed-color);
		outline-offset: 2px;
	}
	.plus .text {
		font-weight: 600;
	}
	.plus .fill {
		display: none;
	}
	.plus .handle {
		left: var(--_rest-x, 0px);
		color: var(--_track-color);
		border: 2px solid color-mix(in srgb, var(--_track-color) 35%, #000);
	}
	.plus.rtl .handle {
		left: auto;
		right: var(--_rest-x, 0px);
	}
	.plus.confirmed .handle {
		background-color: var(--slide-confirm-confirmed-handle-color);
		color: var(--_confirmed-color);
	}
	.plus.glossy .handle {
		--_ball: var(--_handle-color);
		background: radial-gradient(
			circle at 32% 27%,
			color-mix(in srgb, var(--_ball) 42%, #fff),
			var(--_ball) 58%,
			color-mix(in srgb, var(--_ball) 76%, #000)
		);
		box-shadow:
			rgba(0, 0, 0, 0.28) 0 5px 10px,
			inset rgba(255, 255, 255, 0.48) 0 1px 1px;
	}
	.plus.glossy.confirmed .handle {
		--_ball: var(--slide-confirm-confirmed-handle-color);
	}

	.handle:focus-visible {
		box-shadow: 0 0 0 3px var(--_confirmed-color);
	}

	.dragging .handle,
	.dragging .fill {
		transition: none;
	}

	/* For one frame when a \`states:\` entry flips the direction: the handle jumps to its
	   new rest side instead of sliding across from the old one. Beats the theme rules too. */
	.slider.instant .handle,
	.slider.instant .fill {
		transition: none;
	}

	.dragging .handle {
		cursor: grabbing;
	}

	.confirmed .handle {
		border-color: var(--_confirmed-color);
		background-color: var(--_confirmed-color);
		color: var(--_confirmed-text-color);
		cursor: default;
	}

	.disabled {
		opacity: 0.5;
	}

	.disabled .handle {
		cursor: not-allowed;
	}

	@media (prefers-reduced-motion: reduce) {
		.handle,
		.fill {
			transition: none;
		}
	}
`,en=o`
	/* ---------- shared by every design ---------- */
	[class*="theme-"] {
		--_accent: var(--_confirmed-color);
		--_ink: var(--primary-text-color, #e1e1e1);
		--_knob-light: #f5f5f7;
	}

	[class*="theme-"] .track::before {
		display: none;
	}

	[class*="theme-"] .track {
		height: calc(var(--_handle-size) + 2 * var(--_inset));
		border-radius: calc(var(--_handle-size) / 2 + var(--_inset));
		transition:
			background-color 220ms,
			box-shadow 220ms;
	}

	[class*="theme-"] .handle {
		left: var(--_inset);
		border: none;
		scale: 1;
		/* transform and translate animate the handle back to rest after a cancelled slide. */
		transition:
			transform 300ms,
			translate 300ms,
			background-color 220ms,
			color 220ms,
			box-shadow 220ms,
			scale 180ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
	}

	/* While dragging the handle follows the finger directly; only the looks animate. */
	[class*="theme-"].dragging .handle {
		transition:
			background-color 220ms,
			color 220ms,
			box-shadow 220ms,
			scale 180ms cubic-bezier(0.2, 0.9, 0.3, 1.2);
	}

	[class*="theme-"].rtl .handle {
		left: auto;
		right: var(--_inset);
	}

	/* The fill sits in the groove (inset like the knob) and ends at the knob's far edge, so
	   its rounded end is exactly the knob's circle and stays hidden behind it. */
	[class*="theme-"] .fill-clip {
		inset: var(--_inset);
		border-radius: calc(var(--_handle-size) / 2);
	}

	[class*="theme-"] .fill {
		width: var(--_fill, var(--_handle-size));
		border-radius: calc(var(--_handle-size) / 2);
	}

	[class*="theme-"].confirmed .fill {
		width: 100%;
	}

	[class*="theme-"] .text {
		font-weight: 500;
		letter-spacing: 0.01em;
		padding-left: calc(var(--_handle-size) + var(--_inset));
		transition: opacity 120ms;
	}

	[class*="theme-"].rtl .text {
		padding-left: 8px;
		padding-right: calc(var(--_handle-size) + var(--_inset));
	}

	[class*="theme-"].confirmed .text {
		opacity: 1;
		padding: 0 8px;
	}

	@keyframes slide-confirm-shimmer {
		from {
			background-position: 250% 0;
		}
		to {
			background-position: 0% 0;
		}
	}

	/* ---------- ios: bright inset knob, recessed track, shimmering prompt ---------- */
	.theme-ios {
		--_inset: 4px;
	}

	.theme-ios .track {
		background: color-mix(in srgb, var(--_ink) 9%, transparent);
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.35);
	}

	.theme-ios .fill {
		display: none;
	}

	.theme-ios .handle {
		background: var(--_knob-light);
		color: var(--_accent);
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.3),
			0 4px 14px rgba(0, 0, 0, 0.28);
	}

	.theme-ios.dragging .handle {
		scale: 1.05;
	}

	.theme-ios .text {
		color: transparent;
		background: linear-gradient(
				100deg,
				color-mix(in srgb, var(--_ink) 55%, transparent) 40%,
				var(--_ink) 50%,
				color-mix(in srgb, var(--_ink) 55%, transparent) 60%
			)
			0 0 / 250% 100% repeat-x;
		-webkit-background-clip: text;
		background-clip: text;
		animation: slide-confirm-shimmer 2.6s linear infinite;
	}

	.theme-ios.confirmed .track {
		background: var(--_accent);
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	.theme-ios.confirmed .text {
		color: #fff;
		background: none;
		animation: none;
	}

	/* ---------- minimal: quiet track, knob alone turns accent ---------- */
	.theme-minimal {
		--_inset: 3px;
	}

	.theme-minimal .track {
		background: color-mix(in srgb, var(--_ink) 7%, transparent);
	}

	.theme-minimal .fill {
		display: none;
	}

	.theme-minimal .handle {
		background: color-mix(in srgb, var(--_ink) 90%, transparent);
		color: var(--card-background-color, #1c1c1c);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	}

	.theme-minimal .text {
		color: color-mix(in srgb, var(--_ink) 45%, transparent);
		font-weight: 400;
	}

	.theme-minimal.dragging .handle {
		scale: 1.04;
	}

	.theme-minimal.confirmed .handle {
		background: var(--_accent);
		color: #fff;
	}

	.theme-minimal.confirmed .text {
		color: var(--_ink);
	}

	/* ---------- glow: a light trail that heats up toward the end ---------- */
	.theme-glow {
		--_inset: 4px;
	}

	.theme-glow .track {
		background: color-mix(in srgb, var(--_ink) 6%, transparent);
		box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--_ink) 8%, transparent);
	}

	.theme-glow .fill {
		background: linear-gradient(90deg, transparent, var(--_accent));
		opacity: calc(0.25 + 0.75 * var(--_p, 0));
	}

	.theme-glow.rtl .fill {
		background: linear-gradient(270deg, transparent, var(--_accent));
	}

	.theme-glow .handle {
		background: #fff;
		color: var(--_accent);
		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.4),
			0 0 calc(4px + 26px * var(--_p, 0)) calc(8px * var(--_p, 0)) var(--_accent);
	}

	.theme-glow .text {
		color: color-mix(in srgb, var(--_ink) 60%, transparent);
	}

	.theme-glow.confirmed .track {
		box-shadow:
			inset 0 0 0 1px var(--_accent),
			0 0 18px -2px var(--_accent);
	}

	.theme-glow.confirmed .fill {
		opacity: 1;
	}

	.theme-glow.confirmed .fill {
		background: var(--_accent);
	}

	.theme-glow.confirmed .text {
		color: #fff;
	}

	/* ---------- glass: frosted track, glossy knob ---------- */
	.theme-glass {
		--_inset: 4px;
	}

	.theme-glass .track {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
		-webkit-backdrop-filter: blur(14px) saturate(1.6);
		backdrop-filter: blur(14px) saturate(1.6);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.18),
			inset 0 0 0 1px rgba(255, 255, 255, 0.08),
			0 8px 24px -12px rgba(0, 0, 0, 0.6);
	}

	.theme-glass .fill {
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--_accent) 55%, white),
			var(--_accent)
		);
		opacity: calc(0.15 + 0.35 * var(--_p, 0));
	}

	.theme-glass .handle {
		background: radial-gradient(
			120% 90% at 50% 0%,
			#fff 0%,
			rgba(255, 255, 255, 0.85) 45%,
			#d9dee7 100%
		);
		color: color-mix(in srgb, var(--_accent) 80%, black);
		box-shadow:
			inset 0 -2px 4px rgba(0, 0, 0, 0.12),
			0 1px 1px rgba(0, 0, 0, 0.25),
			0 6px 16px rgba(0, 0, 0, 0.35);
	}

	.theme-glass.dragging .handle {
		scale: 1.05;
	}

	.theme-glass .text {
		color: rgba(255, 255, 255, 0.75);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
	}

	.theme-glass.confirmed .fill {
		opacity: 0.9;
	}

	/* ---------- tonal: Material 3 tonal track, solid accent knob ---------- */
	.theme-tonal {
		--_inset: 0px;
	}

	.theme-tonal .track {
		border-radius: 16px;
		background: color-mix(in srgb, var(--_accent) 18%, transparent);
	}

	.theme-tonal .fill {
		background: color-mix(in srgb, var(--_accent) 38%, transparent);
		opacity: 1;
	}

	.theme-tonal .fill-clip,
	.theme-tonal .fill {
		border-radius: 16px;
	}

	.theme-tonal .handle {
		border-radius: 16px;
		background: var(--_accent);
		color: #fff;
		box-shadow: none;
	}

	.theme-tonal .text {
		color: color-mix(in srgb, var(--_accent) 70%, var(--_ink));
	}

	.theme-tonal.confirmed .fill {
		background: var(--_accent);
	}

	.theme-tonal.confirmed .handle {
		background: #fff;
		color: var(--_accent);
	}

	.theme-tonal.confirmed .text {
		color: #fff;
	}

	/* ---------- sunrise: gradient revealed as you slide ---------- */
	.theme-sunrise {
		--_inset: 4px;
	}

	.theme-sunrise .track {
		background: color-mix(in srgb, var(--_ink) 8%, transparent);
	}

	.theme-sunrise .fill {
		opacity: 1;
		background: linear-gradient(90deg, #ff8a3d, #ff4f7b 50%, #a855f7) 0 0 / var(--_track-w, 400px)
			100%;
		background-attachment: local;
	}

	.theme-sunrise .handle {
		background: #fff;
		color: #ff4f7b;
		box-shadow:
			0 1px 2px rgba(0, 0, 0, 0.3),
			0 6px 16px rgba(0, 0, 0, 0.3);
	}

	.theme-sunrise.dragging .handle {
		scale: 1.05;
	}

	.theme-sunrise .text {
		color: color-mix(in srgb, var(--_ink) 60%, transparent);
	}

	.theme-sunrise.confirmed .track {
		box-shadow: 0 0 20px -4px #ff4f7b;
	}

	.theme-sunrise.confirmed .handle {
		color: #a855f7;
	}

	.theme-sunrise.confirmed .text {
		color: #fff;
	}

	/* ---------- outline: hairline track, accent knob ---------- */
	.theme-outline {
		--_inset: 4px;
	}

	.theme-outline .track {
		box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--_accent) 55%, transparent);
	}

	.theme-outline .fill {
		background: color-mix(in srgb, var(--_accent) 22%, transparent);
		opacity: 1;
	}

	.theme-outline .handle {
		background: var(--_accent);
		color: #fff;
		box-shadow: 0 2px 10px color-mix(in srgb, var(--_accent) 45%, transparent);
	}

	.theme-outline .text {
		color: var(--_accent);
		text-transform: uppercase;
		font-size: 0.8rem;
		letter-spacing: 0.14em;
	}

	.theme-outline.dragging .handle {
		scale: 1.05;
	}

	.theme-outline.confirmed .fill {
		background: var(--_accent);
	}

	.theme-outline.confirmed .handle {
		background: #fff;
		color: var(--_accent);
	}

	.theme-outline.confirmed .text {
		color: #fff;
	}

	/* ---------- soft: neumorphic, pressed-in track and raised knob ---------- */
	.theme-soft {
		--_inset: 5px;
		--_soft-bg: var(--card-background-color, #1c1c1c);
	}

	.theme-soft .track {
		background: var(--_soft-bg);
		box-shadow:
			inset 4px 4px 10px rgba(0, 0, 0, 0.55),
			inset -4px -4px 10px rgba(255, 255, 255, 0.05);
	}

	.theme-soft .fill {
		display: none;
	}

	.theme-soft .handle {
		background: linear-gradient(
			145deg,
			color-mix(in srgb, var(--_soft-bg) 80%, white),
			var(--_soft-bg)
		);
		color: color-mix(in srgb, var(--_ink) 70%, transparent);
		box-shadow:
			5px 5px 12px rgba(0, 0, 0, 0.55),
			-3px -3px 10px rgba(255, 255, 255, 0.06);
	}

	.theme-soft .text {
		color: color-mix(in srgb, var(--_ink) 40%, transparent);
	}

	.theme-soft.dragging .handle {
		scale: 0.97;
	}

	.theme-soft.confirmed .handle {
		color: var(--_accent);
		box-shadow:
			5px 5px 12px rgba(0, 0, 0, 0.55),
			-3px -3px 10px rgba(255, 255, 255, 0.06),
			0 0 16px -2px var(--_accent);
	}

	.theme-soft.confirmed .text {
		color: var(--_accent);
	}

	/* ---------- arrows: chevrons ripple toward the end ---------- */
	.theme-arrows {
		--_inset: 4px;
	}

	.theme-arrows .track {
		background: color-mix(in srgb, var(--_ink) 8%, transparent);
	}

	.theme-arrows .fill {
		background: var(--_accent);
		opacity: 0.85;
	}

	.theme-arrows .handle {
		background: #fff;
		color: var(--_accent);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.35);
	}

	.theme-arrows .text {
		font-size: 0;
	}

	.theme-arrows .text::after {
		content: "\\203A\\203A\\203A";
		font-size: 1.6rem;
		letter-spacing: 0.15em;
		color: transparent;
		background: linear-gradient(
				90deg,
				color-mix(in srgb, var(--_ink) 25%, transparent) 35%,
				var(--_ink) 50%,
				color-mix(in srgb, var(--_ink) 25%, transparent) 65%
			)
			0 0 / 300% 100% repeat-x;
		-webkit-background-clip: text;
		background-clip: text;
		animation: slide-confirm-shimmer 1.6s linear infinite reverse;
	}

	.theme-arrows.rtl .text::after {
		content: "\\2039\\2039\\2039";
		animation-direction: normal;
	}

	.theme-arrows.confirmed .text {
		font-size: var(--_font-size);
		color: #fff;
	}

	.theme-arrows.confirmed .text::after {
		content: none;
	}

	.theme-arrows.confirmed .fill {
		opacity: 1;
	}

	/* ---------- mono: black and white, inverts on lock ---------- */
	.theme-mono {
		--_inset: 4px;
	}

	.theme-mono .track {
		background: #f2f2f2;
	}

	.theme-mono .fill {
		display: none;
	}

	.theme-mono .handle {
		background: #111;
		color: #fff;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}

	.theme-mono .text {
		color: #111;
		font-weight: 600;
	}

	.theme-mono.dragging .handle {
		scale: 1.05;
	}

	.theme-mono.confirmed .track {
		background: #111;
		box-shadow: inset 0 0 0 1.5px #f2f2f2;
	}

	.theme-mono.confirmed .handle {
		background: #f2f2f2;
		color: #111;
	}

	.theme-mono.confirmed .text {
		color: #f2f2f2;
	}

	/* ---------- hazard: garage stripes revealed as you slide ---------- */
	.theme-hazard {
		--_inset: 4px;
	}

	.theme-hazard .track {
		background: color-mix(in srgb, var(--_ink) 8%, transparent);
	}

	.theme-hazard .fill {
		opacity: 1;
		background: repeating-linear-gradient(-45deg, #f5c400 0 14px, #1a1a1a 14px 28px);
	}

	.theme-hazard .handle {
		background: #f5c400;
		color: #1a1a1a;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.45);
	}

	.theme-hazard .text {
		color: color-mix(in srgb, var(--_ink) 60%, transparent);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.theme-hazard.dragging .handle {
		scale: 1.05;
	}

	.theme-hazard.confirmed .fill {
		background: #f5c400;
	}

	.theme-hazard.confirmed .handle {
		background: #1a1a1a;
		color: #f5c400;
	}

	.theme-hazard.confirmed .text {
		color: #1a1a1a;
	}

	/* ---------- aurora: a colour ring wakes up around the track ---------- */
	.theme-aurora {
		--_inset: 4px;
	}

	.theme-aurora .track {
		background: color-mix(in srgb, var(--_ink) 7%, transparent);
	}

	.theme-aurora .track::after {
		content: "";
		position: absolute;
		inset: -2px;
		border-radius: inherit;
		padding: 2px;
		background: linear-gradient(90deg, #22d3ee, #818cf8, #e879f9, #22d3ee) 0 0 / 300% 100%;
		-webkit-mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: calc(0.15 + 0.85 * var(--_p, 0));
		animation: slide-confirm-shimmer 3s linear infinite;
		pointer-events: none;
	}

	.theme-aurora .fill {
		background: linear-gradient(90deg, #22d3ee, #818cf8 60%, #e879f9);
		opacity: 0.35;
	}

	.theme-aurora .handle {
		background: #fff;
		color: #818cf8;
		box-shadow: 0 3px 12px rgba(0, 0, 0, 0.35);
	}

	.theme-aurora.dragging .handle {
		scale: 1.05;
	}

	.theme-aurora .text {
		color: color-mix(in srgb, var(--_ink) 60%, transparent);
	}

	.theme-aurora.confirmed .track::after {
		opacity: 1;
	}

	.theme-aurora.confirmed .fill {
		opacity: 0.9;
	}

	.theme-aurora.confirmed .text {
		color: #fff;
	}

	@media (prefers-reduced-motion: reduce) {
		[class*="theme-"] .text,
		[class*="theme-"] .text::after,
		[class*="theme-"] .fill,
		[class*="theme-"] .track::after {
			animation: none;
		}

		[class*="theme-"] .handle {
			transition: none;
		}
	}
`,tn,nn=`slide-confirmed`,rn=3e4,$=class extends L{constructor(...e){super(...e),this.disabled=!1,this._progress=0,this._dragging=!1,this._confirmed=!1,this._instant=!1,this._restOffset=0,this._leftConfirmState=!1,this._trackWidth=0}get progress(){return this._progress}get confirmed(){return this._confirmed}get isDisabled(){if(this.disabled||this.config&&this._view().unlisted)return!0;let e=this.config?.disabled_states;if(!e||!this.config.entity)return!1;let t=this._stateObj?.state??`unavailable`;return e.includes(t)}get _stateObj(){let e=this.config?.entity;return e?this.hass?.states?.[e]:void 0}_view(){if(this._confirmed&&this._confirmedView)return this._confirmedView;let e=this.config;if(!e.states)return{...e,unlisted:!1};let t=this._stateObj?.state,n=t!==void 0&&Object.prototype.hasOwnProperty.call(e.states,t)?e.states[t]:void 0;return n?{...n,stateKey:t,unlisted:!1}:{...e,unlisted:!0}}_stateText(){let e=this._stateObj;if(!e)return`Unavailable`;let t=this.hass?.formatEntityState;return typeof t==`function`?t(e):e.state}disconnectedCallback(){super.disconnectedCallback(),this._reset()}willUpdate(e){if(e.has(`config`)&&e.get(`config`)!==void 0&&this._reset(),!this.config)return;if(this.isDisabled&&(this._dragging||!this._confirmed&&this._progress>0)&&this._reset(),e.has(`hass`)&&this._confirmed&&this.config.reset_delay===0&&this._stateAtConfirm!==void 0){let e=this._stateObj?.state;e!==this._stateAtConfirm&&(this._leftConfirmState=!0);let t=this.config.states,n=!t||e!==void 0&&Object.prototype.hasOwnProperty.call(t,e);this._leftConfirmState&&n&&this._reset()}let t=this._view(),n=this._lastView;this._lastView=t,n&&(!this._confirmed&&(t.stateKey!==n.stateKey||t.unlisted!==n.unlisted)&&(this._dragging||this._progress>0)&&(this._endDrag(),this._progress=0),t.direction!==n.direction&&(this._instant=!0))}updated(){this._instant&&(this._handleEl.offsetWidth,requestAnimationFrame(()=>{this._instant=!1}))}_measure(){let e=this._trackEl.getBoundingClientRect(),t=this._handleEl.getBoundingClientRect();this._restOffset=this.config.appearance?this.config.appearance.handle_position===`center`?(e.width-t.width)/2:Math.max(0,(e.height-t.width)/2):0;let n=parseFloat(getComputedStyle(this._trackEl).getPropertyValue(`--_inset`))||0;return this._trackWidth=e.width,{trackLeft:e.left+n,trackWidth:e.width-2*n,handleWidth:t.width}}_onPointerDown(e){if(!(this.isDisabled||this._confirmed||this._dragging)&&(e.pointerType!==`mouse`||e.button===0)){e.preventDefault(),this._handleEl.focus({preventScroll:!0}),this._geometry=this._measure(),this._interactionConfig=this.config,this._interactionState=this._stateObj?.state,this._pointerId=e.pointerId;try{this._handleEl.setPointerCapture(e.pointerId)}catch{}this._dragging=!0,this._progress=ht(e.clientX,this._geometry,this._view().direction)}}_onPointerMove(e){this._dragging&&e.pointerId===this._pointerId&&this._geometry&&(this._progress=ht(e.clientX,this._geometry,this._view().direction))}_onPointerUp(e){if(!this._dragging||e.pointerId!==this._pointerId||!this._geometry)return;if(this.isDisabled||this._interactionConfig!==this.config||!this.isConnected||this.config.states&&this._interactionState!==this._stateObj?.state){this._reset();return}let t=ht(e.clientX,this._geometry,this._view().direction);this._endDrag(),yt(t,this._geometry)?this._confirm():this._progress=0}_onPointerCancel(e){this._dragging&&e.pointerId===this._pointerId&&(this._endDrag(),this._progress=0)}_endDrag(){this._dragging=!1;let e=this._pointerId;if(this._pointerId=void 0,e!==void 0)try{this._handleEl.releasePointerCapture(e)}catch{}}_onKeyDown(e){if(this.isDisabled||this._confirmed||this._dragging||!this.isConnected)return;(this._interactionConfig!==this.config||this.config.states&&this._interactionState!==this._stateObj?.state)&&(this._reset(),this._interactionConfig=this.config,this._interactionState=this._stateObj?.state);let t=bt(this._progress,e.key,this._view().direction);t!==null&&(e.preventDefault(),this._geometry=this._measure(),this._progress=t,t>=1&&yt(t,this._geometry)&&this._confirm())}_confirm(){let e=this._view();this._confirmedView=e,this._progress=1,this._confirmed=!0,this._stateAtConfirm=this._stateObj?.state,this._leftConfirmState=!1,J(this,nn,{action:e.confirm_action,config:this.config,state:this._stateAtConfirm}),this.config.haptic&&J(window,`haptic`,`success`),this._scheduleReset()}_scheduleReset(){this._clearResetTimer();let e=this.config.reset_delay;this._resetTimer=e>0?setTimeout(()=>this._reset(),e):this.config.entity?setTimeout(()=>this._reset(),rn):setTimeout(()=>this._reset(),V.reset_delay)}_clearResetTimer(){this._resetTimer!==void 0&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}_reset(){this._clearResetTimer(),this._endDrag(),this._interactionConfig=void 0,this._interactionState=void 0,this._confirmed=!1,this._dragging=!1,this._pointerId=void 0,this._stateAtConfirm=void 0,this._leftConfirmState=!1,this._confirmedView=void 0,this._progress=0}render(){let e=this.config;if(!e)return j;let t=this._view(),n=this.isDisabled,r=this._stateObj,i=e.name??r?.attributes.friendly_name,a=t.unlisted?this._stateText():t.text_unconfirmed,o={...qe(e.appearance),...Et(t.style)};e.appearance&&(o[`--_rest-x`]=e.appearance.handle_position===`center`?`calc(50% - var(--_handle-size) / 2)`:`max(0px, calc((var(--_track-height) - var(--_handle-size)) / 2))`),this._trackWidth>0&&(o[`--_track-w`]=`${this._trackWidth}px`),this._geometry&&(this._dragging||this._progress>0||this._confirmed)&&(o[`--_x`]=`${_t(this._progress,this._geometry,t.direction)-(t.direction===`rtl`?-this._restOffset:this._restOffset)}px`,o[`--_p`]=`${this._progress}`,this._confirmed||(o[`--_fill`]=`${vt(this._progress,this._geometry)}px`));let s=e.icon?k`<ha-icon
					part="icon"
					.icon=${Qt(e.icon,`mdi:gesture-swipe-right`,this.hass,r)}
				></ha-icon>`:r?k`<ha-state-icon part="icon" .hass=${this.hass} .stateObj=${r}></ha-state-icon>`:j,c=e.show_header!==!1&&(s!==j||i!==void 0||e.label!==void 0);return k`
			<div
				part="slider"
				class=${Zt({slider:!0,plus:!!e.appearance,glossy:!!(e.appearance&&e.appearance.handle_style!==`flat`),rtl:t.direction===`rtl`,[`theme-${e.theme}`]:!!e.theme&&!e.appearance,instant:this._instant,dragging:this._dragging,confirmed:this._confirmed,disabled:n})}
				style=${Re(o)}
			>
				${c?k`
								<div class="header" part="header">
									${s}
									${i===void 0?j:k`<span class="name" part="name">${i}</span>`}
									${e.label===void 0?j:k`<span class="label" part="label">${e.label}</span>`}
								</div>
							`:j}
				<div class="track" part="track">
					<div class="fill-clip"><div class="fill" part="fill"></div></div>
					<div class="text" part="text">${this._confirmed?t.text_confirmed:a}</div>
					<div
						class="handle"
						part="handle"
						role="slider"
						tabindex=${n?-1:0}
						aria-label=${i===void 0?a:`${i}: ${a}`}
						aria-orientation="horizontal"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow=${Math.round(this._progress*100)}
						aria-disabled=${n?`true`:`false`}
						@pointerdown=${this._onPointerDown}
						@pointermove=${this._onPointerMove}
						@pointerup=${this._onPointerUp}
						@pointercancel=${this._onPointerCancel}
						@lostpointercapture=${this._onPointerCancel}
						@keydown=${this._onKeyDown}
					>
						<ha-icon
							.icon=${Qt(this._confirmed?t.icon_confirmed:t.icon_unconfirmed,this._confirmed?V.icon_confirmed:V.icon_unconfirmed[t.direction],this.hass,r)}
						></ha-icon>
					</div>
				</div>
			</div>
		`}};tn=$,tn.styles=[$t,en],Y([R({attribute:!1})],$.prototype,`config`,void 0),Y([R({attribute:!1})],$.prototype,`hass`,void 0),Y([R({type:Boolean})],$.prototype,`disabled`,void 0),Y([z()],$.prototype,`_progress`,void 0),Y([z()],$.prototype,`_dragging`,void 0),Y([z()],$.prototype,`_confirmed`,void 0),Y([z()],$.prototype,`_instant`,void 0),Y([Me(`.track`)],$.prototype,`_trackEl`,void 0),Y([Me(`.handle`)],$.prototype,`_handleEl`,void 0);var an=(e,t)=>{customElements.get(e)||customElements.define(e,t)};an(`slide-confirm-slider`,$),an(`slide-confirm-card`,Z),an(`slide-confirm-card-editor`,Q),window.customCards=window.customCards??[],window.customCards.push({type:`slide-confirm-card`,name:`Slide Confirm Plus`,description:`Prevent accidental actions by requiring a full-width slide to confirm.`,preview:!0,documentationURL:`https://github.com/defuuss/slide-confirm-plus`}),console.info(`%c SLIDE-CONFIRM-PLUS %c 2.2.0 `,`color: #fff; background: #03a9f4; font-weight: 700; border-radius: 2px 0 0 2px;`,`color: #03a9f4; background: #fff; font-weight: 700; border-radius: 0 2px 2px 0;`);export{Z as SlideConfirmCard,Q as SlideConfirmCardEditor,$ as SlideConfirmSlider};
//# sourceMappingURL=slide-confirm.js.map