/*! Qoopido.js library 3.7.1, 2015-07-25 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(n){window.qoopido.register("proxy",n,["./base","./function/unique/uuid"])}(function(n,t,u,r,e,o,i){"use strict";return n.base.extend({_constructor:function(t,u){var r=Array.prototype.splice.call(arguments,2),e=function(){return u.apply(t,Array.prototype.slice.call(arguments).concat(r))};return e._quid=n["function/unique/uuid"](),e}})});