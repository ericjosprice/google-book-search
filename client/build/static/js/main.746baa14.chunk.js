(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(69)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),l=a.n(r),i=(a(35),a(6)),c=a(7);a(36);var s=function(){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"React Google Book Search"),o.a.createElement("h4",null,"Search for Books and save books to your View Later list.")))},u=a(8),m=a(9),h=a(11),p=a(10),d=a(12),v=(a(37),a(14)),f=a.n(v),b={getBooks:function(){return f.a.get("/api/books")},searchBooks:function(e){return console.log(e),f.a.post("/search",{title:e})},addBookToDB:function(e){return f.a.post("/api/books",e)},deleteBook:function(e){return f.a.delete("/api/books/".concat(e))}},k=(a(57),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={saved:!1,deleted:!1},a.handleSaveClick=function(e){var t={title:a.props.title,authors:a.props.authors.join(","),link:a.props.link,img:a.props.img,description:a.props.description};console.log(t),e.preventDefault(),b.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.handleDeleteClick=function(e){a.setState({deleted:!0}),e.preventDefault(),b.deleteBook(a.props.id).then(function(e){console.log(e),i.a.dispatch(a.props.location,null)}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"bookResult",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors:"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null,this.props.description?this.props.description:"N/A")))}}]),t}(o.a.Component));var E=function(e){return"/"===e.path?o.a.createElement("div",{className:"SearchResults"},o.a.createElement("h3",null,"Results Found"),e.bookData.map(function(t){var a=t.volumeInfo;return o.a.createElement(k,{title:a.title,authors:a.authors,description:a.description,link:a.canonicalVolumeLink,img:a.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks?o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement(k,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.image,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{className:"SearchResults"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"No saved books.")):void 0},g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.componentWillMount=function(){b.getBooks().then(function(e){a.setState({savedBooks:e.data})}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(E,{savedBooks:this.state.savedBooks,path:this.props.match.path}))}}]),t}(o.a.Component);var w=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"Book Search"),o.a.createElement("form",{id:"bookSearch"},o.a.createElement("label",{htmlFor:"bookInput",form:"bookSearch"},"Enter a book to search:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",id:"bookInput",form:"bookSearch",onChange:function(t){return e.handleInputChange(t)},placeholder:"Book Title",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleFormSubmit(t)}},"Search")))},B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={bookInput:"",bookData:[]},a.handleInputChange=function(e){e.preventDefault(),a.setState({bookInput:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),b.searchBooks(a.state.bookInput).then(function(e){a.setState({bookData:e.data}),a.setState({bookInput:""})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(w,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("hr",null),this.state.bookData.length>0?o.a.createElement(E,{bookData:this.state.bookData,path:this.props.match.path}):o.a.createElement("div",null))}}]),t}(o.a.Component);a(66);var S=function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},o.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Google-Book-Search"),o.a.createElement("div",null,o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"active"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{to:"/saved",className:"nav-link",activeClassName:"active"},"Saved")))))};a(67);var N=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",null,"Google-Book-Search"))};a(68);var y=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};var j=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(s,null),o.a.createElement(y,null,o.a.createElement(c.a,{exact:!0,path:"/",component:B}),o.a.createElement(c.a,{exact:!0,path:"/search",component:B}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:g})),o.a.createElement(N,null)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");C?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.746baa14.chunk.js.map