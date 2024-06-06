"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5347],{5347:function(e,t,r){r.d(t,{vL:function(){return x},y1:function(){return F}}),(n=a||(a={})).Call="call",n.Reply="reply",n.Syn="syn",n.SynAck="synAck",n.Ack="ack",(o=l||(l={})).Fulfilled="fulfilled",o.Rejected="rejected",(i=s||(s={})).ConnectionDestroyed="ConnectionDestroyed",i.ConnectionTimeout="ConnectionTimeout",i.NoIframeSrc="NoIframeSrc",(c||(c={})).DataCloneError="DataCloneError",(d||(d={})).Message="message";var n,o,i,a,l,s,c,d,u=(e,t)=>{let r=[],n=!1;return{destroy(o){n||(n=!0,t(`${e}: Destroying connection`),r.forEach(e=>{e(o)}))},onDestroy(e){n?e():r.push(e)}}},p=e=>(...t)=>{e&&console.log("[Penpal]",...t)};let g={"http:":"80","https:":"443"},h=/^(https?:)?\/\/([^/:]+)?(:(\d+))?/,m=["file:","data:"];var f=e=>{let t,r,n;if(e&&m.find(t=>e.startsWith(t)))return"null";let o=document.location,i=h.exec(e);i?(t=i[1]?i[1]:o.protocol,r=i[2],n=i[4]):(t=o.protocol,r=o.hostname,n=o.port);let a=n&&n!==g[t]?`:${n}`:"";return`${t}//${r}${a}`};let w=({name:e,message:t,stack:r})=>({name:e,message:t,stack:r}),v=e=>{let t=Error();return Object.keys(e).forEach(r=>t[r]=e[r]),t};var y=(e,t,r)=>{let{localName:n,local:o,remote:i,originForSending:s,originForReceiving:u}=e,p=!1,g=e=>{if(e.source!==i||e.data.penpal!==a.Call)return;if("*"!==u&&e.origin!==u){r(`${n} received message from origin ${e.origin} which did not match expected origin ${u}`);return}let{methodName:o,args:d,id:g}=e.data;r(`${n}: Received ${o}() call`);let h=e=>t=>{if(r(`${n}: Sending ${o}() reply`),p){r(`${n}: Unable to send ${o}() reply due to destroyed connection`);return}let d={penpal:a.Reply,id:g,resolution:e,returnValue:t};e===l.Rejected&&t instanceof Error&&(d.returnValue=w(t),d.returnValueIsError=!0);try{i.postMessage(d,s)}catch(e){if(e.name===c.DataCloneError){let t={penpal:a.Reply,id:g,resolution:l.Rejected,returnValue:w(e),returnValueIsError:!0};i.postMessage(t,s)}throw e}};new Promise(e=>e(t[o].apply(t,d))).then(h(l.Fulfilled),h(l.Rejected))};return o.addEventListener(d.Message,g),()=>{p=!0,o.removeEventListener(d.Message,g)}};let $=0;var C=()=>++$;let E=e=>e?e.split("."):[],k=e=>e.join("."),R=(e,t)=>{let r=E(t||"");return r.push(e),k(r)},S=(e,t,r)=>{let n=E(t);return n.reduce((e,t,o)=>(void 0===e[t]&&(e[t]={}),o===n.length-1&&(e[t]=r),e[t]),e),e},N=(e,t)=>{let r={};return Object.keys(e).forEach(n=>{let o=e[n],i=R(n,t);"object"==typeof o&&Object.assign(r,N(o,i)),"function"==typeof o&&(r[i]=o)}),r},M=e=>{let t={};for(let r in e)S(t,r,e[r]);return t};var A=(e,t,r,n,o)=>{let{localName:i,local:c,remote:u,originForSending:p,originForReceiving:g}=t,h=!1;o(`${i}: Connecting call sender`);let m=e=>(...t)=>{let r;o(`${i}: Sending ${e}() call`);try{u.closed&&(r=!0)}catch(e){r=!0}if(r&&n(),h){let t=Error(`Unable to send ${e}() call due to destroyed connection`);throw t.code=s.ConnectionDestroyed,t}return new Promise((r,n)=>{let s=C(),h=t=>{if(t.source!==u||t.data.penpal!==a.Reply||t.data.id!==s)return;if("*"!==g&&t.origin!==g){o(`${i} received message from origin ${t.origin} which did not match expected origin ${g}`);return}let p=t.data;o(`${i}: Received ${e}() reply`),c.removeEventListener(d.Message,h);let m=p.returnValue;p.returnValueIsError&&(m=v(m)),(p.resolution===l.Fulfilled?r:n)(m)};c.addEventListener(d.Message,h);let m={penpal:a.Call,id:s,methodName:e,args:t};u.postMessage(m,p)})};return Object.assign(e,M(r.reduce((e,t)=>(e[t]=m(t),e),{}))),()=>{h=!0}},j=(e,t,r,n,o)=>{let i,a;let{destroy:l,onDestroy:s}=n,c={};return n=>{if("*"!==t&&n.origin!==t){o(`Parent: Handshake - Received ACK message from origin ${n.origin} which did not match expected origin ${t}`);return}o("Parent: Handshake - Received ACK");let d={localName:"Parent",local:window,remote:n.source,originForSending:r,originForReceiving:t};return i&&i(),s(i=y(d,e,o)),a&&a.forEach(e=>{delete c[e]}),s(A(c,d,a=n.data.methodNames,l,o)),c}},P=(e,t,r,n)=>o=>{if(!o.source)return;if("*"!==r&&o.origin!==r){e(`Parent: Handshake - Received SYN message from origin ${o.origin} which did not match expected origin ${r}`);return}e("Parent: Handshake - Received SYN, responding with SYN-ACK");let i={penpal:a.SynAck,methodNames:Object.keys(t)};o.source.postMessage(i,n)},b=(e,t)=>{let{destroy:r,onDestroy:n}=t,o=setInterval(()=>{e.isConnected||(clearInterval(o),r())},6e4);n(()=>{clearInterval(o)})},I=(e,t)=>{let r;return void 0!==e&&(r=window.setTimeout(()=>{let r=Error(`Connection timed out after ${e}ms`);r.code=s.ConnectionTimeout,t(r)},e)),()=>{clearTimeout(r)}},L=e=>{if(!e.src&&!e.srcdoc){let e=Error("Iframe must have src or srcdoc property defined.");throw e.code=s.NoIframeSrc,e}},x=e=>{let{iframe:t,methods:r={},childOrigin:n,timeout:o,debug:i=!1}=e,l=p(i),s=u("Parent",l),{onDestroy:c,destroy:g}=s;n||(L(t),n=f(t.src));let h="null"===n?"*":n,m=N(r),w=P(l,m,n,h),v=j(m,n,h,s,l);return{promise:new Promise((e,r)=>{let n=I(o,g),i=r=>{if(r.source===t.contentWindow&&r.data){if(r.data.penpal===a.Syn){w(r);return}if(r.data.penpal===a.Ack){let t=v(r);t&&(n(),e(t));return}}};window.addEventListener(d.Message,i),l("Parent: Awaiting handshake"),b(t,s),c(e=>{window.removeEventListener(d.Message,i),e&&r(e)})}),destroy(){g()}}},D=(e,t,r,n)=>{let{destroy:o,onDestroy:i}=r;return r=>{if(!(e instanceof RegExp?e.test(r.origin):"*"===e||e===r.origin)){n(`Child: Handshake - Received SYN-ACK from origin ${r.origin} which did not match expected origin ${e}`);return}n("Child: Handshake - Received SYN-ACK, responding with ACK");let l="null"===r.origin?"*":r.origin,s={penpal:a.Ack,methodNames:Object.keys(t)};window.parent.postMessage(s,l);let c={localName:"Child",local:window,remote:window.parent,originForSending:l,originForReceiving:r.origin};i(y(c,t,n));let d={};return i(A(d,c,r.data.methodNames,o,n)),d}};let H=()=>{try{clearTimeout()}catch(e){return!1}return!0};var F=(e={})=>{let{parentOrigin:t="*",methods:r={},timeout:n,debug:o=!1}=e,i=p(o),l=u("Child",i),{destroy:s,onDestroy:c}=l,g=D(t,N(r),l,i),h=()=>{i("Child: Handshake - Sending SYN");let e={penpal:a.Syn};window.parent.postMessage(e,t instanceof RegExp?"*":t)};return{promise:new Promise((e,t)=>{let r=I(n,s),o=t=>{if(H()&&t.source===parent&&t.data&&t.data.penpal===a.SynAck){let n=g(t);n&&(window.removeEventListener(d.Message,o),r(),e(n))}};window.addEventListener(d.Message,o),h(),c(e=>{window.removeEventListener(d.Message,o),e&&t(e)})}),destroy(){s()}}}}}]);