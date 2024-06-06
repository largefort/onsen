(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3481],{2602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2253),o=n(4932);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},noSSR:function(){return l}});var a=n(8754);n(5893),n(7294);var u=a._(n(5491));function i(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){var n=u.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r._({},a,e));var s=(a=r._({},a,t)).loader;return(a.loadableGenerated&&(a=r._({},a,a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n(o._(r._({},a),{loader:function(){return null!=s?s().then(i):Promise.resolve(i(function(){return null}))}})):(delete a.webpack,delete a.modules,l(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});var r=n(8754)._(n(7294)).default.createContext(null)},5491:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0});var r=n(8564),o=n(2267),a=n(2253),u=n(4932);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var i=n(8754)._(n(7294)),l=n(1159),s=[],c=[],f=!1;function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var m=function(){function e(t,n){r._(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o._(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a._(u._(a._({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new m(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!f){var a=n.webpack?n.webpack():n.modules;a&&c.push(function(e){var t=!0,n=!1,r=void 0;try{for(var u,i=a[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var l=u.value;if(e.includes(l))return o()}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}})}function u(e,t){o(),(a=i.default.useContext(l.LoadableContext))&&Array.isArray(n.modules)&&n.modules.forEach(function(e){a(e)});var a,u=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),i.default.useMemo(function(){var t;return u.loading||u.error?i.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?i.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return u.preload=function(){return o()},u.displayName="LoadableComponent",i.default.forwardRef(u)}(d,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return h(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){h(s).then(e,t)})},p.preloadReady=function(e){return void 0===e&&(e=[]),new Promise(function(t){var n=function(){return f=!0,t()};h(c,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady;var y=p},5152:function(e,t,n){e.exports=n(2602)},1526:function(e,t,n){"use strict";n.d(t,{M:function(){return y}});var r=n(7294),o=n(8868);function a(){let e=(0,r.useRef)(!1);return(0,o.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var u=n(2074),i=n(240),l=n(6681);class s extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let n=(0,r.useId)(),o=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:r,top:u,left:i}=a.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;let l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${u}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),r.createElement(s,{isPresent:t,childRef:o,sizeRef:a},r.cloneElement(e,{ref:o}))}let f=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:a,presenceAffectsLayout:u,mode:s})=>{let f=(0,l.h)(d),m=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:m,initial:t,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;o&&o()},register:e=>(f.set(e,!1),()=>f.delete(e))}),u?void 0:[n]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!o||o()},[n]),"popLayout"===s&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(i.O.Provider,{value:p},e)};function d(){return new Map}var m=n(5364),p=n(5487);let h=e=>e.key||"",y=({children:e,custom:t,initial:n=!0,onExitComplete:i,exitBeforeEnter:l,presenceAffectsLayout:s=!0,mode:c="sync"})=>{var d;(0,p.k)(!l,"Replace exitBeforeEnter with mode='wait'");let y=(0,r.useContext)(m.p).forceRender||function(){let e=a(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,r.useCallback)(()=>u.Wi.postRender(o),[o]),t]}()[0],v=a(),_=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(e),g=_,b=(0,r.useRef)(new Map).current,E=(0,r.useRef)(g),x=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,o.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let n=h(e);t.set(n,e)})}(_,x),E.current=g}),d=()=>{C.current=!0,x.clear(),b.clear()},(0,r.useEffect)(()=>()=>d(),[]),C.current)return r.createElement(r.Fragment,null,g.map(e=>r.createElement(f,{key:h(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:s,mode:c},e)));g=[...g];let w=E.current.map(h),k=_.map(h),P=w.length;for(let e=0;e<P;e++){let t=w[e];-1!==k.indexOf(t)||b.has(t)||b.set(t,void 0)}return"wait"===c&&b.size&&(g=[]),b.forEach((e,n)=>{if(-1!==k.indexOf(n))return;let o=x.get(n);if(!o)return;let a=w.indexOf(n),u=e;u||(u=r.createElement(f,{key:h(o),isPresent:!1,onExitComplete:()=>{x.delete(n),b.delete(n);let e=E.current.findIndex(e=>e.key===n);if(E.current.splice(e,1),!b.size){if(E.current=_,!1===v.current)return;y(),i&&i()}},custom:t,presenceAffectsLayout:s,mode:c},o),b.set(n,u)),g.splice(a,0,u)}),g=g.map(e=>{let t=e.key;return b.has(t)?e:r.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:s,mode:c},e)}),r.createElement(r.Fragment,null,b.size?g:g.map(e=>(0,r.cloneElement)(e)))}},1016:function(e,t,n){"use strict";n.d(t,{m:function(){return B}});var r,o=n(7294);let a=(0,o.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),u=(0,o.createContext)({});var i=n(240),l=n(8868),s=n(398),c=n(1804),f=n(7732),d=n(7504);function m(e){return Array.isArray(e)?e.join(" "):e}var p=n(1879),h=n(1741),y=n(5364),v=n(1705);let _=Symbol.for("motionComponentSymbol");var g=n(2627),b=n(6816),E=n(406),x=n(8057);let C=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function w(e,t,n){for(let r in t)(0,E.i)(t[r])||(0,b.j)(r,n)||(e[r]=t[r])}let k=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function P(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||k.has(e)}let M=e=>!P(e);try{(r=require("@emotion/is-prop-valid").default)&&(M=e=>e.startsWith("on")?!P(e):r(e))}catch(e){}var R=n(5415);let S=()=>({...C(),attrs:{}});var A=n(9854),O=n(8504),L=n(6832),j=n(2445),T=n(9432),D=n(6681),V=n(6399);let I=e=>(t,n)=>{let r=(0,o.useContext)(u),a=(0,o.useContext)(i.O),l=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){let u={latestValues:function(e,t,n,r){let o={},a=r(e,{});for(let e in a)o[e]=(0,V.b)(a[e]);let{initial:u,animate:i}=e,l=(0,d.G)(e),s=(0,d.M)(e);t&&s&&!l&&!1!==e.inherit&&(void 0===u&&(u=t.initial),void 0===i&&(i=t.animate));let c=!!n&&!1===n.initial,f=(c=c||!1===u)?i:u;return f&&"boolean"!=typeof f&&!(0,j.H)(f)&&(Array.isArray(f)?f:[f]).forEach(t=>{let n=(0,T.o)(e,t);if(!n)return;let{transitionEnd:r,transition:a,...u}=n;for(let e in u){let t=u[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(o[e]=t)}for(let e in r)o[e]=r[e]}),o}(r,o,a,e),renderState:t()};return n&&(u.mount=e=>n(r,e,u)),u})(e,t,r,a);return n?l():(0,D.h)(l)},W={useVisualState:I({scrapeMotionValuesFromProps:L.U,createRenderState:S,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){n.dimensions={x:0,y:0,width:0,height:0}}(0,R.i)(n,r,{enableHardwareAcceleration:!1},(0,A.a)(t.tagName),e.transformTemplate),(0,O.K)(t,n)}})},H={useVisualState:I({scrapeMotionValuesFromProps:n(189).U,createRenderState:C})},B=function(e){function t(t,n={}){return function({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:g}){e&&(0,p.K)(e);let b=(0,o.forwardRef)(function(p,_){var b;let E;let x={...(0,o.useContext)(a),...p,layoutId:function({layoutId:e}){let t=(0,o.useContext)(y.p).id;return t&&void 0!==e?t+"-"+e:e}(p)},{isStatic:C}=x,w=function(e){let{initial:t,animate:n}=function(e,t){if((0,d.G)(e)){let{initial:t,animate:n}=e;return{initial:!1===t||(0,f.$)(t)?t:void 0,animate:(0,f.$)(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,o.useContext)(u));return(0,o.useMemo)(()=>({initial:t,animate:n}),[m(t),m(n)])}(p),k=r(p,C);if(!C&&h.j){w.visualElement=function(e,t,n,r){let{visualElement:c}=(0,o.useContext)(u),f=(0,o.useContext)(s.u),d=(0,o.useContext)(i.O),m=(0,o.useContext)(a).reducedMotion,p=(0,o.useRef)();r=r||f.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:c,props:n,presenceContext:d,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:m}));let h=p.current;return(0,o.useInsertionEffect)(()=>{h&&h.update(n,d)}),(0,l.L)(()=>{h&&h.render()}),(0,o.useEffect)(()=>{h&&h.updateFeatures()}),(window.HandoffAppearAnimations?l.L:o.useEffect)(()=>{h&&h.animationState&&h.animationState.animateChanges()}),h}(g,k,x,t);let n=(0,o.useContext)(v.g),r=(0,o.useContext)(s.u).strict;w.visualElement&&(E=w.visualElement.loadFeatures(x,r,e,n))}return o.createElement(u.Provider,{value:w},E&&w.visualElement?o.createElement(E,{visualElement:w.visualElement,...x}):null,n(g,p,(b=w.visualElement,(0,o.useCallback)(e=>{e&&k.mount&&k.mount(e),b&&(e?b.mount(e):b.unmount()),_&&("function"==typeof _?_(e):(0,c.I)(_)&&(_.current=e))},[b])),k,C,w.visualElement))});return b[_]=g,b}(e(t,n))}if("undefined"==typeof Proxy)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}(function(e,{forwardMotionProps:t=!1},n,r){return{...(0,g.q)(e)?W:H,preloadedFeatures:n,useRender:function(e=!1){return(t,n,r,{latestValues:a},u)=>{let i=((0,g.q)(t)?function(e,t,n,r){let a=(0,o.useMemo)(()=>{let n=S();return(0,R.i)(n,t,{enableHardwareAcceleration:!1},(0,A.a)(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};w(t,e.style,e),a.style={...t,...a.style}}return a}:function(e,t,n){let r={},a=function(e,t,n){let r=e.style||{},a={};return w(a,r,e),Object.assign(a,function({transformTemplate:e},t,n){return(0,o.useMemo)(()=>{let r=C();return(0,x.r)(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(a):a}(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=a,r})(n,a,u,t),l={...function(e,t,n){let r={};for(let o in e)("values"!==o||"object"!=typeof e.values)&&(M(o)||!0===n&&P(o)||!t&&!P(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(n,"string"==typeof t,e),...i,ref:r},{children:s}=n,c=(0,o.useMemo)(()=>(0,E.i)(s)?s.get():s,[s]);return(0,o.createElement)(t,{...l,children:c})}}(t),createVisualElement:r,Component:e}})},6681:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(7294);function o(e){let t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},8868:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(7294);let o=n(1741).j?r.useLayoutEffect:r.useEffect}}]);