!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactHistory=e():t.ReactHistory=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=function(t,e,o){for(var n=!0;n;){var r=t,i=e,c=o;u=p=a=void 0,n=!1,null===r&&(r=Function.prototype);var u=Object.getOwnPropertyDescriptor(r,i);if(void 0!==u){if("value"in u)return u.value;var a=u.get;return void 0===a?void 0:a.call(c)}var p=Object.getPrototypeOf(r);if(null===p)return void 0;t=p,e=i,o=c,n=!0}},c={};e["default"]=function(t){return function(t){function e(t){var n=this;if(o(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.state=this.state?this.state:{},this.hash=location.hash,c.hasOwnProperty(this.hash)){var r=c[this.hash];for(var u in r)r.hasOwnProperty(u)&&(this.state[u]=r[u]);this.componentWillMount=function(){i(Object.getPrototypeOf(e.prototype),"componentWillMount",n).call(n)},this.componentDidMount=function(){i(Object.getPrototypeOf(e.prototype),"componentDidMount",n).call(n)}}}return n(e,t),r(e,[{key:"componentWillUnmount",value:function(){c[this.hash]=this.state,i(Object.getPrototypeOf(e.prototype),"componentWillUnmount",this).call(this)}}]),e}(t)},t.exports=e["default"]}])});