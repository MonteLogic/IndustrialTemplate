webpackJsonp([12],{414:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(64),a=o(1),s=o.n(a),u=o(52),p=o.n(u),f=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return c(t,e),t.prototype.loaded=function(){var e=this,t=this.context.compareRemoveMessage;s()("body").on("click","[data-comparison-remove]",function(o){e.context.comparisons.length<=2&&(p()({text:t,type:"error"}),o.preventDefault())})},t}(i.a);t.default=f}});
