(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{313:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=313},314:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("5b80d2ac",content,!0,{sourceMap:!1})},315:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=315},325:function(t,e,n){"use strict";n(314)},326:function(t,e,n){var o=n(40)(!1);o.push([t.i,'.blogPostItem[data-v-3e188a7c]{width:100%;min-width:0;border-radius:1em;display:flex;align-items:center;flex-wrap:wrap;align-content:flex-start;color:var(--color-text);text-decoration:none;padding:0 1em 1em}.blogPostItem__imageContainer[data-v-3e188a7c],.blogPostItem__imageContainerNone[data-v-3e188a7c]{position:relative;width:100%;height:-webkit-max-content;height:-moz-max-content;height:max-content;min-width:350px;border-radius:1em;overflow:hidden;background:var(--color-bg-alt);flex:2;margin-bottom:1em;border:3px solid var(--color-bg-alt);box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}.blogPostItem__imageContainer[data-v-3e188a7c]:before,.blogPostItem__imageContainerNone[data-v-3e188a7c]:before{content:"";display:block;height:0;width:100%;padding-top:56.25%}.blogPostItem__imageContainer img[data-v-3e188a7c],.blogPostItem__imageContainerNone img[data-v-3e188a7c]{position:absolute;top:-1px;left:-1px;width:calc(100% + 2px);height:calc(100% + 2px);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(25px);transform:scale(1.1);transition:all .2s ease}.blogPostItem__imageContainer img[lazy=loaded][data-v-3e188a7c],.blogPostItem__imageContainerNone img[lazy=loaded][data-v-3e188a7c]{transform:scale(1);filter:none}.blogPostItem__color[data-v-3e188a7c]{position:absolute;top:0;left:0;bottom:0;right:0;background:var(--color-primary)}.blogPostItem__info[data-v-3e188a7c]{display:flex;flex-direction:column;justify-content:center;margin-left:1.5em;margin-right:1.5em;flex:1;min-width:350px}.blogPostItem__category[data-v-3e188a7c]{text-transform:uppercase;font-size:.8em}.blogPostItem__title[data-v-3e188a7c]{font-size:2em}.blogPostItem__excerpt[data-v-3e188a7c]{color:var(--color-text-dark);line-height:1.5em}.blogPostItem__date[data-v-3e188a7c]{padding:1em 0;color:var(--color-text-dark)}',""]),t.exports=o},328:function(t,e,n){"use strict";n(52);var o={props:{post:{type:Object,required:!0}},data:function(){return{thumbnailImage:null}},created:function(){this.thumbnailImage=this.getThumbnailImage()},methods:{getThumbnailImage:function(){var t=this.post.dir.substring(1).substr(0,this.post.dir.lastIndexOf("/")-1);if(this.post.thumbnailImage)try{return{image:n(309)("./".concat(t,"/").concat(this.post.thumbnailImage)),placeholder:n(310)("./".concat(t,"/").concat(this.post.thumbnailImage,""))}}catch(t){return null}else try{return{image:n(313)("./".concat(t,"/thumbnail.jpg")),placeholder:n(315)("./".concat(t,"/thumbnail.jpg"))}}catch(t){return null}}}},r=(n(325),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"blogPostItem",attrs:{to:t.localePath(t.post.dir.substr(0,t.post.dir.lastIndexOf("/")))}},[t.thumbnailImage?n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"blogPostItem__imageContainer"},[n("img",{attrs:{"data-src":t.thumbnailImage.image,"data-loading":t.thumbnailImage.placeholder,alt:"Blog post thumbnail/preview image"}})]):n("div",{staticClass:"blogPostItem__imageContainerNone"},[n("div",{staticClass:"blogPostItem__color"})]),t._v(" "),n("div",{staticClass:"blogPostItem__info"},[n("p",{staticClass:"blogPostItem__category"},[t._v("\n      "+t._s(t.post.category?t.post.category:"Uncategorized")+"\n    ")]),t._v(" "),n("h2",{staticClass:"blogPostItem__title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"blogPostItem__excerpt"},[t._v("\n      "+t._s(t.post.description)+"\n    ")]),t._v(" "),n("p",{staticClass:"blogPostItem__date"},[t._v("\n      "+t._s(t.$t("blog.published"))+" "+t._s(t._f("formatDate")(t.post.createdAt))+"\n    ")])])])}),[],!1,null,"3e188a7c",null);e.a=component.exports},347:function(t,e,n){var content=n(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("53698e28",content,!0,{sourceMap:!1})},348:function(t,e,n){var content=n(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("71305c90",content,!0,{sourceMap:!1})},349:function(t,e,n){var content=n(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("dd1039e2",content,!0,{sourceMap:!1})},350:function(t,e,n){var content=n(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("68329b8e",content,!0,{sourceMap:!1})},351:function(t,e,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("26541101",content,!0,{sourceMap:!1})},626:function(t,e,n){var map={"./CET_Background.jpg":316,"./CET_Feature.jpg":317,"./CyberCAT_Background.jpg":318,"./CyberCAT_Feature.jpg":319,"./WolvenKit_Background.jpg":320,"./WolvenKit_Feature.jpg":321};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=626},627:function(t,e,n){var map={"./CET_Feature.jpg":322,"./CyberCAT_Feature.jpg":323,"./WolvenKit_Feature.jpg":324};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=627},628:function(t,e,n){"use strict";n(347)},629:function(t,e,n){var o=n(40)(!1);o.push([t.i,'.lander[data-v-7bbfa0f0]{position:relative;-webkit-mask-image:linear-gradient(0deg,transparent,#000 15vh);mask-image:linear-gradient(0deg,transparent,#000 15vh)}.lander__scrollDown[data-v-7bbfa0f0]{position:sticky;bottom:5em;display:flex;justify-content:center;z-index:10;height:0}.lander__scrollDownIcon[data-v-7bbfa0f0]{height:5em;-webkit-animation-name:bounce-data-v-7bbfa0f0;animation-name:bounce-data-v-7bbfa0f0;-webkit-animation-duration:2.5s;animation-duration:2.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.lander__scrollDownIcon[data-v-7bbfa0f0]  svg{height:100%;width:100%;filter:drop-shadow(0 0 5px black)}.lander__mainContainer[data-v-7bbfa0f0]{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;max-width:calc(var(--max-width-lg) + 180px);margin:0 auto;padding:0 4vmin}.lander__mainContainer[data-v-7bbfa0f0]:before{content:"";height:4em}.lander__imageContainer[data-v-7bbfa0f0]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;overflow:hidden}.lander__imageContainer>img[data-v-7bbfa0f0]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;opacity:0;transform:scale(1.05);filter:blur(8px);transition:opacity .3s ease}.lander__imageContainer>img[lazy=loaded][data-v-7bbfa0f0]{opacity:.3}.lander__spacer[data-v-7bbfa0f0]{margin-top:25vmin}.lander__title[data-v-7bbfa0f0]{font-weight:700;font-size:4em;text-align:center}.lander__toolDescription[data-v-7bbfa0f0]{text-align:center;font-size:1rem;font-weight:400}.lander__toolNav[data-v-7bbfa0f0]{display:flex;justify-content:center;list-style:none;padding:0;margin:1em 0}.lander__toolNavItem[data-v-7bbfa0f0]{position:relative;display:flex;flex-direction:column;padding:1em;cursor:pointer;transition:all .2s ease-in-out}.lander__toolNavItem[data-v-7bbfa0f0]:not(:last-of-type){margin-right:.5em}.lander__toolNavItem[data-v-7bbfa0f0]:before{content:"";position:absolute;bottom:.25em;left:50%;width:90%;transform:translate(-50%,500%);height:2px;background:var(--color-text);opacity:0;transition:all .2s ease-in-out}.lander__toolNavItem[data-v-7bbfa0f0]:after{content:attr(data-text);content:attr(data-text)/"";height:0;visibility:hidden;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600}.lander__toolNavItem--active[data-v-7bbfa0f0]{font-weight:600}.lander__toolNavItem--active[data-v-7bbfa0f0]:before{transform:translate(-50%,100%);opacity:1}.lander__toolLinks[data-v-7bbfa0f0]{display:flex;margin-bottom:2em}.lander__toolLink[data-v-7bbfa0f0]{height:3em;display:flex;align-items:center;background:var(--color-primary);color:var(--color-text);padding:.5em 2em;margin-top:3vh;border-radius:.25em;font-weight:600;text-decoration:none}.lander__toolLink[data-v-7bbfa0f0]:not(:last-of-type){margin-right:1em}.lander__toolLink>.github-icon[data-v-7bbfa0f0]{height:100%;width:2em;margin-right:.5em}.lander__toolLink>.github-icon[data-v-7bbfa0f0]  svg,.lander__toolPreview[data-v-7bbfa0f0]{height:100%;width:100%}.lander__toolPreview[data-v-7bbfa0f0]{position:relative;margin-top:auto;border-radius:.5em .5em 0 0;overflow:hidden}.lander__toolPreview[data-v-7bbfa0f0]:before{content:"";display:block;height:0;width:0;padding-top:56.25%}.lander__toolPreview>img[data-v-7bbfa0f0]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(25px);transform:scale(1.1);transition:all .2s ease}.lander__toolPreview>img[lazy=loaded][data-v-7bbfa0f0]{transform:scale(1);filter:none}.fade-enter-active[data-v-7bbfa0f0],.fade-leave-active[data-v-7bbfa0f0]{transition:opacity .3s}.fade-enter[data-v-7bbfa0f0],.fade-leave-to[data-v-7bbfa0f0]{opacity:0!important}@-webkit-keyframes bounce-data-v-7bbfa0f0{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-.5em)}60%{transform:translateY(-.15em)}}@keyframes bounce-data-v-7bbfa0f0{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-.5em)}60%{transform:translateY(-.15em)}}',""]),t.exports=o},630:function(t,e,n){"use strict";n(348)},631:function(t,e,n){var o=n(40)(!1);o.push([t.i,".latestPost[data-v-4f4e71fa]{position:relative;min-height:80vh;display:flex;align-items:center;justify-content:center;flex-direction:column}.latestPost__background[data-v-4f4e71fa]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,#000,transparent);mask-image:linear-gradient(180deg,#000,transparent);z-index:-1}.latestPost__background>img[data-v-4f4e71fa]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;background-position:50%;filter:blur(8px);transform:scale(1.05);opacity:.3}.latestPost[data-v-4f4e71fa]  .container{padding:6vmin 4vmin}.latestPost[data-v-4f4e71fa]  .blogPostItem{padding:0}.latestPost__header[data-v-4f4e71fa]{margin-bottom:.5em;font-size:3em}",""]),t.exports=o},632:function(t,e,n){"use strict";n(349)},633:function(t,e,n){var o=n(40)(!1);o.push([t.i,".wumpus-canvas{transform:rotate(-3deg)}@media(max-width:660px){.wumpus-canvas{display:none}}",""]),t.exports=o},634:function(t,e,n){"use strict";n(350)},635:function(t,e,n){var o=n(40)(!1);o.push([t.i,".community[data-v-54287e7a]{position:relative;min-height:60vh;justify-content:center;flex-direction:column;background:linear-gradient(45deg,#20347a,#41505a)}.community[data-v-54287e7a],.community[data-v-54287e7a]  .container{display:flex;align-items:center}.community__info[data-v-54287e7a]{display:flex;justify-content:center;flex-direction:column;margin:0 1em;flex:1}.community__title[data-v-54287e7a]{font-size:3em;margin-bottom:.5em}.community__button[data-v-54287e7a]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:1em;padding:.85em 2em;color:inherit;border-radius:.25em;border:2px solid #fff;font-weight:600;text-decoration:none;transition:all .2s ease}.community__button[data-v-54287e7a]:hover{background:#fff;color:#7289da;box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}",""]),t.exports=o},636:function(t,e,n){"use strict";n(351)},637:function(t,e,n){var o=n(40)(!1);o.push([t.i,".contribute[data-v-5a120c12]{position:relative;min-height:60vh;justify-content:center;flex-direction:column;background:linear-gradient(45deg,var(--color-bg),var(--color-bg-alt))}.contribute[data-v-5a120c12],.contribute[data-v-5a120c12]  .container{display:flex;align-items:center}.contribute__icon[data-v-5a120c12]{font-size:30vmin}.contribute__icon[data-v-5a120c12]  svg{width:1em;height:1em;filter:drop-shadow(0 10px 25px rgba(0,0,0,.2))}@media(max-width:660px){.contribute__icon[data-v-5a120c12]{display:none}}.contribute__image[data-v-5a120c12]{flex:1}.contribute__image img[data-v-5a120c12]{width:100%}@media(max-width:660px){.contribute__image[data-v-5a120c12]{display:none}}.contribute__info[data-v-5a120c12]{display:flex;justify-content:center;flex-direction:column;margin:0 1em;flex:1}.contribute__title[data-v-5a120c12]{font-size:3em;margin-bottom:.5em}.contribute__button[data-v-5a120c12]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:1em;padding:.85em 2em;color:inherit;border-radius:.25em;border:2px solid #fff;font-weight:600;text-decoration:none;transition:all .2s ease}.contribute__button[data-v-5a120c12]:hover{background:#fff;color:#000;box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}",""]),t.exports=o},697:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(3),l=(n(33),n(20),n(52),n(44),n(10),n(42),n(17),n(29),n(43),n(45),n(21),n(136)),c=(n(134),{name:"ChevronDownIcon",props:{title:{type:String,default:"Chevron Down icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),d=n(14),m=Object(d.a)(c,(function(t,e){var n=e._c;return n("span",e._g(e._b({staticClass:"material-design-icon chevron-down-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[n("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[n("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null).exports;function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _={components:{GithubIcon:l.a,ChevronDown:m},props:{indexData:{type:Object,required:!0}},data:function(){return{currentTool:0,images:{}}},mounted:function(){var t,e=f(this.indexData.tools);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.$set(this.images,n.name,{background:this.getImage(n.name,!0),feature:this.getImage(n.name)})}}catch(t){e.e(t)}finally{e.f()}},methods:{changeTool:function(t){this.currentTool=t},getImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{return{image:n(626)("./".concat(t,"_").concat(e?"Background":"Feature",".jpg")),placeholder:e?null:n(627)("./".concat(t,"_Feature.jpg"))}}catch(t){return null}}}},h=(n(628),Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lander"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[0!==Object.keys(t.images).length?n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],key:t.currentTool,staticClass:"lander__imageContainer"},[n("img",{key:t.currentTool,attrs:{"data-src":t.images[t.indexData.tools[t.currentTool].name].background.image,alt:""}})]):t._e()]),t._v(" "),n("div",{staticClass:"lander__mainContainer"},[n("span",{staticClass:"lander__spacer"}),t._v(" "),n("h1",{staticClass:"lander__title"},[t._v("\n      "+t._s(t.indexData.title)+"\n    ")]),t._v(" "),n("ul",{staticClass:"lander__toolNav"},t._l(t.indexData.tools,(function(e,o){return n("li",{key:o,staticClass:"lander__toolNavItem",class:{"lander__toolNavItem--active":t.currentTool===o},on:{click:function(e){return t.changeTool(o)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0),t._v(" "),n("h2",{staticClass:"lander__toolDescription"},[t._v("\n      "+t._s(t.$t(t.indexData.tools[t.currentTool].description))+"\n    ")]),t._v(" "),n("div",{staticClass:"lander__toolLinks"},[n("nuxt-link",{staticClass:"lander__toolLink",attrs:{to:t.localePath(t.indexData.tools[t.currentTool].pageLink)}},[t._v("\n        "+t._s(t.$t("general.getStarted"))+"\n      ")]),t._v(" "),n("a",{staticClass:"lander__toolLink",attrs:{href:"#"}},[n("GithubIcon"),t._v("\n        GitHub\n      ")],1)],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[0!==Object.keys(t.images).length?n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],key:t.currentTool,staticClass:"lander__toolPreview"},[n("img",{key:t.currentTool,attrs:{"data-src":t.images[t.indexData.tools[t.currentTool].name].feature.image,"data-loading":t.images[t.indexData.tools[t.currentTool].name].feature.placeholder,alt:"Preview/feature image of "+t.indexData.tools[t.currentTool].name+" in action"}})]):t._e()])],1),t._v(" "),n("div",{staticClass:"lander__scrollDown"},[n("ChevronDown",{staticClass:"lander__scrollDownIcon"})],1)],1)}),[],!1,null,"7bbfa0f0",null).exports),x={components:{PostItem:n(328).a},props:{latestPost:{type:Object,required:!0}},data:function(){return{thumbnailImage:null}},created:function(){this.thumbnailImage=this.getThumbnailImage()},methods:{getThumbnailImage:function(){if(this.latestPost.thumbnailImage)try{return n(310)("./".concat(this.latestPost.dir.substring(1),"/").concat(this.latestPost.thumbnailImage,""))}catch(t){return null}else try{return n(315)("./".concat(this.latestPost.dir.substring(1),"/thumbnail.jpg"))}catch(t){return null}}}},y=(n(630),Object(d.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"latestPost"},[n("div",{staticClass:"latestPost__background"},[n("img",{attrs:{src:t.thumbnailImage,alt:""}})]),t._v(" "),n("PageContainer",[n("h2",{staticClass:"latestPost__header"},[t._v("\n      "+t._s(t.$t("index.latestPost"))+"\n    ")]),t._v(" "),n("PostItem",{attrs:{post:t.latestPost}})],1)],1)}),[],!1,null,"4f4e71fa",null)),w=y.exports;installComponents(y,{PageContainer:n(207).default});var C={data:function(){return{rive:null}},head:function(){var t=this;return{script:[{hid:"rive",src:"https://unpkg.com/rive-js/dist/rive.js",callback:function(){return t.initRiveAnimation()}}]}},mounted:function(){this.initRiveAnimation()},methods:{initRiveAnimation:function(){"function"!=typeof RiveAnimation||this.rive||(this.rive=new RiveAnimation({src:"/rive/wumpus.riv",canvas:this.$refs.riveWumpus,autoplay:!0}))}}},k=(n(632),{components:{Wumpus:Object(d.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"riveWumpus",staticClass:"wumpus-canvas",attrs:{width:"300px",height:"300px"}})}),[],!1,null,null,null).exports}}),I=(n(634),Object(d.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"community"},[n("PageContainer",[n("Wumpus"),t._v(" "),n("div",{staticClass:"community__info"},[n("h2",{staticClass:"community__title"},[t._v("\n        "+t._s(t.$t("index.community"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("index.communityParagraph"))+"\n      ")]),t._v(" "),n("a",{staticClass:"community__button",attrs:{href:"https://discord.gg/cp77modding"}},[t._v("\n        "+t._s(t.$t("index.communityJoinButton"))+"\n      ")])])],1)],1)}),[],!1,null,"54287e7a",null)),P=I.exports;installComponents(I,{PageContainer:n(207).default});n(636);var j=Object(d.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contribute"},[n("PageContainer",[n("div",{staticClass:"contribute__info"},[n("h2",{staticClass:"contribute__title"},[t._v("\n        "+t._s(t.$t("index.contribute"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("index.contributeParagraph"))+"\n      ")]),t._v(" "),n("a",{staticClass:"contribute__button",attrs:{href:"https://github.com/WolvenKit"}},[t._v("\n        "+t._s(t.$t("index.contributeRepoButton"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"contribute__image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/octocat.png",expression:"'/octocat.png'"}],attrs:{alt:"GitHub Octocat mascot in science gear mixing chemicals"}})])])],1)}),[],!1,null,"5a120c12",null),O=j.exports;installComponents(j,{PageContainer:n(207).default});var D={components:{FullpageLander:h,LatestPost:w,Community:P,Contribute:O},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d,m,f,v,_,h,x,y,w,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.error,l=t.app,c=t.env,d=l.i18n.locale,m=c.DEFAULT_LOCALE,e.next=5,n("index").fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 5:return f=e.sent,e.next=8,n("blog",{deep:!0}).only(["title","description","thumbnailImage","category","createdAt","dir"]).where({slug:m}).sortBy("createdAt","desc").limit(1).fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 8:if(v=e.sent,_=Object(o.a)(v,1),h=_[0],d===m){e.next=19;break}return x=d,e.next=15,n("blog",{deep:!0}).only(["title","description","thumbnailImage","category","createdAt","dir"]).where({slug:x}).sortBy("createdAt","desc").limit(1).fetch().catch((function(){}));case 15:y=e.sent,w=Object(o.a)(y,1),C=w[0],h.dir===C.dir&&(h=C);case 19:return e.abrupt("return",{index:f,latestPost:h});case 20:case"end":return e.stop()}}),e)})))()}},z=Object(d.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("FullpageLander",{attrs:{"index-data":t.index}}),t._v(" "),n("LatestPost",{attrs:{"latest-post":t.latestPost}}),t._v(" "),n("Community"),t._v(" "),n("Contribute")],1)}),[],!1,null,null,null);e.default=z.exports}}]);