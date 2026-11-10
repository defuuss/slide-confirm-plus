/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=/* @__PURE__ */ new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,l,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,h=globalThis,te=h.trustedTypes,ne=te?te.emptyScript:``,re=h.reactiveElementPolyfillSupport,g=(e,t)=>e,_={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ie=(e,t)=>!u(e,t),ae={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:ie};(l=Symbol).metadata??(l.metadata=Symbol(`metadata`)),h.litPropertyMetadata??(h.litPropertyMetadata=/* @__PURE__ */ new WeakMap);var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(g(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=/* @__PURE__ */ new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??(n=a.getPropertyOptions(e)),!((n.hasChanged??ie)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??(this._$Ej=/* @__PURE__ */ new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??(this._$Eq=/* @__PURE__ */ new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[g(`elementProperties`)]=/* @__PURE__ */ new Map,v[g(`finalized`)]=/* @__PURE__ */ new Map,re?.({ReactiveElement:v}),(h.reactiveElementVersions??(h.reactiveElementVersions=[])).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var y=globalThis,oe=e=>e,b=y.trustedTypes,se=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ce=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,le=`?`+x,ue=`<${le}>`,S=document,C=()=>S.createComment(``),w=e=>e===null||typeof e!=`object`&&typeof e!=`function`,de=Array.isArray,fe=e=>de(e)||typeof e?.[Symbol.iterator]==`function`,T=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,O=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),k=Symbol.for(`lit-noChange`),A=Symbol.for(`lit-nothing`),ve=/* @__PURE__ */ new WeakMap,j=S.createTreeWalker(S,129);function ye(e,t){if(!de(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return se===void 0?t:se.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=E;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===E?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=D):(_e.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=D):o=me:o===D?c[0]===`>`?(o=i??E,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?D:c[3]===`"`?ge:he):o===ge||o===he?o=D:o===pe||o===me?o=E:(o=D,i=void 0);let d=o===D&&e[t+1].startsWith(`/>`)?` `:``;a+=o===E?n+ue:l>=0?(r.push(s),n.slice(0,l)+ce+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},xe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),j.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=j.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ce)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ce:r[1]===`?`?we:r[1]===`@`?Te:P}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],C()),j.nextNode(),c.push({type:2,index:++a});i.append(e[t],C())}}}else if(i.nodeType===8){if(i.data===le)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}}a++}}static createElement(e,t){let n=S.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===k)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=w(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??(n._$Co=[]))[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var Se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??S).importNode(t,!0);j.currentNode=r;let i=j.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new N(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ee(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=j.nextNode(),a++)}return j.currentNode=S,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},N=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),w(e)?e===A||e==null||e===``?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==k&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&w(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=xe.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Se(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new xe(e)),t}k(t){de(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(C()),this.O(C()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=oe(e).nextSibling;oe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!w(e)||e!==this._$AH&&e!==k,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===k&&(s=this._$AH[o]),a||(a=!w(s)||s!==this._$AH[o]),s===A?e=A:e!==A&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ce=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},we=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},Te=class extends P{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??A)===k)return;let n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ee=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},De=y.litHtmlPolyfillSupport;De?.(xe,N),(y.litHtmlVersions??(y.litHtmlVersions=[])).push(`3.3.3`);var Oe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new N(t.insertBefore(C(),e),e,void 0,n??{})}return i._$AI(e),i},F=globalThis,I=class extends v{constructor(){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};I._$litElement$=!0,I.finalized=!0,F.litElementHydrateSupport?.({LitElement:I});var ke=F.litElementPolyfillSupport;ke?.({LitElement:I}),(F.litElementVersions??(F.litElementVersions=[])).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Ae={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:ie},je=(e=Ae,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function L(e){return(t,n)=>typeof n==`object`?je(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function R(e){return L({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var Me=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ne(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Me(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Me(n,r,{get(){return a(this)}})}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var Pe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fe=e=>(...t)=>({_$litDirective$:e,values:t}),Ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Le=`important`,Re=` !`+Le,ze=Fe(class extends Ie{constructor(e){
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==Pe.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Re);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Le:``):n[e]=r}}return k}}),Be=[`ltr`,`rtl`],z=[`track_color`,`handle_color`,`handle_border_color`,`confirmed_color`,`confirmed_text_color`,`text_color`,`handle_size`,`track_height`,`border_radius`,`font_size`,`fill_opacity`],Ve=[`perform-action`,`toggle`,`more-info`,`navigate`,`url`,`fire-dom-event`,`assist`,`none`],He=e=>typeof e==`string`&&Ve.includes(e),Ue=/^[a-z_]+\.[a-z0-9_]+$/,B={direction:`ltr`,reset_delay:1500,haptic:!1,text_unconfirmed:`Slide to confirm`,text_confirmed:`Confirmed`,icon_confirmed:`mdi:check`,icon_unconfirmed:{ltr:`mdi:chevron-right`,rtl:`mdi:chevron-left`}},V=(e,t,n,r)=>{let i=typeof e==`number`?e:Number(e);return Number.isFinite(i)?Math.max(n,Math.min(r,i)):t},H=(e,t)=>typeof e==`string`&&/^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(e)?e:t;function We(e){if(e==null)return;if(typeof e!=`object`||Array.isArray(e))throw Error(`appearance must be an object`);let t=e,n=V(t.height,56,40,120);return{background_color:H(t.background_color,`#1976d2`),handle_color:H(t.handle_color,`#ffffff`),text_color:H(t.text_color,`#ffffff`),confirmed_background_color:H(t.confirmed_background_color,`#2e7d32`),confirmed_handle_color:H(t.confirmed_handle_color,`#ffffff`),background_opacity:V(t.background_opacity,.92,0,1),confirmed_background_opacity:V(t.confirmed_background_opacity,.96,0,1),height:n,handle_size:Math.min(V(t.handle_size,48,32,100),n-4),border_radius:V(t.border_radius,Math.round(n/2),0,60),handle_style:t.handle_style===`flat`?`flat`:`3d`,handle_position:t.handle_position===`left`?`left`:`center`}}var Ge=e=>V(e,1500,500,1e4);function Ke(e){return e?{"--slide-confirm-track-color":e.background_color,"--slide-confirm-handle-color":e.handle_color,"--slide-confirm-text-color":e.text_color,"--slide-confirm-confirmed-color":e.confirmed_background_color,"--slide-confirm-confirmed-handle-color":e.confirmed_handle_color,"--slide-confirm-track-opacity":String(e.background_opacity),"--slide-confirm-confirmed-track-opacity":String(e.confirmed_background_opacity),"--slide-confirm-track-height":`${e.height}px`,"--slide-confirm-handle-size":`${e.handle_size}px`,"--slide-confirm-border-radius":`${e.border_radius}px`}:{}}var U=class extends Error{constructor(e){super(e),this.name=`ConfigError`}},W={textUnconfirmed:`text_unconfirmed`,textConfirmed:`text_confirmed`,iconUnconfirmed:`icon_unconfirmed`,iconConfirmed:`icon_confirmed`},qe=/* @__PURE__ */ new Set([`name`,`icon`,`label`,`entity`,`text_unconfirmed`,`text_confirmed`,`icon_unconfirmed`,`icon_confirmed`,`direction`,`reset_delay`,`confirmation_duration`,`appearance`,`haptic`,`disabled_states`,`confirm_action`,`style`,...Object.keys(W)]),G=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Je=e=>typeof e==`string`&&Be.includes(e);function K(e,t){if(e!=null&&e!==``){if(typeof e!=`string`)throw new U(`${t} must be a string`);return e}}function Ye(e){if(!G(e))throw new U(`Card config must be an object`);let t=e,n=[],r=!1;if(!Array.isArray(t.sliders)||t.sliders.length===0)throw new U("`sliders` must be a non-empty list");let i=Xe(t.direction,"`direction`")??B.direction,a=Ze(t.style,"`style`",n),o=t.sliders.map((e,t)=>{let a=Qe(e,t,i);return n.push(...a.warnings),r||(r=a.legacy),a.config}),s={type:typeof t.type==`string`?t.type:`custom:slide-confirm-card`,direction:i,sliders:o},c=K(t.header,"`header`");return c!==void 0&&(s.header=c),a&&(s.style=a),{config:s,warnings:n,legacy:r}}function Xe(e,t){if(e!=null&&e!==``){if(!Je(e))throw new U(`${t} must be one of: ${Be.join(`, `)}`);return e}}function Ze(e,t,n){if(e==null)return;if(!G(e))throw new U(`${t} must be an object`);let r={};for(let[i,a]of Object.entries(e))if(!z.includes(i))n.push(`${t}: unknown option \`${i}\` ignored`);else if(a!=null&&a!==``){if(typeof a!=`string`&&typeof a!=`number`)throw new U(`${t}.${i} must be a string or number`);r[i]=a}return Object.keys(r).length?r:void 0}function Qe(e,t,n){let r=`Slider ${t+1}`;if(!G(e))throw new U(`${r} must be an object`);let i=e,a=[],o=!1,s={};for(let[e,t]of Object.entries(W)){let n=i[e],c=i[t];n!==void 0&&(o=!0,c===void 0?a.push(`${r}: \`${e}\` is deprecated, use \`${t}\``):a.push(`${r}: both \`${e}\` and \`${t}\` set; using \`${t}\``));let l=K(c===void 0?n:c,`${r}.${t}`);l!==void 0&&(s[t]=l)}for(let e of Object.keys(i))qe.has(e)||a.push(`${r}: unknown option \`${e}\` ignored`);let c=Xe(i.direction,`${r}.direction`)??n,l=nt(i.confirm_action,`${r}.confirm_action`);a.push(...l.warnings),o||(o=l.legacy);let u={text_unconfirmed:s.text_unconfirmed??B.text_unconfirmed,text_confirmed:s.text_confirmed??B.text_confirmed,icon_unconfirmed:s.icon_unconfirmed??B.icon_unconfirmed[c],icon_confirmed:s.icon_confirmed??B.icon_confirmed,direction:c,reset_delay:i.reset_delay===void 0?i.confirmation_duration===void 0?B.reset_delay:Ge(i.confirmation_duration):$e(i.reset_delay,r),appearance:We(i.appearance),haptic:et(i.haptic,`${r}.haptic`)??B.haptic,confirm_action:l.config},d=K(i.name,`${r}.name`),ee=K(i.icon,`${r}.icon`),f=K(i.label,`${r}.label`),p=K(i.entity,`${r}.entity`);d!==void 0&&(u.name=d),ee!==void 0&&(u.icon=ee),f!==void 0&&(u.label=f),p!==void 0&&(u.entity=p);let m=tt(i.disabled_states,`${r}.disabled_states`);m&&(u.disabled_states=m,p||a.push(`${r}: \`disabled_states\` has no effect without \`entity\``)),u.reset_delay===0&&!p&&a.push(`${r}: \`reset_delay: 0\` needs \`entity\` to know when to reset`);let h=Ze(i.style,`${r}.style`,a);return h&&(u.style=h),{config:u,warnings:a,legacy:o}}function $e(e,t){if(e==null)return B.reset_delay;if(typeof e!=`number`||!Number.isFinite(e)||e<0)throw new U(`${t}.reset_delay must be a number of milliseconds >= 0`);return e}function et(e,t){if(e!=null){if(typeof e!=`boolean`)throw new U(`${t} must be true or false`);return e}}function tt(e,t){if(e==null)return;let n=Array.isArray(e)?e:[e];if(!n.every(e=>typeof e==`string`))throw new U(`${t} must be a list of strings`);return n.length?n:void 0}function nt(e,t){if(e==null)throw new U(`${t} is required`);if(!G(e))throw new U(`${t} must be an object`);let n=e,r=[],i=!1,{action:a,service:o,service_data:s,...c}=n,l={...c};if(s!==void 0&&(i=!0,l.data===void 0&&(l.data=s),r.push(`${t}: \`service_data\` is deprecated, use \`data\``)),typeof a!=`string`||a===``)throw new U(`${t}.action is required`);let u;if(a===`call-service`)i=!0,u=`perform-action`,l.perform_action===void 0&&(l.perform_action=o),r.push(`${t}: \`action: call-service\` + \`service\` is deprecated, use \`action: perform-action\` + \`perform_action\``);else if(He(a))u=a,o!==void 0&&l.perform_action===void 0&&(i=!0,l.perform_action=o,r.push(`${t}: \`service\` is deprecated, use \`perform_action\``));else if(Ue.test(a))u=`perform-action`,l.perform_action=a,r.push(`${t}: \`action: ${a}\` interpreted as \`action: perform-action\` + \`perform_action: ${a}\``);else throw new U(`${t}.action must be one of: ${Ve.join(`, `)}`);if(u===`perform-action`){if(typeof l.perform_action!=`string`||!l.perform_action.includes(`.`))throw new U(`${t}.perform_action must be \`domain.service\``);if(l.target!==void 0&&!G(l.target))throw new U(`${t}.target must be an object`);if(l.data!==void 0&&!G(l.data))throw new U(`${t}.data must be an object`)}return{config:{...l,action:u},warnings:r,legacy:i}}var rt=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function it(e){let t={...e};return t.service_data!==void 0&&(t.data===void 0&&(t.data=t.service_data),delete t.service_data),t.action===`call-service`&&(t.action=`perform-action`),t.service!==void 0&&(t.perform_action===void 0&&(t.perform_action=t.service),delete t.service),typeof t.action==`string`&&!He(t.action)&&Ue.test(t.action)&&(t.perform_action=t.action,t.action=`perform-action`),t}function at(e){let t={...e};for(let[e,n]of Object.entries(W))e in t&&(t[n]===void 0&&(t[n]=t[e]),delete t[e]);return t.confirmation_duration!==void 0&&(t.reset_delay===void 0&&(t.reset_delay=Ge(t.confirmation_duration)),delete t.confirmation_duration),rt(t.confirm_action)&&(t.confirm_action=it(t.confirm_action)),t}function ot(e){return Array.isArray(e.sliders)?{...e,sliders:e.sliders.map(e=>rt(e)?at(e):e)}:{...e}}function st(e){return rt(e)?JSON.stringify(ot(e))!==JSON.stringify(e):!1}var ct=.1;function lt(e){return Math.max(0,e.trackWidth-e.handleWidth)}function ut(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function dt(e,t,n){let r=lt(t);if(r<=0)return 0;let i=(e-t.trackLeft-t.handleWidth/2)/r;return ut(n===`rtl`?1-i:i)}function ft(e,t){return ut(e)*lt(t)}function pt(e,t,n){let r=ft(e,t);return n===`rtl`?-r:r}function mt(e,t){return ft(e,t)+t.handleWidth}function ht(e,t,n=2){let r=lt(t);return r<=0?!1:r-ft(e,t)<=n+1e-6}function gt(e,t,n,r=ct){let i=n===`rtl`?-1:1;switch(t){case`ArrowRight`:return q(e+i*r);case`ArrowLeft`:return q(e-i*r);case`ArrowUp`:return q(e+r);case`ArrowDown`:return q(e-r);case`Home`:return 0;default:return null}}function q(e){let t=ut(e);return t>1-1e-9?1:t<1e-9?0:t}var _t=`--slide-confirm-`;function vt(e){return _t+e.replace(/_/g,`-`)}var yt=Object.fromEntries(z.map(e=>[e,vt(e)])),bt=/* @__PURE__ */ new Set([`handle_size`,`track_height`,`border_radius`,`font_size`]);function xt(e,t){return typeof t==`number`?bt.has(e)?`${t}px`:String(t):t.trim()}function St(e){let t={};if(!e)return t;for(let n of z){let r=e[n];r!=null&&r!==``&&(t[yt[n]]=xt(n,r))}return t}var Ct=o`
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
`;function J(e,t,n,r={}){let i=new CustomEvent(t,{detail:n,bubbles:r.bubbles??!0,composed:r.composed??!0,cancelable:r.cancelable??!1});return e.dispatchEvent(i),i}function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var wt,X={cardPadding:32,cardHeader:60,sliderTrack:50,sliderHeader:28,sliderGap:8,gridRow:56,gridGap:8,cardSizeUnit:50},Z=class extends I{constructor(...e){super(...e),this._lastWarnings=``}get config(){return this._config}setConfig(e){let{config:t,warnings:n}=Ye(e);this._config=t;let r=n.join(`
`);r&&r!==this._lastWarnings&&console.warn(`slide-confirm-card: config notes\n${n.map(e=>`  - ${e}`).join(`
`)}`),this._lastWarnings=r}_estimatedHeight(){let e=this._config;if(!e)return X.cardPadding+X.sliderTrack;let t=X.cardPadding+(e.header?X.cardHeader:0);return e.sliders.forEach((e,n)=>{let r=e.name!==void 0||e.icon!==void 0||e.label!==void 0||e.entity!==void 0;t+=(e.appearance?.height??X.sliderTrack)+(r?X.sliderHeader:0)+(n>0?X.sliderGap:0)}),t}getCardSize(){return Math.max(1,Math.ceil(this._estimatedHeight()/X.cardSizeUnit))}getGridOptions(){let e=Math.max(1,Math.ceil((this._estimatedHeight()+X.gridGap)/(X.gridRow+X.gridGap)));return{columns:`full`,rows:e,min_columns:6,min_rows:e}}static getConfigElement(){return document.createElement(`slide-confirm-card-editor`)}static getStubConfig(){return{type:`custom:slide-confirm-card`,sliders:[{name:`Front Door`,icon:`mdi:door`,text_unconfirmed:`Slide to Unlock`,text_confirmed:`Door Unlocked!`,icon_unconfirmed:`mdi:lock`,icon_confirmed:`mdi:lock-open`,confirm_action:{action:`perform-action`,perform_action:`input_boolean.turn_on`,target:{entity_id:`input_boolean.slide_confirm`}}}]}}_onConfirmed(e){e.stopPropagation();let{action:t,config:n}=e.detail;if(!this._config?.sliders.includes(n)||t!==n.confirm_action)return;let r={tap_action:t};n.entity&&(r.entity=n.entity),J(this,`hass-action`,{config:r,action:`tap`})}render(){let e=this._config;return e?O`
			<ha-card .header=${e.header}>
				<div class="card-content" style=${ze(St(e.style))}>
					${e.sliders.map(e=>O`
							<slide-confirm-slider
								.config=${e}
								.hass=${this.hass}
								@slide-confirmed=${this._onConfirmed}
							></slide-confirm-slider>
						`)}
				</div>
			</ha-card>
		`:A}};wt=Z,wt.styles=Ct,Y([L({attribute:!1})],Z.prototype,`hass`,void 0),Y([R()],Z.prototype,`_config`,void 0);var Tt=o`
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
`;function Et(e,t=/* @__PURE__ */ new Set){return Dt(e,t,!0)}function Dt(e,t,n){if(e!=null&&e!==``){if(Array.isArray(e)){let r=e.map(e=>Dt(e,t,!1)).filter(e=>e!==void 0);return r.length||n?r:void 0}if(typeof e==`object`){let r={};for(let[n,i]of Object.entries(e)){let e=Dt(i,t,!1);e===void 0?t.has(n)&&Array.isArray(i)&&(r[n]=[]):r[n]=e}return Object.keys(r).length||n?r:void 0}return e}}var Ot=[`ha-form`,`ha-expansion-panel`,`ha-alert`,`ha-icon-button`],kt;function At(){return Ot.every(e=>customElements.get(e))?Promise.resolve():(kt??(kt=jt().catch(()=>void 0)),kt)}async function jt(){for(let e of[`hui-button-card`,`hui-entities-card`])await customElements.get(e)?.getConfigElement?.();if(customElements.get(`ha-form`))return;let e=await window.loadCardHelpers?.();e&&await e.createCardElement({type:`button`,entity:`light.none`}).constructor.getConfigElement?.()}var Mt,Nt={select:{mode:`dropdown`,options:[{value:`ltr`,label:`Left to right`},{value:`rtl`,label:`Right to left`}]}},Pt=[{type:`grid`,name:``,schema:[{name:`handle_size`,selector:{text:{}}},{name:`track_height`,selector:{text:{}}},{name:`border_radius`,selector:{text:{}}},{name:`font_size`,selector:{text:{}}}]},{type:`grid`,name:``,schema:[{name:`track_color`,selector:{text:{}}},{name:`handle_color`,selector:{text:{}}},{name:`handle_border_color`,selector:{text:{}}},{name:`text_color`,selector:{text:{}}},{name:`confirmed_color`,selector:{text:{}}},{name:`confirmed_text_color`,selector:{text:{}}}]},{name:`fill_opacity`,selector:{number:{min:0,max:1,step:.05,mode:`slider`}}}],Ft=[{type:`grid`,name:``,schema:[{name:`header`,selector:{text:{}}},{name:`direction`,selector:Nt}]},{type:`expandable`,name:`style`,title:`Style defaults for all sliders`,schema:Pt}],It=[...[`background_color`,`handle_color`,`text_color`,`confirmed_background_color`,`confirmed_handle_color`].map(e=>({name:e,selector:{text:{}}})),...[`background_opacity`,`confirmed_background_opacity`].map(e=>({name:e,selector:{number:{min:0,max:1,step:.01,mode:`slider`}}})),...[[`height`,40,120],[`handle_size`,32,100],[`border_radius`,0,60]].map(([e,t,n])=>({name:e,selector:{number:{min:t,max:n,mode:`box`}}})),{name:`handle_style`,selector:{select:{options:[`3d`,`flat`]}}},{name:`handle_position`,selector:{select:{options:[`left`,`center`]}}}],Lt=[{name:`entity`,selector:{entity:{}}},{type:`grid`,name:``,schema:[{name:`name`,selector:{text:{}}},{name:`icon`,selector:{icon:{}},context:{icon_entity:`entity`}}]},{name:`label`,selector:{text:{}}},{type:`grid`,name:``,schema:[{name:`text_unconfirmed`,selector:{text:{}}},{name:`text_confirmed`,selector:{text:{}}}]},{type:`grid`,name:``,schema:[{name:`icon_unconfirmed`,selector:{text:{}}},{name:`icon_confirmed`,selector:{text:{}}}]},{name:`confirm_action`,selector:{ui_action:{default_action:`perform-action`,actions:[`perform-action`,`toggle`,`more-info`,`navigate`,`url`,`assist`,`none`]}}},{type:`expandable`,name:``,flatten:!0,title:`Behaviour`,schema:[{type:`grid`,name:``,schema:[{name:`direction`,selector:Nt},{name:`reset_delay`,selector:{number:{min:0,step:100,mode:`box`,unit_of_measurement:`ms`}}}]},{name:`haptic`,selector:{boolean:{}}},{name:`disabled_states`,selector:{text:{multiple:!0}}}]},{type:`expandable`,name:`style`,title:`Style`,schema:Pt},{type:`expandable`,name:`appearance`,title:`Plus appearance (legacy compatible)`,schema:It}],Rt={header:`Card title`,direction:`Slide direction`,entity:`Entity`,name:`Name`,icon:`Icon`,label:`Secondary text`,text_unconfirmed:`Text before confirming`,text_confirmed:`Text after confirming`,icon_unconfirmed:`Handle icon`,icon_confirmed:`Handle icon after confirming`,confirm_action:`Action on confirm`,reset_delay:`Reset after`,haptic:`Haptic feedback`,disabled_states:`Disable when entity state is`,track_color:`Track color`,handle_color:`Handle color`,handle_border_color:`Handle border color`,confirmed_color:`Confirmed color`,confirmed_text_color:`Confirmed text color`,text_color:`Text color`,handle_size:`Handle size`,track_height:`Track height`,border_radius:`Border radius`,font_size:`Font size`,fill_opacity:`Fill opacity`},zt={direction:`Leave empty to use the card default (left to right).`,entity:`Optional. Supplies the default name and icon and enables the state options below.`,reset_delay:`Milliseconds. 0 keeps the confirmed state until the entity changes state.`,disabled_states:`Press Enter after each state, e.g. unlocked, unavailable.`,handle_size:`CSS length, e.g. 44px. Default 50px.`,track_height:`CSS length. Defaults to the handle size.`,border_radius:`CSS length. Defaults to half the handle size.`,font_size:`CSS size, e.g. 0.9rem.`,track_color:`Any CSS color, e.g. #9e9e9e or var(--divider-color).`,confirmed_color:`Fill and handle color after a successful slide.`},Bt=e=>Rt[e.name]??e.name,Vt=e=>zt[e.name],Ht=/* @__PURE__ */ new Set([`sliders`]),Ut=()=>({text_unconfirmed:`Slide to confirm`,text_confirmed:`Confirmed`,icon_unconfirmed:`mdi:chevron-right`,icon_confirmed:`mdi:check`,confirm_action:{action:`perform-action`}}),Wt=(e,t)=>typeof e.name==`string`&&e.name||typeof e.text_unconfirmed==`string`&&e.text_unconfirmed||typeof e.textUnconfirmed==`string`&&e.textUnconfirmed||`Slider ${t+1}`,Gt=e=>{let t=e.confirm_action;return!t||typeof t!=`object`?`No action`:t.action===`perform-action`?t.perform_action||`Choose an action`:typeof t.action==`string`?t.action:`No action`},Q=class extends I{constructor(...e){super(...e),this._legacy=!1}get config(){return this._config}connectedCallback(){super.connectedCallback(),At().then(()=>this.requestUpdate())}setConfig(e){this._config=e&&typeof e==`object`?e:{},this._legacy=st(this._config);try{Ye(this._config),this._error=void 0}catch(e){this._error=e instanceof Error?e.message:String(e)}}_sliders(){return Array.isArray(this._config?.sliders)?this._config.sliders:[]}_commit(e){let t=Et(e,Ht)??{};this.setConfig(t),J(this,`config-changed`,{config:t})}_cardChanged(e){if(e.stopPropagation(),!this._config)return;let{header:t,direction:n,style:r}=e.detail.value;this._commit({...this._config,header:t,direction:n,style:r})}_sliderChanged(e,t){if(t.stopPropagation(),!this._config)return;let n=[...this._sliders()];n[e]=t.detail.value,this._commit({...this._config,sliders:n})}_addSlider(){this._config&&this._commit({...this._config,sliders:[...this._sliders(),Ut()]})}_removeSlider(e){this._config&&this._commit({...this._config,sliders:this._sliders().filter((t,n)=>n!==e)})}_moveSlider(e,t){if(!this._config)return;let n=[...this._sliders()],r=e+t;r<0||r>=n.length||([n[e],n[r]]=[n[r],n[e]],this._commit({...this._config,sliders:n}))}_upgrade(){this._config&&this._commit(ot(this._config))}render(){let e=this._config;if(!e)return A;let t=this._sliders(),n={header:e.header??void 0,direction:e.direction,style:e.style};return O`
			${this._legacy?O`
							<ha-alert alert-type="info" title="Older option names" class="legacy">
								This card still uses the v1 option names (for example
								<code>textUnconfirmed</code>). Upgrading renames them; nothing else changes.
								<ha-button slot="action" class="upgrade" @click=${this._upgrade}>Upgrade</ha-button>
							</ha-alert>
						`:A}
			${this._error?O`<ha-alert alert-type="warning" class="error">${this._error}</ha-alert>`:A}

			<ha-form
				class="card-form"
				.hass=${this.hass}
				.data=${n}
				.schema=${Ft}
				.computeLabel=${Bt}
				.computeHelper=${Vt}
				@value-changed=${this._cardChanged}
			></ha-form>

			<h3 class="section">Sliders</h3>
			${t.map((e,n)=>this._renderSlider(e,n,t.length))}

			<ha-button class="add" @click=${this._addSlider}>
				<ha-icon slot="icon" icon="mdi:plus"></ha-icon>
				Add slider
			</ha-button>
		`}_renderSlider(e,t,n){let r=at(e);return O`
			<ha-expansion-panel
				outlined
				class="slider"
				.header=${Wt(e,t)}
				.secondary=${Gt(r)}
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
					<ha-form
						class="slider-form"
						.hass=${this.hass}
						.data=${r}
						.schema=${Lt}
						.computeLabel=${Bt}
						.computeHelper=${Vt}
						@value-changed=${e=>this._sliderChanged(t,e)}
					></ha-form>
				</div>
			</ha-expansion-panel>
		`}};Mt=Q,Mt.styles=Tt,Y([L({attribute:!1})],Q.prototype,`hass`,void 0),Y([L({attribute:!1})],Q.prototype,`lovelace`,void 0),Y([R()],Q.prototype,`_config`,void 0),Y([R()],Q.prototype,`_error`,void 0),Y([R()],Q.prototype,`_legacy`,void 0);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Kt=Fe(class extends Ie{constructor(e){if(super(e),e.type!==Pe.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return k}});function qt(e,t,n,r){if(!e.trim().startsWith(`[[[`)||!e.trim().endsWith(`]]]`))return e;try{let i=e.trim().slice(3,-3),a=Function(`states`,`entity`,`"use strict"; ${i}`)(n?.states??{},r);return typeof a==`string`&&a.trim()?a:t}catch{return t}}var Jt=o`
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
			background-color 300ms,
			border-color 300ms;
		outline: none;
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
`,Yt,Xt=`slide-confirmed`,Zt=3e4,$=class extends I{constructor(...e){super(...e),this.disabled=!1,this._progress=0,this._dragging=!1,this._confirmed=!1,this._restOffset=0}get progress(){return this._progress}get confirmed(){return this._confirmed}get isDisabled(){if(this.disabled)return!0;let e=this.config?.disabled_states;if(!e||!this.config.entity)return!1;let t=this._stateObj?.state??`unavailable`;return e.includes(t)}get _stateObj(){let e=this.config?.entity;return e?this.hass?.states?.[e]:void 0}disconnectedCallback(){super.disconnectedCallback(),this._reset()}willUpdate(e){e.has(`config`)&&e.get(`config`)!==void 0&&this._reset(),this.isDisabled&&(this._dragging||!this._confirmed&&this._progress>0)&&this._reset(),e.has(`hass`)&&this._confirmed&&this.config?.reset_delay===0&&this._stateAtConfirm!==void 0&&this._stateObj?.state!==this._stateAtConfirm&&this._reset()}_measure(){let e=this._trackEl.getBoundingClientRect(),t=this._handleEl.getBoundingClientRect();return this._restOffset=this.config.appearance?this.config.appearance.handle_position===`center`?(e.width-t.width)/2:Math.max(0,(e.height-t.width)/2):0,{trackLeft:e.left,trackWidth:e.width,handleWidth:t.width}}_onPointerDown(e){if(!(this.isDisabled||this._confirmed||this._dragging)&&(e.pointerType!==`mouse`||e.button===0)){e.preventDefault(),this._handleEl.focus({preventScroll:!0}),this._geometry=this._measure(),this._interactionConfig=this.config,this._pointerId=e.pointerId;try{this._handleEl.setPointerCapture(e.pointerId)}catch{}this._dragging=!0,this._progress=dt(e.clientX,this._geometry,this.config.direction)}}_onPointerMove(e){this._dragging&&e.pointerId===this._pointerId&&this._geometry&&(this._progress=dt(e.clientX,this._geometry,this.config.direction))}_onPointerUp(e){if(!this._dragging||e.pointerId!==this._pointerId||!this._geometry)return;if(this.isDisabled||this._interactionConfig!==this.config||!this.isConnected){this._reset();return}let t=dt(e.clientX,this._geometry,this.config.direction);this._endDrag(),ht(t,this._geometry)?this._confirm():this._progress=0}_onPointerCancel(e){this._dragging&&e.pointerId===this._pointerId&&(this._endDrag(),this._progress=0)}_endDrag(){this._dragging=!1;let e=this._pointerId;if(this._pointerId=void 0,e!==void 0)try{this._handleEl.releasePointerCapture(e)}catch{}}_onKeyDown(e){if(this.isDisabled||this._confirmed||this._dragging||!this.isConnected)return;this._interactionConfig!==this.config&&(this._reset(),this._interactionConfig=this.config);let t=gt(this._progress,e.key,this.config.direction);t!==null&&(e.preventDefault(),this._geometry=this._measure(),this._progress=t,t>=1&&ht(t,this._geometry)&&this._confirm())}_confirm(){this._progress=1,this._confirmed=!0,this._stateAtConfirm=this._stateObj?.state,J(this,Xt,{action:this.config.confirm_action,config:this.config}),this.config.haptic&&J(window,`haptic`,`success`),this._scheduleReset()}_scheduleReset(){this._clearResetTimer();let e=this.config.reset_delay;this._resetTimer=e>0?setTimeout(()=>this._reset(),e):this.config.entity?setTimeout(()=>this._reset(),Zt):setTimeout(()=>this._reset(),B.reset_delay)}_clearResetTimer(){this._resetTimer!==void 0&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}_reset(){this._clearResetTimer(),this._endDrag(),this._interactionConfig=void 0,this._confirmed=!1,this._dragging=!1,this._pointerId=void 0,this._stateAtConfirm=void 0,this._progress=0}render(){let e=this.config;if(!e)return A;let t=this.isDisabled,n=this._stateObj,r=e.name??n?.attributes.friendly_name,i={...Ke(e.appearance),...St(e.style)};e.appearance&&(i[`--_rest-x`]=e.appearance.handle_position===`center`?`calc(50% - var(--_handle-size) / 2)`:`max(0px, calc((var(--_track-height) - var(--_handle-size)) / 2))`),this._geometry&&(this._dragging||this._progress>0||this._confirmed)&&(i[`--_x`]=`${pt(this._progress,this._geometry,e.direction)-(e.direction===`rtl`?-this._restOffset:this._restOffset)}px`,this._confirmed||(i[`--_fill`]=`${mt(this._progress,this._geometry)}px`));let a=e.icon?O`<ha-icon
					part="icon"
					.icon=${qt(e.icon,`mdi:gesture-swipe-right`,this.hass,n)}
				></ha-icon>`:n?O`<ha-state-icon part="icon" .hass=${this.hass} .stateObj=${n}></ha-state-icon>`:A,o=a!==A||r!==void 0||e.label!==void 0;return O`
			<div
				part="slider"
				class=${Kt({slider:!0,plus:!!e.appearance,glossy:!!(e.appearance&&e.appearance.handle_style!==`flat`),rtl:e.direction===`rtl`,dragging:this._dragging,confirmed:this._confirmed,disabled:t})}
				style=${ze(i)}
			>
				${o?O`
								<div class="header" part="header">
									${a}
									${r===void 0?A:O`<span class="name" part="name">${r}</span>`}
									${e.label===void 0?A:O`<span class="label" part="label">${e.label}</span>`}
								</div>
							`:A}
				<div class="track" part="track">
					<div class="fill-clip"><div class="fill" part="fill"></div></div>
					<div class="text" part="text">
						${this._confirmed?e.text_confirmed:e.text_unconfirmed}
					</div>
					<div
						class="handle"
						part="handle"
						role="slider"
						tabindex=${t?-1:0}
						aria-label=${r===void 0?e.text_unconfirmed:`${r}: ${e.text_unconfirmed}`}
						aria-orientation="horizontal"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow=${Math.round(this._progress*100)}
						aria-disabled=${t?`true`:`false`}
						@pointerdown=${this._onPointerDown}
						@pointermove=${this._onPointerMove}
						@pointerup=${this._onPointerUp}
						@pointercancel=${this._onPointerCancel}
						@lostpointercapture=${this._onPointerCancel}
						@keydown=${this._onKeyDown}
					>
						<ha-icon
							.icon=${qt(this._confirmed?e.icon_confirmed:e.icon_unconfirmed,this._confirmed?B.icon_confirmed:B.icon_unconfirmed[e.direction],this.hass,n)}
						></ha-icon>
					</div>
				</div>
			</div>
		`}};Yt=$,Yt.styles=Jt,Y([L({attribute:!1})],$.prototype,`config`,void 0),Y([L({attribute:!1})],$.prototype,`hass`,void 0),Y([L({type:Boolean})],$.prototype,`disabled`,void 0),Y([R()],$.prototype,`_progress`,void 0),Y([R()],$.prototype,`_dragging`,void 0),Y([R()],$.prototype,`_confirmed`,void 0),Y([Ne(`.track`)],$.prototype,`_trackEl`,void 0),Y([Ne(`.handle`)],$.prototype,`_handleEl`,void 0);var Qt=(e,t)=>{customElements.get(e)||customElements.define(e,t)};Qt(`slide-confirm-slider`,$),Qt(`slide-confirm-card`,Z),Qt(`slide-confirm-card-editor`,Q),window.customCards=window.customCards??[],window.customCards.push({type:`slide-confirm-card`,name:`Slide Confirm Plus`,description:`Prevent accidental actions by requiring a full-width slide to confirm.`,preview:!0,documentationURL:`https://github.com/defuuss/slide-confirm-plus`}),console.info(`%c SLIDE-CONFIRM-PLUS %c 2.0.0 `,`color: #fff; background: #03a9f4; font-weight: 700; border-radius: 2px 0 0 2px;`,`color: #03a9f4; background: #fff; font-weight: 700; border-radius: 0 2px 2px 0;`);export{Z as SlideConfirmCard,Q as SlideConfirmCardEditor,$ as SlideConfirmSlider};
//# sourceMappingURL=slide-confirm.js.map