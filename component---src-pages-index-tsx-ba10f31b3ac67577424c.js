(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(29),o=n(264),s=n.n(o),u=n(54),l=n(268),c=n(82),f=n(269),d=n.n(f),p=function(){return a.a.createElement(c.b,{query:"172988401",render:function(e){return a.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},h=n(257),m=n(256);n(24),n(23);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n(45);var b=n(271),E=n.n(b),x=n(273),w=n.n(x),S=n(107),T=n.n(S),C=!1,O=a.a.createContext(null),P="unmounted",R="exited",N="entering",L="entered",k=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=R,r.appearStatus=N):a=L:a=t.unmountOnExit||t.mountOnEnter?P:R,r.state={status:a},r.nextCallback=null,r}v(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:R}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==N&&n!==L&&(t=N):n!==N&&n!==L||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=T.a.findDOMNode(this);t===N?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===R&&this.setState({status:P})},n.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=a?i.appear:i.enter;!t&&!r||C?this.safeSetState({status:L},function(){n.props.onEntered(e)}):(this.props.onEnter(e,a),this.safeSetState({status:N},function(){n.props.onEntering(e,a),n.onTransitionEnd(e,o,function(){n.safeSetState({status:L},function(){n.props.onEntered(e,a)})})}))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!C?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:R},function(){t.props.onExited(e)})})})):this.safeSetState({status:R},function(){t.props.onExited(e)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,r=y(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return a.a.createElement(O.Provider,{value:null},n(e,r));var i=a.a.Children.only(n);return a.a.createElement(O.Provider,{value:null},a.a.cloneElement(i,r))},t}(a.a.Component);function I(){}k.contextType=O,k.propTypes={},k.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:I,onEntering:I,onEntered:I,onExit:I,onExiting:I,onExited:I},k.UNMOUNTED=0,k.EXITED=1,k.ENTERING=2,k.ENTERED=3,k.EXITING=4;var A=k,D=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return w()(e,t)})},_=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=n?"appear":"enter";t.addClass(e,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=n?"appear":"enter";t.removeClasses(e,r),t.addClass(e,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,a=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:r?a+"-active":n[e+"Active"],doneClassName:r?a+"-done":n[e+"Done"]}},t}v(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach(function(t){return E()(e,t)})}(e,r)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,a=n.active,i=n.done;this.appliedClasses[t]={},r&&D(e,r),a&&D(e,a),i&&D(e,i)},n.render=function(){var e=this.props,t=(e.classNames,y(e,["classNames"]));return a.a.createElement(A,g({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(a.a.Component);_.defaultProps={classNames:""},_.propTypes={};var j=_,V=n(258),M=i.c.div.withConfig({displayName:"pages__Container",componentId:"pyeny5-0"})(["display:grid;justify-items:center;align-items:center;max-width:50vw;grid-row-gap:1rem;padding:1rem 0;@media screen and (max-width:720px){max-width:80vw;}.fade-enter,.fade-appear{opacity:0;}.fade-enter-active,.fade-appear-active{opacity:1;transition:opacity 3000ms;}"]),z=i.c.div.withConfig({displayName:"pages__Greetings",componentId:"pyeny5-1"})(["text-align:center;.Typist{color:",";display:block;font-size:3rem;font-weight:bold;margin:0.5em 0em;line-height:1.5;}"],function(e){return e.theme.black}),G=i.c.div.withConfig({displayName:"pages__ImageContainer",componentId:"pyeny5-2"})(["min-width:100%;div{height:100% !important;}img{margin:0 auto;}"]),W=i.c.div.withConfig({displayName:"pages__LogoWrapper",componentId:"pyeny5-3"})(["img{max-width:100px;}"]);t.default=function(){return a.a.createElement(h.a,null,a.a.createElement(m.a,{title:"Home Page"}),a.a.createElement(M,null,a.a.createElement(j,{classNames:"fade",in:!0,appear:!0,timeout:3e3},a.a.createElement(W,null,a.a.createElement("img",{src:n(274),alt:"Logo"}))),a.a.createElement(z,null,a.a.createElement(s.a,{className:"Greetings",cursor:{show:!0,blink:!0,startDelay:3e3,element:"_"}},"Hi, I'm Sid"),a.a.createElement("p",null,"A Frontend Engineer who loves learning and sharing new things with love ",a.a.createElement(u.g,{size:25,color:"red"}))),a.a.createElement(V.a,{to:"/resume"},a.a.createElement(u.b,null),a.a.createElement("span",{style:{paddingLeft:".5rem"}},"Hire Me")),a.a.createElement(j,{classNames:"fade",in:!0,appear:!0,timeout:3e3},a.a.createElement(G,null,a.a.createElement(p,null)))))}},262:function(e,t,n){var r=n(1),a=n(11),i=n(46),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},264:function(e,t,n){n(27),n(23),n(67),n(66),n(116),n(265),n(14),n(13),n(115),n(7),n(10),n(22),n(37),n(30),n(21),n(48),n(117),n(266),n(47),n(3),n(84),n(57),n(16),n(38),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),o=d(i),s=d(n(2)),u=d(n(10)),l=d(n(12)),c=d(n(13)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function d(e){return e&&e.__esModule?e:{default:e}}var p=["🔙","⏰"],h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,a){var i=n.props.avgTypingDelay,o=n.props.stdTypingDelay;return n.props.delayGenerator(i,o,{line:e,lineIdx:t,character:r,charIdx:a,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return f.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,a=n.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):f.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="⏰"),new Promise(function(e,i){n.setState({textLines:n.state.textLines.concat([""])},function(){f.eachPromise(r,n.typeCharacter,r,t).then(function(){return a(r,t)}).then(e).catch(i)})})},n.typeCharacter=function(e,t,r,a){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise(function(o){var s=n.state.textLines.slice();f.sleep(n.introducedDelay).then(function(){n.introducedDelay=null;var u="🔙"===e;if("⏰"===e)o();else{if(u&&a>0){for(var l=a-1,c=s[l],f=l;f>=0&&(!(c.length>0)||p.includes(c[0]));f--)c=s[l=f];s[l]=c.substr(0,c.length-1)}else s[a]+=e;n.setState({textLines:s},function(){var s=n.delayGenerator(r,a,e,t);i(e,t),setTimeout(o,s)})}})})},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=f.extractTextFromElement(e.children)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(t,this.typeLine).then(function(){return e.onTypingDone()})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,a=this.state.isDone,i=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return o.default.createElement("div",{className:"Typist "+t},i,o.default.createElement(u.default,r({isDone:a},n)))}}]),t}();h.propTypes={children:s.default.node,className:s.default.string,avgTypingDelay:s.default.number,stdTypingDelay:s.default.number,startDelay:s.default.number,cursor:s.default.object,onCharacterTyped:s.default.func,onLineTyped:s.default.func,onTypingDone:s.default.func,delayGenerator:s.default.func},h.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},t.default=h,h.Backspace=l.default,h.Delay=c.default},function(e,t){e.exports=n(0)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),a=n(5),i=n(6),o=n(7),s=n(8);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator";var l="<<anonymous>>",c={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p(function(t,n,r,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new d("Invalid "+a+" `"+i+"` of type `"+g(s)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<s.length;u++){var l=e(s,u,r,a,i+"["+u+"]",o);if(l instanceof Error)return l}return null})},element:p(function(t,n,r,a,i){var o=t[n];return e(o)?null:new d("Invalid "+a+" `"+i+"` of type `"+g(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}),instanceOf:function(e){return p(function(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||l;return new d("Invalid "+a+" `"+i+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return l;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null})},node:p(function(e,t,n,r,a){return m(e[t])?null:new d("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return p(function(t,n,r,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],u=g(s);if("object"!==u)return new d("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var c=e(s,l,r,a,i+"."+l,o);if(c instanceof Error)return c}return null})},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return p(function(t,n,r,a,i){for(var o=t[n],s=0;s<e.length;s++)if(f(o,e[s]))return null;return new d("Invalid "+a+" `"+i+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")})},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",v(n),t),r.thatReturnsNull}return p(function(t,n,r,a,i){for(var s=0;s<e.length;s++){if(null==(0,e[s])(t,n,r,a,i,o))return null}return new d("Invalid "+a+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return p(function(t,n,r,a,i){var s=t[n],u=g(s);if("object"!==u)return new d("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var f=c(s,l,r,a,i+"."+l,o);if(f)return f}}return null})}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function p(e){function n(n,r,i,s,u,c,f){(s=s||l,c=c||i,f!==o)&&(t&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new d("The "+u+" `"+c+"` is marked as required in `"+s+"`, but its value is `null`."):new d("The "+u+" `"+c+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(r,i,s,u,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function h(e){return p(function(t,n,r,a,i,o){var s=t[n];return g(s)!==e?new d("Invalid "+a+" `"+i+"` of type `"+y(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,i=r.call(t);if(r!==t.entries){for(;!(a=i.next()).done;)if(!m(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!m(o[1]))return!1}return!0;default:return!1}}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,c.checkPropTypes=s,c.PropTypes=c,c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";var n=function(e){};e.exports=function(e,t,r,a,i,o,s,u){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,a,i,o,s,u],f=0;(l=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){}},function(e,t,n){"use strict";var r=n(4),a=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,o,s){s!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=s(a),o=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}n(11);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout(function(){return t.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},function(){e.setState({shouldRender:!0},function(){e._isReRenderingCursor=!1})})}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}();u.propTypes={blink:o.default.bool,show:o.default.bool,element:o.default.node,hideWhenDone:o.default.bool,hideWhenDoneDelay:o.default.number,isDone:o.default.bool},u.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=u},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement("noscript",null)};o.componentName="Backspace",o.propTypes={count:a.default.number,delay:a.default.number},o.defaultProps={count:1,delay:0},t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement("noscript",null)};o.componentName="Delay",o.propTypes={ms:a.default.number.isRequired},t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return Array.from(e).reduce(function(e,n,a){return e.then(function(){return t.apply(void 0,[n,a].concat(r))})},Promise.resolve())},t.exclude=s,t.isBackspaceElement=u,t.isDelayElement=l,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(o.default.isValidElement(r))u(r)||l(r)?n.unshift(r):o.default.Children.forEach(r.props.children,function(e){t.push(e)});else if(Array.isArray(r)){var a=!0,i=!1,s=void 0;try{for(var c,f=r[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var d=c.value;t.push(d)}}catch(p){i=!0,s=p}finally{try{!a&&f.return&&f.return()}finally{if(i)throw s}}}else n.unshift(r)}return n},t.cloneElement=c,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,a){if(a>=n.length)return[null,a];var i=a;var s=function(t){var a=e(t,n,i),o=r(a,2),s=o[0],u=o[1];return i=u,s};var f=o.default.isValidElement(t)&&!(u(t)||l(t));if(f){var d=o.default.Children.map(t.props.children,s)||[];return[c(t,d),i]}if(Array.isArray(t)){return[t.map(s),i]}return[n[i],i+1]}(t,n,0)[0]};var a,i=n(1),o=(a=i)&&a.__esModule?a:{default:a};t.sleep=function(e){return new Promise(function(t){return null!=e?setTimeout(t,e):t()})};function s(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function u(e){return e&&e.type&&"Backspace"===e.type.componentName}function l(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,t){var n=e.type,r=s(e.props,["children"]),a=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+a,o.default.createElement.apply(o.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},265:function(e,t,n){"use strict";n(262)("blink",function(e){return function(){return e(this,"blink","","")}})},266:function(e,t,n){var r=n(1);r(r.P,"String",{repeat:n(267)})},267:function(e,t,n){"use strict";var r=n(56),a=n(46);e.exports=function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},268:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAAEaklEQVQ4y11Ua0xURxS+0h+NJu2vJo3+avrDpC3ValKbmKolTdNS36hUsKIVGhABWyrU1lStIAvFZ9IKrUqRLg8p7PIQrGBheewusMuqLIK8BBdYFSgg7OPeO3fm69wtbKgnOTlz58755pvvzBlB4NbcJb4gzNmdJ3jb4sSHN+6SLaVtnoP6dnK20o6qyg70VN/HbM0DsIo7iktnEW3cNTfvia+reZOzyiKt0Rsg1N91B6gTKTfxRoGZ3D6rH2bRPzViz8lbCDteg62JpVi7KxMrP0rGmk+PIvyIFhfKR1HURlFuB/KNXvdVgzdBWGh3e1zv3h+YnumfAPR/WVlOmZXlV9+jeeUWcubnYjk1/YqSmn6Znjz9K0vJuMLyK63M2j9LHziJ3O2keDgFcKb6S7c9rwghOd7Fhk6xF0wElZ5KkCcZgIWO58Zz35R5JIUPKeVOWkeAQrPXJhSa5b0NfQABZOZywV6sZUWV1YyvgkwoJJlAFGV4uEsyj14JokT4PwWirDCiKODOau0iKbFSCLmGmbRLFUOQeBbl+5oPRbGqPdsw09mOidEhGNv70dLhgMEyAOfYMx89hYNQTmzOGf9mtztlFJm9s8L5spGYU79bIcuyyp/ZI8NhPhgF9+Q4/pmYQFffMHoejsLe48Dk9KzvtCrgPKhMiLoHaR3mRzZ5a4UcI95Mvdwkq7OG+mZ2bsMH8DgG/y/XnHyMC7GQnST50phj2EmPXqzjlWebhaza6Y3J6Tr09g3QT8IPsfUhURgcGoXz8TjGJqY4APUzWggmSpJvk5GRxyz6qzMscF0M3tlyao1wocyhDf0yA4V/lpGmVhuCQ2Ox4/PvsT44FhHRKT5WKsBCQLU4qg0MDGF3dCYqGgdJxDc5WB16caPwY17X2OZ9abzyMqsxGFnwzgTsj0lF0MY4hB044Wfk10z2aYa+/iFsP5DJipvGeCZw6FTx8OKgrFeFtMJeGq+ppG63C7V/G1hUfAaLPpyB3V8cR2Scxg+kRvJfATDqHMNrgSHI0dtUcYkq8blrzTpflxSYPIPlFpeqrTQ1PctWrN2Hpcu3MGHJe2zV+/t9BVGBVJfnjuoYeYJifZ16qVVAhV9JXLjWaPIB/mEUt9Z3qVP8InOhc7UVJPuqjuYWVLPqGjOe65CFxqgiM0p87YJy09MWfy/XdbrfaukTdU29Cm3lN+bwsWyEhCeRz/Ydo5tDj2Br2Lds065EtmlnIj7elsCCQ75mEbEZiPsum57+pUpsfQTcuo8UH1iNXQyYBz5f9Wyl1iidTcvreLRuRwqWrYpEYPAPZPV2jbI8KIkuXbGXBm6IU+I1VcqlGyMkv9mNqm6gwORtPlcxvsTPsKFbCuCs/cB8/FKDA3tO5Nq7k3/rQFK2DZqifuQ1ulDTyxtgCKjlUWeRpvmbmG59KL6o5vGnbJFQ0ub1gRSZXMJ1szuAP6L+x9YLvFxuI1ll7aSTR6e+XR4sbvHYrptcpTxGc182v7akTVykxn8BfRswA92H8BwAAAAASUVORK5CYII=","aspectRatio":1.127019748653501,"src":"/static/9b82ba8f22025988d8ee67ffa2a7dff4/59139/sid-the-builder.png","srcSet":"/static/9b82ba8f22025988d8ee67ffa2a7dff4/d3809/sid-the-builder.png 150w,\\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/fdbb0/sid-the-builder.png 300w,\\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/59139/sid-the-builder.png 600w,\\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/cb30f/sid-the-builder.png 900w,\\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/ba299/sid-the-builder.png 1200w,\\n/static/9b82ba8f22025988d8ee67ffa2a7dff4/571ba/sid-the-builder.png 2511w","sizes":"(max-width: 600px) 100vw, 600px"}}}}}')},269:function(e,t,n){"use strict";n(7),n(10),n(3),n(66),n(166),n(270);var r=n(26);t.__esModule=!0,t.default=void 0;var a,i=r(n(85)),o=r(n(86)),s=r(n(167)),u=r(n(168)),l=r(n(0)),c=r(n(45)),f=function(e){var t=(0,u.default)({},e),n=t.resolutions,r=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},d=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},p=Object.create({}),h=function(e){var t=f(e),n=d(t);return p[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,y=g&&window.IntersectionObserver,v=new WeakMap;function b(e){return e.map(function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:r,sizes:i}),l.default.createElement("source",{media:a,srcSet:n,sizes:i}))})}function E(e){var t=[],n=[];return e.forEach(function(e){return(e.media?t:n).push(e)}),[].concat(t,n)}function x(e){return e.map(function(e){var t=e.src,n=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,n=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:r})})}function S(e,t){var n=e.srcSet,r=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?r:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var T=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),a);return n&&(n.observe(e),v.set(e,t)),function(){n.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+l+o+s+n+r+t+i+a+u+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,n=e.imageVariants,r=e.generateSources,a=e.spreadProps,i=l.default.createElement(P,(0,u.default)({src:t},a));return n.length>1?l.default.createElement("picture",null,r(n),i):i},P=l.default.forwardRef(function(e,t){var n=e.sizes,r=e.srcSet,a=e.src,i=e.style,o=e.onLoad,c=e.onError,f=e.loading,d=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,u.default)({sizes:n,srcSet:r,src:a},p,{onLoad:o,onError:c,ref:t,loading:f,draggable:d,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=g&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!m&&y&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||g&&(m||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=f(e),n=d(t),p[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=f(this.props),t=e.title,n=e.alt,r=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,d=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,g=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,T=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,u.default)({opacity:R?1:0,transition:N?"opacity "+y+"ms":"none"},s),k="boolean"==typeof g?"lightgray":g,I={transitionDelay:y+"ms"},A=(0,u.default)({opacity:this.state.imgLoaded?0:1},N&&I,{},s,{},d),D={title:t,alt:this.state.isVisible?"":n,style:A,className:p};if(h){var _=h,j=_[0];return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),k&&l.default.createElement(v,{title:t,style:(0,u.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&I)}),j.base64&&l.default.createElement(O,{src:j.base64,spreadProps:D,imageVariants:_,generateSources:w}),j.tracedSVG&&l.default.createElement(O,{src:j.tracedSVG,spreadProps:D,imageVariants:_,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,b(_),l.default.createElement(P,{alt:n,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:T})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,u.default)({alt:n,title:t,loading:S},j,{imageVariants:_}))}}))}if(m){var V=m,M=V[0],z=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete z.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},k&&l.default.createElement(v,{title:t,style:(0,u.default)({backgroundColor:k,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&I)}),M.base64&&l.default.createElement(O,{src:M.base64,spreadProps:D,imageVariants:V,generateSources:w}),M.tracedSVG&&l.default.createElement(O,{src:M.tracedSVG,spreadProps:D,imageVariants:V,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,b(V),l.default.createElement(P,{alt:n,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:T})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,u.default)({alt:n,title:t,loading:S},M,{imageVariants:V}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:N,sizes:L,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=R;t.default=k},270:function(e,t,n){"use strict";n(262)("fixed",function(e){return function(){return e(this,"tt","","")}})},271:function(e,t,n){"use strict";var r=n(26);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=r(n(272));e.exports=t.default},272:function(e,t,n){"use strict";n(14),t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},273:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}n(115),n(13),e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},274:function(e,t,n){e.exports=n.p+"static/sid-logo-ff530640e4a86b0fb4458a9c5484cbe1.png"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ba10f31b3ac67577424c.js.map