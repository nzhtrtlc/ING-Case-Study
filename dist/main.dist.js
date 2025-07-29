/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(n,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:s,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:m,getOwnPropertySymbols:p,getPrototypeOf:d}=Object,h=globalThis,u=h.trustedTypes,f=u?u.emptyScript:"",y=h.reactiveElementPolyfillSupport,g=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!s(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...m(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n;const a=o.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[g("elementProperties")]=new Map,E[g("finalized")]=new Map,y?.({ReactiveElement:E}),(h.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=globalThis,O=N.trustedTypes,$=O?O.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+x,B=`<${S}>`,A=document,T=()=>A.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,P=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,H=/"/g,J=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,G=A.createTreeWalker(A,129);function Y(t,e){if(!_(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,n=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,m=0;for(;m<i.length&&(r.lastIndex=m,l=r.exec(i),null!==l);)m=r.lastIndex,r===R?"!--"===l[1]?r=z:void 0!==l[1]?r=P:void 0!==l[2]?(J.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=o??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?D:'"'===l[3]?H:F):r===H||r===F?r=D:r===z||r===P?r=R:(r=D,o=void 0);const p=r===D&&t[e+1].startsWith("/>")?" ":"";a+=r===R?i+B:c>=0?(n.push(s),i.slice(0,c)+k+i.slice(c)+x+p):i+x+(-2===c?e:p)}return[Y(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class V{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,a=0;const r=t.length-1,s=this.parts,[l,c]=K(t,e);if(this.el=V.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=G.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=c[a++],i=n.getAttribute(t).split(x),r=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(x)&&(s.push({type:6,index:o}),n.removeAttribute(t));if(J.test(n.tagName)){const t=n.textContent.split(x),e=t.length-1;if(e>0){n.textContent=O?O.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),G.nextNode(),s.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===S)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(x,t+1));)s.push({type:7,index:o}),t+=x.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,n){if(e===U)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=C(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=W(t,o._$AS(t,e.values),o,n)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??A).importNode(e,!0);G.currentNode=n;let o=G.nextNode(),a=0,r=0,s=i[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new Z(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new it(o,this,t)),this._$AV.push(e),s=i[++r]}a!==s?.index&&(o=G.nextNode(),a++)}return G.currentNode=A,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new V(t)),e}k(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Z(this.O(T()),this.O(T()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,n){const o=this.strings;let a=!1;if(void 0===o)t=W(this,t,e,0),a=!C(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const n=t;let r,s;for(t=o[0],r=0;r<o.length-1;r++)s=W(this,n[i+r],e,r),s===U&&(s=this._$AH[r]),a||=!C(s)||s!==this._$AH[r],s===L?t=L:t!==L&&(t+=(s??"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends Q{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??L)===U)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const nt=N.litHtmlPolyfillSupport;nt?.(V,Z),(N.litHtmlVersions??=[]).push("3.3.1");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Z(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.1");const st={en:{employees:"Employees",employeeList:"Employee List",addNew:"Add New",firstName:"First Name",lastName:"Last Name",dateOfEmployment:"Date of Employment",dateOfBirth:"Date of Birth",phone:"Phone Number",email:"Email Address",department:"Department",position:"Position",search:"Search...",save:"Save",update:"Update",cancel:"Cancel",delete:"Delete",of:"of",actions:"Actions",editEmployee:"Edit Employee",addEmployee:"Add Employee",selectDepartment:"Select Department",selectPosition:"Select Position",no:"No",updateEmployeeTitle:"Update Employee",addEmployeeTitle:"Add Employee",areYouSureYouWantToUpdateThisEmployee:"Are you sure you want to update this employee?",areYouSureYouWantToAddThisEmployee:"Are you sure you want to add this employee?",page:"Page",noData:"No data found"},tr:{of:"/",employees:"Çalışanlar",employeeList:"Çalışan Listesi",addNew:"Yeni Ekle",firstName:"Ad",lastName:"Soyad",dateOfEmployment:"İşe Giriş Tarihi",dateOfBirth:"Doğum Tarihi",phone:"Telefon Numarası",email:"E-posta Adresi",department:"Departman",position:"Pozisyon",search:"Ara...",save:"Kaydet",update:"Güncelle",cancel:"İptal",delete:"Sil",actions:"İşlemler",editEmployee:"Çalışanı Düzenle",addEmployee:"Çalışan Ekle",selectDepartment:"Departman Seç",selectPosition:"Pozisyon Seç",no:"Hayır",updateEmployeeTitle:"Çalışanı Güncelle",addEmployeeTitle:"Çalışan Ekle",areYouSureYouWantToUpdateThisEmployee:"Bu çalışanı güncellemek istediğinize emin misiniz?",areYouSureYouWantToAddThisEmployee:"Bu çalışanı eklemek istediğinize emin misiniz?",page:"Sayfa",noData:"Kayıt bulunamadı"}};function lt(t){const e=document.documentElement.lang||"en";return st[e]?.[t]||st.en[t]||t}const ct=(t=24)=>j`
  <svg
    width="${t}"
    height="${20*t/32}"
    viewBox="0 0 60 36"
    aria-label="United Kingdom flag"
  >
    <rect width="60" height="36" fill="#012169" />
    <g>
      <polygon points="0,0 25,0 60,21 60,36 35,36 0,15" fill="#FFF" />
      <polygon points="60,0 35,0 0,21 0,36 25,36 60,15" fill="#FFF" />
      <polygon points="0,0 27,18 0,36" fill="#C8102E" />
      <polygon points="60,0 33,18 60,36" fill="#C8102E" />
    </g>
    <rect x="24" width="12" height="36" fill="#FFF" />
    <rect y="12" width="60" height="12" fill="#FFF" />
    <rect x="26" width="8" height="36" fill="#C8102E" />
    <rect y="14" width="60" height="8" fill="#C8102E" />
  </svg>
`,mt=(t=24)=>j`
  <svg
    width="${t}"
    height="${20*t/32}"
    viewBox="0 0 60 36"
    aria-label="Turkey flag"
  >
    <rect width="60" height="36" fill="#E30A17" />
    <circle cx="25" cy="18" r="10" fill="#fff" />
    <circle cx="28" cy="18" r="8" fill="#E30A17" />
    <circle cx="32" cy="18" r="2.5" fill="#fff" />
    <polygon points="38,18 44,21 44,15" fill="#fff" />
  </svg>
`,pt=t=>{let e;const i=new Set,n=(t,n)=>{const o="function"==typeof t?t(e):t;if(!Object.is(o,e)){const t=e;e=(null!=n?n:"object"!=typeof o||null===o)?o:Object.assign({},e,o),i.forEach(i=>i(e,t))}},o=()=>e,a={setState:n,getState:o,getInitialState:()=>r,subscribe:t=>(i.add(t),()=>i.delete(t))},r=e=t(n,o,a);return a},dt=t=>t?pt(t):pt;function ht(t,e){let i;try{i=t()}catch(t){return}const n={getItem:t=>{var e;const n=t=>null===t?null:JSON.parse(t,void 0),o=null!=(e=i.getItem(t))?e:null;return o instanceof Promise?o.then(n):n(o)},setItem:(t,e)=>i.setItem(t,JSON.stringify(e,void 0)),removeItem:t=>i.removeItem(t)};return n}const ut=t=>e=>{try{const i=t(e);return i instanceof Promise?i:{then:t=>ut(t)(i),catch(t){return this}}}catch(t){return{then(t){return this},catch:e=>ut(e)(t)}}},ft=(t,e)=>(i,n,o)=>{let a={storage:ht(()=>localStorage),partialize:t=>t,version:0,merge:(t,e)=>({...e,...t}),...e},r=!1;const s=new Set,l=new Set;let c=a.storage;if(!c)return t((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),i(...t)},n,o);const m=()=>{const t=a.partialize({...n()});return c.setItem(a.name,{state:t,version:a.version})},p=o.setState;o.setState=(t,e)=>{p(t,e),m()};const d=t((...t)=>{i(...t),m()},n,o);let h;o.getInitialState=()=>d;const u=()=>{var t,e;if(!c)return;r=!1,s.forEach(t=>{var e;return t(null!=(e=n())?e:d)});const o=(null==(e=a.onRehydrateStorage)?void 0:e.call(a,null!=(t=n())?t:d))||void 0;return ut(c.getItem.bind(c))(a.name).then(t=>{if(t){if("number"!=typeof t.version||t.version===a.version)return[!1,t.state];if(a.migrate){const e=a.migrate(t.state,t.version);return e instanceof Promise?e.then(t=>[!0,t]):[!0,e]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(t=>{var e;const[o,r]=t;if(h=a.merge(r,null!=(e=n())?e:d),i(h,!0),o)return m()}).then(()=>{null==o||o(h,void 0),h=n(),r=!0,l.forEach(t=>t(h))}).catch(t=>{null==o||o(void 0,t)})};return o.persist={setOptions:t=>{a={...a,...t},t.storage&&(c=t.storage)},clearStorage:()=>{null==c||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>u(),hasHydrated:()=>r,onHydrate:t=>(s.add(t),()=>{s.delete(t)}),onFinishHydration:t=>(l.add(t),()=>{l.delete(t)})},a.skipHydration||u(),h||d},yt=dt(ft(t=>({appLang:"en",employeeDisplayMode:"table",setAppLang:e=>{t({appLang:e})},setEmployeeDisplayMode:e=>{"table"!==e&&"grid"!==e||t({employeeDisplayMode:e})}}),{name:"app-store",storage:ht(()=>localStorage)}));class gt extends at{static properties={showLangDropdown:{type:Boolean,state:!0}};constructor(){super(),this.showLangDropdown=!1}static styles=a`

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      padding-left: .5rem;
      padding-right: .5rem;
    }

    .navbar__logo {
      width: 50px;
    }

    .navbar__brand {
      font-size: 15px;
      font-weight: 600;
    }

    .navbar__lang {
      display: flex;
      cursor: pointer;
    } 

    .navbar__left {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--text-color);
    }
    .navbar__menu {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .navbar__link {
      display: flex;
    }
    img {
      width: 24px;
    }
    ul {
     list-style: none;
    }
     ul li a {
      color: var(--primary-color);
      text-decoration: none;
     }
      .navbar__link  {
      color: var(--secondary-color);
      }
      .navbar__link.active{
        color: var(--primary-color);
      }
  .lang-dropdown {
    position: absolute;
    top: 110%;
    right: 0;
    background: white;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    z-index: 100;
    min-width: 100px;
    border-radius: 4px;
  }
  .lang-dropdown div {
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .lang-dropdown div:hover {
    background: #f5f5f5;
  }
  }`;getLang(){return document.documentElement.lang}toggleLangDropdown(t){t.stopPropagation(),this.showLangDropdown=!this.showLangDropdown}setLang(t){document.documentElement.lang=t,this.showLangDropdown=!1,yt.getState().setAppLang(t),window.location.reload()}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._closeDropdown=()=>{this.showLangDropdown&&(this.showLangDropdown=!1,this.requestUpdate())})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this._closeDropdown)}render(){return j`
      <nav class="navbar" aria-label="Main Navigation">
        <a href="/" class="navbar__left">
          <img
            src="/public/assets/images/ing_tr.png"
            alt="ING Logo"
            class="navbar__logo"
          />
          <span class="navbar__brand">ING</span>
        </a>
        <ul class="navbar__menu">
          <li>
            <a href="/employees" class="navbar__link active">
              <i class="ri-user-3-line"></i>
              ${lt("employees")}
            </a>
          </li>
          <li>
            <a href="/add-edit-employee" class="navbar__link">
              <i class="ri-add-line">+</i>
              ${lt("addNew")}
            </a>
          </li>
          <li style="position:relative;">
            <div
              class="navbar__lang"
              aria-label="Change Language"
              @click=${this.toggleLangDropdown}
              tabindex="0"
              aria-haspopup="true"
              aria-expanded="${this.showLangDropdown}"
            >
              ${"tr"===this.getLang()?mt():ct()}
            </div>
            ${this.showLangDropdown?j`
                  <div
                    class="lang-dropdown"
                    @click=${t=>t.stopPropagation()}
                  >
                    ${"tr"===this.getLang()?j`<div @click=${()=>this.setLang("en")}>
                          ${ct()} English
                        </div>`:j`<div @click=${()=>this.setLang("tr")}>
                          ${mt()} Türkçe
                        </div>`}
                  </div>
                `:""}
          </li>
        </ul>
      </nav>
    `}}function vt(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var o=1,a="";if("?"===t[s=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0===--o){s++;break}}else if("("===t[s]&&(o++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=t[s++]}else a+=t[s++]+t[s++];if(o)throw new TypeError("Unbalanced pattern at ".concat(i));if(!a)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:a}),i=s}else{for(var r="",s=i+1;s<t.length;){var l=t.charCodeAt(s);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;r+=t[s++]}if(!r)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:r}),i=s}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,o=void 0===n?"./":n,a=e.delimiter,r=void 0===a?"/#?":a,s=[],l=0,c=0,m="",p=function(t){if(c<i.length&&i[c].type===t)return i[c++].value},d=function(t){var e=p(t);if(void 0!==e)return e;var n=i[c],o=n.type,a=n.index;throw new TypeError("Unexpected ".concat(o," at ").concat(a,", expected ").concat(t))},h=function(){for(var t,e="";t=p("CHAR")||p("ESCAPED_CHAR");)e+=t;return e},u=function(t){var e=s[s.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=r;e<i.length;e++){var n=i[e];if(t.indexOf(n)>-1)return!0}return!1}(i)?"[^".concat(Et(r),"]+?"):"(?:(?!".concat(Et(i),")[^").concat(Et(r),"])+?")};c<i.length;){var f=p("CHAR"),y=p("NAME"),g=p("PATTERN");if(y||g){var v=f||"";-1===o.indexOf(v)&&(m+=v,v=""),m&&(s.push(m),m=""),s.push({name:y||l++,prefix:v,suffix:"",pattern:g||u(v),modifier:p("MODIFIER")||""})}else{var b=f||p("ESCAPED_CHAR");if(b)m+=b;else if(m&&(s.push(m),m=""),p("OPEN")){v=h();var w=p("NAME")||"",E=p("PATTERN")||"",N=h();d("CLOSE"),s.push({name:w||(E?l++:""),pattern:w&&!E?u(v):E,prefix:v,suffix:N,modifier:p("MODIFIER")||""})}else d("END")}}return s}function bt(t,e){return wt(vt(t,e),e)}function wt(t,e){void 0===e&&(e={});var i=Nt(e),n=e.encode,o=void 0===n?function(t){return t}:n,a=e.validate,r=void 0===a||a,s=t.map(function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)});return function(e){for(var i="",n=0;n<t.length;n++){var a=t[n];if("string"!=typeof a){var l=e?e[a.name]:void 0,c="?"===a.modifier||"*"===a.modifier,m="*"===a.modifier||"+"===a.modifier;if(Array.isArray(l)){if(!m)throw new TypeError('Expected "'.concat(a.name,'" to not repeat, but got an array'));if(0===l.length){if(c)continue;throw new TypeError('Expected "'.concat(a.name,'" to not be empty'))}for(var p=0;p<l.length;p++){var d=o(l[p],a);if(r&&!s[n].test(d))throw new TypeError('Expected all "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(d,'"'));i+=a.prefix+d+a.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!c){var h=m?"an array":"a string";throw new TypeError('Expected "'.concat(a.name,'" to be ').concat(h))}}else{d=o(String(l),a);if(r&&!s[n].test(d))throw new TypeError('Expected "'.concat(a.name,'" to match "').concat(a.pattern,'", but got "').concat(d,'"'));i+=a.prefix+d+a.suffix}}else i+=a}return i}}function Et(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Nt(t){return t&&t.sensitive?"":"i"}function Ot(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,o=void 0!==n&&n,a=i.start,r=void 0===a||a,s=i.end,l=void 0===s||s,c=i.encode,m=void 0===c?function(t){return t}:c,p=i.delimiter,d=void 0===p?"/#?":p,h=i.endsWith,u="[".concat(Et(void 0===h?"":h),"]|$"),f="[".concat(Et(d),"]"),y=r?"^":"",g=0,v=t;g<v.length;g++){var b=v[g];if("string"==typeof b)y+=Et(m(b));else{var w=Et(m(b.prefix)),E=Et(m(b.suffix));if(b.pattern)if(e&&e.push(b),w||E)if("+"===b.modifier||"*"===b.modifier){var N="*"===b.modifier?"?":"";y+="(?:".concat(w,"((?:").concat(b.pattern,")(?:").concat(E).concat(w,"(?:").concat(b.pattern,"))*)").concat(E,")").concat(N)}else y+="(?:".concat(w,"(").concat(b.pattern,")").concat(E,")").concat(b.modifier);else{if("+"===b.modifier||"*"===b.modifier)throw new TypeError('Can not repeat "'.concat(b.name,'" without a prefix and suffix'));y+="(".concat(b.pattern,")").concat(b.modifier)}else y+="(?:".concat(w).concat(E,")").concat(b.modifier)}}if(l)o||(y+="".concat(f,"?")),y+=i.endsWith?"(?=".concat(u,")"):"$";else{var O=t[t.length-1],$="string"==typeof O?f.indexOf(O[O.length-1])>-1:void 0===O;o||(y+="(?:".concat(f,"(?=").concat(u,"))?")),$||(y+="(?=".concat(f,"|").concat(u,")"))}return new RegExp(y,Nt(i))}(vt(t,i),e,i)}function $t(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=i.exec(t.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map(function(t){return $t(t,e,i).source});return new RegExp("(?:".concat(n.join("|"),")"),Nt(i))}(t,e,i):Ot(t,e,i)}function kt(t){return"object"==typeof t&&!!t}function xt(t){return"function"==typeof t}function St(t){return"string"==typeof t}function Bt(t=[]){return Array.isArray(t)?t:[t]}function At(t){return`[Vaadin.Router] ${t}`}window.customElements.define("navbar-component",gt);class Tt extends Error{code;context;constructor(t){super(At(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const Ct=Symbol("NotFoundResult");function _t(t){return new Tt(t)}function Mt(t){return(Array.isArray(t)?t[0]:t)??""}function Rt(t){return Mt(t?.path)}const zt=new Map;function Pt(t){try{return decodeURIComponent(t)}catch{return t}}zt.set("|false",{keys:[],pattern:/(?:)/u});var Dt=function(t,e,i=!1,n=[],o){const a=`${t}|${String(i)}`,r=Mt(e);let s=zt.get(a);if(!s){const e=[];s={keys:e,pattern:$t(t,e,{end:i,strict:""===t})},zt.set(a,s)}const l=s.pattern.exec(r);if(!l)return null;const c={...o};for(let t=1;t<l.length;t++){const e=s.keys[t-1],i=e.name,n=l[t];void 0===n&&Object.hasOwn(c,i)||("+"===e.modifier||"*"===e.modifier?c[i]=n?n.split(/[/?#]/u).map(Pt):[]:c[i]=n?Pt(n):n)}return{keys:[...n,...s.keys],params:c,path:l[0]}};var Ft=function t(e,i,n,o,a){let r,s,l=0,c=Rt(e);return c.startsWith("/")&&(n&&(c=c.substring(1)),n=!0),{next(m){if(e===m)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const p=e.i??[],d=!e.i&&!e.children;if(!r&&(r=Dt(c,i,d,o,a),r))return{value:{keys:r.keys,params:r.params,path:r.path,route:e}};if(r&&p.length>0)for(;l<p.length;){if(!s){const o=p[l];o.parent=e;let a=r.path.length;a>0&&"/"===i.charAt(a)&&(a+=1),s=t(o,i.substring(a),n,r.keys,r.params)}const o=s.next(m);if(!o.done)return{done:!1,value:o.value};s=null,l+=1}return{done:!0,value:void 0}}}};function Ht(t){if(xt(t.route.action))return t.route.action(t)}class Jt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Rt(t.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class jt{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:o=Ht}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=o,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>Ct,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...St(t)?{pathname:t}:t,next:l},n=Ft(this.#e,this.N(i.pathname)??i.pathname,!!this.baseUrl),o=this.resolveRoute;let a=null,r=null,s=i;async function l(t=!1,c=a?.value?.route,m){const p=null===m?a?.value?.route:void 0;if(a=r??n.next(p),r=null,!t&&(a.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(a.value.route,c)))return r=a,Ct;if(a.done)throw _t(i);s={...i,params:a.value.params,route:a.value.route,chain:s.chain?.slice()},function(t,e){const{path:i,route:n}=e;if(n&&!n.m){const e={path:i,route:n};if(n.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==n.parent;e--)t.chain.pop();t.chain?.push(e)}}(s,a.value);const d=await o(s);return null!=d&&d!==Ct?(s.result=(h=d)&&"object"==typeof h&&"next"in h&&"params"in h&&"result"in h&&"route"in h?d.result:d,e.#t=s,s):await l(t,c,d);var h}try{return await l(!0,this.#e)}catch(t){const e=t instanceof Tt?t:new Jt(s,{code:500,cause:t});if(this.errorHandler)return s.result=this.errorHandler(e),s;throw t}}setRoutes(t){this.#e.i=[...Bt(t)]}N(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;return n.startsWith(e)?n.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...Bt(t)],this.getRoutes()}}function Ut(t,e,i,n){const o=e.name??n?.(e);if(o&&(t.has(o)?t.get(o)?.push(e):t.set(o,[e])),Array.isArray(i))for(const o of i)o.parent=e,Ut(t,o,o.i??o.children,n)}function Lt(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var It=function(t,e={}){if(!(t instanceof jt))throw new TypeError("An instance of Resolver is expected");const i=new Map,n=new Map;return(o,a)=>{let r=Lt(n,o);if(!r&&(n.clear(),Ut(n,t.root,t.root.i,e.cacheKeyProvider),r=Lt(n,o),!r))throw new Error(`Route "${o}" not found`);let s=r.fullPath?i.get(r.fullPath):void 0;if(!s){let t=Rt(r),e=r.parent;for(;e;){const i=Rt(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const n=vt(t),o=Object.create(null);for(const t of n)St(t)||(o[t.name]=!0);s={keys:o,tokens:n},i.set(t,s),r.fullPath=t}let l=wt(s.tokens,{encode:encodeURIComponent,...e})(a)||"/";if(e.stringifyQueryParams&&a){const t={};for(const[e,i]of Object.entries(a))!(e in s.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(l+=i.startsWith("?")?i:`?${i}`)}return l}};const Gt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Yt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Kt(t,e){if("function"!=typeof t)return;const i=Gt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Vt=function(t,e){if(window.Vaadin.developmentMode)return Kt(t,e)};function Wt(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Yt?!(Yt&&Object.keys(Yt).map(t=>Yt[t]).filter(t=>t.productionMode).length>0):!Kt(function(){return!0}))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),Vt(Wt);var qt=async function(t,e){return t.classList.add(e),await new Promise(i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const n=t.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${o}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,()=>{t.classList.remove(e),t.removeAttribute("style"),i()})}else t.classList.remove(e),i()})};function Zt(t){if(!t||!St(t.path))throw new Error(At('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(xt(t.action)||Array.isArray(t.children)||xt(t.children)||St(t.component)||St(t.redirect)))throw new Error(At(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(At(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Qt(t){Bt(t).forEach(t=>Zt(t))}function Xt(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function te(t){return t.map(t=>t.path).reduce((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t,"")}function ee({chain:t=[],hash:e="",params:i={},pathname:n="",redirectFrom:o,resolver:a,search:r=""},s){const l=t.map(t=>t.route);return{baseUrl:a?.baseUrl??"",getUrl:(e={})=>a?Xt(bt(function(t){return te(t.map(t=>t.route))}(t))({...i,...e}),a):"",hash:e,params:i,pathname:n,redirectFrom:o,route:s??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:r,searchParams:new URLSearchParams(r)}}function ie(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function ne(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function oe(t,e,...i){return n=>n&&kt(n)&&("cancel"in n||"redirect"in n)?n:ne(e?.[t],e,...i)}function ae(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function re(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function se(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const n=i[t];if("nodeName"in n&&"a"===n.nodeName.toLowerCase()){e=n;break}}for(;e&&e instanceof Node&&"a"!==re(e);)e=e.parentNode;if(!e||"a"!==re(e))return;const n=e;if(n.target&&"_self"!==n.target.toLowerCase())return;if(n.hasAttribute("download"))return;if(n.hasAttribute("router-ignore"))return;if(n.pathname===window.location.pathname&&""!==n.hash)return;const o=n.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(n);if(o!==window.location.origin)return;const{hash:a,pathname:r,search:s}=n;ae("go",{hash:a,pathname:r,search:s})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function le(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:n}=window.location;ae("go",{hash:e,pathname:i,search:n})}let ce=[];const me={CLICK:{activate(){window.document.addEventListener("click",se)},inactivate(){window.document.removeEventListener("click",se)}},POPSTATE:{activate(){window.addEventListener("popstate",le)},inactivate(){window.removeEventListener("popstate",le)}}};function pe(t=[]){ce.forEach(t=>t.inactivate()),t.forEach(t=>t.activate()),ce=t}function de(){return{cancel:!0}}const he={S:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>Ct};class ue extends jt{location=ee({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#n=new WeakSet;#o=this.#a.bind(this);#r=0;#s;B;#l;#c=null;#m=null;constructor(t,e){const i=document.head.querySelector("base"),n=i?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#p(t)}),pe(Object.values(me)),this.setOutlet(t),this.subscribe()}async#p(t){const{route:e}=t;if(xt(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));xt(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!kt(t))throw new Error(At(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=Bt(t);i.forEach(t=>Zt(t)),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#n.add(e),e},prevent:de,redirect:e=>ie(t,e)};return await Promise.resolve().then(async()=>{if(this.#d(t))return await ne(e.action,e,t,i)}).then(t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===Ct||kt(t)&&"redirect"in t)?St(e.redirect)?i.redirect(e.redirect):void 0:t).then(t=>null!=t?t:St(e.component)?i.component(e.component):void 0)}setOutlet(t){t&&this.#h(t),this.#s=t}getOutlet(){return this.#s}async setRoutes(t,e=!1){return this.B=void 0,this.#l=void 0,Qt(t),super.setRoutes(t),e||this.#a(),await this.ready}addRoutes(t){return Qt(t),super.addRoutes(t)}async render(t,e=!1){this.#r+=1;const i=this.#r,n={...he,...St(t)?{hash:"",search:"",pathname:t}:t,S:i};return this.ready=this.#u(n,e),await this.ready}async#u(t,e){const{S:i}=t;try{const n=await this.resolve(t),o=await this.#f(n);if(!this.#d(o))return this.location;const a=this.B;if(o===a)return this.#y(a,!0),this.location;if(this.location=ee(o),e&&this.#y(o,1===i),ae("location-changed",{router:this,location:this.location}),o.A)return this.#g(o,a),this.B=o,this.location;this.#v(o,a);const r=this.#b(o);if(this.#w(o),this.#E(o,a),await r,this.#d(o))return this.#N(),this.B=o,this.location}catch(n){if(i===this.#r){e&&this.#y(this.context);for(const t of this.#s?.children??[])t.remove();throw this.location=ee(Object.assign(t,{resolver:this})),ae("error",{router:this,error:n,...t}),n}}return this.location}async#f(t,e=t){const i=await this.#O(e),n=i!==e?i:t,o=Xt(te(i.chain??[]),this)===i.pathname,a=async(t,e=t.route,i)=>{const n=await t.next(!1,e,i);return null===n||n===Ct?o?t:null!=e.parent?await a(t,e.parent,n):n:n},r=await a(i);if(null==r||r===Ct)throw _t(n);return r!==i?await this.#f(n,r):await this.#$(i)}async#O(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=ee(t),t.chain){const i=t.chain.map(t=>t.route).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#k(e.redirect,t.M,t.S);return await this.#O(i)}throw e instanceof Error?e:new Error(At(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#$(t){return await this.#x(t).then(async e=>e===this.B||e===t?e:await this.#f(e))}async#x(t){const e=this.B??{},i=e.chain??[],n=t.chain??[];let o=Promise.resolve(void 0);const a=e=>ie(t,e);if(t.R=0,t.A=!1,i.length){for(let e=0;e<Math.min(i.length,n.length)&&(i[e].route===n[e].route&&(i[e].path===n[e].path||i[e].element===n[e].element)&&this.#S(i[e].element,n[e].element));t.R++,e++);if(t.A=n.length===i.length&&t.R===n.length&&this.#S(t.result,e.result),t.A){for(let e=n.length-1;e>=0;e--)o=this.#B(o,t,{prevent:de},i[e]);for(let e=0;e<n.length;e++)o=this.#A(o,t,{prevent:de,redirect:a},n[e]),i[e].element.location=ee(t,i[e].route)}else for(let e=i.length-1;e>=t.R;e--)o=this.#B(o,t,{prevent:de},i[e])}if(!t.A)for(let e=0;e<n.length;e++)e<t.R?e<i.length&&i[e].element&&(i[e].element.location=ee(t,i[e].route)):(o=this.#A(o,t,{prevent:de,redirect:a},n[e]),n[e].element&&(n[e].element.location=ee(t,n[e].route)));return await o.then(async e=>{if(e&&kt(e)){if("cancel"in e&&this.B)return this.B.S=t.S,this.B;if("redirect"in e)return await this.#k(e.redirect,t.M,t.S)}return t})}async#B(t,e,i,n){const o=ee(e);let a=await t;if(this.#d(e)){a=oe("onBeforeLeave",n.element,o,i,this)(a)}if(!kt(a)||!("redirect"in a))return a}async#A(t,e,i,n){const o=ee(e,n.route),a=await t;if(this.#d(e)){return oe("onBeforeEnter",n.element,o,i,this)(a)}}#S(t,e){return t instanceof Element&&e instanceof Element&&(this.#n.has(t)&&this.#n.has(e)?t.localName===e.localName:t===e)}#d(t){return t.S===this.#r}async#k(t,e=0,i=0){if(e>256)throw new Error(At(`Too many redirects when rendering ${t.from}`));return await this.resolve({...he,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,M:e+1,S:i})}#h(t=this.#s){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(At(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#y({pathname:t,search:e="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const o=n?"replaceState":"pushState";window.history[o](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(t,e){let i=this.#s;for(let n=0;n<(t.R??0);n++){const o=e?.chain?.[n].element;if(o){if(o.parentNode!==i)break;t.chain[n].element=o,i=o}}return i}#v(t,e){this.#h(),this.#T();const i=this.#g(t,e);this.#c=[],this.#m=Array.from(i?.children??[]).filter(e=>this.#i.has(e)&&e!==t.result);let n=i;for(let e=t.R??0;e<(t.chain?.length??0);e++){const o=t.chain[e].element;o&&(n?.appendChild(o),this.#i.add(o),n===i&&this.#c.push(o),n=o)}}#N(){if(this.#m)for(const t of this.#m)t.remove();this.#m=null,this.#c=null}#T(){if(this.#m&&this.#c){for(const t of this.#c)t.remove();this.#m=null,this.#c=null}}#E(t,e){if(e?.chain&&null!=t.R)for(let i=e.chain.length-1;i>=t.R&&this.#d(t);i--){const n=e.chain[i].element;if(n)try{const e=ee(t);ne(n.onAfterLeave,n,e,{},this)}finally{if(this.#m?.includes(n))for(const t of n.children)t.remove()}}}#w(t){if(t.chain&&null!=t.R)for(let e=t.R;e<t.chain.length&&this.#d(t);e++){const i=t.chain[e].element;if(i){const n=ee(t,t.chain[e].route);ne(i.onAfterEnter,i,n,{},this)}}}async#b(t){const e=this.#m?.[0],i=this.#c?.[0],n=[],{chain:o=[]}=t;let a;for(let t=o.length-1;t>=0;t--)if(o[t].route.animate){a=o[t].route.animate;break}if(e&&i&&a){const t=kt(a)&&a.leave?a.leave:"leaving",o=kt(a)&&a.enter?a.enter:"entering";n.push(qt(e,t)),n.push(qt(i,o))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#o)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#o)}#a(t){const{pathname:e,search:i,hash:n}=t instanceof CustomEvent?t.detail:window.location;St(this.N(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:n},!0))}static setTriggers(...t){pe(t)}urlForName(t,e){return this.#l||(this.#l=It(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Xt(this.#l(t,e??void 0),this)}urlForPath(t,e){return Xt(bt(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:n}=St(t)?new URL(t,"http://a"):t;return ae("go",{pathname:e,search:i,hash:n})}}const fe=document.getElementById("outlet"),ye=()=>Promise.resolve().then(function(){return Ie});new ue(fe).setRoutes([{path:"/",component:"list-employees",action:ye()},{path:"/employees",component:"list-employees",action:ye()},{path:"/add-edit-employee",action:()=>Promise.resolve().then(function(){return Ve}),component:"add-edit-employee"}]);const ge=[{firstName:"Ali",lastName:"Deniz",dateOfEmployment:"26/06/2021",dateOfBirth:"01/01/2000",phone:"+(90) 535 471 06 90 62",email:"ali.deniz@company.com",department:"Tech",position:"Junior"},{firstName:"Nil",lastName:"Dalkılıç",dateOfEmployment:"17/03/2022",dateOfBirth:"20/10/1998",phone:"+(90) 531 376 24 51 11",email:"nil.dalkılıç@company.com",department:"Analytics",position:"Junior"},{firstName:"Eylül",lastName:"Barut",dateOfEmployment:"25/07/2023",dateOfBirth:"19/08/1992",phone:"+(90) 538 043 91 97 89",email:"eylül.barut@company.com",department:"HR",position:"Medior"},{firstName:"Tolgahan",lastName:"Polat",dateOfEmployment:"15/07/2021",dateOfBirth:"12/10/1995",phone:"+(90) 536 609 73 23 50",email:"tolgahan.polat@company.com",department:"Finance",position:"Medior"},{firstName:"Eylül",lastName:"Kurt",dateOfEmployment:"01/07/2022",dateOfBirth:"10/03/1997",phone:"+(90) 531 804 79 44 87",email:"eylül.kurt@company.com",department:"Tech",position:"Medior"},{firstName:"Baran",lastName:"Baş",dateOfEmployment:"29/05/2022",dateOfBirth:"27/09/1990",phone:"+(90) 534 429 20 62 77",email:"baran.baş@company.com",department:"Analytics",position:"Medior"},{firstName:"Ezgi",lastName:"Yılmaz",dateOfEmployment:"28/08/2021",dateOfBirth:"31/07/1989",phone:"+(90) 535 507 73 70 57",email:"ezgi.yılmaz@company.com",department:"HR",position:"Junior"},{firstName:"Serkan",lastName:"Acar",dateOfEmployment:"26/12/2022",dateOfBirth:"29/09/1989",phone:"+(90) 531 332 05 17 83",email:"serkan.acar@company.com",department:"Finance",position:"Senior"},{firstName:"Samet",lastName:"Sağlam",dateOfEmployment:"22/02/2021",dateOfBirth:"28/05/1990",phone:"+(90) 532 184 34 71 84",email:"samet.sağlam@company.com",department:"Tech",position:"Junior"},{firstName:"Nehir",lastName:"Gök",dateOfEmployment:"10/03/2023",dateOfBirth:"06/12/1998",phone:"+(90) 536 963 26 55 73",email:"nehir.gök@company.com",department:"Analytics",position:"Junior"},{firstName:"Tuna",lastName:"Uçar",dateOfEmployment:"18/05/2021",dateOfBirth:"09/03/1994",phone:"+(90) 535 543 29 70 40",email:"tuna.uçar@company.com",department:"HR",position:"Medior"},{firstName:"Melis",lastName:"Gök",dateOfEmployment:"03/01/2023",dateOfBirth:"16/08/1990",phone:"+(90) 536 287 21 09 93",email:"melis.gök@company.com",department:"Finance",position:"Junior"},{firstName:"Buse",lastName:"Toprak",dateOfEmployment:"14/12/2022",dateOfBirth:"11/12/1993",phone:"+(90) 533 024 49 23 13",email:"buse.toprak@company.com",department:"Tech",position:"Medior"},{firstName:"Çağla",lastName:"Can",dateOfEmployment:"28/01/2021",dateOfBirth:"24/01/1998",phone:"+(90) 535 299 42 99 79",email:"çağla.can@company.com",department:"Analytics",position:"Senior"},{firstName:"Selin",lastName:"Can",dateOfEmployment:"12/02/2023",dateOfBirth:"20/12/1998",phone:"+(90) 531 807 31 38 52",email:"selin.can@company.com",department:"HR",position:"Junior"},{firstName:"İrem",lastName:"Demir",dateOfEmployment:"28/04/2021",dateOfBirth:"10/05/1992",phone:"+(90) 530 698 31 69 73",email:"i̇rem.demir@company.com",department:"Finance",position:"Senior"},{firstName:"Batuhan",lastName:"Demir",dateOfEmployment:"18/05/2023",dateOfBirth:"19/02/1992",phone:"+(90) 533 406 66 72 47",email:"batuhan.demir@company.com",department:"Tech",position:"Medior"},{firstName:"Burak",lastName:"Güneş",dateOfEmployment:"27/02/2023",dateOfBirth:"20/03/1989",phone:"+(90) 534 960 59 83 89",email:"burak.güneş@company.com",department:"Analytics",position:"Junior"},{firstName:"Sevgi",lastName:"Kavak",dateOfEmployment:"31/08/2022",dateOfBirth:"02/12/1996",phone:"+(90) 538 902 84 70 82",email:"sevgi.kavak@company.com",department:"HR",position:"Junior"},{firstName:"Hakan",lastName:"Tosun",dateOfEmployment:"12/06/2023",dateOfBirth:"28/03/1987",phone:"+(90) 536 471 45 48 94",email:"hakan.tosun@company.com",department:"Finance",position:"Senior"},{firstName:"Kerem",lastName:"Balcı",dateOfEmployment:"25/03/2023",dateOfBirth:"19/04/1990",phone:"+(90) 538 896 41 57 19",email:"kerem.balcı@company.com",department:"Tech",position:"Medior"},{firstName:"Ahmet",lastName:"Kaya",dateOfEmployment:"18/06/2022",dateOfBirth:"12/11/1998",phone:"+(90) 536 164 92 13 00",email:"ahmet.kaya@company.com",department:"Analytics",position:"Senior"},{firstName:"Berk",lastName:"Ertürk",dateOfEmployment:"06/03/2022",dateOfBirth:"19/06/1996",phone:"+(90) 538 905 98 84 11",email:"berk.ertürk@company.com",department:"HR",position:"Senior"},{firstName:"Ali",lastName:"Yavuz",dateOfEmployment:"03/07/2021",dateOfBirth:"31/12/1998",phone:"+(90) 530 339 21 95 98",email:"ali.yavuz@company.com",department:"Finance",position:"Senior"},{firstName:"Esra",lastName:"Özdemir",dateOfEmployment:"05/06/2023",dateOfBirth:"08/10/1992",phone:"+(90) 534 932 63 61 60",email:"esra.özdemir@company.com",department:"Tech",position:"Senior"},{firstName:"Buse",lastName:"Bozkurt",dateOfEmployment:"18/04/2021",dateOfBirth:"20/03/2001",phone:"+(90) 538 852 54 30 25",email:"buse.bozkurt@company.com",department:"Analytics",position:"Junior"},{firstName:"Volkan",lastName:"Güneş",dateOfEmployment:"30/01/2023",dateOfBirth:"25/09/1988",phone:"+(90) 538 258 87 19 34",email:"volkan.güneş@company.com",department:"HR",position:"Junior"},{firstName:"Çağla",lastName:"Taş",dateOfEmployment:"09/04/2021",dateOfBirth:"13/01/1994",phone:"+(90) 537 630 16 89 04",email:"çağla.taş@company.com",department:"Finance",position:"Medior"},{firstName:"Ömer",lastName:"Sarı",dateOfEmployment:"08/06/2023",dateOfBirth:"27/11/1991",phone:"+(90) 539 279 72 43 80",email:"ömer.sarı@company.com",department:"Tech",position:"Medior"},{firstName:"Selin",lastName:"Demir",dateOfEmployment:"07/04/2023",dateOfBirth:"24/11/2001",phone:"+(90) 537 277 17 79 09",email:"selin.demir@company.com",department:"Analytics",position:"Junior"},{firstName:"Esra",lastName:"Altun",dateOfEmployment:"19/06/2022",dateOfBirth:"06/02/1987",phone:"+(90) 536 217 47 05 81",email:"esra.altun@company.com",department:"HR",position:"Junior"},{firstName:"Mert",lastName:"Tosun",dateOfEmployment:"08/11/2022",dateOfBirth:"31/03/1995",phone:"+(90) 530 480 95 70 68",email:"mert.tosun@company.com",department:"Finance",position:"Junior"},{firstName:"Dilara",lastName:"Öztürk",dateOfEmployment:"08/05/2023",dateOfBirth:"14/07/1998",phone:"+(90) 530 079 35 29 82",email:"dilara.öztürk@company.com",department:"Tech",position:"Medior"},{firstName:"Gökhan",lastName:"Tosun",dateOfEmployment:"25/03/2021",dateOfBirth:"17/08/1990",phone:"+(90) 538 711 05 49 90",email:"gökhan.tosun@company.com",department:"Analytics",position:"Senior"},{firstName:"Çağla",lastName:"Kavak",dateOfEmployment:"01/09/2022",dateOfBirth:"05/07/1991",phone:"+(90) 534 927 49 17 71",email:"çağla.kavak@company.com",department:"HR",position:"Senior"},{firstName:"Kaan",lastName:"Deniz",dateOfEmployment:"17/12/2021",dateOfBirth:"16/12/2001",phone:"+(90) 536 550 60 92 66",email:"kaan.deniz@company.com",department:"Finance",position:"Senior"},{firstName:"Pelin",lastName:"Güneş",dateOfEmployment:"07/09/2022",dateOfBirth:"10/09/2000",phone:"+(90) 532 774 62 30 56",email:"pelin.güneş@company.com",department:"Tech",position:"Junior"},{firstName:"Ege",lastName:"Koç",dateOfEmployment:"12/09/2022",dateOfBirth:"30/12/2000",phone:"+(90) 533 582 80 76 39",email:"ege.koç@company.com",department:"Analytics",position:"Junior"},{firstName:"Koray Can",lastName:"Tunç",dateOfEmployment:"13/03/2022",dateOfBirth:"11/03/2002",phone:"+(90) 532 809 27 51 94",email:"koray.tunç@company.com",department:"HR",position:"Medior"},{firstName:"Ece",lastName:"Yüce",dateOfEmployment:"02/06/2022",dateOfBirth:"29/05/1991",phone:"+(90) 530 964 28 07 40",email:"ece.yüce@company.com",department:"Finance",position:"Senior"},{firstName:"Ege",lastName:"Polat",dateOfEmployment:"30/03/2021",dateOfBirth:"03/12/1990",phone:"+(90) 535 441 18 68 90",email:"ege.polat@company.com",department:"Tech",position:"Junior"},{firstName:"İrem",lastName:"Kaya",dateOfEmployment:"02/10/2021",dateOfBirth:"09/06/1999",phone:"+(90) 537 245 67 66 69",email:"i̇rem.kaya@company.com",department:"Analytics",position:"Medior"},{firstName:"Can",lastName:"Taş",dateOfEmployment:"26/07/2022",dateOfBirth:"23/02/1998",phone:"+(90) 537 036 84 17 04",email:"can.taş@company.com",department:"HR",position:"Senior"},{firstName:"Samet",lastName:"Deniz",dateOfEmployment:"29/01/2022",dateOfBirth:"03/08/1996",phone:"+(90) 531 468 76 24 95",email:"samet.deniz@company.com",department:"Finance",position:"Junior"},{firstName:"Baran",lastName:"Gür",dateOfEmployment:"07/02/2023",dateOfBirth:"05/12/1988",phone:"+(90) 530 071 92 30 44",email:"baran.gür@company.com",department:"Tech",position:"Junior"},{firstName:"Tolgahan",lastName:"Altun",dateOfEmployment:"08/03/2021",dateOfBirth:"20/01/1997",phone:"+(90) 538 504 40 79 86",email:"tolgahan.altun@company.com",department:"Analytics",position:"Medior"},{firstName:"Kaan",lastName:"Kurt",dateOfEmployment:"26/09/2022",dateOfBirth:"04/08/1995",phone:"+(90) 539 488 99 71 57",email:"kaan.kurt@company.com",department:"HR",position:"Junior"},{firstName:"Koray",lastName:"Mutlu",dateOfEmployment:"21/06/2021",dateOfBirth:"02/10/1992",phone:"+(90) 531 908 67 74 03",email:"koray.mutlu@company.com",department:"Finance",position:"Medior"},{firstName:"Burak",lastName:"Taş",dateOfEmployment:"26/05/2022",dateOfBirth:"14/02/1993",phone:"+(90) 530 549 39 88 34",email:"burak.taş@company.com",department:"Tech",position:"Senior"},{firstName:"Ceren",lastName:"Can",dateOfEmployment:"12/11/2022",dateOfBirth:"04/11/1987",phone:"+(90) 532 428 07 26 64",email:"ceren.can@company.com",department:"Analytics",position:"Senior"},{firstName:"Yasemin",lastName:"Barut",dateOfEmployment:"22/05/2022",dateOfBirth:"07/02/1997",phone:"+(90) 536 381 66 06 88",email:"yasemin.barut@company.com",department:"HR",position:"Medior"},{firstName:"Sevgi",lastName:"Gür",dateOfEmployment:"02/06/2021",dateOfBirth:"02/10/2002",phone:"+(90) 537 411 43 17 88",email:"sevgi.gür@company.com",department:"Finance",position:"Medior"},{firstName:"Kaan",lastName:"Tunç",dateOfEmployment:"21/12/2021",dateOfBirth:"03/03/1996",phone:"+(90) 537 293 43 43 98",email:"kaan.tunç@company.com",department:"Tech",position:"Medior"},{firstName:"Eylül",lastName:"Durmaz",dateOfEmployment:"23/10/2022",dateOfBirth:"08/06/1993",phone:"+(90) 537 466 50 65 84",email:"eylül.durmaz@company.com",department:"Analytics",position:"Junior"},{firstName:"Gökhan",lastName:"Şimşek",dateOfEmployment:"28/04/2021",dateOfBirth:"24/10/1992",phone:"+(90) 530 992 79 99 25",email:"gökhan.şimşek@company.com",department:"HR",position:"Junior"},{firstName:"Sena",lastName:"Kaya",dateOfEmployment:"07/09/2022",dateOfBirth:"26/08/1989",phone:"+(90) 539 308 08 71 44",email:"sena.kaya@company.com",department:"Finance",position:"Junior"},{firstName:"Çağla",lastName:"Yavuz",dateOfEmployment:"22/02/2023",dateOfBirth:"19/07/1998",phone:"+(90) 539 041 08 29 29",email:"çağla.yavuz@company.com",department:"Tech",position:"Senior"},{firstName:"Onur",lastName:"Dalkılıç",dateOfEmployment:"23/06/2022",dateOfBirth:"06/11/2001",phone:"+(90) 530 661 35 08 14",email:"onur.dalkılıç@company.com",department:"Analytics",position:"Junior"},{firstName:"Derya",lastName:"Candan",dateOfEmployment:"29/03/2022",dateOfBirth:"22/06/1990",phone:"+(90) 536 465 28 58 91",email:"derya.candan@company.com",department:"HR",position:"Junior"},{firstName:"Ceren",lastName:"Ekinci",dateOfEmployment:"19/06/2023",dateOfBirth:"17/04/1992",phone:"+(90) 537 610 92 73 29",email:"ceren.ekinci@company.com",department:"Finance",position:"Medior"},{firstName:"Pelin",lastName:"Özdemir",dateOfEmployment:"14/01/2021",dateOfBirth:"01/03/1995",phone:"+(90) 535 422 68 55 65",email:"pelin.özdemir@company.com",department:"Tech",position:"Medior"},{firstName:"Sena",lastName:"Polat",dateOfEmployment:"06/04/2022",dateOfBirth:"30/10/1992",phone:"+(90) 536 079 93 39 09",email:"sena.polat@company.com",department:"Analytics",position:"Junior"},{firstName:"Mehmet",lastName:"Çelik",dateOfEmployment:"28/01/2021",dateOfBirth:"07/04/1992",phone:"+(90) 534 892 00 14 63",email:"mehmet.çelik@company.com",department:"HR",position:"Senior"},{firstName:"Gizem",lastName:"Işık",dateOfEmployment:"22/03/2023",dateOfBirth:"16/01/2000",phone:"+(90) 533 672 43 19 28",email:"gizem.işık@company.com",department:"Finance",position:"Medior"},{firstName:"Sena",lastName:"Gök",dateOfEmployment:"21/04/2021",dateOfBirth:"05/08/1987",phone:"+(90) 530 055 70 83 01",email:"sena.gök@company.com",department:"Tech",position:"Medior"},{firstName:"Gizem",lastName:"Karaca",dateOfEmployment:"12/04/2023",dateOfBirth:"08/07/1998",phone:"+(90) 533 026 25 65 53",email:"gizem.karaca@company.com",department:"Analytics",position:"Senior"},{firstName:"Deniz",lastName:"Karakaya",dateOfEmployment:"29/10/2022",dateOfBirth:"31/03/2000",phone:"+(90) 531 768 35 88 42",email:"deniz.karakaya@company.com",department:"HR",position:"Medior"},{firstName:"Can",lastName:"Tosun",dateOfEmployment:"12/06/2023",dateOfBirth:"19/06/1999",phone:"+(90) 536 068 38 84 06",email:"can.tosun@company.com",department:"Finance",position:"Medior"},{firstName:"Berk",lastName:"Acar",dateOfEmployment:"16/04/2022",dateOfBirth:"14/10/1996",phone:"+(90) 530 260 49 57 44",email:"berk.acar@company.com",department:"Tech",position:"Junior"},{firstName:"Yasemin",lastName:"Yılmaz",dateOfEmployment:"08/09/2021",dateOfBirth:"26/04/1991",phone:"+(90) 534 405 70 83 24",email:"yasemin.yılmaz@company.com",department:"Analytics",position:"Junior"},{firstName:"Nehir",lastName:"Yılmaz",dateOfEmployment:"20/12/2021",dateOfBirth:"15/08/1989",phone:"+(90) 534 714 53 33 16",email:"nehir.yılmaz@company.com",department:"HR",position:"Senior"},{firstName:"Tolgahan",lastName:"Toprak",dateOfEmployment:"01/08/2021",dateOfBirth:"20/07/1989",phone:"+(90) 539 006 97 36 38",email:"tolgahan.toprak@company.com",department:"Finance",position:"Senior"},{firstName:"Selin",lastName:"Bozkurt",dateOfEmployment:"08/05/2021",dateOfBirth:"12/08/1991",phone:"+(90) 536 679 36 79 13",email:"selin.bozkurt@company.com",department:"Tech",position:"Medior"},{firstName:"Ali",lastName:"Durmaz",dateOfEmployment:"19/11/2021",dateOfBirth:"17/12/2000",phone:"+(90) 530 414 63 68 65",email:"ali.durmaz@company.com",department:"Analytics",position:"Junior"},{firstName:"Deniz",lastName:"Polat",dateOfEmployment:"05/01/2022",dateOfBirth:"01/08/1988",phone:"+(90) 537 741 24 16 55",email:"deniz.polat@company.com",department:"HR",position:"Junior"},{firstName:"Yasemin",lastName:"Kavak",dateOfEmployment:"17/03/2023",dateOfBirth:"29/01/2002",phone:"+(90) 538 502 13 11 08",email:"yasemin.kavak@company.com",department:"Finance",position:"Junior"},{firstName:"Volkan",lastName:"Dalkılıç",dateOfEmployment:"18/02/2023",dateOfBirth:"13/07/1991",phone:"+(90) 531 778 80 12 39",email:"volkan.dalkılıç@company.com",department:"Tech",position:"Medior"},{firstName:"Burak",lastName:"Kılıç",dateOfEmployment:"15/05/2022",dateOfBirth:"27/12/1993",phone:"+(90) 539 008 14 96 19",email:"burak.kılıç@company.com",department:"Analytics",position:"Medior"},{firstName:"Serkan",lastName:"Güneş",dateOfEmployment:"28/12/2021",dateOfBirth:"30/08/1993",phone:"+(90) 535 811 85 67 91",email:"serkan.güneş@company.com",department:"HR",position:"Medior"},{firstName:"Nehir",lastName:"Yurt",dateOfEmployment:"17/02/2023",dateOfBirth:"27/10/1991",phone:"+(90) 535 283 04 89 83",email:"nehir.yurt@company.com",department:"Finance",position:"Senior"},{firstName:"Derya",lastName:"Gür",dateOfEmployment:"16/01/2021",dateOfBirth:"04/11/1995",phone:"+(90) 538 185 63 78 11",email:"derya.gür@company.com",department:"Tech",position:"Junior"},{firstName:"Kaan",lastName:"Güneş",dateOfEmployment:"30/04/2023",dateOfBirth:"18/05/1989",phone:"+(90) 534 693 77 10 61",email:"kaan.güneş@company.com",department:"Analytics",position:"Medior"},{firstName:"Ayşe",lastName:"Özdemir",dateOfEmployment:"30/04/2023",dateOfBirth:"12/10/1997",phone:"+(90) 534 588 46 31 33",email:"ayşe.özdemir@company.com",department:"HR",position:"Junior"},{firstName:"Mehmet",lastName:"Balcı",dateOfEmployment:"06/11/2021",dateOfBirth:"21/07/1992",phone:"+(90) 535 334 81 73 09",email:"mehmet.balcı@company.com",department:"Finance",position:"Senior"},{firstName:"Ahmet",lastName:"Can",dateOfEmployment:"13/03/2021",dateOfBirth:"07/01/1999",phone:"+(90) 539 590 60 49 21",email:"ahmet.can@company.com",department:"Tech",position:"Junior"},{firstName:"Batuhan",lastName:"Mutlu",dateOfEmployment:"16/06/2021",dateOfBirth:"15/12/2000",phone:"+(90) 538 812 33 80 41",email:"batuhan.mutlu@company.com",department:"Analytics",position:"Senior"},{firstName:"Koray",lastName:"Bozkurt",dateOfEmployment:"16/03/2022",dateOfBirth:"31/10/1994",phone:"+(90) 533 182 86 87 19",email:"koray.bozkurt@company.com",department:"HR",position:"Medior"},{firstName:"Baran",lastName:"Baş",dateOfEmployment:"19/04/2022",dateOfBirth:"25/12/2000",phone:"+(90) 531 697 99 73 27",email:"baran.baş@company.com",department:"Finance",position:"Junior"},{firstName:"Yasemin",lastName:"Tunç",dateOfEmployment:"20/11/2021",dateOfBirth:"19/01/1995",phone:"+(90) 539 521 73 08 62",email:"yasemin.tunç@company.com",department:"Tech",position:"Junior"},{firstName:"Samet",lastName:"Gür",dateOfEmployment:"09/01/2021",dateOfBirth:"02/03/2000",phone:"+(90) 537 187 31 27 59",email:"samet.gür@company.com",department:"Analytics",position:"Junior"},{firstName:"Tolgahan",lastName:"Ersoy",dateOfEmployment:"05/04/2022",dateOfBirth:"24/10/2002",phone:"+(90) 537 646 83 80 44",email:"tolgahan.ersoy@company.com",department:"HR",position:"Junior"},{firstName:"Berk",lastName:"Sert",dateOfEmployment:"14/09/2022",dateOfBirth:"01/01/1990",phone:"+(90) 537 450 29 86 50",email:"berk.sert@company.com",department:"Finance",position:"Junior"},{firstName:"Tolgahan",lastName:"Yalçın",dateOfEmployment:"28/11/2022",dateOfBirth:"07/08/1991",phone:"+(90) 537 144 14 33 01",email:"tolgahan.yalçın@company.com",department:"Tech",position:"Junior"},{firstName:"Ömer",lastName:"Polat",dateOfEmployment:"23/09/2021",dateOfBirth:"25/11/1996",phone:"+(90) 530 292 82 48 61",email:"ömer.polat@company.com",department:"Analytics",position:"Medior"},{firstName:"Serkan",lastName:"Tunç",dateOfEmployment:"01/07/2023",dateOfBirth:"05/02/1999",phone:"+(90) 537 387 16 90 55",email:"serkan.tunç@company.com",department:"HR",position:"Junior"},{firstName:"Eylül",lastName:"Polat",dateOfEmployment:"31/03/2022",dateOfBirth:"21/03/1987",phone:"+(90) 532 223 82 04 32",email:"eylül.polat@company.com",department:"Finance",position:"Medior"},{firstName:"Ahmet",lastName:"Bozkurt",dateOfEmployment:"23/02/2023",dateOfBirth:"11/12/1999",phone:"+(90) 537 314 55 61 03",email:"ahmet.bozkurt@company.com",department:"Tech",position:"Medior"},{firstName:"Serkan",lastName:"Demir",dateOfEmployment:"13/07/2021",dateOfBirth:"08/05/1999",phone:"+(90) 538 783 66 69 90",email:"serkan.demir@company.com",department:"Analytics",position:"Junior"},{firstName:"Gökhan",lastName:"Polat",dateOfEmployment:"29/04/2021",dateOfBirth:"11/08/1989",phone:"+(90) 535 530 40 17 75",email:"gökhan.polat@company.com",department:"HR",position:"Medior"},{firstName:"Buse",lastName:"Tosun",dateOfEmployment:"02/12/2021",dateOfBirth:"29/03/2001",phone:"+(90) 538 316 06 89 94",email:"buse.tosun@company.com",department:"Finance",position:"Medior"}].map(t=>({...t,id:t.id||crypto.randomUUID()})),ve=dt(ft((t,e)=>({employees:[],addEmployee:e=>t(t=>({employees:[...t.employees,{...e,id:crypto.randomUUID()}]})),removeEmployee:e=>t(t=>({employees:t.employees.filter(t=>t.id!==e)})),updateEmployee:e=>t(t=>({employees:t.employees.map(t=>t.id===e.id?e:t)})),loadEmployees:()=>{const e=localStorage.getItem("employee-store");if(e){const i=JSON.parse(e);t({employees:i.state.employees})}else t({employees:ge})}}),{name:"employee-store",storage:ht(()=>localStorage),onRehydrateStorage:()=>t=>{localStorage.getItem("employee-store")||t.setState({employees:ge})}}));ve.getState().loadEmployees();const be=yt.getState().appLang;document.querySelector("html").lang=be;class we extends at{static styles=a`
    .input-box {
      position: relative;
      width: 350px;
    }
    ::slotted([slot='control']) {
      width: 100%;
      padding: 10px;
      border: 1.5px solid #e0e0e0;
      border-radius: 10px;
      background: #fff;
      font-size: 1rem;
      color: #4d4d4d;
      outline: none;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    ::slotted([slot='control']::placeholder) {
      color: #bdbdbd;
    }
    :host(:focus-within) ::slotted([slot='control']) {
      border-color: #ff6600;
    }
    /* Icon slot */
    .icon-slot {
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      pointer-events: none;
    }
  `;static properties={value:{type:String,reflect:!0}};constructor(){super(),this.value="",this._onInput=this._onInput.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("input",this._onInput)}disconnectedCallback(){this.removeEventListener("input",this._onInput),super.disconnectedCallback()}_onInput(t){const e=t.target;"control"===e.slot&&e instanceof HTMLInputElement&&(this.value=e.value,this.dispatchEvent(new CustomEvent("input-changed",{detail:{value:this.value},bubbles:!0,composed:!0})))}_wire(){const t=this.querySelector('slot[name="control"]');t.addEventListener("input",this._onInput.bind(this)),t.addEventListener("change",this._onChange.bind(this))}_onChange(t){this.dispatchEvent(new CustomEvent("input-change",{detail:{value:t.target.value},bubbles:!0,composed:!0}))}render(){return j`
      <div class="input-box">
        <slot name="label"></slot>
        <slot name="control"></slot>
        <span class="icon-slot">
          <slot name="icon"></slot>
        </span>
      </div>
    `}}customElements.define("input-component",we);class Ee extends at{static styles=a`
    .pagination {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
    }
    .pagination button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
    .pagination .active {
      font-weight: 600;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 50%;
      padding: 0.3rem 0.6rem;
    }
    .page-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .page-info {
      margin: 0 1rem;
      font-size: 1rem;
      display: none;
    }

    @media (max-width: 575.98px) {
      .page-buttons {
        display: none;
      }
      .page-info {
        display: block;
      }
    }
  `;static properties={data:{type:Array,required:!0},currentPage:{type:Number},pageSize:{type:Number}};constructor(){super(),this.currentPage=1,this.pageSize=5}#C(t,e){const i=[];for(let n=t;n<=e;n++)i.push(n);return i}goToPage(t){const e=this.#_();t<1||t>e.length||(this.currentPage=t,this._dispatch())}#_(){const t=Math.ceil(this.data.length/this.pageSize);return Array.from({length:t},(t,e)=>e+1)}_dispatch(){const t=(this.currentPage-1)*this.pageSize,e=this.data.slice(t,t+this.pageSize);this.dispatchEvent(new CustomEvent("onPageChange",{detail:{page:this.currentPage,pagedData:e}}))}updated(t){(t.has("data")||t.has("currentPage")||t.has("pageSize"))&&this._dispatch()}get pagedData(){const t=(this.currentPage-1)*this.pageSize;return this.dispatchEvent(new CustomEvent("onPageChange",{detail:{pagedData:this.data.slice(t,t+this.pageSize)}})),this.data.slice(t,t+this.pageSize)}get paginationButtons(){const t=this.#_().length,e=this.currentPage;if(t<=5)return Array.from({length:t},(t,e)=>e+1);const i=[],n=t-e<5;return e<5?(i.push(...this.#C(1,5)),i.push("..."),i.push(t)):n?(i.push(1),i.push("..."),i.push(...this.#C(t-5+1,t))):(i.push(1),i.push("..."),i.push(...this.#C(e-2,e+2)),i.push("..."),i.push(t)),i}render(){const t=this.paginationButtons,e=1===this.currentPage,i=this.currentPage===this.#_().length;return t.length>1?j`
          <div class="pagination">
            <button
              ?disabled=${e}
              @click=${()=>this.goToPage(this.currentPage-1)}
            >
              ${((t=24,e="var(--primary-color)")=>j`
  <svg
    width="${t}"
    height="${t}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Previous"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="13 4 7 10 13 16"
      stroke="${e}"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`)(24,e?"gray":"var(--primary-color)")}
            </button>

            <span class="page-info">
              ${lt("page")} ${this.currentPage} ${lt("of")}
              ${this.#_().length}
            </span>

            <span class="page-buttons">
              ${t.map(t=>"..."===t?j`<span class="ellipsis">…</span>`:j`<button
                      class=${t===this.currentPage?"active":""}
                      @click=${()=>this.goToPage(t)}
                    >
                      ${t}
                    </button>`)}
            </span>

            <button
              ?disabled=${i}
              @click=${()=>this.goToPage(this.currentPage+1)}
            >
              ${((t=24,e="var(--primary-color)")=>j`
  <svg
    width="${t}"
    height="${t}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Next"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      points="7 4 13 10 7 16"
      stroke="${e}"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`)(24,i?"gray":"var(--primary-color)")}
            </button>
          </div>
        `:null}}customElements.define("pagination-component",Ee);const Ne=(t=24,e="var(--primary-color)")=>j`<svg
  slot="icon"
  width=${t}
  height=${t}
  fill="none"
  stroke=${e}
  stroke-width="2"
  viewBox="0 0 24 24"
>
  <circle cx="11" cy="11" r="7" />
  <line x1="16" y1="16" x2="21" y2="21" />
</svg>`;class Oe extends at{static properties={columns:{type:Array},data:{type:Array},pageSize:{type:Number},currentPage:{type:Number},searchValue:{type:String},pagedRows:{type:Array,state:!0},fadingItems:{type:Set}};static styles=a`
    .table-container {
      height: 100%;
      overflow: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    th,
    td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
      white-space: nowrap;
    }
    th {
      color: var(--secondary-color);
      font-size: 0.8rem;
      padding: 1.5rem;
    }
    tr td {
      padding: 1.75rem;
    }
    tr:last-child td {
      border-bottom: none;
    }

    tr.fade-out {
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
    .pagination {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
    }
    .pagination button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }
    .pagination .active {
      font-weight: 600;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 50%;
      padding: 0.3rem 0.6rem;
    }
    .search-container {
      margin-bottom: 1rem;
    }
    .no-data {
      text-align: center;
      padding: 1.5rem;
      color: #f65656;
    }
  `;constructor(){super(),this.data=[],this.columns=[],this.pageSize=5,this.currentPage=1,this.searchValue="",this.pagedRows=[]}connectedCallback(){super.connectedCallback();const t=new URLSearchParams(window.location.search);this.searchValue=t.get("search")||"",this.currentPage=1,this._syncPagedRows()}updated(t){(t.has("searchValue")||t.has("data")||t.has("currentPage"))&&(this.currentPage=Math.min(this.currentPage,this.totalPages||1),this._syncPagedRows())}get filteredData(){if(!this.searchValue)return this.data;const t=this.searchValue.toLowerCase();return this.data.filter(e=>this.columns.some(i=>{const n=e[i.key];return null!=n&&n.toString().toLowerCase().includes(t)}))}get totalPages(){return Math.ceil(this.filteredData.length/this.pageSize)}_syncPagedRows(){const t=(this.currentPage-1)*this.pageSize;this.pagedRows=this.filteredData.slice(t,t+this.pageSize)}handleSearch(t){this.searchValue=t.detail?.value??t.target?.value??"",this.currentPage=1;const e=new URLSearchParams;this.searchValue&&e.set("search",this.searchValue),window.history.replaceState({},"",window.location.pathname+(e.toString()?`?${e}`:""))}handlePageChange(t){this.currentPage=t.detail.page}render(){return j`
      <div class="search-container">
        <input-component>
          <input
            slot="control"
            .value=${this.searchValue}
            @input=${this.handleSearch}
            type="text"
            placeholder="${lt("search")}"
          />
          ${Ne()}
        </input-component>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>j`<th scope="col">${t.label}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.pagedRows.length?this.pagedRows.map(t=>j`<tr
                    class="${this.fadingItems?.has(t.id)?"fade-out":""}"
                  >
                    ${this.columns.map(e=>e.render?e.render(t):j`<td>${t[e.key]}</td>`)}
                  </tr>`):j`<tr>
                  <td colspan="${this.columns.length}" class="no-data">
                    ${lt("noData")}
                  </td>
                </tr>`}
          </tbody>
        </table>
      </div>

      <pagination-component
        .data=${this.filteredData}
        .pageSize=${this.pageSize}
        .currentPage=${this.currentPage}
        @onPageChange=${this.handlePageChange}
      ></pagination-component>
    `}}customElements.define("table-component",Oe);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e=1,ke=2,xe=t=>(...e)=>({_$litDirective$:t,values:e});class Se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Be(t,e);return!0},Ae=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Te=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Me(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(t){void 0!==this._$AN?(Ae(this),this._$AM=t,Te(this)):this._$AM=t}function _e(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)Be(n[t],!1),Ae(n[t]);else null!=n&&(Be(n,!1),Ae(n));else Be(this,t)}const Me=t=>{t.type==ke&&(t._$AP??=_e,t._$AQ??=Ce)};class Re extends Se{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Te(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Be(this,t),Ae(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class ze extends Re{constructor(){super(...arguments),this.prevData={}}render(t){return L}update(t,[e]){var i;this.element!==t.element&&(this.element=t.element),this.host=(null===(i=t.options)||void 0===i?void 0:i.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:i}=this;for(const n in t){const o=t[n];o!==e[n]&&(i[n]=o)}}groom(t){const{prevData:e,element:i}=this;if(e)for(const n in e)t&&(n in t||i[n]!==e[n])||(i[n]=void 0)}}class Pe extends ze{constructor(){super(...arguments),this.eventData={}}apply(t){if(t)for(const e in t){const i=t[e];i!==this.eventData[e]&&this.applyEvent(e,i)}}applyEvent(t,e){const{prevData:i,element:n}=this;this.eventData[t]=e;i[t]&&n.removeEventListener(t,this,e),n.addEventListener(t,this,e)}groom(t){const{prevData:e,element:i}=this;if(e)for(const n in e)t&&(n in t||i[n]!==e[n])||this.groomEvent(n,e[n])}groomEvent(t,e){const{element:i}=this;delete this.eventData[t],i.removeEventListener(t,this,e)}handleEvent(t){const e=this.eventData[t.type];"function"==typeof e?e.call(this.host,t):e.handleEvent(t)}disconnected(){const{eventData:t,element:e}=this;for(const i in t){const n=i.slice(1),o=t[i];e.removeEventListener(n,this,o)}}reconnected(){const{eventData:t,element:e}=this;for(const i in t){const n=i.slice(1),o=t[i];e.addEventListener(n,this,o)}}}const De=xe(class extends Pe{apply(t){if(!t)return;const{prevData:e,element:i}=this;for(const n in t){const o=t[n];if(o===e[n])continue;const a=n.slice(1);switch(n[0]){case"@":this.eventData[a]=o,this.applyEvent(a,o);break;case".":i[a]=o;break;case"?":o?i.setAttribute(a,""):i.removeAttribute(a);break;default:null!=o?i.setAttribute(n,String(o)):i.removeAttribute(n)}}}groom(t){const{prevData:e,element:i}=this;if(e)for(const n in e){const o=n.slice(1);if(!t||!(n in t)&&i[o]===e[n])switch(n[0]){case"@":this.groomEvent(o,e[n]);break;case".":i[o]=void 0;break;case"?":i.removeAttribute(o);break;default:i.removeAttribute(n)}}}}),Fe=xe(class extends Se{constructor(t){if(super(t),t.type!==$e||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return U}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class He extends at{static styles=a`
    button {
      padding: 0.75rem 1rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      width: 100%;
      font-weight: 600;
    }
    .primary {
      background-color: var(--primary-color);
      color: #fff;
    }
    .secondary {
      background-color: transparent;
      border: 1px solid #525099;
      color: #525099;
    }
  `;static properties={label:{type:String},variant:{type:String},type:{type:String},name:{type:String},buttonProps:{type:Object}};render(){return j`
      <button
        ...=${De(this.buttonProps)}
        class=${Fe({primary:"primary"===this.variant,secondary:"secondary"===this.variant})}
        name=${this.name}
        type=${this.type||"button"}
      >
        ${this.label}
      </button>
    `}}customElements.define("button-component",He);class Je extends at{static properties={title:{type:String},message:{type:String},confirmText:{type:String},cancelText:{type:String},open:{type:Boolean,reflect:!0}};static styles=a`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      display: none;
    }
    :host([open]) {
      display: flex;
    }
    .dialog {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 1rem;
      border-radius: 5px;
      max-width: 90vw;
      width: 430px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    .dialog-header {
      display: flex;
      justify-content: space-between;
    }
    .dialog-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--primary-color);
    }
    .dialog-message {
      font-size: 1rem;
      color: #333;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .dialog-footer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .dialog-close {
      cursor: pointer;
    }
    .confirm {
      background: var(--primary-color, #007bff);
      color: #fff;
    }
    .cancel {
      background: #e0e0e0;
      color: #333;
    }
  `;constructor(){super(),this.open=!1,this.title="",this.message="",this.confirmText="Confirm",this.cancelText="Cancel"}_onConfirm(){this.dispatchEvent(new CustomEvent("dialog-confirm",{bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this._escListener=t=>{!this.open||"Escape"!==t.key&&"Esc"!==t.key||this._onCancel()},window.addEventListener("keydown",this._escListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._escListener)}render(){return j`
      <div class="dialog">
        <div class="dialog-header">
          <div class="dialog-title">${this.title}</div>
          <div class="dialog-close" @click=${this._onCancel}>
            ${((t=20,e="var(--primary-color)")=>j`
  <svg
    width="${t}"
    height="${t}"
    viewBox="0 0 20 20"
    fill="none"
    aria-label="Close"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="5"
      y1="5"
      x2="15"
      y2="15"
      stroke="${e}"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="15"
      y1="5"
      x2="5"
      y2="15"
      stroke="${e}"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
`)(24,"var(--primary-color)")}
          </div>
        </div>
        <div class="dialog-message">${this.message}</div>
        <div class="dialog-footer">
          <button-component
            @click=${this._onConfirm}
            variant="primary"
            label=${this.confirmText}
          ></button-component>
          <button-component
            @click=${this._onCancel}
            variant="secondary"
            label=${this.cancelText}
          ></button-component>
        </div>
      </div>
    `}}function je({title:t="",message:e="",confirmText:i="Confirm",cancelText:n="Cancel"}={}){return new Promise(o=>{let a=document.querySelector("dialog-component");a||(a=document.createElement("dialog-component"),document.body.appendChild(a)),a.title=t,a.message=e,a.confirmText=i,a.cancelText=n,a.open=!0;const r=()=>{a.open=!1,a.removeEventListener("dialog-confirm",s),a.removeEventListener("dialog-cancel",l)},s=()=>{r(),o(!0)},l=()=>{r(),o(!1)};a.addEventListener("dialog-confirm",s),a.addEventListener("dialog-cancel",l)})}customElements.define("dialog-component",Je);class Ue extends at{static properties={data:{type:Array},pagedRows:{state:!0},pageSize:{type:Number},currentPage:{type:Number},searchValue:{type:String}};static styles=a`
    .employee-card-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;
      padding: 0.5rem 0;
    }

    .employee-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      width: 100%;
      background-color: #fff;
      border-radius: 0.7rem;
      box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.08);
      padding: 1rem;
      box-sizing: border-box;
    }

    .employee-field {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .label {
      color: #b3ada7;
      font-size: 0.9rem;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0.3rem;
    }

    .value {
      color: #222;
      font-size: 1rem;
      font-weight: 600;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .employee-actions {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin-top: 1rem;
    }

    .edit-btn,
    .delete-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.6rem 1rem;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      width: 100%;
    }

    .edit-btn {
      background: #5b53a6;
      color: #fff;
    }

    .delete-btn {
      background: #ff6200;
      color: #fff;
    }

    .edit-btn:hover {
      background: #473e8f;
    }

    .delete-btn:hover {
      background: #e65100;
    }

    @media (min-width: 768px) {
      .employee-card-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .employee-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 1.5rem;
        padding: 1.5rem;
      }

      .employee-actions {
        flex-direction: row;
        gap: 1rem;
      }

      .edit-btn,
      .delete-btn {
        width: auto;
        flex: 1;
        font-size: 1rem;
        padding: 0.6rem 1.3rem;
      }

      .label {
        font-size: 0.95rem;
      }

      .value {
        font-size: 1.1rem;
      }
    }

    @media (min-width: 1200px) {
      .employee-card-list {
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
      }

      .employee-grid {
        gap: 1.2rem 2rem;
        padding: 1.5rem 1.2rem;
      }
    }

    @media (min-width: 1400px) {
      .employee-card-list {
        gap: 3rem;
      }
    }

    @media (max-width: 480px) {
      .employee-card-list {
        padding: 0.25rem 0;
        gap: 1rem;
      }

      .employee-grid {
        padding: 0.8rem;
        gap: 0.8rem;
      }

      .label {
        font-size: 0.85rem;
      }

      .value {
        font-size: 0.95rem;
      }

      .edit-btn,
      .delete-btn {
        font-size: 0.85rem;
        padding: 0.5rem 0.8rem;
      }
    }
  `;constructor(){super(),this.data=[],this.pageSize=5,this.currentPage=1,this.pagedRows=[]}updated(t){(t.has("data")||t.has("pageSize")||t.has("currentPage"))&&this.#M()}handlePageChange(t){this.currentPage=t.detail.page}editEmployee(t){ue.go(`/add-edit-employee?id=${t.id}`)}async removeEmployee(t){await je({title:"Delete Employee",message:`Are you sure you want to delete this employee? ${t.firstName} ${t.lastName}`,confirmText:"Yes, Delete",cancelText:"No"})&&ve.getState().removeEmployee(t.id)}get filteredData(){if(!this.searchValue)return this.data;const t=this.searchValue.toLowerCase();return this.data.filter(e=>Object.values(e).some(e=>e.toString().toLowerCase().includes(t)))}handleSearch(t){this.searchValue=t.target.value,this.currentPage=1,this.#M()}#M(){const t=(this.currentPage-1)*this.pageSize;this.pagedRows=this.filteredData.slice(t,t+this.pageSize)}#R(t){return j`
      <div class="employee-grid">
        <div class="employee-field">
          <span class="label">First Name:</span>
          <span class="value">${t.firstName||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Last Name:</span>
          <span class="value">${t.lastName||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Date of Employment:</span>
          <span class="value">${t.dateOfEmployment||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Date of Birth:</span>
          <span class="value">${t.dateOfBirth||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Phone</span>
          <span class="value">${t.phone||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Email</span>
          <span class="value">${t.email||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Department</span>
          <span class="value">${t.department||""}</span>
        </div>
        <div class="employee-field">
          <span class="label">Position</span>
          <span class="value">${t.position||""}</span>
        </div>
        <div class="employee-actions">
          <button @click=${()=>this.editEmployee(t)} class="edit-btn">
            <span class="icon">✏️</span> Edit
          </button>
          <button @click=${()=>this.removeEmployee(t)} class="delete-btn">
            <span class="icon">🗑️</span> Delete
          </button>
        </div>
      </div>
    `}render(){return j`
      <input-component
        .placeholder=${"Search"}
        .value=${this.searchValue}
        @onChange=${this.handleSearch}
      >
        <input
          slot="control"
          type="text"
          placeholder="Search..."
          .value=${this.searchValue||""}
          @input=${this.handleSearch}
        />
        ${Ne()}
      </input-component>
      <div class="employee-card-list">
        ${this.pagedRows.length?this.pagedRows.map(t=>this.#R(t)):j`<div class="no-data">${lt("noData")}</div>`}
      </div>
      <pagination-component
        .data=${this.filteredData}
        .pageSize=${this.pageSize}
        .currentPage=${this.currentPage}
        @onPageChange=${this.handlePageChange}
      ></pagination-component>
    `}}customElements.define("grid-component",Ue);class Le extends at{static styles=a`
    h2 {
      color: var(--primary-color);
    }
    .header_right {
      display: flex;
      flex-direction: row;
      margin-right: 1rem;
      gap: 1rem;
    }
    .header_right div {
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .employee-card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .employee-card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
      gap: 2rem;
      width: 100%;
      margin: 0 auto;
      padding: 1rem 0;
    }

    .employee-fade-out {
      opacity: 0;
      transition: opacity 0.3s ease-out;
      pointer-events: none;
    }

    @media (max-width: 575.98px) {
      .employee-card-list {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `;static properties={employees:{type:Array,state:!0},displayMode:{type:String,state:!0},fadingEmployees:{type:Set,state:!0}};constructor(){super(),this.displayMode=yt.getState().employeeDisplayMode,this.employees=ve.getState().employees,this.fadingEmployees=new Set,ve.subscribe(t=>{this.employees=t.employees}),yt.subscribe(t=>{this.displayMode=t.employeeDisplayMode})}async removeEmployee(t){await je({title:"Delete Employee",message:`Are you sure you want to delete this employee? ${t.firstName} ${t.lastName}`,confirmText:"Yes, Delete",cancelText:"No"})&&(this.fadingEmployees.add(t.id),this.requestUpdate(),setTimeout(()=>{ve.getState().removeEmployee(t.id),this.fadingEmployees.delete(t.id),this.requestUpdate()},300))}changeDisplayMode(t){yt.getState().setEmployeeDisplayMode(t),this.displayMode=t}get columns(){return[{key:"firstName",label:lt("firstName")},{key:"lastName",label:lt("lastName")},{key:"dateOfEmployment",label:lt("dateOfEmployment")},{key:"dateOfBirth",label:lt("dateOfBirth")},{key:"phone",label:lt("phone")},{key:"email",label:lt("email")},{key:"department",label:lt("department")},{key:"position",label:lt("position")},{key:"actions",label:lt("actions"),render:t=>j`
          <td>
            <div
              class="actions"
              style="display: flex; flex-direction: row; gap: 1rem;"
            >
              <a
                href="/add-edit-employee?id=${t.id}"
                style="text-decoration: none;"
              >
                <img
                  width="20"
                  height="20"
                  src="/public/assets/icons/edit_icon.svg"
                />
              </a>
              <img
                width="20"
                height="20"
                src="/public/assets/icons/trash_icon.svg"
                @click=${()=>this.removeEmployee(t)}
                style="cursor: pointer;"
              />
            </div>
          </td>
        `}]}render(){return j`
      <div>
        <div class="header">
          <h2>${lt("employeeList")}</h2>
          <div class="header_right">
            <div @click=${()=>this.changeDisplayMode("table")}>
              ${((t=24,e="var(--primary-color)")=>j`<svg
  width=${t}
  height=${t}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <path
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
      fill=${e}
    />
    <path
      d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
      fill=${e}
    />
    <path
      d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
      fill=${e}
    />
  </g>
</svg>`)(30,"table"===this.displayMode?"var(--primary-color)":"gray")}
            </div>
            <div @click=${()=>this.changeDisplayMode("grid")}>
              ${((t=24,e="var(--primary-color)")=>j`<svg
  fill=${e}
  width=${t}
  height=${t}
  viewBox="0 0 32 32"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  stroke="${e}"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0" />

  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <g id="SVGRepo_iconCarrier">
    <title>grid</title>
    <path
      d="M8 12h4v-4h-4v4zM14 12h4v-4h-4v4zM20 8v4h4v-4h-4zM8 18h4v-4h-4v4zM14 18h4v-4h-4v4zM20 18h4v-4h-4v4zM8 24h4v-4h-4v4zM14 24h4v-4h-4v4zM20 24h4v-4h-4v4z"
    />
  </g>
</svg>`)(30,"grid"===this.displayMode?"var(--primary-color)":"gray")}
            </div>
          </div>
        </div>
        ${"grid"===this.displayMode?j` <grid-component .data=${this.employees}></grid-component> `:j`<table-component
              .data=${this.employees}
              .columns=${this.columns}
              .fadingItems=${this.fadingEmployees}
            ></table-component>`}
      </div>
    `}}customElements.define("list-employees",Le);var Ie=Object.freeze({__proto__:null});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=t=>t??L;function Ye(t){if(!t)return"";const[e,i,n]=t.split("/");return e&&i&&n?`${n}-${i.padStart(2,"0")}-${e.padStart(2,"0")}`:void 0}class Ke extends at{static styles=a`
    h2 {
      color: var(--primary-color);
    }

    .add-edit-employee {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .form {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      padding: 2rem;
    }

    input-component {
      width: 100%;
      min-width: 0; /* Grid overflow'u önlemek için */
    }

    .form input:not([slot='control']) {
      display: none;
    }

    .actions {
      display: flex;
      justify-content: center;
      grid-column: 1 / -1;
      gap: 1rem;
      width: 100%;
      margin-top: 1rem;
    }

    button-component {
      width: 200px;
      flex-shrink: 0;
    }

    @media (max-width: 991.98px) {
      .form {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        padding: 1.5rem;
      }
    }

    @media (max-width: 575.98px) {
      .form {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
      }

      button-component {
        width: 100%;
      }

      .actions {
        flex-direction: column;
        align-items: center;
      }
    }
  `;static properties={employee:{type:Object},isEditing:{type:Boolean,state:!0}};constructor(){super(),this.employee=null,this.isEditing=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.handleUrlChange),this.#z()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.handleUrlChange)}#P(t){t?window.location.replace(t):window.location.reload()}getIdParam(){return new URLSearchParams(window.location.search).get("id")}firstUpdated(){const t=this.getIdParam();t&&(this.title=lt("editEmployee"),this.employee=ve.getState().employees.find(e=>e.id===t))}getFormData(){const t=this.shadowRoot.querySelector("form"),e=new FormData(t),i=Object.fromEntries(e.entries());return Array.from(t.elements).filter(t=>t instanceof HTMLInputElement&&"date"===t.type).forEach(t=>{const e=t.name,n=i[e];n&&(i[e]=function(t){const[e,i,n]=t.split("-");return e&&i&&n?`${n.padStart(2,"0")}/${i.padStart(2,"0")}/${e}`:""}(n))}),i}handleUrlChange=()=>{this.#z()};#z(){const t=this.getIdParam();t?(this.isEditing=!0,this.employee=ve.getState().employees.find(e=>e.id===t)):(this.isEditing=!1,this.employee=null),this.requestUpdate()}async updateEmployee(){if(await je({title:lt("updateEmployeeTitle"),message:lt("areYouSureYouWantToUpdateThisEmployee"),confirmText:lt("update"),cancelText:lt("no")})){const t=this.getFormData();ve.getState().updateEmployee(t)}}async addEmployee(t){t.preventDefault();const e=this.shadowRoot.querySelector("form");if(e.requestSubmit(),e.checkValidity()){if(await je({title:lt("addEmployee"),message:lt("areYouSureYouWantToAddThisEmployee"),confirmText:lt("save"),cancelText:lt("no")})){const t=new FormData(e),i=Object.fromEntries(t.entries().filter(([t,e])=>"id"!==t));ve.getState().addEmployee(i),this.#P("/add-edit-employee")}}}#D(){ue.go("/employees")}render(){return j`
      <div class="add-edit-employee">
        <div class="header">
          <h2>${this.isEditing?lt("editEmployee"):lt("addEmployee")}</h2>
        </div>
        <form class="form" @submit=${t=>t.preventDefault()}>
          <input-component>
            <label slot="label">${lt("firstName")}</label>
            <input
              required
              slot="control"
              type="text"
              name="firstName"
              placeholder="${lt("firstName")}"
              value=${this.employee?.firstName||""}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("lastName")}</label>
            <input
              required
              slot="control"
              type="text"
              name="lastName"
              placeholder="${lt("lastName")}"
              value=${this.employee?.lastName||""}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("dateOfEmployment")}</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfEmployment"
              value=${Ge(Ye(this.employee?.dateOfEmployment))}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("dateOfBirth")}</label>
            <input
              required
              slot="control"
              type="date"
              name="dateOfBirth"
              placeholder="${lt("dateOfBirth")}"
              value=${Ge(Ye(this.employee?.dateOfBirth))}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("phone")}</label>
            <input
              required
              slot="control"
              type="tel"
              name="phone"
              placeholder="${lt("phone")}"
              value=${this.employee?.phone||""}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("email")}</label>
            <input
              required
              slot="control"
              type="email"
              name="email"
              placeholder="${lt("email")}"
              value=${this.employee?.email||""}
            />
          </input-component>
          <input-component>
            <label slot="label">${lt("department")}</label>
            <select
              required
              slot="control"
              type="text"
              name="department"
              placeholder="${lt("department")}"
              .value=${this.employee?.department||""}
            >
              <option value="">${lt("selectDepartment")}</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Analytics">Analytics</option>
            </select>
          </input-component>
          <input-component>
            <label slot="label">${lt("position")}</label>
            <select
              required
              slot="control"
              type="select"
              name="position"
              placeholder="${lt("position")}"
              .value=${this.employee?.position||""}
            >
              <option value="">${lt("selectPosition")}</option>
              <option value="Senior">Senior</option>
              <option value="Medior">Medior</option>
              <option value="Junior">Junior</option>
            </select>
          </input-component>
          <input-component>
            <input
              type="hidden"
              slot="control"
              name="id"
              value=${this.employee?.id||""}
            />
          </input-component>
          <div class="actions">
            <button-component
              name="save"
              label=${this.isEditing?lt("update"):lt("save")}
              variant="primary"
              type="button"
              @click=${this.isEditing?this.updateEmployee:this.addEmployee}
            ></button-component>
            <button-component
              name="cancel"
              label=${lt("cancel")}
              variant="secondary"
              @click=${this.#D}
            ></button-component>
          </div>
        </form>
      </div>
    `}}customElements.define("add-edit-employee",Ke);var Ve=Object.freeze({__proto__:null});
//# sourceMappingURL=main.dist.js.map
