"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5863],{5863:function(e,t,n){n.d(t,{H:function(){return x}});var i=n(1010),o=n(5766),a=n(2253),r=n(4932),u=n(4043),s=n(248),l=n(7582),d=n(5893),c=n(2060),f=n(7211),g=n(9844),v=n(3918),h=n(4862),_=n(3293),p=n(1758),m=n(362),y=n(8262),I=n(3197),S=function(){var e,t,n=(0,I.aF)().data,o=(0,I.d0)().saveAgentInLocalStorage,u=(0,m.a)(),s=u.agentInfo,d=u.uploadData,S=u.methods,A=S.setAgentInfo,w=S.navigateToAgent,E=S.insertToChatHistory,b=S.setJustCreatedAgent,k=S.setSampleQuestions,N=u.agentInfo,T=N.agentId,M=N.publicName,C=u.userInfo.userId,O=(0,c.t6)().mutate,U=(0,c.x)().revalidate,R=(0,c.yN)().revalidateStudioAgents,P=(0,y.useEventLogger)().addToEventsQueue,q=(0,c.x)().data,x=(e=(0,i._)(function(){return(0,l.Jh)(this,function(e){switch(e.label){case 0:return[4,(0,f.h6)(T)];case 1:return[2,e.sent()]}})}),function(){return e.apply(this,arguments)}),L=(0,c._3)().data;return{data:(0,p.ZP)([v.ch.ACTIVE_AGENT,T,M],x,{refreshInterval:"TEMPORARY_AGENT"===M?1e3:void 0,revalidateOnFocus:!0,revalidateIfStale:!1,revalidateOnMount:!1,revalidateOnReconnect:!1,onSuccess:(t=(0,i._)(function(e){var t,i,u,c;return(0,l.Jh)(this,function(l){if(i=(null==L?void 0:L.agent_name.status)==="CHANGED",!((u=null==e?void 0:e.public_name)&&i&&"TEMPORARY_AGENT"===M))return[2];k([],!0),w("/~"+u,!0),C||o((0,r._)((0,a._)({},s),{publicName:u,displayName:e.display_name}),g.uR.MY_AGENTS),c=new Date().getTime().toString(),window.localStorage.setItem("pageStartLoading",c),A({starredCount:0,messageCount:0,shareId:"",orgId:C||"",publicName:u,displayName:e.display_name,agentAccess:(null==n?void 0:n.isAnonymous)||!n?_.b8.public_write:_.b8.public_read,configuration:{widget:(0,_.av)(),welcomeMessage:"Hello human, I'm agent ".concat(u,". I'm here to answer any questions you have, or maybe you'd rather choose a question others are asking me?"),profileMessage:(null==e?void 0:e.profile)||"Sorry, no profile information found.",showInHub:!0,categories:[],showCreateAgentLink:!0,showOneAiBranding:!0,disableFactCheck:!1,allowOriginalFileAccess:!0}}),P(v.V1.AGENT_CREATED_SUCCESSFULLY,"PUBLIC_NAME_CHNAGE",{first_agent:(null==q?void 0:null===(t=q.myAgents)||void 0===t?void 0:t.length)===1,agent_id:T,public_name:u}),R(T),O();try{(0,g.ai)()&&window.parent.postMessage({event:"CREATE_AGENT_FINISHED",data:T},"https://studio.oneai.com")}catch(e){}return E({finished:!1,id:0,is_animated:!0,initial_delay:100,speaker:e.display_name||"agent",utterance:"",original_utterance:(0,h.Sf)(d),component:"action-buttons",is_welcome_message:!1}),b(!1),U(),[2]})}),function(e){return t.apply(this,arguments)})}).data}},A=function(){return S().data,null},w=n(9736),E=n(1163),b=function(){var e=(0,m.a)(),t=e.isParamsReady,n=e.methods,o=n.setHints,a=n.updateParams,r=e.agentInfo.agentId,u=(0,(0,w.fP)().getCookie)("ONEAI_UNIQUE_ID"),s=(0,p.kY)(),d=(0,E.useRouter)(),c=["chatParams",r,u].join("_"),g="true"===d.query.debug,v=(0,p.ZP)(c,(0,i._)(function(){return(0,l.Jh)(this,function(e){switch(e.label){case 0:return[4,(0,f.OS)(r,u,g)];case 1:return[2,e.sent()]}})}),{keepPreviousData:!0,revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnReconnect:!1,dedupingInterval:999999999999,refreshInterval:t?void 0:1e3,revalidateOnMount:!s.cache.get(c)&&!t,onSuccess:function(e){var t;o((null==e?void 0:null===(t=e.ux)||void 0===t?void 0:t.hints)||[]),a(null==e?void 0:e.ux)},onError:function(){a(void 0)}});return{data:v.data,isLoading:v.isLoading,error:v.error}},k=function(){return b().data,null},N=n(2496),T=n(4960),M=n(3513),C=n(5152),O=n.n(C),U=n(7294);function R(){var e=(0,m.a)(),t=e.userInfo.userId,n=e.agentInfo,o=n.publicName,a=n.agentId,r=(0,f.mi)().addRecentAgent,u=(0,I.aF)().data,s=(0,E.useRouter)(),d=(0,U.useRef)(null),c=s.pathname.startsWith("/chat/")||s.pathname.startsWith("/~chat/");return(0,U.useEffect)(function(){var e;if("/~"!==s.pathname)return(e=(0,i._)(function(){return(0,l.Jh)(this,function(e){return o&&"TEMPORARY_AGENT"!==o&&!c&&"undefined"!==o&&o&&o!==d.current&&(d.current=o,r(a)),[2]})}),function(){return e.apply(this,arguments)})(),function(){}},[o,t,u,s]),null}var P=O()(function(){return Promise.resolve().then(n.bind(n,8262))},{loadableGenerated:{webpack:function(){return[8262]}}}),q=function(){return(0,r._)((0,a._)({},(0,h.XM)()),{finished:!0,error:!0})},x=function(e){var t,n,c,y,S,b,C,O,x,L,H,D=e.value,j=e.children,Q=(0,E.useRouter)(),F=(0,u._)((0,U.useState)(D),2),Y=F[0],G=F[1],J=(0,u._)((0,U.useState)(Y.chatHistory),2),W=J[0],X=J[1],V=(0,u._)((0,U.useState)(Y.agentInfo),2),B=V[0],K=V[1],$=(0,u._)((0,U.useState)(Y.userInfo),2),Z=$[0],z=$[1],ee=(0,u._)((0,U.useState)(!1),2),et=ee[0],en=ee[1],ei=(0,u._)((0,U.useState)([]),2),eo=ei[0],ea=ei[1],er=(0,u._)((0,U.useState)(""),2),eu=er[0],es=er[1],el=(0,u._)((0,U.useState)(Y.totalMessages),2),ed=el[0],ec=el[1],ef=(0,u._)((0,U.useState)(!1),2),eg=(ef[0],ef[1]),ev=(0,u._)((0,U.useState)(void 0===Y.isParamsReady||Y.isParamsReady),2),eh=ev[0],e_=ev[1],ep=(0,u._)((0,U.useState)({input:null}),2),em=ep[0],ey=ep[1],eI=(0,u._)((0,U.useState)({type:"",requestId:"",timestamp:"",data:{}}),2),eS=eI[0],eA=eI[1],ew=(0,u._)((0,U.useState)(0),2)[1],eE=(0,u._)((0,U.useState)(Y.isShare),1)[0],eb=(0,u._)((0,U.useState)(Y.questionsPage),2),ek=eb[0],eN=eb[1],eT=(0,u._)((0,U.useState)(!1),2),eM=eT[0],eC=eT[1],eO=(0,u._)((0,U.useState)(!0),2),eU=eO[0],eR=eO[1],eP=(0,u._)((0,U.useState)(!1),2),eq=eP[0],ex=eP[1],eL=(0,u._)((0,U.useState)("TOP"),2),eH=eL[0],eD=eL[1],ej=(0,u._)((0,U.useState)(!1),2),eQ=ej[0],eF=ej[1],eY=(0,u._)((0,U.useState)(!1),2),eG=eY[0],eJ=eY[1],eW=(0,u._)((0,U.useState)(!1),2),eX=eW[0],eV=eW[1],eB=(0,u._)((0,U.useState)(!1),2),eK=eB[0],e$=eB[1],eZ=(0,u._)((0,U.useState)(!1),2),ez=eZ[0],e0=eZ[1],e1=(0,U.useRef)(),e2=(0,u._)((0,U.useState)(D.insertMode),2),e3=e2[0],e4=e2[1],e9=(0,u._)((0,U.useState)(Y.processingItems||[]),2),e6=e9[0],e5=e9[1],e8=(0,u._)((0,U.useState)(void 0),2),e7=e8[0],te=e8[1],tt=(0,u._)((0,U.useState)([]),2),tn=tt[0],ti=tt[1],to=(0,u._)((0,U.useState)(void 0),2),ta=to[0],tr=to[1],tu=(0,u._)((0,U.useState)([]),2),ts=tu[0],tl=tu[1],td=(0,u._)((0,U.useState)({shouldRecover:!1,question:""}),2),tc=td[0],tf=td[1],tg=(null==Q?void 0:null===(x=Q.asPath)||void 0===x?void 0:x.startsWith("/chat/"))||(null==Q?void 0:null===(L=Q.asPath)||void 0===L?void 0:L.startsWith("/~chat/")),tv=(0,u._)((0,U.useState)(!1),2),th=tv[0],t_=tv[1],tp=null==W?void 0:W.filter(function(e){return"agent"===e.speaker||e.speaker===B.publicName||"user"===e.speaker}),tm=(null==tp?void 0:null===(H=tp[(null==tp?void 0:tp.length)-1])||void 0===H?void 0:H.component)==="action-buttons",ty=(0,N.$h)().setTheme,tI=(null==B?void 0:B.publicName)==="agentmaker"||(null==B?void 0:B.publicName)==="TEMPORARY_AGENT",tS=Q.pathname.startsWith("/chat")||Q.pathname.startsWith("/~chat"),tA=(0,h.lr)("debug","boolean"),tw=(0,h.lr)("filters","object"),tE=(0,h.lr)("metadata","object"),tb=(0,h.lr)("justChat","string"),tk=(0,h.lr)("hubspotutk","string"),tN=(0,w.fP)(tg),tT=tN.getCookie,tM=tN.setCookie,tC=(0,u._)((0,U.useState)(!1),2),tO=tC[0],tU=tC[1],tR=(0,p.kY)().mutate,tP=tT(_.F4),tq=(t=B.agentId,n=Z.userId||"ANONYMOUS",y=(c=(0,w.fP)(tg,n)).getCookie,S=c.setCookie,b=y(_.F4)||"ANONYMOUS",C=function(){if(!b)return[];var e=y("ChatHistory_"+b);return e?e.split(","):[]},{getCurrentChatHistory:O=function(){return C().find(function(e){return e.split(":")[0]===t})||""},deleteCurrentUserChatHistory:function(){var e=O();if(e){var t=C().filter(function(t){return t!==e});S("ChatHistory_".concat(b||"ANONYMOUS"),t.join(","))}}}).deleteCurrentUserChatHistory,tx=Z.orgId===B.orgId&&!tg;(0,U.useEffect)(function(){t_(tS||window.self!==window.top)},[Q.asPath]),(0,U.useEffect)(function(){setInterval(function(){ew(function(e){return e+1})},5e3)},[]),(0,U.useEffect)(function(){var e=tc.question;tc.shouldRecover&&(tJ.queryAgent(e),tf({shouldRecover:!1,question:""}))},[tc]),(0,U.useEffect)(function(){var e=function(){eR(!0)},t=function(){eR(!1)};return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[]),(0,U.useEffect)(function(){ec(0)},[B.agentId]),(0,U.useEffect)(function(){(null==Z?void 0:Z.userId)||eg(!0)},[Z.userId]),(0,U.useEffect)(function(){tP&&!Z.userId&&z(function(e){return(0,r._)((0,a._)({},e),{userId:tP})})},[tP,Z]),(0,U.useEffect)(function(){!eU&&(null==e6?void 0:e6.length)&&(tJ.insertToChatHistory({finished:!0,id:0,speaker:h.kW,utterance:"Cannot upload document, please check your network connection."}),tR("getAgentActiveStatus",void 0,!1),e5([]))},[eU,e6]),(0,U.useEffect)(function(){var e,t=(e=(0,i._)(function(e){var t,n,i,o,u,s,d,c,f,g,v,_,p,m,y;return(0,l.Jh)(this,function(l){if("SETTINGS_UPDATED"===(t=e.data).event)try{g=(0,h.$b)(t),v={},Object.entries(g).forEach(function(e){var t=(0,h.nY)(e);t&&Object.assign(v,t)}),tJ.setAgentInfo((0,h.Jx)(v)),(null==t?void 0:null===(i=t.data)||void 0===i?void 0:null===(n=i.widget)||void 0===n?void 0:n.theme)&&ty(null==t?void 0:null===(p=t.data)||void 0===p?void 0:null===(_=p.widget)||void 0===_?void 0:_.theme),(null==t?void 0:null===(o=t.data)||void 0===o?void 0:o.welcome_message)&&tF(null==t?void 0:null===(m=t.data)||void 0===m?void 0:m.welcome_message,!1),(null==t?void 0:null===(u=t.data)||void 0===u?void 0:u.display_name)&&tY(null==t?void 0:null===(y=t.data)||void 0===y?void 0:y.display_name),void 0!==(null==t?void 0:null===(s=t.data)||void 0===s?void 0:s.input_box_text)&&K(function(e){var n;return(0,r._)((0,a._)({},e),{teaserText:null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.input_box_text})}),void 0!==(null==t?void 0:null===(d=t.data)||void 0===d?void 0:d.disable_fact_check)&&K(function(e){var n;return(0,r._)((0,a._)({},e),{configuration:(0,r._)((0,a._)({},e.configuration),{disableFactCheck:null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.disable_fact_check})})}),void 0!==(null==t?void 0:null===(f=t.data)||void 0===f?void 0:null===(c=f.fact_check_options)||void 0===c?void 0:c.allow_download)&&K(function(e){var n,i;return(0,r._)((0,a._)({},e),{configuration:(0,r._)((0,a._)({},e.configuration),{allowOriginalFileAccess:null==t?void 0:null===(i=t.data)||void 0===i?void 0:null===(n=i.fact_check_options)||void 0===n?void 0:n.allow_download})})})}catch(e){console.error("Error in settings update",e)}else"RESET_CHAT"===t.event?tJ.setAgentInfo({chatId:null}):"PUBLIC_NAME_UPDATED"===t.event?tJ.setAgentInfo({publicName:(null==t?void 0:t.data)||""}):"DOCUMENT_INSERTION"===t.event&&tL(null==t?void 0:t.data);return[2]})}),function(t){return e.apply(this,arguments)});return window.addEventListener("message",t,!1),function(){window.removeEventListener("message",t)}},[Q.query]);var tL=function(e){(null==e?void 0:e.requestId)&&(e5(function(t){return(0,s._)(t).concat([e.requestId])}),tJ.insertToChatHistory({finished:!1,id:0,is_animated:!0,initial_delay:100,speaker:B.displayName,utterance:"",original_utterance:(0,h.Sf)(e),component:"action-buttons",is_welcome_message:!1,show_sample_questions:!0}),tJ.setUploadData(e))};(0,U.useEffect)(function(){var e,t=Number(null===(e=Q.asPath)||void 0===e?void 0:e.split("/").pop());ek>0&&ek!==t&&Q.push("/~".concat(null==B?void 0:B.publicName,"/suggestions/").concat(ek),void 0,{shallow:!0})},[ek]),(0,U.useEffect)(function(){Z.isTemporaryUser&&tP&&!tP.includes("agent-org")&&(z(function(e){return(0,r._)((0,a._)({},e),{isTemporaryUser:!1,userId:tP,isAnonymous:!1,orgId:tP,temporaryUserId:""})}),Z.userId===B.orgId&&tJ.setAgentInfo({orgId:tP}))},[Z.isTemporaryUser,tP]),(0,U.useEffect)(function(){var e;!Z.userId||(null==Z?void 0:null===(e=Z.userId)||void 0===e?void 0:e.includes("-"))||tM(_.F4,Z.userId||""),Z.apiKey&&tM(_.XR,Z.apiKey),Z.isTemporaryUser&&tM(_.xu,String(Z.isTemporaryUser)),Z.orgId&&tM(_.b6,String(Z.orgId)),Z.temporaryUserId&&tM(_.x2,String(Z.temporaryUserId)),"/~"!==Q.pathname&&(tM(_.qf,String(Z.isAnonymous)),tM(_.xu,String(Z.isTemporaryUser)))},[Z,Q]),(0,U.useEffect)(function(){if(eE){var e=new URLSearchParams(window.location.search);e.delete("share"),Q.replace({pathname:window.location.pathname,query:e.toString()},void 0,{shallow:!0})}},[eE]),(0,U.useEffect)(function(){Q.query.userId&&(delete Q.query.userId,Q.push(Q),Q.query.agentId&&tJ.navigateToAgent("/".concat(Q.query.agentId),!1))},[Q.query]),(0,U.useEffect)(function(){G(D)},[D]),(0,U.useEffect)(function(){console.debug("[agentInfo] ",B)},[B]),(0,U.useEffect)(function(){var e;Y.agentInfo.agentId!==B.agentId&&(null===(e=e1.current)||void 0===e||e.abort(),tJ.reset(),K(Y.agentInfo),tJ.setInsertMode(!1),e_(Y.isParamsReady))},[Y]);var tH=(0,U.useMemo)(function(){var e={data:{},requestId:"",timestamp:"",type:""};if("undefined"==typeof document)return e;try{var t=localStorage.getItem("uploadData");return t&&JSON.parse(t)||e}catch(t){return e}},[eS]),tD=function(e){var t=tT(_.F4)||Z.userId||"ANONYMOUS";if("agentmaker"!==B.publicName){var n=tT("ChatHistory_".concat(t)),i=B.agentId,o=(null==n?void 0:n.split(","))||[];null==o||o.push("".concat(i,":").concat(e));var a=o.join(",");tM("ChatHistory_".concat(t),a||"")}},tj=function(){var e;B.chatId&&tq(),X(function(e){var t=e.filter(function(e){return null==e?void 0:e.is_welcome_message});return 0===t.length?[{id:new Date().getTime(),speaker:B.displayName||"agent",finished:!1,utterance:"",is_animated:!0,original_utterance:B.configuration.welcomeMessage,is_welcome_message:!0,target_agent:B.agentId}]:t});try{(0,w.D5)(B.agentId,null==Z?void 0:Z.oneId)}catch(e){console.error("[resetChatHistory],",e)}tl([]),null===(e=e1.current)||void 0===e||e.abort(),K(function(e){return(0,r._)((0,a._)({},e),{chatId:null,sampleQuestions:Y.agentInfo.sampleQuestions||[]})}),tJ.setInsertMode(!1)},tQ=function(e){var t,n=0===W.filter(function(e){return!e.is_welcome_message}).length;if(!e){e_(!0);return}void 0!==(null==e?void 0:e.welcome_message)&&tF(null==e?void 0:e.welcome_message,n),void 0!==(null==e?void 0:e.input_autocomplete)&&X(function(t){return"user"!==t[t.length-1].speaker?(0,M.Uy)(t,function(n){var i;(null===(i=n[t.length-1])||void 0===i?void 0:i.input_autocomplete)||(n[t.length-1].input_autocomplete=e.input_autocomplete)}):t}),void 0!==(null==e?void 0:e.input_placeholder)&&X(function(t){return"user"!==t[t.length-1].speaker?(0,M.Uy)(t,function(n){var i;(null===(i=n[t.length-1])||void 0===i?void 0:i.input_placeholder)||(n[t.length-1].input_placeholder=e.input_placeholder)}):t}),void 0!==(null==e?void 0:e.input_type)&&X(function(t){return"user"!==t[t.length-1].speaker?(0,M.Uy)(t,function(n){var i;(null===(i=n[t.length-1])||void 0===i?void 0:i.input_type)||(n[t.length-1].input_type=e.input_type)}):t});var i=W[W.length-1];(null==i?void 0:null===(t=i.hints)||void 0===t?void 0:t.length)?tl(null==i?void 0:i.hints):void 0!==(null==e?void 0:e.hints)&&tl(e.hints),e_(!0)},tF=function(e,t){var n=null==e?void 0:e.split("\\n\\n");K(function(t){return(0,r._)((0,a._)({},t),{configuration:(0,r._)((0,a._)({},t.configuration),{welcomeMessage:e})})}),X(function(i){var o=i.filter(function(e){return!e.is_welcome_message});return t?o.unshift({id:Math.random(),speaker:B.displayName||"agent",finished:!1,utterance:"",is_animated:!0,original_utterance:e,is_welcome_message:!0}):n.forEach(function(e){o.unshift({id:Math.random(),speaker:B.displayName||"agent",finished:!1,utterance:e,is_animated:!1,original_utterance:"",is_welcome_message:!0})}),o})},tY=function(e){X(function(t){return t.map(function(t){return"agent"!==t.speaker&&"assistant"!==t.speaker&&"user"!==t.speaker?(0,r._)((0,a._)({},t),{speaker:e}):t})})},tG=function(e){switch(e.trim().toLowerCase()){case _.V4.RESET_CHAT:case _.V4.RESET:tj()}},tJ=(0,U.useMemo)(function(){var e;return{reset:function(){X(Y.chatHistory),e5([]),eA({type:"",requestId:"",timestamp:"",data:{}}),ea([])},resetAllMessages:function(){X([])},updateWelcomeMessage:tF,updateParams:tQ,setHints:tl,setChatHistory:X,setUploadData:function(e){return eA(function(t){var n="function"==typeof e?e(t):e;return window.localStorage.setItem("uploadData",JSON.stringify(n)),n}),eA},setChatScrollState:eD,insertToChatHistory:function(e){0===e.id&&(e.id=Math.random()),"user"===e.speaker&&(e.target_agent=B.agentId),X(function(t){return(0,s._)(t).concat([e])})},resetChat:tj,setIsParamsReady:e_,queryAgent:(e=(0,i._)(function(e,t){var n,o,u,d,c,f,g,p,m,y,I,S,A,E,b,k,N,T,C,O,U,R,P,x,L,H,D,j,F,Y=arguments;return(0,l.Jh)(this,function(G){switch(G.label){case 0:if(n=Y.length>2&&void 0!==Y[2]&&Y[2],Object.values(_.V4).includes(null==e?void 0:e.trim().toLowerCase()))return tG(e),[2];if(!e)return console.error("Empty question"),[2];o=e1.current,u=new Date,tl([]),ec(function(e){return e+1}),d=function(e){X(function(n){return(0,M.Uy)(n,function(i){i[a=y]||(i[a]=(0,h.XM)());var o=n.findLastIndex(function(e){var t;return e.group_id===(null===(t=i[y].id)||void 0===t?void 0:t.toString())});if(-1===o?(i[y].finished=!0,i[y].error=!i[y].utterance):(i[o].finished=!0,i[o].error=!i[o].utterance),t&&n){var a,r,s,l=(Number(new Date)-Number(u))/1e3;t(_.uE.QUERY_ANSWERED,{request_id:e.headers.get("X-Oneai-Request-Id"),message:null===(r=n[y-1])||void 0===r?void 0:r.utterance,response:null===(s=i[y])||void 0===s?void 0:s.utterance,answer_time:l})}})})},c=new AbortController,f=(0,s._)(W).concat([(0,r._)((0,a._)({},(0,_.vV)()),{utterance:e,target_agent:B.agentId})]),o&&(o.abort(),e1.current=void 0,(null==(g=f[f.length-2])?void 0:g.speaker)==="agent"&&(g.utterance?((p=(0,a._)({},g)).finished=!0,-1===(m=f.findIndex(function(e){return e===g}))?f.push(p):f[m]=p):f.splice(f.length-2,1))),y=f.length,setTimeout(function(){null!=c&&c.signal.aborted||(X(function(e){var t;return(null===(t=e[y])||void 0===t?void 0:t.error)?e:f}),setTimeout(function(){null!=c&&c.signal.aborted||X(function(e){var t;return(null===(t=e[y])||void 0===t?void 0:t.error)?e:(0,M.Uy)(e,function(e){var t;e[t=y]||(e[t]=(0,h.XM)())})})},1e3))},0),G.label=1;case 1:var J;return G.trys.push([1,3,,4]),e1.current=c,tJ.setShowQuestions(!1),A=Q.query.apiKey,Object.assign(tw,{timezone_name:(0,h.uY)(),timezone_offset:(0,h.WI)()}),tg&&"true"!==tb&&Object.assign(tE,{pageName:ta||"",pageUri:new URL(null===(E=document)||void 0===E?void 0:E.referrer).href,geo_location:Z.geoLocation||"unknown",hutk:tk||tT("hubspotutk")||""}),[4,(0,w.v5)({signal:null==c?void 0:c.signal,agentId:B.agentId,apiKey:A||Z.apiKey||tT(_.XR)||"",chatId:B.chatId||null,shareId:B.shareId||null,one_id:(null==Z?void 0:Z.oneId)||tT("ONEAI_UNIQUE_ID")||"",result:[],queryParams:(0,a._)({},(null===(I=Object.keys(tw))||void 0===I?void 0:I.length)&&{filters:tw},(null===(S=Object.keys(tE))||void 0===S?void 0:S.length)&&{metadata:tE},tA&&{debug:tA}),message:e,onText:function(e){c.signal.aborted||X(function(t){var n=h.xU;return(0,M.Uy)(t,function(t){0===t.length&&t.push((0,h.XM)());for(var i=t.length-1;i>=0&&t[i].finished;)i-=1;-1===i&&(i=t.length,t.push((0,h.XM)()));var o=t[i],a=(o.utterance+e.toString()).split(n);o.utterance=a[0],o.target_agent=B.agentId;for(var r=1;r<a.length;r++){var u,s=(0,h.XM)();s.utterance=a[r],s.target_agent=B.agentId,s.group_id=(null===(u=o.id)||void 0===u?void 0:u.toString())||"",s.finished=null==o?void 0:o.finished,s.fact_check_bar_hidden=(null==o?void 0:o.fact_check_bar_hidden)||!1,o.fact_check_bar_hidden=!0,o.fact_check_enabled=!1,t.push(s)}})})},onError:function(){X(function(e){return(0,M.Uy)(e,function(e){var t;e[t=y]||(e[t]=(0,h.XM)()),e[y].finished=!0,e[y].error=!e[y].utterance,e[y].speaker=h.kW,e[y].id=Math.round(1e5*Math.random())})})},onData:function(e,n){if(!c.signal.aborted){if("debug"===n)X(function(t){return(0,M.Uy)(t,function(n){var i=t.findLastIndex(function(e){var t;return e.group_id===(null===(t=n[y].id)||void 0===t?void 0:t.toString())});-1===i?n[y].debug_output=JSON.stringify(e,null,2):n[i].debug_output=JSON.stringify(e,null,2)})});else if("chat_id"===n){if(!e||B.chatId&&"N/A"!==B.chatId)return;tD(e),K(function(t){return(0,r._)((0,a._)({},t),{chatId:e,shareId:null})});try{var i=(0,h.PC)();t&&i&&t(i.eventName,(0,r._)((0,a._)({},i.payload),{chat_id:e})),setTimeout(function(){(0,h.h$)(void 0)},1e3)}catch(e){console.error("[event] could not send the first message event",e)}}else if("fact_check_enabled"===n)X(function(t){return(0,M.Uy)(t,function(n){var i=t.findLastIndex(function(e){var t;return e.group_id===(null===(t=n[y].id)||void 0===t?void 0:t.toString())});-1===i?n[y].fact_check_enabled="True"===e:n[i].fact_check_enabled="True"===e})});else if("agent_message_id"===n)X(function(t){return(0,M.Uy)(t,function(n){var i=t.findLastIndex(function(e){var t;return e.group_id===(null===(t=n[y].id)||void 0===t?void 0:t.toString())});-1===i?n[y].agent_message_id=e:n[i].agent_message_id=e})});else if("response_type"===n)"information-response"===e&&t&&"string"==typeof e&&t(_.uE.INFORMATION_RESPONSE);else if("query_type"===n&&"string"==typeof e)"retrieval-query"===e&&t&&t(_.uE.INFORMATION_QUERY_MADE);else if("fact_check"===n)X(function(t){return(0,M.Uy)(t,function(n){var i=t.findLastIndex(function(e){var t;return e.group_id===(null===(t=n[y].id)||void 0===t?void 0:t.toString())});(null==e?void 0:e.references)&&(-1===i?n[y].references=e:n[i].references=e)})});else if((null==n?void 0:n.toLowerCase())==="ux"){try{X(function(n){return(0,M.Uy)(n,function(i){var o=n.findLastIndex(function(e){var t;return e.group_id===(null===(t=i[y].id)||void 0===t?void 0:t.toString())});-1===o?(i[y].input_autocomplete=(null==e?void 0:e.input_autocomplete)||"off",i[y].input_placeholder=(null==e?void 0:e.input_placeholder)||"",i[y].input_type=(null==e?void 0:e.input_type)||"text"):(i[o].input_autocomplete=(null==e?void 0:e.input_autocomplete)||"off",i[o].input_placeholder=(null==e?void 0:e.input_placeholder)||"",i[o].input_type=(null==e?void 0:e.input_type)||"text"),Array.isArray(null==e?void 0:e.events)&&t&&e.events.filter(function(e){return"None"!==e&&"string"==typeof e&&e}).forEach(function(e){t(e)})})})}catch(e){}var o=(null==e?void 0:e.hints)||[],u=null==o?void 0:o.filter(function(e){return e});u.length>0&&tl(u)}}},onFinished:(J=(0,i._)(function(n){return(0,l.Jh)(this,function(i){return 404===n.status?((t&&t(v.V1.ERROR,{message:e,request_id:n.headers.get("X-Oneai-Request-Id"),action:"recover"}),tc.shouldRecover)?c.signal.aborted||(e1.current=void 0,d(n)):(tf({shouldRecover:!0,question:e}),tJ.setAgentInfo({chatId:""}),X(function(e){return e.slice(0,e.length-1)})),[2]):(tJ.setAgentInfo({shareId:null}),c.signal.aborted||(e1.current=void 0,d(n)),[2])})}),function(e){return J.apply(this,arguments)})})];case 2:return b=G.sent().result,void 0!==t&&(R=(null===(N=Q.query)||void 0===N?void 0:null===(k=N.isSuggested)||void 0===k?void 0:k.toString())==="true"||n,P=null===(C=Q.query)||void 0===C?void 0:null===(T=C.cardType)||void 0===T?void 0:T.toString(),x=null===(U=Q.query)||void 0===U?void 0:null===(O=U.clickLocation)||void 0===O?void 0:O.toString(),R||(B.chatId&&"N/A"!==B.chatId?t(v.V1.QUERY_MADE,{query:null===(L=W[W.length-1])||void 0===L?void 0:L.utterance,request_id:b.headers.get("X-Oneai-Request-Id"),message:null===(H=W[W.length-1])||void 0===H?void 0:H.utterance,hub_widget:P||void 0,click_location:x||void 0,chat_id:B.chatId}):(0,h.h$)({eventName:v.V1.QUERY_MADE,payload:{query:null===(D=W[W.length-1])||void 0===D?void 0:D.utterance,request_id:b.headers.get("X-Oneai-Request-Id"),message:null===(j=W[W.length-1])||void 0===j?void 0:j.utterance,hub_widget:P||void 0,click_location:x||void 0,chat_id:B.chatId}}))),[3,4];case 3:return console.error("[AgentContextProvider] error",F=G.sent()),X(function(t){return t[y-1]?(0,M.Uy)(t,function(e){e[y]=q()}):(setTimeout(function(){X(function(e){return(0,M.Uy)(e,function(e){e[y]=q()})})},1e3),(0,M.Uy)(t,function(t){t[y-1]=(0,r._)((0,a._)({},(0,_.vV)()),{utterance:e})}))}),t&&t(v.V1.QUERY_FAILED,{error_type:JSON.stringify(F)}),[3,4];case 4:return[2]}})}),function(t,n){return e.apply(this,arguments)}),setMessage:es,setTotalMessages:ec,setAlreadyAskedQuestions:ea,navigateToAgentWithMessage:function(e){var t=e.publicName,n=e.message,i=e.isSuggested,o=e.clickLocation,a=e.cardType;try{window.parent.postMessage({event:"AGENT_CHANGE",data:t},"https://studio.oneai.com")}catch(e){}Q.push({pathname:"/~".concat(t),query:{quickMessage:n,isSuggested:i,cardType:a,clickLocation:o}})},setInsertMode:e4,setUserInfo:function(e){return z(function(t){return console.debug("[setUserInfo] prev: ",t,"new: ",e),(0,a._)({},t,e)}),(0,a._)({},Z,e)},setTasksInProgress:ti,setIsCreatingAgent:eV,setPreventOverflow:en,setAgentInfo:function(e){return K(function(t){console.debug("[setAgentInfo] prev: ",t,"new: ",e);var n=function(e,t){for(var i in t)t[i]instanceof Object&&i in e?n(e[i],t[i]):e[i]=t[i]},i=(0,a._)({},t);return n(i,e),console.debug("[updatedObject]",i),i}),(0,a._)({},B,e)},setTriggerFileUpload:eF,setTriggerManageAgent:eJ,addProcessingItem:function(e){e5(function(t){return(0,s._)(t).concat([e])})},setSampleQuestions:function(e,t){if(t){K(function(t){return(0,r._)((0,a._)({},t),{sampleQuestions:e})});return}K(function(t){return(0,r._)((0,a._)({},t),{sampleQuestions:(0,s._)(t.sampleQuestions).concat((0,s._)(e))})})},removeProcessingItems:function(){e5([])},setHighlightedItem:function(e){te(e)},setShowQuestions:function(e){eC(e)},setRefs:ey,setJustCreatedAgent:tU,setShouldLogout:ex,navigateToAgent:function(e,t){try{window.parent.postMessage({event:"AGENT_CHANGE",data:e},"https://studio.oneai.com")}catch(e){}tJ.setChatScrollState("TOP"),Q.push("/~[slug]",e),tJ.setShowQuestions(!1),t&&tJ.resetAllMessages()},setQuestionsPage:eN,setStoppedCurrentUpload:e$,setWidgetParentTitle:tr,insertProfileMessage:(0,i._)(function(){var e;return(0,l.Jh)(this,function(t){switch(t.label){case 0:if("TEMPORARY_AGENT"===B.publicName)return tJ.insertToChatHistory({finished:!0,id:0,speaker:"agentmaker",utterance:B.configuration.profileMessage||"Sorry, no profile information found."}),[2];if(!(""===B.configuration.profileMessage||"Sorry, no profile information found."===B.configuration.profileMessage))return[3,5];return[4,(0,f.h6)(B.agentId)];case 1:if(!(null==(e=t.sent())?void 0:e.profile))return[3,3];return tJ.insertToChatHistory({finished:!0,id:0,speaker:null==B?void 0:B.displayName,utterance:null==e?void 0:e.profile}),K(function(t){return(0,r._)((0,a._)({},t),{configuration:(0,r._)((0,a._)({},t.configuration),{profileMessage:null==e?void 0:e.profile})})}),[4,(0,f.Iu)(B.agentId,null==B?void 0:B.publicName)];case 2:return t.sent(),[3,4];case 3:tJ.insertToChatHistory({finished:!0,id:0,speaker:null==B?void 0:B.displayName,utterance:B.configuration.profileMessage}),t.label=4;case 4:return[3,6];case 5:tJ.insertToChatHistory({finished:!0,id:0,speaker:null==B?void 0:B.displayName,utterance:B.configuration.profileMessage}),t.label=6;case 6:return[2]}})}),setTouchedAgentMakerBox:e0,navigateToAgentMaker:function(){if(tJ.setChatScrollState("TOP"),"/~agentmaker"===Q.pathname){var e=(0,g.L8)({cookies:(0,o._)({},_.y7,tT(_.y7)||"false")});K(function(t){return(0,a._)({},t,e.agentInfo)}),X(e.chatHistory);return}Q.push("/~[slug]","/~agentmaker")}}},[W,Y,B]),tW=(0,U.useMemo)(function(){return(0,r._)((0,a._)({},Y),{agentInfo:B,showQuestions:eM,chatHistory:W,insertMode:e3,methods:tJ,processingItems:e6,highlightedItem:e7,chatScrollState:eH,userInfo:Z,isAgentMaker:tI,triggerFileUpload:eQ,triggerManageAgent:eG,questionsPage:ek,isCreatingAgent:eX,shouldLogout:eq,isWidget:tg,uploadData:tH,isOnline:eU,isAtWidgetOrIframe:th,showActionButtons:tm,justCreatedAgent:tO,touchedAgentMakerBox:ez,refs:em,preventOverflow:et,hints:ts,totalMessages:ed,stoppedCurrentUpload:eK,widgetParentTitle:ta,message:eu,alreadyAskedQuestions:eo,isParamsReady:eh,tasksInProgress:tn,ownsActiveAgent:tx})},[Y,B,W,e3,tJ,e6,e7,eM,eH,tI,eQ,eG,ek,Z,eX,eq,tg,tH,eU,th,tm,tO,ez,em,et,ts,ed,eK,ta,eu,eo,eh,tn,tx]);return(0,d.jsx)(T.s,{children:(0,d.jsxs)(m.K.Provider,{value:tW,children:[(0,d.jsx)(I.ZP,{}),(0,d.jsx)(A,{}),(0,d.jsx)(P,{}),(0,d.jsx)(k,{}),(0,d.jsx)(R,{}),j]})})}}}]);