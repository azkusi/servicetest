(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},57:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(47),i=n.n(o),r=(n(57),n(15)),a=(n(37),n(0)),j=function(e){e.serviceContent;return Object(a.jsx)("div",{className:"service-content",children:Object(a.jsx)("h1",{children:" Send booking request"})})},l=n(2);n(25).io,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;var d=function(){return Object(a.jsxs)("div",{className:"Lost",children:[Object(a.jsx)("h1",{children:" The page you are looking for doesn't exist "}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{children:" Redirect to servviio.com if you like "})]})},O=(n(35),n(25).io),b=n(28),h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,u=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=O();return n.connect("http://localhost:".concat(h)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),b.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Gallery",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s Gallery of images - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})},v=n(25).io,_=n(28),x=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,g=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=v();return n.connect("http://localhost:".concat(x)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),_.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Services",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s offered services - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})};var f=function(e){var t,n=e.serviceContent;return t="choice_1"===n.service_content.page_styling?"nav-1":"choice_2"===n.service_content.page_styling?"nav-2":"nav-3",Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:t,children:[Object(a.jsxs)("h2",{children:[" ",n.service_content.page_title," "]}),Object(a.jsx)("ul",{className:"nav-link"})]})})};var S=function(e){var t,n,c,s=e.serviceContent;return console.log("service content:"+JSON.stringify(s)),"choice_1"===s.service_content.page_styling?(t="background-image-1",n="frontPageTitle-1",c="frontPageTagline-1"):"choice_2"===s.service_content.page_styling?(t="background-image-2",n="frontPageTitle-2",c="frontPageTagline-2"):(t="background-image-3",n="frontPageTitle-3",c="frontPageTagline-3"),Object(a.jsxs)("div",{className:t,children:[Object(a.jsxs)("h1",{className:n,children:[" ",s.service_content.page_title]}),Object(a.jsx)("br",{}),Object(a.jsxs)("h3",{className:c,children:[" ",s.service_content.description]})]})},m=n(20);var T=function(e){var t,n=e.serviceContent;return t="choice_1"===n.service_content.page_styling?"nav-1a":"choice_2"===n.service_content.page_styling?"nav-2a":"nav-3a",Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:t,children:Object(a.jsxs)("ul",{className:"nav-link",children:[Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/",children:"View Services"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/calendar",children:"View Availability"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/booking-request",children:"Send Booking Request"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/gallery",children:"Gallery"})}),Object(a.jsx)("li",{children:Object(a.jsx)(m.b,{to:"/messages",children:"Send Message"})})]})})})},p=n(25).io,E=n(28),C=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3,P=function(e){e.bookings_events;var t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),j=Object(r.a)(i,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){var e,t={},n=p();return n.connect("http://localhost:".concat(C)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),E.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){d(!1),o(e)}))}))}),[]),Object(a.jsxs)("div",{className:"Calendar",children:[l&&Object(a.jsx)("div",{children:"Loading..."}),s&&Object(a.jsxs)("h1",{children:[" ",s.service_provider_name,"'s calendar events - React page "]}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"More content"})]})},R=function(e){e.serviceContent;return Object(a.jsx)("div",{className:"service-content",children:Object(a.jsx)("h1",{children:" Messages page"})})},N=n(25).io,D=n(28),k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||5e3;var y=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!0),i=Object(r.a)(o,2),O=i[0],b=i[1];return Object(c.useEffect)((function(){var e,t={},n=N();return n.connect("http://localhost:".concat(k)),new Promise((function(c,s){n.on("store_check",(function(s){n.disconnect(),t.store_name=s.store_name,e=t,document.title=s.store_name,void 0!==e&&c(e)}))})).then((function(){console.log("data to send is: "+JSON.stringify(e)),D.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent",e).then((function(e){return e.data})).then((function(e){b(!1),s(e)}))}))}),[]),Object(a.jsxs)(a.Fragment,{children:[n&&Object(a.jsx)(f,{serviceContent:n}),n&&Object(a.jsx)(S,{serviceContent:n}),n&&Object(a.jsx)(T,{serviceContent:n}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsxs)("div",{className:"home",children:[O&&Object(a.jsx)("div",{children:"Loading..."}),n&&Object(a.jsx)(g,{serviceContent:n})]})}),Object(a.jsx)(l.a,{exact:!0,path:"/new",children:Object(a.jsx)(d,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/calendar",children:Object(a.jsx)(P,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/booking-request",children:Object(a.jsx)(j,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/gallery",children:Object(a.jsx)(u,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/messages",children:Object(a.jsx)(R,{})})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root")),F()}},[[88,1,2]]]);
//# sourceMappingURL=main.28d4e9d1.chunk.js.map