(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{33:function(e,t,c){},52:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c(25),a=c.n(s),i=(c(33),c(11)),j=c(26),o=c.n(j),h=Object(r.createContext)(),b=function(e){var t=Object(r.useState)([]),c=Object(i.a)(t,2),s=c[0],a=c[1],j=Object(r.useState)(!0),b=Object(i.a)(j,2),u=b[0],d=b[1];return Object(n.jsx)(h.Provider,{value:{images:s,loading:u,runSearch:function(e){o.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("bb490cd63e910bf57231d51dad8824b6","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){a(e.data.photos.photo),d(!1)})).catch((function(e){console.log("Encountered an error with fetching and parsing data",e)}))}},children:e.children})},u=c(8),d=c(2),l=(c(52),function(e){var t=e.handleSubmit,c=e.history,s=Object(r.useState)(""),a=Object(i.a)(s,2),j=a[0],o=a[1];return Object(n.jsxs)("form",{className:"search-form",onSubmit:function(e){return t(e,c,j)},children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Search...",onChange:function(e){o(e.target.value)},value:j}),Object(n.jsx)("button",{type:"submit",className:"search-button ".concat(j.trim()?"active":null),disabled:!j.trim(),children:Object(n.jsx)("svg",{height:"32",width:"32",children:Object(n.jsx)("path",{d:"M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",fill:"#ffffff",fillRule:"evenodd"})})})]})}),O=function(){return Object(n.jsx)("nav",{className:"main-nav",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/mountain",children:"Mountain"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/beach",children:"Beaches"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/bird",children:"Birds"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.b,{to:"/food",children:"Food"})})]})})},x=function(e){var t=e.history,c=e.handleSubmit;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Snapshot"}),Object(n.jsx)(l,{history:t,handleSubmit:c}),Object(n.jsx)(O,{})]})},f=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"No Images Found"}),Object(n.jsx)("p",{children:"Please try a different search term"})]})},m=function(e){var t=e.url,c=e.id,r=e.title;return console.log(r),console.log(t),Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:t,id:c,alt:r})})},p=function(e){var t,c,r=e.data;return r.length>0?t=r.map((function(e){var t=e.farm,c=e.server,r=e.id,s=e.secret,a=e.title,i="https://farm".concat(t,".staticflickr.com/").concat(c,"/").concat(r,"_").concat(s,"_m.jpg");return Object(n.jsx)(m,{url:i,alt:a},r)})):c=Object(n.jsx)(f,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("ul",{children:t}),c]})},v=function(){return Object(n.jsx)("div",{className:"loader"})},g=function(e){var t=e.searchTerm,c=Object(r.useContext)(h),s=c.images,a=c.loading,i=c.runSearch;return Object(r.useEffect)((function(){i(t)}),[t]),Object(n.jsx)("div",{className:"photo-container",children:a?Object(n.jsx)(v,{}):Object(n.jsx)(p,{data:s})})},S=function(e){var t=e.searchTerm;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:[t," Pictures"]}),Object(n.jsx)(g,{searchTerm:t})]})},T=function(e){var t=e.searchTerm;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:[t," Images"]}),Object(n.jsx)(g,{searchTerm:t})]})},y=function(){return Object(n.jsx)("div",{className:"not-found",children:Object(n.jsx)("h2",{children:"Page Not Found"})})},N=function(){var e=function(e,t,c){e.preventDefault(),e.currentTarget.reset();var n="/search/".concat(c);t.push(n)};return Object(n.jsx)(b,{children:Object(n.jsx)(u.a,{basename:"/Snapshot",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(d.b,{render:function(t){return Object(n.jsx)(x,{handleSubmit:e,history:t.history})}}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(d.a,{to:"/mountain"})}}),Object(n.jsx)(d.b,{path:"/mountain",render:function(){return Object(n.jsx)(S,{searchTerm:"mountain"})}}),Object(n.jsx)(d.b,{path:"/beach",render:function(){return Object(n.jsx)(S,{searchTerm:"beach"})}}),Object(n.jsx)(d.b,{path:"/bird",render:function(){return Object(n.jsx)(S,{searchTerm:"bird"})}}),Object(n.jsx)(d.b,{path:"/food",render:function(){return Object(n.jsx)(S,{searchTerm:"food"})}}),Object(n.jsx)(d.b,{path:"/search/:searchInput",render:function(e){return Object(n.jsx)(T,{searchTerm:e.match.params.searchInput})}}),Object(n.jsx)(d.b,{component:y})]})]})})})};a.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e34a9a3c.chunk.js.map