(this.webpackJsonptimetable=this.webpackJsonptimetable||[]).push([[0],{25:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(18),o=n.n(i),l=n(13),m=n(7),c=n(24),s=n(19),u=n(14);function d(){var e=new Date,t=String(e.getSeconds()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0");return{date:e.getFullYear()+"-"+i+"-"+r,time:a+":"+n+":"+t}}function g(e){var t=new Date;t.setTime(e);var n=String(t.getSeconds()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0"),r=String(t.getHours()).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0");return{date:t.getFullYear()+"-"+o+"-"+i,time:r+":"+a+":"+n}}function p(){var e=Object(s.a)(["\n  query Plan($date: String, $time: String, ){\n    plan(\n      date: $date,\n      time: $time\n      from: {lat: ",", lon: ","}\n      to: {lat: ",", lon: ","}\n      numItineraries: 3\n    ) {\n      itineraries {\n        startTime\n        duration\n        legs {\n          from {\n            name\n          }\n          startTime\n          to {\n            name\n          }\n          endTime\n          mode\n          route {\n            shortName\n          }\n          \n        }\n      }\n    }\n  }\n"]);return p=function(){return e},e}var S=60.161042,v=24.878615,f=60.169429,E=24.926066,h=Object(l.b)(p(),S,v,f,E);var b=function(e){var t=e.date,n=e.time,a=Object(u.a)(h,{variables:{date:t,time:n}}),i=a.loading,o=a.error,l=a.data;return i?r.a.createElement("p",null,"Loading..."):o?r.a.createElement("p",null,"Error :("):r.a.createElement("div",{className:"plan",id:"plan"},l.plan.itineraries.map((function(e){return r.a.createElement("div",{className:"itinerary"},r.a.createElement("p",{className:"itinerary-header"},"itinerary, duration: ",e.duration),r.a.createElement("div",{className:"itinerary-legs"},"legs: ",e.legs.map((function(e){return r.a.createElement("div",{className:"leg"},"from: ",e.from.name," at ",g(e.startTime).time,r.a.createElement("br",null),"to: ",e.to.name," at ",g(e.endTime).time,r.a.createElement("br",null),"with: ",e.mode)}))))})))};var w=function(){var e=Object(a.useState)(r.a.createElement(b,{date:d().date,time:d().time})),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){i(r.a.createElement(b,{date:d().date,time:d().time}))}),[]),r.a.createElement("div",null,n)},y=new l.a({uri:"https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"}),j=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{client:y},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.12e6c15c.chunk.js.map