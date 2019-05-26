(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(68)},36:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),l=a.n(r),i=(a(36),a(7)),c=a(8);var s=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"React Google Book Search"),o.a.createElement("h1",{className:"display-4"},"Test"),o.a.createElement("p",null,"Search for Books and save books to your View Later list.")))},u=a(9),h=a(10),m=a(13),d=a(11),p=a(12),v=(a(37),a(6)),b=a(15),k=a.n(b),f={getBooks:function(){return k.a.get("/api/books")},searchBooks:function(e){return console.log(e),k.a.post("/search",{title:e})},addBookToDB:function(e){return k.a.post("/api/books",e)},deleteBook:function(e){return k.a.delete("/api/books/".concat(e))}},E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSaveClick=function(e){var t={title:this.props.title,authors:this.props.authors.join(","),link:this.props.link,img:this.props.img,description:this.props.description};console.log(t),e.preventDefault(),f.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.state={saved:!1,deleted:!1},a.handleInputChange=a.handleSaveClick.bind(Object(v.a)(Object(v.a)(a))),a.handleDeleteClick=a.handleDeleteClick.bind(Object(v.a)(Object(v.a)(a))),a.handleSaveClick=a.handleSaveClick.bind(Object(v.a)(Object(v.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleDeleteClick",value:function(e){var t=this;this.setState({deleted:!0}),e.preventDefault(),f.deleteBook(this.props.id).then(function(e){console.log(e),i.a.dispatch(t.props.location,null)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bookResult",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors:"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null,this.props.description?this.props.description:"N/A")))}}]),t}(o.a.Component);var g=function(e){return"/"===e.path?o.a.createElement("div",{className:"SearchResults"},o.a.createElement("h3",null,"Results Found"),e.bookData.map(function(t){var a=t.volumeInfo;return o.a.createElement(E,{title:a.title,authors:a.authors,description:a.description,link:a.canonicalVolumeLink,img:a.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks?o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement(E,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.image,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{className:"SearchResults"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"No saved books.")):void 0},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.componentWillMount=function(){f.getBooks().then(function(e){a.setState({savedBooks:e.data})}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(g,{savedBooks:this.state.savedBooks,path:this.props.match.path}))}}]),t}(o.a.Component);var S=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"Book Search"),o.a.createElement("form",{id:"bookSearch"},o.a.createElement("label",{htmlFor:"bookInput",form:"bookSearch"},"Enter a book to search:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",id:"bookInput",form:"bookSearch",onChange:function(t){return e.handleInputChange(t)},placeholder:"Book Title",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleFormSubmit(t)}},"Search")))},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={bookInput:"",bookData:[]},a.handleInputChange=function(e){e.preventDefault(),a.setState({bookInput:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),f.searchBooks(a.state.bookInput).then(function(e){a.setState({bookData:e.data}),a.setState({bookInput:""})})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(S,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),this.state.bookData.length>0?o.a.createElement(g,{bookData:this.state.bookData,path:this.props.match.path}):o.a.createElement("div",null))}}]),t}(o.a.Component);a(65);var B=function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},o.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Google-Book-Search"),o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"active"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/saved",className:"nav-link",activeClassName:"active"},"Saved")))))};a(66);var j=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",null,"Google-Book-Search"))};a(67);var C=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};var y=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement(s,null),o.a.createElement(C,null,o.a.createElement(c.a,{exact:!0,path:"/",component:N}),o.a.createElement(c.a,{exact:!0,path:"/search",component:N}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:w})),o.a.createElement(j,null)))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.09074bb6.chunk.js.map