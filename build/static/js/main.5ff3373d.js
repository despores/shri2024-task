/*! For license information please see main.5ff3373d.js.LICENSE.txt */
(()=>{"use strict";var e={153:(e,t,r)=>{var n=r(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,s=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:l.current}}},202:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}function _(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var S=v.prototype=new _;S.constructor=v,d(S,m.prototype),S.isPureReactComponent=!0;var g=Array.isArray,E=Object.prototype.hasOwnProperty,k={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,i={},u=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)E.call(t,o)&&!L.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var c=Array(a),s=0;s<a;s++)c[s]=arguments[s+2];i.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:u,ref:l,props:i,_owner:k.current}}function O(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,i,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var a=!1;if(null===e)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return u=u(a=e),e=""===i?"."+R(a,0):i,g(u)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(u,t,o,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(a=0,i=""===i?".":i+":",g(e))for(var c=0;c<e.length;c++){var s=i+R(l=e[c],c);a+=C(l,t,o,s,u)}else if(s=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"===typeof s)for(e=s.call(e),c=0;!(l=e.next()).done;)a+=C(l=l.value,t,o,s=i+R(l,c++),u);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},x={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:x,ReactCurrentOwner:k};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=v,t.StrictMode=i,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=A,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=d({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)E.call(t,c)&&!L.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==a?a[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){a=Array(c);for(var s=0;s<c;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:r,type:e.type,key:i,ref:u,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=x.transition;x.transition={};try{e()}finally{x.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},43:(e,t,r)=>{e.exports=r(202)},579:(e,t,r)=>{r(153)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);r(43),r(579);const n={all:{title:"\u0412\u0441\u0435",items:[{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"D-Link Omna 180 Cam",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00"},{icon:"temp",iconLabel:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",title:"Elgato Eve Degree Connected",subtitle:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043e 17:00"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00"},{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Mi Air Purifier 2S",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Philips Zhirui",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Philips Zhirui",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Mi Air Purifier 2S",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"}]},kitchen:{title:"\u041a\u0443\u0445\u043d\u044f",items:[{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"temp",iconLabel:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",title:"Elgato Eve Degree Connected",subtitle:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043e 17:00"}]},hall:{title:"\u0417\u0430\u043b",items:[{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Philips Zhirui",subtitle:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Mi Air Purifier 2S",subtitle:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e"}]},lights:{title:"\u041b\u0430\u043c\u043f\u043e\u0447\u043a\u0438",items:[{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"D-Link Omna 180 Cam",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0432 17:00"},{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Mi Air Purifier 2S",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"},{icon:"light",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Philips Zhirui",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"}]},cameras:{title:"\u041a\u0430\u043c\u0435\u0440\u044b",items:[{icon:"light2",iconLabel:"\u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",title:"Xiaomi Mi Air Purifier 2S",subtitle:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e"}]}};for(let o=0;o<6;++o)n.all.items=[...n.all.items,...n.all.items];Object.keys(n)})();
//# sourceMappingURL=main.5ff3373d.js.map