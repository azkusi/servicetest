(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),o=n(85),i=n.n(o),r=(n(98),n(15)),a=(n(73),n(5)),j=function(e){e.serviceContent;return Object(a.jsx)("div",{className:"service-content",children:Object(a.jsx)("h1",{children:" Send booking request"})})},l=n(24);n(54).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var d=function(){return Object(a.jsxs)("div",{className:"Lost",children:[Object(a.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{children:" Redirect to servviio.com if you like "})]})},b=(n(70),n(54).io),O=n(58),h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,u=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=b();return n.connect("http://localhost:".concat(h)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),O.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Gallery",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s Gallery of images - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})},v=n(54).io,x=n(58),_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,g=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=v();return n.connect("http://localhost:".concat(_)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),x.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Services",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s offered services - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})};var f=function(e){var t,n=e.serviceContent;return t="choice_1"===n.service_content.page_styling?"nav-1":"choice_2"===n.service_content.page_styling?"nav-2":"nav-3",Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:t,children:[Object(a.jsxs)("h2",{children:[" ",n.service_content.page_title," "]}),Object(a.jsx)("ul",{className:"nav-link"})]})})};var p=function(e){var t,n,c,s=e.serviceContent;return console.log("service content:"+JSON.stringify(s)),"choice_1"===s.service_content.page_styling?(t="background-image-1",n="frontPageTitle-1",c="frontPageTagline-1"):"choice_2"===s.service_content.page_styling?(t="background-image-2",n="frontPageTitle-2",c="frontPageTagline-2"):(t="background-image-3",n="frontPageTitle-3",c="frontPageTagline-3"),Object(a.jsxs)("div",{className:t,children:[Object(a.jsxs)("h1",{className:n,children:[" ",s.service_content.page_title]}),Object(a.jsx)("br",{}),Object(a.jsxs)("h3",{className:c,children:[" ",s.service_content.description]})]})},m=n(42);var S,T=function(e){var t,n=e.serviceContent;return t="choice_1"===n.service_content.page_styling?"nav-1a":"choice_2"===n.service_content.page_styling?"nav-2a":"nav-3a",Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:t,children:Object(a.jsxs)("ul",{className:"nav-link",children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/",children:"View Services"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/calendar",children:"View Availability"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/booking-request",children:"Send Booking Request"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/gallery",children:"Gallery"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/messages",children:"Send Message"})})]})})})},E=n(54).io,C=n(58),y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,P=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=E();return n.connect("http://localhost:".concat(y)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),C.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Calendar",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s calendar events - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})},R=n(3),N=n(0),D=n.n(N),k=n(153),L=n(152),F=n(154),w=n(151),K=n(49),W=(n(129),K.a.initializeApp({apiKey:"AIzaSyBw6gDwpt-ryvVo3x6-dIdhIoKFNB3FA5g",authDomain:"dashtest-7cb07.firebaseapp.com",databaseURL:"https://dashtest-7cb07.firebaseio.com",projectId:"dashtest-7cb07",storageBucket:"dashtest-7cb07.appspot.com",messagingSenderId:"541191639978",appId:"1:541191639978:web:77ba0cf5df3174468451d3"})),A=(W.auth(),W);n(136);K.a.apps.length?S=K.a.app().firestore():(K.a.initializeApp(A),S=K.a.firestore());var H=function(e){var t=e.serviceContent,n=Object(c.useState)(""),s=Object(r.a)(n,2),o=(s[0],s[1],Object(c.useState)("")),i=Object(r.a)(o,2),j=(i[0],i[1],Object(c.useState)("")),l=Object(r.a)(j,2),d=(l[0],l[1],Object(c.useState)(!1)),b=Object(r.a)(d,2),O=b[0],h=b[1],u=Object(c.useRef)(),v=Object(c.useRef)(),x=Object(c.useRef)();function _(){return(_=Object(R.a)(D.a.mark((function e(n){var c,s,o,i,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=u.current.value,s=x.current.value,o=v.current.value,console.log("Name: "+c),console.log("Email: "+s),console.log("Message: "+o),h(!0),e.prev=8,i=S.collection("serviceProviders").doc(t.service_provider_name).collection("conversations").doc(),r=i.id,console.log("convorefID is: "+r),e.next=14,i.set({last_message_sent:"heyheyhey"});case 14:return e.next=16,S.collection("serviceProviders").doc(t.service_provider_name).collection("conversations").doc(r).collection("messages").add({message:o,name:c,email:s});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),console.log("error is: "+e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Messages"})}),Object(a.jsxs)("div",{children:[!O&&Object(a.jsx)(k.a,{children:Object(a.jsx)(k.a.Body,{children:Object(a.jsxs)(L.a,{onSubmit:function(e){return _.apply(this,arguments)},children:[Object(a.jsxs)(L.a.Group,{id:"name",children:[Object(a.jsx)(L.a.Label,{children:"Name"}),Object(a.jsx)(L.a.Control,{type:"text",ref:u,placeholder:"name",required:!0})]}),Object(a.jsxs)(L.a.Group,{id:"email",children:[Object(a.jsx)(L.a.Label,{children:"Email"}),Object(a.jsx)(L.a.Control,{type:"email",ref:x,placeholder:"email",required:!0})]}),Object(a.jsxs)(L.a.Group,{id:"message",children:[Object(a.jsx)(L.a.Label,{children:"Message"}),Object(a.jsx)(L.a.Control,{type:"text",ref:v,placeholder:"Type message",required:!0})]}),Object(a.jsx)(F.a,{type:"submit",children:"Send Message"})]})})}),O&&Object(a.jsxs)(w.a,{severity:"success",children:["Your message was successfully sent to ",t.service_content.page_title,Object(a.jsx)("br",{}),"We will send you an email when ",t.service_content.page_title," responds to your message."]})]})]})},M=n(54).io,I=n(58),B=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3;var U=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!0),i=Object(r.a)(o,2),b=i[0],O=i[1];return Object(c.useEffect)((function(){var e,t={},n=M();return n.connect("http://localhost:".concat(B)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),I.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){O(!1),s(e)}))}))}),[]),Object(a.jsxs)(a.Fragment,{children:[n&&Object(a.jsx)(f,{serviceContent:n}),n&&Object(a.jsx)(p,{serviceContent:n}),n&&Object(a.jsx)(T,{serviceContent:n}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsxs)("div",{className:"home",children:[b&&Object(a.jsx)("div",{children:"Loading..."}),n&&Object(a.jsx)(g,{serviceContent:n})]})}),Object(a.jsx)(l.a,{exact:!0,path:"/new",children:Object(a.jsx)(d,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/calendar",children:Object(a.jsx)(P,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/booking-request",children:Object(a.jsx)(j,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/gallery",children:Object(a.jsx)(u,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/messages",children:n&&Object(a.jsx)(H,{serviceContent:n})})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)(U,{})})}),document.getElementById("root")),V()},70:function(e,t,n){},73:function(e,t,n){},98:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.ca7ae68f.chunk.js.map