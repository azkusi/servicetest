(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{156:function(e,t,n){},192:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),s=n(37),i=n.n(s),o=(n(156),n(12)),l=n(27),d=n(7),u=n(0),j=n.n(u),b=n(235),p=n(234),h=n(140),O=n(229),g=n(146),v=n(105),x=n(135),m=n(136),f=n(137),_=n(20),y=(n(42),n(65),n(162),{apiKey:"AIzaSyBA8Oj4PDbc826IzdhGDDU579yJ2pL3N9o",authDomain:"serviiotest.firebaseapp.com",projectId:"serviiotest",storageBucket:"serviiotest.appspot.com",messagingSenderId:"199172448030",appId:"1:199172448030:web:c83109d3e1e9101e3ff30f",measurementId:"G-QL4CWBDQQJ"}),S=y;_.a.apps.length?a=_.a.app().firestore():(_.a.initializeApp(y),a=_.a.firestore());var F,w=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){var t=a.collection("serviceProviders").doc(e).collection("events").onSnapshot(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.forEach((function(e){"none"===e.data().recurrence_type?n.push({id:e.id,title:"UNAVAILABLE",start:e.data().event_start,end:e.data().event_end,startStr:e.data().event_start_datetimeISO,endStr:e.data().event_end_datetimeISO,notes:e.data().event_notes,recurrence_type:"none"}):null===e.data().endTime?n.push({id:e.id,title:"UNAVAILABLE",notes:e.data().event_notes,daysOfWeek:e.data().daysOfWeek,startTime:e.data().startTime,endTime:e.data().endTime,startRecur:e.data().startRecur,recurrence_type:"simple_recurrence"}):n.push({id:e.id,title:"UNAVAILABLE",notes:e.data().event_notes,daysOfWeek:e.data().daysOfWeek,startRecur:e.data().startRecur,endRecur:e.data().endRecur,startTime:e.data().startTime,endTime:e.data().endTime,recurrence_type:"simple_recurrence"})})),s(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return t()}}),[]),console.log("events: "+JSON.stringify(c)),c},k=n(139),T=n.n(k),E=n(4);_.a.apps.length?F=_.a.app().firestore():(_.a.initializeApp(S),F=_.a.firestore());var P=function(e){var t=e.serviceContent,n=Object(r.useState)(null),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useRef)(),u=Object(r.useRef)(),y=Object(r.useRef)(),S=Object(r.useRef)(),k=Object(r.useRef)(),P=w(t.site_name),R=Object(r.useState)(null),D=Object(o.a)(R,2),L=(D[0],D[1]),C=Object(r.useState)(null),N=Object(o.a)(C,2),I=N[0],A=N[1],U=t.service_content.services,q=Object(r.useState)("timeGridWeek"),B=Object(o.a)(q,2),W=B[0],z=(B[1],Object(r.useState)(new Date)),H=Object(o.a)(z,2),V=H[0],G=(H[1],Object(r.useState)(new Date)),M=Object(o.a)(G,2),J=M[0],K=M[1],X=Object(r.useState)(new Date),Y=Object(o.a)(X,2),Q=Y[0],Z=Y[1],$=Object(r.useState)(null),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],ae=Object(r.useState)(""),re=Object(o.a)(ae,2),ce=re[0],se=re[1],ie=Object(r.useRef)();function oe(){return oe=Object(d.a)(j.a.mark((function e(n){var a,r,c,o,b,p,h,O,g,v,x,m,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=i.current.value,r=y.current.value,c=u.current.value,o=S.current.value,b=k.current.value,console.log("Name: "+a),console.log("Email: "+r),console.log("Message: "+c),e.prev=9,console.log("service_requested is: "+ce),console.log("offered services are: "+JSON.stringify(I)),null!==te){e.next=17;break}return alert("Please select a date"),e.abrupt("return",null);case 17:if(null!==ce&&""!==ce){e.next=20;break}return alert("Please select a service"),e.abrupt("return",null);case 20:console.log("serviceRequested object: "+JSON.stringify(I)),p=Date.now(),h=F.collection("serviceProviders").doc(t.site_name).collection("bookingrequests").doc(),O=h.id,g=new Date(Q.toISOString()),v=parseFloat(I.duration),x=36e5*v,m=new Date(g.getTime()+x),console.log("service length is: "+v),h.set({last_message_sent:c,last_message_sent_by:"client",client_name:a,client_email:r,service_requested:o,service_notes:b,timestamp:p,booking_status:"pending",provider_read_status:"unread",startTime:Q.toISOString(),endTime:m.toISOString()}).then((function(){F.collection("serviceProviders").doc(t.site_name).collection("bookingrequests").doc(O).collection("messages").add({message:c,client_name:a,client_email:r,message_sent_by:"client",timestamp:p,provider_read_status:"unread"}).then((function(){return u.current.value="",s(!0),null}))})),(f=F.collection("serviceProviders").doc(t.site_name)).get().then(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data().booking_requests_notifications,a.push(O),e.next=4,f.update({booking_requests_notifications:(n=_.a.firestore.FieldValue).arrayUnion.apply(n,Object(l.a)(a))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 32:e.next=38;break;case 34:e.prev=34,e.t0=e.catch(9),console.log("error is: "+e.t0),s(!1);case 38:case"end":return e.stop()}}),e,null,[[9,34]])}))),oe.apply(this,arguments)}return Object(r.useEffect)((function(){console.log("services: "+JSON.stringify(t.service_content.services));var e=0;if(U)for(console.log("running if in useEffect"),e=0;e<U.length;e++)U[e].service_name===ce&&A(U[e])}),[ce]),null===c?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Send a Booking Request"})}),Object(E.jsx)("div",{children:Object(E.jsx)(g.a,{plugins:[v.b,x.a,m.a,f.a],initialView:W,events:P,initialDate:V,ref:ie,customButtons:{changeToMonthView:{text:"Month",click:function(){ie.current.getApi().changeView("dayGridMonth",J.date)}},changeToWeekView:{text:"Week",click:function(){ie.current.getApi().changeView("timeGridWeek",J.date)}}},dateClick:function(e){console.log("Full Calendar API date is: "+e.date+" type is: "+typeof e.date),console.log("date.dateStr is: "+e.dateStr+" type is: "+typeof e.dateStr),console.log("date.date is: "+e.date.toDateString()),K(e.date),ie.current.getApi().changeView("timeGridDay",e.date)},headerToolbar:{center:"changeToWeekView changeToMonthView",left:"title",right:"today prev,next"}})}),Object(E.jsx)("div",{children:Object(E.jsx)(b.a,{children:Object(E.jsx)(b.a.Body,{children:Object(E.jsxs)(p.a,{onSubmit:function(e){return oe.apply(this,arguments)},children:[Object(E.jsxs)(p.a.Group,{id:"name",children:[Object(E.jsx)(p.a.Label,{children:"Name"}),Object(E.jsx)(p.a.Control,{type:"text",ref:i,placeholder:"name",required:!0})]}),Object(E.jsxs)(p.a.Group,{id:"email",children:[Object(E.jsx)(p.a.Label,{children:"Email"}),Object(E.jsx)(p.a.Control,{type:"email",ref:y,placeholder:"email",required:!0})]}),Object(E.jsx)(p.a.Label,{children:"Select Service"}),Object(E.jsxs)(p.a.Control,{"aria-label":"Select Service",as:"select",value:ce,onChange:function(e){console.log("e.target.value",e.target.value),L(e),se(e.target.value)},children:[Object(E.jsx)("option",{ref:S,value:""}),U.map((function(e,t){return Object(E.jsx)("option",{ref:S,value:e.service_name,children:e.service_name})}))]}),Object(E.jsxs)(p.a.Group,{id:"notes",children:[Object(E.jsx)(p.a.Label,{children:"Extra Notes"}),Object(E.jsx)(p.a.Control,{type:"text",ref:k,placeholder:"Type message",required:!0})]}),Object(E.jsx)("br",{}),Object(E.jsx)(T.a,{onChange:function(e){Z(e),ne(!0)},value:Q,disableClock:!0}),Object(E.jsx)("br",{}),Object(E.jsxs)(p.a.Group,{id:"message",children:[Object(E.jsx)(p.a.Label,{children:"Message"}),Object(E.jsx)(p.a.Control,{type:"text",ref:u,placeholder:"Type message",required:!0})]}),Object(E.jsx)(h.a,{type:"submit",children:"Submit Booking Request"}),Object(E.jsx)(p.a.Label,{children:"Input service time using calendar:"})]})})})})]}):Object(E.jsx)("div",{children:c?Object(E.jsxs)(O.a,{variant:"success",children:["Your message was successfully sent to ",t.service_content.page_title,Object(E.jsx)("br",{}),"We will send you an email when ",t.service_content.page_title," responds to your message."]}):Object(E.jsxs)(O.a,{variant:"danger",children:["Error occurred, please contact support",Object(E.jsx)("br",{})]})})},R=n(30);n(100).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var D,L=function(){return Object(E.jsxs)("div",{className:"Lost",children:[Object(E.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(E.jsx)("br",{}),Object(E.jsx)("h2",{children:" Use navigation bar above to navigate to existing pages "})]})};_.a.apps.length?(_.a.app().firestore(),D=_.a.app().firestore(),_.a.firestore.FieldValue.serverTimestamp):(_.a.firestore(),_.a.initializeApp(y),D=_.a.firestore(),_.a.firestore.FieldValue.serverTimestamp);var C,N=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){var t=D.collection("serviceProviders").doc(e).onSnapshot((function(e){var t;t=e.data().gallery_images,c(t)}));return function(){return t()}}),[e]),{docs:a}},I=n(230),A=function(e){var t=e.provider_Name,n=e.setSelectedImg,a=N(t).docs;return Object(E.jsxs)("div",{className:"img-grid",children:[!a&&Object(E.jsx)(I.a,{animation:"border"}),a&&a.map((function(e,t){return Object(E.jsx)("div",{className:"img-wrap",layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return n(e.url)},children:Object(E.jsx)("img",{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}})},t)}))]})},U=n(232),q=function(e){var t=e.setSelectedImg,n=e.selectedImg;return Object(E.jsx)(U.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1},children:Object(E.jsx)(U.a.img,{src:n,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})})};function B(e){var t=e.serviceContent,n=Object(r.useState)(null),a=Object(o.a)(n,2),c=a[0],s=a[1],i=t.site_name;return null===i?Object(E.jsx)(I.a,{animation:"border"}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:" Gallery "}),0===t.service_content.gallery_images.length?Object(E.jsx)("h2",{children:"No Images Added Yet"}):Object(E.jsxs)("div",{className:"Gallery",children:[i&&Object(E.jsx)(A,{provider_Name:i,setSelectedImg:s}),c&&Object(E.jsx)(q,{selectedImg:c,setSelectedImg:s})]})]})}_.a.apps.length?_.a.app().firestore():(_.a.initializeApp(y),_.a.firestore()),_.a.apps.length?C=_.a.app().firestore():(C=_.a.firestore(),_.a.initializeApp(y));var W=function(e){console.log("admin_data in useServicList: "+e);var t=Object(r.useState)(null),n=Object(o.a)(t,2),a=n[0],c=n[1];return console.log("serviceList render ran again..."),Object(r.useEffect)((function(){var t=C.collection("serviceProviders").doc(e).onSnapshot((function(e){var t,n;return new Promise((function(a,r){t=e.data().services,n=e.data().service_categories,console.log("useEffect serviceList ran again..."),a({services:t,serviceCategories:n})})).then(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a,r,c,s=[],i=t.services,o=t.serviceCategories;if(i&&o)if(0===o.length)e("NO_SERVICES");else for(console.log("services and categories set"),a=0;a<o.length;a++){var l={};for(c=[],r=0;r<i.length;r++)console.log("service category: "+o[a]+" service name: "+JSON.stringify(i[r])),i[r].main_category===o[a].toString()&&c.push(i[r]),r===i.length-1&&(l[o[a]]=c,s.push(l));a===o.length-1&&(console.log("Services inside loop: "+JSON.stringify(l)),console.log("ServiceReady has been set to true"),e(s))}console.log("numbers is about to change/cause rerender...")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){c(e)}))}));return function(){return t()}}),[]),a},z=n(236);_.a.apps.length?_.a.app().firestore():(_.a.initializeApp(y),_.a.firestore());var H=function(e){var t=e.serviceContent;console.log("Calendar rerendered"),console.log("admin_data in Calendar: "+t.site_name);var n=W(t.site_name);return 0!==t.service_content.service_categories.length?null===n?Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(I.a,{animation:"border"})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:"Services"}),Object(E.jsx)("div",{children:n.map((function(e,t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(b.a.Header,{children:[Object.keys(e)[0],Object(E.jsx)("br",{})]}),Object(E.jsx)(z.a,{variant:"flush",children:Object.values(e)[0].map((function(e,t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{children:Object(E.jsxs)(z.a.Item,{children:[Object(E.jsxs)(b.a.Title,{children:[e.service_name,Object(E.jsx)("br",{})]}),Object(E.jsx)("br",{}),Object(E.jsxs)(b.a.Subtitle,{children:["Price: ",e.price]}),Object(E.jsx)("br",{}),Object(E.jsxs)(b.a.Subtitle,{children:["Duration: ",e.duration]}),Object(E.jsx)("br",{}),Object(E.jsx)(b.a.Text,{children:e.description})]})}),Object(E.jsx)("br",{})]})}))})]}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{})]})}))})]}):Object(E.jsx)("h2",{children:"No Services Added Yet"})},V=(n(192),n(33)),G=n(64);function M(){var e="undefined"!==typeof window,t=Object(r.useState)({width:e?1200:window.innerWidth,height:e?800:window.innerHeight}),n=Object(o.a)(t,2),a=n[0],c=n[1];function s(){c({width:window.innerWidth,height:window.innerHeight})}return Object(r.useEffect)((function(){return window.addEventListener("resize",s),s(),function(){window.removeEventListener("resize",s)}}),[]),a}var J=n(233),K=n(237),X=n(231),Y=n(71);var Q=function(e){var t=e.serviceContent,n=Object(r.useState)(375),a=Object(o.a)(n,2),c=a[0],s=a[1],i=M(),l=i.width,d=i.height,u=t.service_content.page_theme.theme_name;return Object(r.useEffect)((function(){s(l)}),[l,d]),c<1024?Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(J.a,{className:"topnav",style:{"background-color":G.a[u].colors.background,height:"15vh"},children:[Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/",children:Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:t.service_content.page_title})})}),Object(E.jsx)(J.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(E.jsx)(J.a.Collapse,{style:{"z-index":"20"},id:"navbar-dark-example",children:Object(E.jsx)(K.a,{className:"topnav-right",children:Object(E.jsxs)(X.a,{id:"nav-dropdown-dark-example",title:"Menu",children:[Object(E.jsx)(X.a.Item,{style:{color:"black"},href:"/services",children:"Services"}),Object(E.jsx)(Y.a.Divider,{}),Object(E.jsx)(X.a.Item,{style:{color:"black"},href:"/booking-request",children:"Send Booking Request"}),Object(E.jsx)(Y.a.Divider,{}),Object(E.jsx)(X.a.Item,{style:{color:"black"},href:"/messages",children:"Send Message"}),Object(E.jsx)(Y.a.Divider,{}),Object(E.jsx)(X.a.Item,{style:{color:"black"},href:"/gallery",children:"Gallery"})]})})})]})}):Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"topnav",style:{"background-color":G.a[u].colors.background,height:"15vh"},children:[Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/",children:Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:t.service_content.page_title})})}),Object(E.jsxs)("div",{className:"topnav-right",children:[Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/services",children:"Service Info & Pricing"}),Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/booking-request",children:"Availability & Booking"}),Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/messages",children:"Send Message"}),Object(E.jsx)(V.b,{style:{textDecoration:"none",color:G.a[u].colors.text,"font-weight":"bold"},to:"/gallery",children:"Gallery"})]})]})})};var Z,$=function(e){var t=e.serviceContent,n=t.service_content.page_background_image.url,a=t.service_content.title_tagline_colour.hex_code;return console.log("background image URL:"+n),Object(E.jsxs)("div",{style:{textAlign:"center"},children:[Object(E.jsx)("div",{style:{"background-image":"url(".concat(n,")"),"background-repeat":"no-repeat","background-attachment":"fixed","background-size":"100% 100%","min-height":"85%","max-height":"85%",opacity:"0.4","min-width":"1024px",width:"100%",height:"auto",position:"fixed",bottom:"0",left:"0"}}),Object(E.jsx)("h1",{style:{"font-weight":"bold",color:a,position:"absolute",top:"50%",left:"20%","z-index":"10"},children:t.service_content.page_title}),Object(E.jsx)("br",{}),Object(E.jsxs)("h4",{style:{"font-weight":"bold",color:a,position:"absolute",top:"58%",left:"20%","z-index":"10"},children:[" ",t.service_content.description]})]})};n(100).io,n(126),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;_.a.apps.length?Z=_.a.app().firestore():(_.a.initializeApp(S),Z=_.a.firestore());var ee,te=function(e){var t=e.serviceContent,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=(a[0],a[1],Object(r.useState)("")),s=Object(o.a)(c,2),i=(s[0],s[1],Object(r.useState)("")),u=Object(o.a)(i,2),g=(u[0],u[1],Object(r.useState)(null)),v=Object(o.a)(g,2),x=v[0],m=v[1],f=Object(r.useRef)(),y=Object(r.useRef)(),S=Object(r.useRef)();function F(){return F=Object(d.a)(j.a.mark((function e(n){var a,r,c,s,i,o,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=f.current.value,r=S.current.value,c=y.current.value,e.prev=4,s=Date.now(),i=Z.collection("serviceProviders").doc(t.site_name).collection("conversations").doc(),o=i.id,e.next=10,i.set({last_message_sent:c,last_message_sent_by:"client",client_name:a,client_email:r,timestamp:s,provider_read_status:"unread"});case 10:return e.next=12,Z.collection("serviceProviders").doc(t.site_name).collection("conversations").doc(o).collection("messages").add({message:c,client_name:a,client_email:r,message_sent_by:"client",timestamp:s,provider_read_status:"unread"});case 12:(u=Z.collection("serviceProviders").doc(t.site_name)).get().then(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data().msgs_notifications,a.push(o),e.next=4,u.update({msgs_notifications:(n=_.a.firestore.FieldValue).arrayUnion.apply(n,Object(l.a)(a))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m(!0),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log("error is: "+e.t0),m(!1);case 21:case"end":return e.stop()}}),e,null,[[4,17]])}))),F.apply(this,arguments)}return null===x?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Send a Message"})}),Object(E.jsx)("div",{children:!x&&Object(E.jsx)(b.a,{children:Object(E.jsx)(b.a.Body,{children:Object(E.jsxs)(p.a,{onSubmit:function(e){return F.apply(this,arguments)},children:[Object(E.jsxs)(p.a.Group,{id:"name",children:[Object(E.jsx)(p.a.Label,{children:"Name"}),Object(E.jsx)(p.a.Control,{type:"text",ref:f,placeholder:"name",required:!0})]}),Object(E.jsxs)(p.a.Group,{id:"email",children:[Object(E.jsx)(p.a.Label,{children:"Email"}),Object(E.jsx)(p.a.Control,{type:"email",ref:S,placeholder:"email",required:!0})]}),Object(E.jsxs)(p.a.Group,{id:"message",children:[Object(E.jsx)(p.a.Label,{children:"Message"}),Object(E.jsx)(p.a.Control,{type:"text",ref:y,placeholder:"Type message",required:!0})]}),Object(E.jsx)(h.a,{type:"submit",children:"Send Message"})]})})})})]}):Object(E.jsx)("div",{children:x?Object(E.jsxs)(O.a,{variant:"success",children:["Your message was successfully sent to ",t.service_content.page_title,Object(E.jsx)("br",{}),"We will send you an email when ",t.service_content.page_title," responds to your message."]}):Object(E.jsxs)(O.a,{variant:"danger",children:["Error occurred, please contact support",Object(E.jsx)("br",{})]})})};_.a.apps.length?ee=_.a.app().firestore():(ee=_.a.firestore(),_.a.initializeApp(y));var ne=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(R.h)().search;return Object(r.useEffect)((function(){var e=new URLSearchParams(c);if(e.has("chat")&&e.has("provider")){var t=new URLSearchParams(c).get("provider"),n=new URLSearchParams(c).get("chat"),r=ee.collection("serviceProviders").doc(t).collection("conversations").doc(n).collection("messages").orderBy("timestamp","asc").onSnapshot(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],console.log("convo hook rerunning"),t.forEach((function(e){var t=e.id;e.data().message_sent_by,n.push({message:e.data().message,timestamp:e.data().timestamp,message_sent_by:e.data().message_sent_by,messageID:t})})),a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){a("DN_EXIST")}));return function(){return r()}}a("DN_EXIST")}),[]),console.log("messages: "+JSON.stringify(n)),n};var ae,re=function(){var e=Object(R.g)();return Object(E.jsx)("div",{className:"back-button",children:Object(E.jsx)("button",{onClick:function(){return e.push("/")},children:"Return Home"})})};_.a.apps.length?ae=_.a.app().firestore():(_.a.initializeApp(S),ae=_.a.firestore());var ce,se=function(e){e.match,e.location;var t=Object(R.h)().search,n=M(),a=n.width,c=n.height,s=Object(r.useState)(.7*a),i=Object(o.a)(s,2),u=i[0],O=i[1],g={client:{padding:"5px","border-radius":"5px","background-color":"#0574DD",color:"white",maxWidth:"".concat(.4*a,"px"),"margin-right":"5px","margin-left":"auto"},provider:{padding:"5px","border-radius":"5px","background-color":"white",color:"black",maxWidth:"".concat(.4*a,"px"),"margin-left":"5px","margin-right":"auto"}},v=new URLSearchParams(t).get("provider"),x=ne(),m=Object(r.useState)(!1),f=Object(o.a)(m,2),y=(f[0],f[1],Object(r.useState)(!1)),S=Object(o.a)(y,2),F=(S[0],S[1],Object(r.useRef)());function w(){return w=Object(d.a)(j.a.mark((function e(n){var a,r,c,s,i,o,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams(t).get("provider"),r=new URLSearchParams(t).get("chat"),n.preventDefault(),c=F.current.value,console.log("Message: "+c),e.prev=5,s=Date.now(),i=ae.collection("serviceProviders").doc(a).collection("conversations").doc(r).collection("messages").doc(),o=ae.collection("serviceProviders").doc(a).collection("conversations").doc(r),e.next=11,i.set({message:c,message_sent_by:"client",timestamp:s,provider_read_status:"unread"});case 11:o.update({last_message_sent:c,last_message_sent_by:"client",timestamp:s,provider_read_status:"unread"}).then((function(){F.current.value=""})),(u=ae.collection("serviceProviders").doc(a)).get().then(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data().msgs_notifications,a.push(r),e.next=4,u.update({msgs_notifications:(n=_.a.firestore.FieldValue).arrayUnion.apply(n,Object(l.a)(a))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("message sent: "+c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.log("error is: "+e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,17]])}))),w.apply(this,arguments)}return Object(r.useEffect)((function(){O(a<672||a<990?.8*a:.5*a)}),[a,c]),"DN_EXIST"===x?Object(E.jsx)(R.a,{to:"/"}):Object(E.jsxs)("div",{style:{maxHeight:c},children:[Object(E.jsx)(re,{}),Object(E.jsxs)("div",{style:{display:"grid","place-items":"center","align-content":"center"},children:[Object(E.jsx)("h2",{style:{position:"absolute",top:"0"},children:" Your Messages"}),x?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{style:{width:"".concat(u,"px"),height:"".concat(.7*c,"px"),position:"absolute",maxHeight:"".concat(.7*c,"px"),overflowY:"auto",top:"10%"},children:x.map((function(e,t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("br",{}),Object(E.jsx)("div",{style:g[e.message_sent_by],children:Object(E.jsxs)("li",{style:{listStyle:"none"},children:["client"===e.message_sent_by?Object(E.jsx)("h5",{children:"you:"}):Object(E.jsxs)("h5",{children:[v,":"]}),Object(E.jsx)("h4",{children:e.message})]},t)})]})}))}),Object(E.jsx)("div",{style:{position:"absolute",bottom:"0px",display:"table"},children:Object(E.jsx)(p.a,{inline:!0,onSubmit:function(e){return w.apply(this,arguments)},children:Object(E.jsxs)("div",{style:{display:"table-row"},children:[Object(E.jsx)("div",{style:{display:"table-cell"},children:Object(E.jsx)(p.a.Group,{id:"message",children:Object(E.jsx)(p.a.Control,{type:"text",ref:F,placeholder:"Type message",required:!0})})}),Object(E.jsx)("div",{style:{display:"table-cell"},children:Object(E.jsx)(h.a,{type:"submit",children:"Send Message"})})]})})})]}):Object(E.jsx)(I.a,{animation:"border"})]})]})};_.a.apps.length?ce=_.a.app().firestore():(ce=_.a.firestore(),_.a.initializeApp(y));var ie,oe=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(R.h)().search;return Object(r.useEffect)((function(){var e=new URLSearchParams(c);if(e.has("bookingref")&&e.has("provider")){var t=new URLSearchParams(c).get("provider"),n=new URLSearchParams(c).get("bookingref"),r=ce.collection("serviceProviders").doc(t).collection("bookingrequests").doc(n).collection("messages").orderBy("timestamp","asc").onSnapshot(function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],console.log("convo hook rerunning"),t.forEach((function(e){var t=e.id;e.data().message_sent_by,n.push({message:e.data().message,timestamp:e.data().timestamp,message_sent_by:e.data().message_sent_by,messageID:t})})),a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){a("DN_EXIST")}));return function(){return r()}}a("DN_EXIST")}),[]),console.log("messages: "+JSON.stringify(n)),n};_.a.apps.length?ie=_.a.app().firestore():(ie=_.a.firestore(),_.a.initializeApp(y));var le,de=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(R.h)().search;return Object(r.useEffect)((function(){var e=new URLSearchParams(c);if(e.has("bookingref")&&e.has("provider")){var t=new URLSearchParams(c).get("provider"),n=new URLSearchParams(c).get("bookingref"),r=ie.collection("serviceProviders").doc(t).collection("bookingrequests").doc(n).onSnapshot((function(e){a(e.data())}),(function(){a("DN_EXIST")}));return function(){return r()}}a("DN_EXIST")}),[]),n};_.a.apps.length?le=_.a.app().firestore():(_.a.initializeApp(S),le=_.a.firestore());var ue=function(e){e.match,e.location;var t=M(),n=t.width,a=t.height,c=Object(r.useState)(.7*n),s=Object(o.a)(c,2),i=s[0],u=s[1],O={client:{padding:"5px","border-radius":"5px","background-color":"#0574DD",color:"white",maxWidth:"".concat(.4*n,"px"),"margin-right":"5px","margin-left":"auto"},provider:{padding:"5px","border-radius":"5px","background-color":"white",color:"black",maxWidth:"".concat(.4*n,"px"),"margin-left":"5px","margin-right":"auto"}},g=Object(R.h)().search,v=oe(),x=de(),m=Object(r.useRef)(),f=new URLSearchParams(g).get("provider");function y(){return y=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,s,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(g).get("provider"),a=new URLSearchParams(g).get("bookingref"),t.preventDefault(),r=m.current.value,console.log("Message: "+r),e.prev=5,c=Date.now(),s=le.collection("serviceProviders").doc(n).collection("bookingrequests").doc(a).collection("messages").doc(),i=le.collection("serviceProviders").doc(n).collection("bookingrequests").doc(a),e.next=11,s.set({message:r,message_sent_by:"client",timestamp:c,provider_read_status:"unread"});case 11:i.update({last_message_sent:r,last_message_sent_by:"client",timestamp:c,provider_read_status:"unread"}).then((function(){m.current.value=""})),(o=le.collection("serviceProviders").doc(n)).get().then(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data().booking_requests_notifications,r.push(a),e.next=4,o.update({booking_requests_notifications:(n=_.a.firestore.FieldValue).arrayUnion.apply(n,Object(l.a)(r))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("message sent: "+r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.log("error is: "+e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,17]])}))),y.apply(this,arguments)}return Object(r.useEffect)((function(){u(n<672||n<990?.8*n:.5*n)}),[n,a]),"DN_EXIST"===x||"DN_EXIST"===v?Object(E.jsx)(R.a,{to:"/"}):Object(E.jsxs)("div",{style:{maxHeight:a},children:[Object(E.jsx)("div",{children:Object(E.jsx)(re,{})}),Object(E.jsx)("h2",{style:{position:"absolute",top:"0%"},children:" Your Booking Request"}),Object(E.jsx)("br",{}),x&&v?Object(E.jsxs)("div",{style:{display:"grid","place-items":"center","align-content":"center"},children:[Object(E.jsx)(b.a,{style:{width:"".concat(i,"px"),position:"absolute",maxHeight:"".concat(.25*a,"px"),overflowY:"auto",top:"10%"},children:Object(E.jsxs)(b.a.Body,{children:[Object(E.jsx)(b.a.Title,{children:x.client_name}),Object(E.jsxs)(b.a.Text,{children:["Service: ",x.service_requested,"Notes: ",x.service_notes,Object(E.jsx)(p.a.Label,{children:"Event Start"}),Object(E.jsx)(b.a.Text,{type:"text",disabled:!0,placeholder:"".concat(new Date(x.startTime).toString())}),Object(E.jsx)("br",{}),Object(E.jsx)(p.a.Label,{children:"Event End"}),Object(E.jsx)(b.a.Text,{type:"text",disabled:!0,placeholder:"".concat(new Date(x.endTime).toString())})]})]})}),Object(E.jsx)("br",{}),Object(E.jsx)(b.a,{style:{width:"".concat(i,"px"),height:"".concat(.4*a,"px"),display:"block",maxHeight:"".concat(.4*a,"px"),overflowY:"auto",top:"50%"},children:v.map((function(e,t){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{style:O[e.message_sent_by],children:Object(E.jsxs)("li",{style:{"list-style":"none"},children:["client"===e.message_sent_by?Object(E.jsx)("h5",{children:"you:"}):Object(E.jsxs)("h5",{children:[f,":"]}),Object(E.jsx)("h4",{children:e.message})]},t)}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{})]})}))}),Object(E.jsx)("div",{style:{position:"absolute",bottom:"0px",display:"table"},children:Object(E.jsx)(p.a,{inline:!0,onSubmit:function(e){return y.apply(this,arguments)},children:Object(E.jsxs)("div",{style:{display:"table-row"},children:[Object(E.jsx)("div",{style:{display:"table-cell"},children:Object(E.jsx)(p.a.Group,{id:"message",children:Object(E.jsx)(p.a.Control,{type:"text",ref:m,placeholder:"Type message",required:!0})})}),Object(E.jsx)("div",{style:{display:"table-cell"},children:Object(E.jsx)(h.a,{type:"submit",children:"Send Message"})})]})})})]}):Object(E.jsx)(I.a,{animation:"border"})]})};n(100).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var je=function(){return Object(E.jsxs)("div",{className:"Lost",children:[Object(E.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(E.jsx)("br",{}),Object(E.jsx)("h2",{children:" Navigate to servviio.com to create a site for your service "})]})};_.a.apps.length?_.a.app().firestore():(_.a.firestore(),_.a.initializeApp(y));var be,pe;n(100).io,n(126);_.a.apps.length?pe=_.a.app().firestore():(_.a.initializeApp(y),pe=_.a.firestore());Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var he=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(o.a)(c,2),i=(s[0],s[1]),l=Object(R.h)(),d=Object(r.useState)(!1),u=Object(o.a)(d,2),j=u[0],b=u[1],p=Object(r.useState)(!1),h=Object(o.a)(p,2),O=h[0],g=(h[1],Object(r.useState)(null)),v=Object(o.a)(g,2);return v[0],v[1],Object(r.useEffect)((function(){!function(){console.log("href url: "+window.location.href),console.log("document url: "+document.URL);var e=new URL(document.URL);console.log("hostname: "+e.hostname);var t=e.hostname;be=(be=t.replace(".myservviio.com","")).replace(".localhost",""),null===n&&pe.collection("serviceProviders").doc(be).get().then((function(e){e.exists?(a({site_name:e.id,service_content:e.data()}),i(!1)):b(!0)}),(function(e){console.log("provider probably doesn't exist, error was: "+e)}))}()}),[]),!0===j?Object(E.jsx)(je,{}):null!==n&&void 0!==n&&n?Object(E.jsxs)(E.Fragment,{children:[!O&&"/booking-request/details"!==l.pathname&&"/conversations"!==l.pathname&&Object(E.jsx)(Q,{serviceContent:n}),Object(E.jsxs)(R.d,{children:[Object(E.jsxs)(R.b,{exact:!0,path:"/",children:[!n&&Object(E.jsx)(I.a,{}),n&&Object(E.jsx)($,{serviceContent:n})]}),Object(E.jsx)(R.b,{exact:!0,path:"/services",children:Object(E.jsxs)("div",{children:[!n&&Object(E.jsx)(I.a,{}),Object(E.jsx)(H,{serviceContent:n})]})}),Object(E.jsxs)(R.b,{exact:!0,path:"/booking-request",children:[!n&&Object(E.jsx)(I.a,{}),n&&Object(E.jsx)(P,{serviceContent:n})]}),Object(E.jsxs)(R.b,{exact:!0,path:"/booking-request/details",children:[!n&&Object(E.jsx)(I.a,{}),Object(E.jsx)(ue,{})]}),Object(E.jsxs)(R.b,{exact:!0,path:"/gallery",children:[!n&&Object(E.jsx)(I.a,{}),Object(E.jsx)(B,{serviceContent:n})]}),Object(E.jsxs)(R.b,{exact:!0,path:"/messages",children:[!n&&Object(E.jsx)(I.a,{}),n&&Object(E.jsx)(te,{serviceContent:n})]}),Object(E.jsx)(R.b,{exact:!0,path:"/conversations",children:Object(E.jsx)(se,{})}),Object(E.jsx)(R.b,{children:Object(E.jsx)(L,{})})]})]}):Object(E.jsx)(I.a,{animation:"border"})},Oe=(n(217),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))});i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(V.a,{children:Object(E.jsx)(he,{})})}),document.getElementById("root")),Oe()},64:function(e){e.exports=JSON.parse('{"a":{"theme-1":{"id":"T_001","name":"Pink_Red_Text","colors":{"body":"#FFFFFF","text":"#fc035a","background":"#FFFFFF"}},"theme-2":{"id":"T_002","name":"Pink_Red_Background","colors":{"body":"#fc035a","text":"#FFFFFF","background":"#fc035a"}},"theme-3":{"id":"T_003","name":"Light_Blue_Text","colors":{"body":"#FFFFFF","text":"#00aeff","background":"#FFFFFF"}},"theme-4":{"id":"T_004","name":"Light_Blue_Background","colors":{"body":"#00aeff","text":"#FFFFFF","background":"#00aeff"}},"theme-5":{"id":"T_005","name":"Navy_Text","colors":{"body":"#FFFFFF","text":"#02184a","background":"#FFFFFF"}},"theme-6":{"id":"T_006","name":"Navy_Background","colors":{"body":"#02184a","text":"#FFFFFF","background":"#02184a"}},"theme-7":{"id":"T_007","name":"Blue_Green_Text","colors":{"body":"#FFFFFF","text":"#00ffb7","background":"#FFFFFF"}},"theme-8":{"id":"T_008","name":"Blue_Green_Background","colors":{"body":"#00ffb7","text":"#FFFFFF","background":"#00ffb7"}},"theme-9":{"id":"T_009","name":"Purple_Pink_Text","colors":{"body":"#FFFFFF","text":"#a60aa6","background":"#FFFFFF"}},"theme-10":{"id":"T_010","name":"Purple_Pink_Background","colors":{"body":"#a60aa6","text":"#FFFFFF","background":"#a60aa6"}}}}')}},[[218,1,2]]]);
//# sourceMappingURL=main.0341ea30.chunk.js.map