(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,a){},158:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n,c=a(1),r=a.n(c),s=a(38),i=a.n(s),o=(a(158),a(12)),l=(a(122),a(27)),d=a(7),u=a(0),b=a.n(u),j=a(229),h=a(236),p=a(235),g=a(144),O=a(230),v=a(148),m=a(106),x=a(137),f=a(138),_=a(139),y=a(20),S=(a(43),a(66),a(164),{apiKey:"AIzaSyBA8Oj4PDbc826IzdhGDDU579yJ2pL3N9o",authDomain:"serviiotest.firebaseapp.com",projectId:"serviiotest",storageBucket:"serviiotest.appspot.com",messagingSenderId:"199172448030",appId:"1:199172448030:web:c83109d3e1e9101e3ff30f",measurementId:"G-QL4CWBDQQJ"}),w=S;y.a.apps.length?n=y.a.app().firestore():(y.a.initializeApp(S),n=y.a.firestore());var k=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var t=n.collection("serviceProviders").doc(e).collection("events").onSnapshot(function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t.forEach((function(e){"DEFINITE"===e.data().event_status&&("none"===e.data().recurrence_type?a.push({id:e.id,title:"UNAVAILABLE",start:e.data().event_start,end:e.data().event_end,startStr:e.data().event_start_datetimeISO,endStr:e.data().event_end_datetimeISO,notes:e.data().event_notes,recurrence_type:"none"}):null===e.data().endTime?a.push({id:e.id,title:"UNAVAILABLE",notes:e.data().event_notes,daysOfWeek:e.data().daysOfWeek,startTime:e.data().startTime,endTime:e.data().endTime,startRecur:e.data().startRecur,recurrence_type:"simple_recurrence"}):a.push({id:e.id,title:"UNAVAILABLE",notes:e.data().event_notes,daysOfWeek:e.data().daysOfWeek,startRecur:e.data().startRecur,endRecur:e.data().endRecur,startTime:e.data().startTime,endTime:e.data().endTime,recurrence_type:"simple_recurrence"}))})),s(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return t()}}),[]),console.log("events: "+JSON.stringify(r)),r},F=a(141),T=a.n(F);function E(){var e=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(o.a)(e,2),a=t[0],n=t[1];function r(){n({width:window.innerWidth,height:window.innerHeight})}return Object(c.useEffect)((function(){return window.addEventListener("resize",r),r(),function(){window.removeEventListener("resize",r)}}),[]),a}var D,R=a(31),P=a(30),L=a.n(P),N=a(4);y.a.apps.length?D=y.a.app().firestore():(y.a.initializeApp(w),D=y.a.firestore());var C=function(e){var t=e.serviceContent,a=Object(c.useState)(null),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useRef)(),u=Object(c.useRef)(),S=Object(c.useRef)(),w=Object(c.useRef)(),F=Object(c.useRef)(),P=k(t.site_name),C=Object(c.useState)(null),I=Object(o.a)(C,2),A=(I[0],I[1]),U=Object(c.useState)(null),B=Object(o.a)(U,2),q=B[0],W=B[1],V=t.service_content.services,G=Object(c.useState)("timeGridWeek"),z=Object(o.a)(G,2),H=z[0],M=(z[1],Object(c.useState)(new Date)),J=Object(o.a)(M,2),K=J[0],X=(J[1],Object(c.useState)(new Date)),Y=Object(o.a)(X,2),Q=Y[0],Z=Y[1],$=Object(c.useState)(new Date),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(c.useState)(null),ce=Object(o.a)(ne,2),re=ce[0],se=ce[1],ie=Object(c.useState)(""),oe=Object(o.a)(ie,2),le=oe[0],de=oe[1],ue=Object(R.h)(),be=(ue.pathname,ue.hash,ue.key,Object(R.g)(),new Date),je=E(),he=je.width,pe=je.height,ge=Object(c.useState)(.8),Oe=Object(o.a)(ge,2),ve=Oe[0],me=Oe[1],xe=Object(c.useRef)(),fe=window.location.hostname.toString();function _e(){return _e=Object(d.a)(b.a.mark((function e(a){var n,c,r,o,j,h,p,g,O,v,m,x,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=i.current.value,c=S.current.value,r=u.current.value,o=w.current.value,j=F.current.value,console.log("Name: "+n),console.log("Email: "+c),console.log("Message: "+r),e.prev=9,console.log("service_requested is: "+le),console.log("offered services are: "+JSON.stringify(q)),null!==re){e.next=17;break}return alert("Please select a date"),e.abrupt("return",null);case 17:if(null!==le&&""!==le){e.next=20;break}return alert("Please select a service"),e.abrupt("return",null);case 20:console.log("serviceRequested object: "+JSON.stringify(q)),h=Date.now(),p=D.collection("serviceProviders").doc(t.site_name).collection("bookingrequests").doc(),g=p.id,O=new Date(te.toISOString()),v=parseFloat(q.duration),m=36e5*v,x=new Date(O.getTime()+m),console.log("service length is: "+v),p.set({last_message_sent:r,last_message_sent_by:"client",client_name:n,client_email:c,service_requested:o,service_notes:j,timestamp:h,booking_status:"pending",provider_read_status:"unread",startTime:te.toISOString(),endTime:x.toISOString()}).then((function(){D.collection("serviceProviders").doc(t.site_name).collection("bookingrequests").doc(g).collection("messages").add({message:r,client_name:n,client_email:c,message_sent_by:"client",timestamp:h,provider_read_status:"unread"}).then((function(){return u.current.value="",s(!0),null}))})),(f=D.collection("serviceProviders").doc(t.site_name)).get().then(function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data().booking_requests_notifications,n.push(g),e.next=4,f.update({booking_requests_notifications:(a=y.a.firestore.FieldValue).arrayUnion.apply(a,Object(l.a)(n))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 32:e.next=38;break;case 34:e.prev=34,e.t0=e.catch(9),console.log("error is: "+e.t0),s(!1);case 38:case"end":return e.stop()}}),e,null,[[9,34]])}))),_e.apply(this,arguments)}return Object(c.useEffect)((function(){L.a.init("a237f239cb8cd02fafc64614c70bb36b"),fe.includes("localhost")?L.a.track("dev_client_side_booking_request_page_visit"):L.a.track("client_side_booking_request_page_visit")}),[]),Object(c.useEffect)((function(){console.log("services: "+JSON.stringify(t.service_content.services));var e=0;if(V)for(console.log("running if in useEffect"),e=0;e<V.length;e++)V[e].service_name===le&&W(V[e]);me(he<700?he<500?.96:.8:.6)}),[le,he]),null===r?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{children:Object(N.jsx)("h1",{style:{textAlign:"center"},children:"Send a Booking Request"})}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(j.a,{className:"justify-content-center",style:{width:"".concat(ve*he,"px"),height:"0.5*".concat(pe,"px")},children:Object(N.jsx)(v.a,{plugins:[m.b,x.a,f.a,_.a],initialView:H,events:P,initialDate:K,ref:xe,customButtons:{changeToMonthView:{text:"Month",click:function(){xe.current.getApi().changeView("dayGridMonth",Q.date)}},changeToWeekView:{text:"Week",click:function(){xe.current.getApi().changeView("timeGridWeek",Q.date)}},changeToTodayView:{text:"Today",click:function(){xe.current.getApi().changeView("timeGridDay",be)}}},dateClick:function(e){(console.log("Full Calendar API date is: "+e.date+" type is: "+typeof e.date),console.log("date.dateStr is: "+e.dateStr+" type is: "+typeof e.dateStr),console.log("date.date is: "+e.date.toDateString()),Z(e.date),"timeGridDay"===xe.current.getApi().view.type)?document.getElementById("sendBookingRequest").scrollIntoView({behavior:"smooth"}):xe.current.getApi().changeView("timeGridDay",e.date)},headerToolbar:{center:"title",left:"changeToTodayView,changeToWeekView,changeToMonthView prev,next",right:""},views:{timeGridDay:{titleFormat:{month:"short",year:"numeric",day:"numeric",weekday:"short"}}}})}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)(j.a,{className:"justify-content-center",style:{maxWidth:"".concat(ve*he,"px")},children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(h.a.Title,{children:"Send Booking Request"}),Object(N.jsx)(h.a.Body,{children:Object(N.jsxs)(p.a,{id:"sendBookingRequest",onSubmit:function(e){return _e.apply(this,arguments)},children:[Object(N.jsxs)(p.a.Group,{id:"name",children:[Object(N.jsx)(p.a.Label,{children:"Name"}),Object(N.jsx)(p.a.Control,{type:"text",ref:i,placeholder:"Name",required:!0})]}),Object(N.jsxs)(p.a.Group,{id:"email",children:[Object(N.jsx)(p.a.Label,{children:"Email"}),Object(N.jsx)(p.a.Control,{type:"email",ref:S,placeholder:"Email",required:!0})]}),Object(N.jsx)(p.a.Label,{children:"Select Service"}),Object(N.jsxs)(p.a.Control,{"aria-label":"Select Service",as:"select",value:le,onChange:function(e){console.log("e.target.value",e.target.value),A(e),de(e.target.value)},children:[Object(N.jsx)("option",{ref:w,value:""}),V.map((function(e,t){return Object(N.jsx)("option",{ref:w,value:e.service_name,children:e.service_name})}))]}),Object(N.jsxs)(p.a.Group,{id:"notes",children:[Object(N.jsx)(p.a.Label,{children:"Extra Notes"}),Object(N.jsx)(p.a.Control,{type:"text",ref:F,placeholder:"Type message"})]}),Object(N.jsx)("br",{}),Object(N.jsx)(T.a,{onChange:function(e){ae(e),se(!0)},value:te,disableClock:!0}),Object(N.jsx)("br",{}),Object(N.jsxs)(p.a.Group,{id:"message",children:[Object(N.jsx)(p.a.Label,{children:"Message"}),Object(N.jsx)(p.a.Control,{type:"text",ref:u,placeholder:"Type message"})]}),Object(N.jsx)("br",{}),Object(N.jsx)(g.a,{type:"submit",children:"Submit Booking Request"})]})})]})})]}):Object(N.jsx)("div",{children:r?Object(N.jsxs)(O.a,{variant:"success",children:["Your message was successfully sent to ",t.service_content.page_title,Object(N.jsx)("br",{}),"We will send you an email when ",t.service_content.page_title," responds to your message."]}):Object(N.jsxs)(O.a,{variant:"danger",children:["Error occurred, please contact support at support@servviio.com",Object(N.jsx)("br",{})]})})};a(101).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var I,A=function(){return Object(N.jsxs)("div",{className:"Lost",children:[Object(N.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(N.jsx)("br",{}),Object(N.jsx)("h2",{children:" Use navigation bar above to navigate to existing pages "})]})};y.a.apps.length?(y.a.app().firestore(),I=y.a.app().firestore(),y.a.firestore.FieldValue.serverTimestamp):(y.a.firestore(),y.a.initializeApp(S),I=y.a.firestore(),y.a.firestore.FieldValue.serverTimestamp);var U,B=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){var t=I.collection("serviceProviders").doc(e).onSnapshot((function(e){var t;t=e.data().gallery_images,r(t)}));return function(){return t()}}),[e]),{docs:n}},q=a(231),W=function(e){var t=e.provider_Name,a=e.setSelectedImg,n=B(t).docs;return Object(N.jsxs)("div",{className:"img-grid",children:[!n&&Object(N.jsx)(q.a,{animation:"border"}),n&&n.map((function(e,t){return Object(N.jsx)("div",{className:"img-wrap",layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return a(e.url)},children:Object(N.jsx)("img",{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}})},t)}))]})},V=a(233),G=function(e){var t=e.setSelectedImg,a=e.selectedImg;return Object(N.jsx)(V.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1},children:Object(N.jsx)(V.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}})})};function z(e){var t=e.serviceContent,a=Object(c.useState)(null),n=Object(o.a)(a,2),r=n[0],s=n[1],i=t.site_name,l=window.location.hostname.toString();return Object(c.useEffect)((function(){L.a.init("a237f239cb8cd02fafc64614c70bb36b"),l.includes("localhost")?L.a.track("dev_client_side_gallery_page_visit"):L.a.track("client_side_gallery_page_visit")}),[]),null===i?Object(N.jsx)(q.a,{animation:"border"}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:" Gallery "}),0===t.service_content.gallery_images.length?Object(N.jsx)("h2",{children:"No Images Added Yet"}):Object(N.jsxs)("div",{className:"Gallery",children:[i&&Object(N.jsx)(W,{provider_Name:i,setSelectedImg:s}),r&&Object(N.jsx)(G,{selectedImg:r,setSelectedImg:s})]})]})}y.a.apps.length?y.a.app().firestore():(y.a.initializeApp(S),y.a.firestore()),y.a.apps.length?U=y.a.app().firestore():(U=y.a.firestore(),y.a.initializeApp(S));var H=function(e){console.log("admin_data in useServicList: "+e);var t=Object(c.useState)(null),a=Object(o.a)(t,2),n=a[0],r=a[1];return console.log("serviceList render ran again..."),Object(c.useEffect)((function(){var t=U.collection("serviceProviders").doc(e).onSnapshot((function(e){var t,a;return new Promise((function(n,c){t=e.data().services,a=e.data().service_categories,console.log("useEffect serviceList ran again..."),n({services:t,serviceCategories:a})})).then(function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n,c,r,s=[],i=t.services,o=t.serviceCategories;if(i&&o)if(0===o.length)e("NO_SERVICES");else for(console.log("services and categories set"),n=0;n<o.length;n++){var l={};for(r=[],c=0;c<i.length;c++)console.log("service category: "+o[n]+" service name: "+JSON.stringify(i[c])),i[c].main_category===o[n].toString()&&r.push(i[c]),c===i.length-1&&(l[o[n]]=r,s.push(l));n===o.length-1&&(console.log("Services inside loop: "+JSON.stringify(l)),console.log("ServiceReady has been set to true"),e(s))}console.log("numbers is about to change/cause rerender...")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){r(e)}))}));return function(){return t()}}),[]),n},M=a(237);y.a.apps.length?y.a.app().firestore():(y.a.initializeApp(S),y.a.firestore());var J=function(e){var t=e.serviceContent;console.log("Calendar rerendered"),console.log("admin_data in Calendar: "+t.site_name);var a=H(t.site_name),n=window.location.hostname.toString();return Object(c.useEffect)((function(){L.a.init("a237f239cb8cd02fafc64614c70bb36b"),n.includes("localhost")?L.a.track("dev_client_side_services_page_visit"):L.a.track("client_side_services_page_visit")}),[]),0!==t.service_content.service_categories.length?null===a?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(q.a,{animation:"border"})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:"Services"}),Object(N.jsx)("div",{children:a.map((function(e,t){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.a,{children:[Object(N.jsxs)(h.a.Header,{children:[Object.keys(e)[0],Object(N.jsx)("br",{})]}),Object(N.jsx)(M.a,{variant:"flush",children:Object.values(e)[0].map((function(e,t){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h.a,{children:Object(N.jsxs)(M.a.Item,{children:[Object(N.jsxs)(h.a.Title,{children:[e.service_name,Object(N.jsx)("br",{})]}),Object(N.jsx)("br",{}),Object(N.jsxs)(h.a.Subtitle,{children:["Price: \xa3",e.price]}),Object(N.jsx)("br",{}),Object(N.jsxs)(h.a.Subtitle,{children:["Duration: ",e.duration," hour(s)"]}),Object(N.jsx)("br",{}),Object(N.jsx)(h.a.Text,{children:e.description})]})}),Object(N.jsx)("br",{})]})}))})]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})}))})]}):Object(N.jsx)("h2",{children:"No Services Added Yet"})},K=a(33),X=a(63),Y=a(234),Q=a(238),Z=a(232),$=a(72);var ee=function(e){var t=e.serviceContent,a=Object(c.useState)(375),n=Object(o.a)(a,2),r=n[0],s=n[1],i=E(),l=i.width,d=i.height,u=t.service_content.page_theme.theme_name;return Object(c.useEffect)((function(){s(l)}),[l,d]),r<1024?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(Y.a,{className:"topnav",style:{"background-color":X.a[u].colors.background,height:"15vh"},children:[Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/",children:Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:t.service_content.page_title})})}),Object(N.jsx)(Y.a.Toggle,{"aria-controls":"navbar-dark-example"}),Object(N.jsx)(Y.a.Collapse,{style:{"z-index":"20"},id:"navbar-dark-example",children:Object(N.jsx)(Q.a,{className:"topnav-right",children:Object(N.jsxs)(Z.a,{id:"nav-dropdown-dark-example",title:Object(N.jsx)("span",{style:{color:X.a[u].colors.text},children:"Menu"}),align:"end",children:[Object(N.jsx)(Z.a.Item,{style:{color:"black"},href:"/services",children:"Services"}),Object(N.jsx)($.a.Divider,{}),Object(N.jsx)(Z.a.Item,{style:{color:"black"},href:"/send-me-a-booking-request",children:"Send Booking Request"}),Object(N.jsx)($.a.Divider,{}),Object(N.jsx)(Z.a.Item,{style:{color:"black"},href:"/send-me-a-message",children:"Send Message"}),Object(N.jsx)($.a.Divider,{}),Object(N.jsx)(Z.a.Item,{style:{color:"black"},href:"/gallery",children:"Gallery"})]})})})]})}):Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"topnav",style:{"background-color":X.a[u].colors.background,height:"15vh"},children:[Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/",children:Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:t.service_content.page_title})})}),Object(N.jsxs)("div",{className:"topnav-right",children:[Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/services",children:"Service Info & Pricing"}),Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/send-me-a-booking-request",children:"Availability & Booking"}),Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/send-me-a-message",children:"Send Message"}),Object(N.jsx)(K.b,{style:{textDecoration:"none",color:X.a[u].colors.text,"font-weight":"bold"},to:"/gallery",children:"Gallery"})]})]})})};var te,ae=function(e){var t=e.serviceContent,a=Object(R.h)().search,n=window.location.hostname.toString();Object(c.useEffect)((function(){new URLSearchParams(a).has("source")?(L.a.init("a237f239cb8cd02fafc64614c70bb36b"),n.includes("localhost")?L.a.track("dev_website_page_visit_source_admin"):L.a.track("website_page_visit_source_admin")):(L.a.init("a237f239cb8cd02fafc64614c70bb36b"),n.includes("localhost")?L.a.track("dev_website_page_visit_organic"):L.a.track("website_page_visit_organic"))}),[]);var r=t.service_content.page_background_image.url,s=t.service_content.title_tagline_colour.hex_code;return console.log("background image URL:"+r),Object(N.jsxs)("div",{style:{textAlign:"center"},children:[Object(N.jsx)("div",{style:{"background-image":"url(".concat(r,")"),"background-repeat":"no-repeat","background-attachment":"fixed","background-size":"100% 100%","min-height":"85%","max-height":"85%",opacity:"0.4","min-width":"1024px",width:"100%",height:"auto",position:"fixed",bottom:"0",left:"0"}}),Object(N.jsx)("h1",{style:{"font-weight":"bold",color:s,position:"absolute",top:"50%",left:"20%","z-index":"10"},children:t.service_content.page_title}),Object(N.jsx)("br",{}),Object(N.jsxs)("h4",{style:{"font-weight":"bold",color:s,position:"absolute",top:"58%",left:"20%","z-index":"10"},children:[" ",t.service_content.tagline]})]})};a(101).io,a(128),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;y.a.apps.length?te=y.a.app().firestore():(y.a.initializeApp(w),te=y.a.firestore());var ne,ce=function(e){var t=e.serviceContent,a=Object(c.useState)(""),n=Object(o.a)(a,2),r=(n[0],n[1],Object(c.useState)("")),s=Object(o.a)(r,2),i=(s[0],s[1],Object(c.useState)("")),u=Object(o.a)(i,2),j=(u[0],u[1],Object(c.useState)(null)),v=Object(o.a)(j,2),m=v[0],x=v[1],f=Object(c.useRef)(),_=Object(c.useRef)(),S=Object(c.useRef)(),w=window.location.hostname.toString();function k(){return k=Object(d.a)(b.a.mark((function e(a){var n,c,r,s,i,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=f.current.value,c=S.current.value,r=_.current.value,e.prev=4,s=Date.now(),i=te.collection("serviceProviders").doc(t.site_name).collection("conversations").doc(),o=i.id,e.next=10,i.set({last_message_sent:r,last_message_sent_by:"client",client_name:n,client_email:c,timestamp:s,provider_read_status:"unread"});case 10:return e.next=12,te.collection("serviceProviders").doc(t.site_name).collection("conversations").doc(o).collection("messages").add({message:r,client_name:n,client_email:c,message_sent_by:"client",timestamp:s,provider_read_status:"unread"});case 12:(u=te.collection("serviceProviders").doc(t.site_name)).get().then(function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data().msgs_notifications,n.push(o),e.next=4,u.update({msgs_notifications:(a=y.a.firestore.FieldValue).arrayUnion.apply(a,Object(l.a)(n))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x(!0),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log("error is: "+e.t0),x(!1);case 21:case"end":return e.stop()}}),e,null,[[4,17]])}))),k.apply(this,arguments)}return Object(c.useEffect)((function(){L.a.init("a237f239cb8cd02fafc64614c70bb36b"),w.includes("localhost")?L.a.track("dev_client_side_messages_page_visit"):L.a.track("client_side_messages_page_visit")}),[]),null===m?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"Send a Message"})}),Object(N.jsx)("div",{children:!m&&Object(N.jsx)(h.a,{children:Object(N.jsx)(h.a.Body,{children:Object(N.jsxs)(p.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(N.jsxs)(p.a.Group,{id:"name",children:[Object(N.jsx)(p.a.Label,{children:"Name"}),Object(N.jsx)(p.a.Control,{type:"text",ref:f,placeholder:"name",required:!0})]}),Object(N.jsxs)(p.a.Group,{id:"email",children:[Object(N.jsx)(p.a.Label,{children:"Email"}),Object(N.jsx)(p.a.Control,{type:"email",ref:S,placeholder:"email",required:!0})]}),Object(N.jsxs)(p.a.Group,{id:"message",children:[Object(N.jsx)(p.a.Label,{children:"Message"}),Object(N.jsx)(p.a.Control,{type:"text",ref:_,placeholder:"Type message",required:!0})]}),Object(N.jsx)(g.a,{type:"submit",children:"Send Message"})]})})})})]}):Object(N.jsx)("div",{children:m?Object(N.jsxs)(O.a,{variant:"success",children:["Your message was successfully sent to ",t.service_content.page_title,Object(N.jsx)("br",{}),"We will send you an email when ",t.service_content.page_title," responds to your message."]}):Object(N.jsxs)(O.a,{variant:"danger",children:["Error occurred, please contact support at support@servviio.com",Object(N.jsx)("br",{})]})})};y.a.apps.length?ne=y.a.app().firestore():(ne=y.a.firestore(),y.a.initializeApp(S));var re=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(R.h)().search;return Object(c.useEffect)((function(){var e=new URLSearchParams(r);if(e.has("chat")&&e.has("provider")){var t=new URLSearchParams(r).get("provider"),a=new URLSearchParams(r).get("chat"),c=ne.collection("serviceProviders").doc(t).collection("conversations").doc(a).collection("messages").orderBy("timestamp","asc").onSnapshot(function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],console.log("convo hook rerunning"),t.forEach((function(e){var t=e.id;e.data().message_sent_by,a.push({message:e.data().message,timestamp:e.data().timestamp,message_sent_by:e.data().message_sent_by,messageID:t})})),n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){n("DN_EXIST")}));return function(){return c()}}n("DN_EXIST")}),[]),console.log("messages: "+JSON.stringify(a)),a};var se,ie=function(){var e=Object(R.g)();return Object(N.jsx)("div",{className:"back-button",style:{paddingBottom:"10px"},children:Object(N.jsx)("button",{onClick:function(){return e.push("/")},children:"Return Home"})})};y.a.apps.length?se=y.a.app().firestore():(y.a.initializeApp(w),se=y.a.firestore());var oe,le=function(e){e.match,e.location;var t=Object(R.h)().search,a=E(),n=a.width,r=a.height,s=Object(c.useState)(.7*n),i=Object(o.a)(s,2),u=i[0],j=i[1],O={client:{padding:"5px","border-radius":"5px","background-color":"#0574DD",color:"white",maxWidth:"".concat(.8*u,"px"),"margin-right":"5px","margin-left":"auto"},provider:{padding:"5px","border-radius":"5px","background-color":"white",color:"black",maxWidth:"".concat(.8*u,"px"),"margin-left":"5px","margin-right":"auto"}},v=new URLSearchParams(t).get("provider"),m=re(),x=Object(c.useState)(!1),f=Object(o.a)(x,2),_=(f[0],f[1],Object(c.useState)(!1)),S=Object(o.a)(_,2),w=(S[0],S[1],Object(c.useRef)());function k(){return k=Object(d.a)(b.a.mark((function e(a){var n,c,r,s,i,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams(t).get("provider"),c=new URLSearchParams(t).get("chat"),a.preventDefault(),r=w.current.value,console.log("Message: "+r),e.prev=5,s=Date.now(),i=se.collection("serviceProviders").doc(n).collection("conversations").doc(c).collection("messages").doc(),o=se.collection("serviceProviders").doc(n).collection("conversations").doc(c),e.next=11,i.set({message:r,message_sent_by:"client",timestamp:s,provider_read_status:"unread"});case 11:o.update({last_message_sent:r,last_message_sent_by:"client",timestamp:s,provider_read_status:"unread"}).then((function(){w.current.value=""})),(u=se.collection("serviceProviders").doc(n)).get().then(function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data().msgs_notifications,n.push(c),e.next=4,u.update({msgs_notifications:(a=y.a.firestore.FieldValue).arrayUnion.apply(a,Object(l.a)(n))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("message sent: "+r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.log("error is: "+e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,17]])}))),k.apply(this,arguments)}return Object(c.useEffect)((function(){j(n<672||n<990?.8*n:.5*n)}),[n,r]),"DN_EXIST"===m?Object(N.jsx)(R.a,{to:"/"}):Object(N.jsxs)("div",{style:{maxHeight:r},children:[Object(N.jsx)(ie,{}),Object(N.jsx)("div",{style:{display:"grid","place-items":"center","align-content":"center",paddingLeft:"10px"},children:m?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h.a,{style:{width:"".concat(u,"px"),height:"".concat(.7*r,"px"),position:"absolute",maxHeight:"".concat(.7*r,"px"),overflowY:"auto",top:"12%"},children:m.map((function(e,t){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("br",{}),Object(N.jsx)("div",{style:O[e.message_sent_by],children:Object(N.jsxs)("li",{style:{listStyle:"none"},children:["client"===e.message_sent_by?Object(N.jsx)("h5",{children:"you:"}):Object(N.jsxs)("h5",{children:[v,":"]}),Object(N.jsx)("h4",{children:e.message})]},t)})]})}))}),Object(N.jsx)("div",{style:{position:"absolute",bottom:"0px",display:"table"},children:Object(N.jsx)(p.a,{inline:!0,onSubmit:function(e){return k.apply(this,arguments)},children:Object(N.jsxs)("div",{style:{display:"table-row"},children:[Object(N.jsx)("div",{style:{display:"table-cell"},children:Object(N.jsx)(p.a.Group,{id:"message",children:Object(N.jsx)(p.a.Control,{type:"text",ref:w,placeholder:"Type message",required:!0})})}),Object(N.jsx)("div",{style:{display:"table-cell"},children:Object(N.jsx)(g.a,{type:"submit",children:"Send Message"})})]})})})]}):Object(N.jsx)(q.a,{animation:"border"})})]})};y.a.apps.length?oe=y.a.app().firestore():(oe=y.a.firestore(),y.a.initializeApp(S));var de,ue=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(R.h)().search;return Object(c.useEffect)((function(){var e=new URLSearchParams(r);if(e.has("bookingref")&&e.has("provider")){var t=new URLSearchParams(r).get("provider"),a=new URLSearchParams(r).get("bookingref"),c=oe.collection("serviceProviders").doc(t).collection("bookingrequests").doc(a).collection("messages").orderBy("timestamp","asc").onSnapshot(function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],console.log("convo hook rerunning"),t.forEach((function(e){var t=e.id;e.data().message_sent_by,a.push({message:e.data().message,timestamp:e.data().timestamp,message_sent_by:e.data().message_sent_by,messageID:t})})),n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){n("DN_EXIST")}));return function(){return c()}}n("DN_EXIST")}),[]),console.log("messages: "+JSON.stringify(a)),a};y.a.apps.length?de=y.a.app().firestore():(de=y.a.firestore(),y.a.initializeApp(S));var be,je=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(R.h)().search;return Object(c.useEffect)((function(){var e=new URLSearchParams(r);if(e.has("bookingref")&&e.has("provider")){var t=new URLSearchParams(r).get("provider"),a=new URLSearchParams(r).get("bookingref"),c=de.collection("serviceProviders").doc(t).collection("bookingrequests").doc(a).onSnapshot((function(e){n(e.data())}),(function(){n("DN_EXIST")}));return function(){return c()}}n("DN_EXIST")}),[]),a};y.a.apps.length?be=y.a.app().firestore():(y.a.initializeApp(w),be=y.a.firestore());var he=function(e){e.match,e.location;var t=E(),a=t.width,n=t.height,r=Object(c.useState)(.7*a),s=Object(o.a)(r,2),i=s[0],u=s[1],j={client:{padding:"5px","border-radius":"5px","background-color":"#0574DD",color:"white",maxWidth:"".concat(.4*a,"px"),"margin-right":"5px","margin-left":"auto"},provider:{padding:"5px","border-radius":"5px","background-color":"white",color:"black",maxWidth:"".concat(.4*a,"px"),"margin-left":"5px","margin-right":"auto"}},O=Object(R.h)().search,v=ue(),m=je(),x=Object(c.useRef)(),f=new URLSearchParams(O).get("provider");function _(){return _=Object(d.a)(b.a.mark((function e(t){var a,n,c,r,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams(O).get("provider"),n=new URLSearchParams(O).get("bookingref"),t.preventDefault(),c=x.current.value,console.log("Message: "+c),e.prev=5,r=Date.now(),s=be.collection("serviceProviders").doc(a).collection("bookingrequests").doc(n).collection("messages").doc(),i=be.collection("serviceProviders").doc(a).collection("bookingrequests").doc(n),e.next=11,s.set({message:c,message_sent_by:"client",timestamp:r,provider_read_status:"unread"});case 11:i.update({last_message_sent:c,last_message_sent_by:"client",timestamp:r,provider_read_status:"unread"}).then((function(){x.current.value=""})),(o=be.collection("serviceProviders").doc(a)).get().then(function(){var e=Object(d.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.data().booking_requests_notifications,c.push(n),e.next=4,o.update({booking_requests_notifications:(a=y.a.firestore.FieldValue).arrayUnion.apply(a,Object(l.a)(c))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("message sent: "+c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),console.log("error is: "+e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,17]])}))),_.apply(this,arguments)}return Object(c.useEffect)((function(){u(a<672||a<990?.8*a:.5*a)}),[a,n]),"DN_EXIST"===m||"DN_EXIST"===v?Object(N.jsx)(R.a,{to:"/"}):Object(N.jsxs)("div",{style:{maxHeight:n},children:[Object(N.jsx)("div",{children:Object(N.jsx)(ie,{})}),Object(N.jsx)("h2",{style:{position:"absolute",top:"0%"},children:" Your Booking Request"}),Object(N.jsx)("br",{}),m&&v?Object(N.jsxs)("div",{style:{display:"grid","place-items":"center","align-content":"center"},children:[Object(N.jsx)(h.a,{style:{width:"".concat(i,"px"),position:"absolute",maxHeight:"".concat(.25*n,"px"),overflowY:"auto",top:"10%"},children:Object(N.jsxs)(h.a.Body,{children:[Object(N.jsx)(h.a.Title,{children:m.client_name}),Object(N.jsxs)(h.a.Text,{children:["Service: ",m.service_requested,"Notes: ",m.service_notes,Object(N.jsx)(p.a.Label,{children:"Event Start"}),Object(N.jsx)(h.a.Text,{type:"text",disabled:!0,placeholder:"".concat(new Date(m.startTime).toString())}),Object(N.jsx)("br",{}),Object(N.jsx)(p.a.Label,{children:"Event End"}),Object(N.jsx)(h.a.Text,{type:"text",disabled:!0,placeholder:"".concat(new Date(m.endTime).toString())})]})]})}),Object(N.jsx)("br",{}),Object(N.jsx)(h.a,{style:{width:"".concat(i,"px"),height:"".concat(.4*n,"px"),display:"block",maxHeight:"".concat(.4*n,"px"),overflowY:"auto",top:"50%"},children:v.map((function(e,t){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{style:j[e.message_sent_by],children:Object(N.jsxs)("li",{style:{"list-style":"none"},children:["client"===e.message_sent_by?Object(N.jsx)("h5",{children:"you:"}):Object(N.jsxs)("h5",{children:[f,":"]}),Object(N.jsx)("h4",{children:e.message})]},t)}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{})]})}))}),Object(N.jsx)("div",{style:{position:"absolute",bottom:"0px",display:"table"},children:Object(N.jsx)(p.a,{inline:!0,onSubmit:function(e){return _.apply(this,arguments)},children:Object(N.jsxs)("div",{style:{display:"table-row"},children:[Object(N.jsx)("div",{style:{display:"table-cell"},children:Object(N.jsx)(p.a.Group,{id:"message",children:Object(N.jsx)(p.a.Control,{type:"text",ref:x,placeholder:"Type message",required:!0})})}),Object(N.jsx)("div",{style:{display:"table-cell"},children:Object(N.jsx)(g.a,{type:"submit",children:"Send Message"})})]})})})]}):Object(N.jsx)(q.a,{animation:"border"})]})};a(101).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var pe=function(){return Object(N.jsxs)("div",{className:"Lost",children:[Object(N.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(N.jsx)("br",{}),Object(N.jsx)("h2",{children:" Navigate to servviio.com to create a site for your service "})]})};y.a.apps.length?y.a.app().firestore():(y.a.firestore(),y.a.initializeApp(S));var ge,Oe;a(101).io,a(128);y.a.apps.length?Oe=y.a.app().firestore():(y.a.initializeApp(S),Oe=y.a.firestore());Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var ve=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),s=Object(o.a)(r,2),i=(s[0],s[1]),l=Object(R.h)(),d=Object(c.useState)(!1),u=Object(o.a)(d,2),b=u[0],j=u[1],h=Object(c.useState)(!1),p=Object(o.a)(h,2),g=p[0],v=(p[1],Object(c.useState)(!1)),m=Object(o.a)(v,2),x=m[0],f=m[1],_=Object(c.useState)(null),S=Object(o.a)(_,2);function w(){console.log("href url: "+window.location.href),console.log("document url: "+document.URL);var e=new URL(document.URL);console.log("hostname: "+e.hostname);var t=e.hostname;ge=(ge=t.replace(".myservviio.com","")).replace(".localhost",""),null===a&&Oe.collection("serviceProviders").doc(ge).get().then((function(e){e.exists?(n({site_name:e.id,service_content:e.data()}),i(!1)):j(!0)}),(function(e){console.log("provider probably doesn't exist, error was: "+e)}))}return S[0],S[1],Object(c.useEffect)((function(){y.a.auth().currentUser?w():y.a.auth().signInAnonymously().then((function(){w()}),(function(){f(!0)}))}),[]),!0===b?Object(N.jsx)(pe,{}):x?void O.a:null!==a&&void 0!==a&&a?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"landingPage",children:[Object(N.jsx)("div",{style:{padding:"40px"},children:!g&&"/booking-request/details"!==l.pathname&&"/conversations"!==l.pathname&&Object(N.jsx)(ee,{serviceContent:a})}),Object(N.jsx)("div",{children:Object(N.jsxs)(R.d,{children:[Object(N.jsxs)(R.b,{exact:!0,path:"/",children:[!a&&Object(N.jsx)(q.a,{}),a&&Object(N.jsx)(ae,{serviceContent:a})]}),Object(N.jsx)(R.b,{exact:!0,path:"/services",children:Object(N.jsxs)("div",{children:[!a&&Object(N.jsx)(q.a,{}),Object(N.jsx)(J,{serviceContent:a})]})}),Object(N.jsxs)(R.b,{exact:!0,path:"/send-me-a-booking-request",children:[!a&&Object(N.jsx)(q.a,{}),a&&Object(N.jsx)(C,{serviceContent:a})]}),Object(N.jsxs)(R.b,{exact:!0,path:"/booking-request/details",children:[!a&&Object(N.jsx)(q.a,{}),Object(N.jsx)(he,{})]}),Object(N.jsxs)(R.b,{exact:!0,path:"/gallery",children:[!a&&Object(N.jsx)(q.a,{}),a&&Object(N.jsx)(z,{serviceContent:a})]}),Object(N.jsxs)(R.b,{exact:!0,path:"/send-me-a-message",children:[!a&&Object(N.jsx)(q.a,{}),a&&Object(N.jsx)(ce,{serviceContent:a})]}),Object(N.jsx)(R.b,{exact:!0,path:"/conversations",children:Object(N.jsx)(le,{})}),Object(N.jsx)(R.b,{children:Object(N.jsx)(A,{})})]})})]})}):Object(N.jsx)(q.a,{animation:"border"})},me=(a(218),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,239)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))});i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(K.a,{children:Object(N.jsx)(ve,{})})}),document.getElementById("root")),me()},63:function(e){e.exports=JSON.parse('{"a":{"theme-1":{"id":"T_001","name":"Pink_Red_Text","colors":{"body":"#FFFFFF","text":"#fc035a","background":"#FFFFFF"}},"theme-2":{"id":"T_002","name":"Pink_Red_Background","colors":{"body":"#fc035a","text":"#FFFFFF","background":"#fc035a"}},"theme-3":{"id":"T_003","name":"Light_Blue_Text","colors":{"body":"#FFFFFF","text":"#00aeff","background":"#FFFFFF"}},"theme-4":{"id":"T_004","name":"Light_Blue_Background","colors":{"body":"#00aeff","text":"#FFFFFF","background":"#00aeff"}},"theme-5":{"id":"T_005","name":"Navy_Text","colors":{"body":"#FFFFFF","text":"#02184a","background":"#FFFFFF"}},"theme-6":{"id":"T_006","name":"Navy_Background","colors":{"body":"#02184a","text":"#FFFFFF","background":"#02184a"}},"theme-7":{"id":"T_007","name":"Blue_Green_Text","colors":{"body":"#FFFFFF","text":"#00ffb7","background":"#FFFFFF"}},"theme-8":{"id":"T_008","name":"Blue_Green_Background","colors":{"body":"#00ffb7","text":"#FFFFFF","background":"#00ffb7"}},"theme-9":{"id":"T_009","name":"Purple_Pink_Text","colors":{"body":"#FFFFFF","text":"#a60aa6","background":"#FFFFFF"}},"theme-10":{"id":"T_010","name":"Purple_Pink_Background","colors":{"body":"#a60aa6","text":"#FFFFFF","background":"#a60aa6"}}}}')}},[[219,1,2]]]);
//# sourceMappingURL=main.2355d3f9.chunk.js.map