(this["webpackJsonprefridgeration-versification"]=this["webpackJsonprefridgeration-versification"]||[]).push([[0],{114:function(e,t,a){e.exports=a(198)},140:function(e,t,a){},141:function(e,t,a){},192:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),s=a(11),l=a(12),c=a(14),u=a(13),d=a(58),m=a.n(d),h=a(91),p=a(237),g=a(236),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.a,{className:"test",value:this.props.userInput,onChange:this.props.onAutoCompleteItemSelected,options:this.props.autoCompleteWords,getOptionLabel:function(e){var t;return null!==(t=e.word)&&void 0!==t?t:e},renderInput:function(t){return r.a.createElement(g.a,Object.assign({},t,{onChange:e.props.onTextChange,variant:"outlined",label:"Type in a word",placeholder:"",margin:"normal",fullWidth:!0}))}}))}}]),a}(r.a.Component),b=a(50),v=a.n(b),_=a(105),E=a(235),y=a(17),k=a.n(y),w=Object(_.a)({palette:{primary:{main:"#1A4542"}},typography:{fontSize:28,fontFamily:"Kanit, Helvetica Neue Helvetica, Arial"}}),N=a(139);N.push("fuckup","bitchy","bitchery","bitchiness","bitched","bitchen","bitchily","bitchier","bitchiest","shittah","shittim","shitfaced","shittle","nigget","niggerhead","niggerheads","niggerling","nigged","niggery","niggle","niggardly","niggling","niggard","niggly","niggler","niggardliness","niggish","faggy","fagged","faggots","faggoty","faggotry","faggoting","faggoted","cunty","cunted","cunting","cummingtonite","wetback","wetbacks","spunk","whoremonger","whoring","whorehouse","hooker","whoredom","whoremaster","whoremasters","whoremasterly","whored","whores","porn","pornography","slutty","sluttish","sluttery","beaner","sluttishness","sluttishly","fucked-up");var W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onAutoCompleteItemSelected=function(t){return e.setState({userInput:t.target.innerText})},e.onTextChange=function(t){e.setState({userInput:t.target.value}),""!==e.state.userInput.trim()?v()("https://cors-anywhere.herokuapp.com/https://api.datamuse.com/sug?s="+e.state.userInput).then((function(t){for(var a=[],n=0;n<t.data.length;n++)t.data[n].word.includes(" ")||-1!==N.indexOf(t.data[n].word)||a.push(t.data[n]);e.setState({autoCompleteWords:a})})):e.setState({autoCompleteWords:[]})},e.getRandomWord=function(){var t=e.state.randomWords[Math.floor(Math.random()*e.state.randomWords.length)];e.setState({userInput:t})},e.handleSubmit=function(){var t=Object(h.a)(m.a.mark((function t(a){var n,r,o,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,v()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words",params:{topics:e.state.userInput,max:40}});case 3:if(n=t.sent,r=(r=n.data.map((function(e){return{content:e.word,id:JSON.stringify(e.score),disabled:!1}}))).filter((function(e){return!N.includes(e.content)})),"boomer"===e.state.userInput.toLowerCase()){for(o=[],i=0;i<15;i++)o.push({content:"Safi",id:5e4+i,disabled:!1}),o.push({content:"Asaf",id:6e4+i,disabled:!1});e.props.setGeneratedWords(o)}else e.props.setGeneratedWords(r);return t.next=9,v()({method:"GET",url:"https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words",params:{rel_bga:e.state.userInput,max:20}});case 9:n=t.sent,s=n.data.map((function(e){return{content:e.word,id:JSON.stringify(e.score),disabled:!1}})),e.props.setFunctionalWords(s),""===e.state.userInput.trim()?k.a.fire({icon:"error",text:"You can't search for nothing!"}):r.length<5?k.a.fire({icon:"error",text:"No results found, try adjusting your search term."}):e.props.changePage("gameBoard");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={userInput:"",autoCompleteWords:[],randomWords:["Kitten","Tacos","Hockey","Monkey","Muffin","Boomer"]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.userInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(E.a,{theme:w},r.a.createElement(f,{onTextChange:this.onTextChange,autoCompleteWords:this.state.autoCompleteWords,onAutoCompleteItemSelected:this.onAutoCompleteItemSelected,userInput:e,borderColor:"primary"})),r.a.createElement("button",{className:"main-button",type:"submit"},"Get Started")),r.a.createElement("button",{className:"secondary-button",onClick:this.getRandomWord},"Generate Word"))}}]),a}(n.Component),O=a(94),C=a.n(O),S=(a(140),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.changePage,a=e.setGeneratedWords,n=e.setFunctionalWords;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"landing__illustration"},r.a.createElement("img",{src:C.a,className:"illustration__img",alt:"illustration of a person moving one post-it from a board of 18 other post-its"})),r.a.createElement("div",{className:"landing__opt-in"},r.a.createElement("h1",{className:"main-header"},"Recreate the IRL fun of magnetic poetry"),r.a.createElement("div",{className:"opt-in__form"},r.a.createElement("p",{className:"main-paragraph"},"Give us your own prompt to kick things off or let us generate a word for you."),r.a.createElement(W,{changePage:t,setGeneratedWords:a,setFunctionalWords:n}))))}}]),a}(n.Component)),j=a(106),x=(a(141),a(95)),I=a.n(x),L=a(96),M=a.n(L),T=a(59),P=a.n(T);a(142);P.a.initializeApp({apiKey:"AIzaSyDoTP0Xz-PygNrXuRREHvJvOIdOk1kEbVI",authDomain:"fridgemagnetpoems.firebaseapp.com",databaseURL:"https://fridgemagnetpoems.firebaseio.com",projectId:"fridgemagnetpoems",storageBucket:"fridgemagnetpoems.appspot.com",messagingSenderId:"17676352973",appId:"1:17676352973:web:bb2f5253a5a36717a11884"});var A=P.a,G=Object(_.a)({palette:{primary:{main:"#1A4542"}}}),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).hideModal=function(){return e.setState({hide:!0})},e.handleSubmit=function(e){return e.preventDefault()},e.bindInputAuthor=function(t){return e.setState({inputAuthor:t.target.value})},e.bindInputTitle=function(t){return e.setState({inputTitle:t.target.value})},e.animationEnd=function(){e.state.hide&&e.props.showModal(!1),e.setState({hide:!1})},e.savePoemClick=function(){var t=e.props.sortedList,a=e.state,n=a.inputTitle,r=a.inputAuthor;if(t.length<=20&&t.length>5){var o={title:n,author:r,poem:t};A.database().ref().push(o)}else t.length<6?k.a.fire({icon:"error",text:"You need more than 5 words in your poem."}):t.length>20?k.a.fire({icon:"error",text:"Your poem is too long! Nothing longer than ".concat(20," please.")}):k.a.fire({icon:"error",text:"Safi, repeat after me: O K  B O O M E R"});e.hideModal()},e.state={hide:!1,inputTitle:"",inputAuthor:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.show,n=t.whichModal,o=this.state,i=o.hide,s=o.inputAuthor,l=o.inputTitle;return r.a.createElement("div",{onAnimationEnd:function(){return e.animationEnd()},className:"container__modal ".concat(i?"slideLeft":""," ").concat(a?"slideRight":"")},"start"===n&&r.a.createElement("div",{className:"modal__instructions"},r.a.createElement("div",{className:"instructions__illustration"},r.a.createElement("img",{src:I.a,className:"illustration__img",alt:"illustration of a person deep in thought"})),r.a.createElement("div",{className:"instructions__copy"},r.a.createElement("h2",{className:"main-header"},"How it works"),r.a.createElement("p",{className:"main-paragraph"},"We've generated a bunch of words for you. Simply tap on the words you'd like to use and they'll be added to the canvas. Rearrange your choices on the canvas by dragging dropping!")),r.a.createElement("button",{className:"main-button",onClick:this.hideModal},"Start")),"share"===n&&r.a.createElement("div",{className:"app__container__modal__modalInner modalShare"},r.a.createElement("div",{className:"share__illustration"},r.a.createElement("img",{src:M.a,className:"share__img",alt:"illustration of a person sharing ideas to the digital cloud"})),r.a.createElement("h2",null,"Share your poem"),r.a.createElement("form",{className:"share_inputs",action:"",onSubmit:this.handleSubmit},r.a.createElement(E.a,{theme:G},r.a.createElement(g.a,{className:"share_title",variant:"outlined",label:"Title",placeholder:"",margin:"normal",size:"small",id:"poemTitle",value:l,onChange:this.bindInputTitle}),r.a.createElement(g.a,{className:"share_author",variant:"outlined",label:"Author",placeholder:"",margin:"normal",size:"small",id:"poemAuthor",value:s,onChange:this.bindInputAuthor})),r.a.createElement("button",{className:"gallery_btn",onClick:this.savePoemClick},"Submit"),r.a.createElement("button",{className:"share_btn",onClick:this.hideModal},"Cancel"))))}}]),a}(n.Component),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){return e.props.generatedWordClick(e.props.word)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.word,t=e.id,a=e.disabled,n=e.content;return r.a.createElement("button",{key:t,id:t,className:"generated__item"+(a?" disabled":""),disabled:a,onClick:this.handleClick},n)}}]),a}(n.Component),D=a(97),H=a(238),z=a(102),B=a(104),Y=(a(192),function(e){return e.slice().sort((function(e,t){return e.order-t.order}))}),V=function(e){var t=e.item.content;return r.a.createElement("div",{className:"generated__item"},t)},J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).showModal=function(t){return e.setState({modal:t})},e.sortList=function(){return e.setState({sortedList:Y(e.state.sortedList)})},e.reorderList=function(t,a){if(a!==t){var n=e.state.sortedList;if(0===a)return n[t].order=n[0].order-1,void e.sortList();if(a===n.length-1)return n[t].order=n[n.length-1].order+1,void e.sortList();if(a<t)return n[t].order=(n[a].order+n[a-1].order)/2,void e.sortList();n[t].order=(n[a].order+n[a+1].order)/2,e.sortList()}},e.generatedWordClick=function(t){if(e.state.wordOrder>=20)k.a.fire({icon:"error",text:"You've reached your maximum word limit"});else{var a=e.state,n=a.sortedList,r=a.wordOrder,o=t.id,i=t.content,s=Object(j.a)(n);s.push({id:o,order:r,content:i}),e.props.disableWord(t.id),e.setState({sortedList:Y(s),wordOrder:r+1})}},e.saveToGalleryClick=function(){var t=e.state.sortedList;t.length<=20&&t.length>5?(e.setState({modalToShow:"share"}),e.showModal(!0)):t.length<6?k.a.fire({icon:"error",text:"You need more than 5 words in your poem."}):t.length>20?k.a.fire({icon:"error",text:"Your poem is too long! Nothing longer than ".concat(20," please.")}):k.a.fire({icon:"error",text:"Safi, please stop bringing my shit again."})},e.clearPoem=function(){e.setState({sortedList:[],wordOrder:0}),e.props.enableAllWords()},e.poemString=function(){return e.state.sortedList.map((function(e){return e.content})).join(" ")},e.savePoem=function(){var t=e.state.sortedList;t.length<=10&&t.length>2?e.database().ref().push(t):t.length<3?k.a.fire({icon:"error",text:"You need more than 2 words in your poem."}):t.length>10&&k.a.fire({icon:"error",text:"Your poem is too long! Nothing longer than ".concat(10," please.")})},e.state={modal:!0,modalToShow:"start",sortedList:[],wordOrder:0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.sortedList,n=t.modal,o=t.modalToShow,i=t.wordOrder,s=this.props,l=s.generatedWords,c=s.functionalWords;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{show:n,showModal:this.showModal,whichModal:o,changePage:this.props.changePage,sortedList:a}),r.a.createElement("div",{className:"container__game-board"},r.a.createElement("div",{className:"game-board__generated"},r.a.createElement("div",{className:"generated__themed"},r.a.createElement("p",null,"One use:"),l.map((function(t){return r.a.createElement(R,{key:t.id,word:t,generatedWordClick:e.generatedWordClick})}))),r.a.createElement("div",{className:"generate__function"},r.a.createElement("p",null,"Multiple uses:"),c.map((function(t){return r.a.createElement(R,{key:t.id,word:t,generatedWordClick:e.generatedWordClick})})))),r.a.createElement("div",{className:"sandbox__container"},r.a.createElement("h2",{className:"main-header"},"Create a 6 - 20 word poem:"),r.a.createElement("p",null,i," / 20"),r.a.createElement("div",{className:"game-board__sandbox"},r.a.createElement("div",{className:"sandbox__droppable"},r.a.createElement(D.ListManager,{items:a,direction:"horizontal",maxItems:5,render:function(e){return r.a.createElement(V,{item:e})},onDragEnd:this.reorderList})),r.a.createElement("div",{className:"sandbox__buttons"},r.a.createElement("button",{className:"secondary-button",onClick:this.clearPoem},"Clear"),r.a.createElement("button",{className:"main-button",onClick:this.saveToGalleryClick},"Save"),r.a.createElement(H.a,{url:"https://bit.ly/2yHFNdM",title:'Check out my magnet poem!\n"'.concat(this.poemString(),'"\nCreate your own @')},"Share ",r.a.createElement(z.a,{icon:B.a})))))))}}]),a}(n.Component),Z=(a(196),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).showMoreLessClick=function(t){return e.setState({poemsToShow:e.state.poemsToShow+t})},e.state={firebaseDataObject:[],poemsToShow:6},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.database().ref().on("value",(function(t){return e.setState({firebaseDataObject:t.val()})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.firebaseDataObject,n=t.poemsToShow,o=this.props.changePage;return r.a.createElement("div",{className:"app__container__gallery"},r.a.createElement("h1",null,"Verse By Magnet Poets"),r.a.createElement("div",{className:"app__container__gallery__grid"},Object.values(a).reverse().slice(0,n).map((function(e,t){var n=e.title,o=e.author,i=e.poem;return r.a.createElement("div",{key:Object.keys(a)[t],className:"app__container__gallery__grid__poem"},r.a.createElement("h2",{className:"verse__title"},n),i.map((function(e){return r.a.createElement("div",{key:e.order,className:"app__container__gallery__grid__poem__word"},e.content)})),r.a.createElement("p",{className:"verse__by"},"by, ",o))}))),r.a.createElement("div",{className:"app__container__gallery__buttons"},r.a.createElement("button",{onClick:function(){return e.showMoreLessClick(-10)},className:"secondary-button"},"Less"),r.a.createElement("button",{onClick:function(){return e.showMoreLessClick(10)},className:"secondary-button"},"More"),r.a.createElement("button",{onClick:function(){return o("landing")},className:"main-button"},"Home")))}}]),a}(n.Component));a(197);document.querySelector('meta[name="viewport"]').content="user-scalable=NO, width=device-width, initial-scale=1.0";var q=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getUniqueWords=function(e){for(var t=[],a=0;a<e.length;a++){for(var n=!1,r=e[a],o=0;o<t.length;o++)r.id==t[o].id&&(n=!0);!n&&t.push(r)}return t},e.enableAllWords=function(){var t=e.state.generatedWords.map((function(e){return e.disabled=!1,e}));e.setState({generatedWords:t})},e.disableWord=function(t){var a=e.state.generatedWords.map((function(e){return e.id===t&&(e.disabled=!0),e}));e.setState({generatedWords:a})},e.setGeneratedWords=function(t){t=t.filter((function(e){return-1===e.content.indexOf(" ")}));var a=e.getUniqueWords(t);e.setState({generatedWords:a})},e.setFunctionalWords=function(t){t=t.filter((function(e){return-1===e.content.indexOf(" ")}));var a=e.getUniqueWords(t);e.setState({functionalWords:a})},e.changePage=function(t){return e.setState({currentPage:t})},e.state={currentPage:"landing",generatedWords:[],functionalWords:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.currentPage,n=t.generatedWords,o=t.functionalWords;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app wrapper"},r.a.createElement("nav",{className:"app__nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"nav__branding",onClick:function(){return e.changePage("landing")}},"Fridge Verses"),r.a.createElement("li",{style:"gallery"===this.state.currentPage?{display:"none"}:{},className:"nav__link nav__link--desktop",onClick:function(){return e.changePage("gallery")}},"Gallery"),r.a.createElement("li",{className:"nav__link nav__link--mobile"},r.a.createElement("input",{type:"checkbox",id:"menu-trigger"}),r.a.createElement("label",{className:"hamburger",htmlFor:"menu-trigger"},r.a.createElement("div",{className:"hamburger__line hamburger__line--top"}),r.a.createElement("div",{className:"hamburger__line hamburger__line--bottom"})),r.a.createElement("div",{className:"nav__mobile"},r.a.createElement("ul",{className:"mobile__links"},r.a.createElement("li",null,"Gallery")))))),r.a.createElement("main",{className:"app__container"},"landing"===a&&r.a.createElement(S,{changePage:this.changePage,setGeneratedWords:this.setGeneratedWords,setFunctionalWords:this.setFunctionalWords}),"gameBoard"===a&&r.a.createElement(J,{changePage:this.changePage,generatedWords:n,functionalWords:o,enableAllWords:this.enableAllWords,disableWord:this.disableWord}),"gallery"===a&&r.a.createElement(Z,{changePage:this.changePage})),r.a.createElement("footer",{className:"app__footer"},r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{href:"https://github.com/ZEVG-project6/Refridgeration-Versification",target:"_blank",rel:"external",alt:"External link to our group GitHub repository"},r.a.createElement("i",{className:"fab fa-github","aria-hidden":"true"}),r.a.createElement("span",{class:"sr-only"},"Link to our group GitHub repository"))))),r.a.createElement("div",{className:"copyright__footer"},r.a.createElement("p",null,"\xa9 2020. Made with ",r.a.createElement("i",{class:"fas fa-heart"})," by ",r.a.createElement("a",{href:"http://www.vinccitsui.me",target:"_blank",rel:"external",alt:"External link to group member Vincci Tsui's portfolio"},"Vinnci Tsui, ")," ",r.a.createElement("a",{href:"http://zarinamia.com",target:"_blank",rel:"external",alt:"External link to group member Zarina Mia's portfolio"},"Zarina Mia, "),r.a.createElement("a",{href:"mailto: george@nosuchthing.training",target:"_blank",rel:"external",alt:"External link to group member George Zikos' portfolio"},"George Zikos "),"and ",r.a.createElement("a",{href:"http://edithwerbel.com/",target:"_blank",rel:"external",alt:"External link to group member Edith Werbel's portfolio"},"Edith Werbel")," ")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/illustrations--landing.53f28855.png"},95:function(e,t,a){e.exports=a.p+"static/media/illustrations--instruct.dff84eab.png"},96:function(e,t,a){e.exports=a.p+"static/media/illustrations--save.783bf5a5.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.670dcafa.chunk.js.map