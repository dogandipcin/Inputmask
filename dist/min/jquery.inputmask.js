/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2012 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 1.3.5
*/
(function(d){void 0==d.fn.inputmask&&(d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,showMaskOnHover:!0,onKeyValidation:d.noop,numericInput:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},
"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,
93,112,113,114,115,116,117,118,119,120,121,122,123]},val:d.fn.val,escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},getMaskLength:function(d,C,z){var D=d.length;!C&&1<z&&(D+=d.length*(z-1));return D}},d.fn.inputmask=function(s,C){function z(f,b){var c=a.aliases[f];return c?(c.alias&&z(c.alias),d.extend(!0,a,c),d.extend(!0,a,b),!0):!1}function D(){var f=!1,b=0,c=a.mask.toString();1==c.length&&!1==a.greedy&&(a.placeholder="");for(var c=
d.map(c.split(""),function(c){var d=[];if(c==a.escapeChar)f=true;else if(c!=a.optionalmarker.start&&c!=a.optionalmarker.end||f){var E=a.definitions[c];if(E&&!f)for(c=0;c<E.cardinality;c++)d.push(A(b+c));else{d.push(c);f=false}b=b+d.length;return d}}),E=c.slice(),g=1;g<a.repeat&&a.greedy;g++)E=E.concat(c.slice());return E}function I(){var f=!1,b=!1,c=!1;return d.map(a.mask.toString().split(""),function(d){var g=[];if(d==a.escapeChar)b=!0;else if(d==a.optionalmarker.start&&!b)c=f=!0;else if(d==a.optionalmarker.end&&
!b)f=!1,c=!0;else{var i=a.definitions[d];if(i&&!b){for(var j=i.prevalidator,k=j?j.length:0,h=1;h<i.cardinality;h++){var l=k>=h?j[h-1]:[],e=l.validator,l=l.cardinality;g.push({fn:e?"string"==typeof e?RegExp(e):new function(){this.test=e}:/./,cardinality:l?l:1,optionality:f,newBlockMarker:!0==f?c:!1,offset:0,casing:i.casing,def:d});!0==f&&(c=!1)}g.push({fn:i.validator?"string"==typeof i.validator?RegExp(i.validator):new function(){this.test=i.validator}:/./,cardinality:i.cardinality,optionality:f,newBlockMarker:c,
offset:0,casing:i.casing,def:d})}else g.push({fn:null,cardinality:0,optionality:f,newBlockMarker:c,offset:0,casing:null,def:d}),b=!1;c=!1;return g}})}function G(f,b,c,d){var g=!1;if(0<=f&&f<n()){for(var j=f%i.length,r=b?1:0,k="",h=i[j].cardinality;h>r;h--)k+=t(c,j-(h-1));b&&(k+=b);g=null!=i[j].fn?i[j].fn.test(k,c,f,d,a):!1}setTimeout(function(){a.onKeyValidation.call(this,g,a)},0);return g}function r(f){f=i[f%i.length];return void 0!=f?f.fn:!1}function A(f){return a.placeholder.charAt(f%a.placeholder.length)}
function n(){return d.inputmask.getMaskLength(g,a.greedy,a.repeat)}function w(f,a){var c=n();if(a>=c)return c;for(var d=a;++d<c&&!r(d););return d}function L(a,b){var c=b;if(0>=c)return 0;for(;0<--c&&!r(c););return c}function F(a,b,c){var d=i[b%i.length],g=c;if(void 0!=g)switch(d.casing){case "upper":g=c.toUpperCase();break;case "lower":g=c.toLowerCase()}a[b]=g}function t(a,b,c){c&&(b=P(a,b));return a[b]}function P(a,b,c){if(c)for(;0>b&&a.length<n();){c=g.length-1;for(b=g.length;void 0!==g[c];)a.unshift(g[c--])}else for(;void 0==
a[b]&&a.length<n();)for(c=0;void 0!==g[c];)a.push(g[c++]);return b}function x(a,b,c){a._valueSet(b.join(""));void 0!=c&&(J?setTimeout(function(){j(a,c)},100):j(a,c))}function Q(a,b,c){for(var d=n();b<c&&b<d;b++)F(a,b,t(g.slice(),b))}function K(a,b){F(a,b,t(g,b%i.length))}function m(f,b,c,E){var j=d(f).data("inputmask").isRTL,m=M(f._valueGet(),j).split("");if(j){var B=n(),k=m.reverse();k.length=B;for(var h=0;h<B;h++){var l=(B-(h+1))%i.length;null==i[l].fn&&k[h]!=t(g,l)?(k.splice(h,0,t(g,l)),k.length=
B):k[h]=k[h]||t(g,l)}m=k.reverse()}Q(b,0,b.length);b.length=g.length;for(var e=k=-1,y,B=n(),s=m.length,l=0==s?B:-1,h=0;h<s;h++)for(var q=e+1;q<B;q++)if(r(q)){var u=m[h];!1!==(y=G(q,u,b,!c))?(!0!==y&&(q=void 0!=y.pos?y.pos:q,u=void 0!=y.c?y.c:u),F(b,q,u),k=e=q):(K(b,q),u==A(q)&&(l=e=q));break}else if(K(b,q),k==e&&(k=q),e=q,m[h]==t(b,q))break;if(!1==a.greedy)for(h=M(b.join(""),j).split("");b.length!=h.length;)j?b.shift():b.pop();c&&x(f,b);return j?a.numericInput?""!=a.radixPoint&&-1!=d.inArray(a.radixPoint,
b)&&!0!==E?d.inArray(a.radixPoint,b):w(b,B):w(b,l):w(b,k)}function S(a){return d.inputmask.escapeRegex.call(this,a)}function M(a,b){return b?a.replace(RegExp("^("+S(g.join(""))+")*"),""):a.replace(RegExp("("+S(g.join(""))+")*$"),"")}function R(a,b){m(a,b,!1);var c=b.slice();if(d(a).data("inputmask").isRTL)for(var g=0;g<=c.length-1;g++){var j=g%i.length;if(i[j].optionality)if(A(g)==b[g]||!r(g))c.splice(0,1);else break;else break}else for(g=c.length-1;0<=g;g--)if(j=g%i.length,i[j].optionality)if(A(g)==
b[g]||!r(g))c.pop();else break;else break;x(a,c)}function T(a,b){var c=a[0];if(i&&(!0===b||!a.hasClass("hasDatepicker"))){var j=g.slice();m(c,j);return d.map(j,function(a,b){return r(b)&&a!=t(g.slice(),b)?a:null}).join("")}return c._valueGet()}function j(d,b,c){d=d.jquery&&0<d.length?d[0]:d;if("number"==typeof b){c="number"==typeof c?c:b;!1==a.insertMode&&b==c&&c++;if(d.setSelectionRange)d.setSelectionRange(b,c);else if(d.createTextRange){var g=d.createTextRange();g.collapse(!0);g.moveEnd("character",
c);g.moveStart("character",b);g.select()}d.focus()}else{var j=J?g:null,g=null;null==j&&(d.setSelectionRange?(b=d.selectionStart,c=d.selectionEnd):document.selection&&document.selection.createRange&&(g=document.selection.createRange(),b=0-g.duplicate().moveStart("character",-1E5),c=b+g.text.length),j={begin:b,end:c});return j}}function N(a){for(var b=!0,a=a._valueGet(),d=a.length,g=0;g<d;g++)if(r(g)&&a.charAt(g)==A(g)){b=!1;break}return b}function O(f){function b(a){a=d._data(a).events;d.each(a,function(a,
b){d.each(b,function(a,b){if("inputmask"==b.namespace){var d=b.handler;b.handler=function(){return this.readOnly||this.disabled?!1:d.apply(this,arguments)}}})})}function c(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=d(this),b=d(this).data("inputmask");return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=b._buffer.join("")?
this._valueGet():""},set:function(a){this._valueSet(a);d(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=d(this),b=d(this).data("inputmask");return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=b._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);
d(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=d.fn.val.inputmaskpatch)d.fn.val=function(){if(arguments.length==0){var a=d(this);if(a.data("inputmask")){if(a.data("inputmask").autoUnmask)return a.inputmask("unmaskedvalue");var b=d.inputmask.val.apply(a);return b!=a.data("inputmask")._buffer.join("")?b:""}return d.inputmask.val.apply(a)}var e=arguments;return this.each(function(){var a=d(this),
b=d.inputmask.val.apply(a,e);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},d.extend(d.fn.val,{inputmaskpatch:!0})}function s(a,b,d){for(;!r(a)&&0<=a-1;)a--;for(var c=a;c<b&&c<n();c++)if(r(c)){K(e,c);var f=w(e,c),o=t(e,f);if(o!=A(f))if(f<n()&&!1!==G(c,o,e,!0)&&i[c%i.length].def==i[f%i.length].def)F(e,c,t(e,f)),K(e,f);else{if(r(c))break}else if(void 0==d)break}else K(e,c);void 0!=d&&F(e,v?b:L(e,b),d);e=M(e.join(""),v).split("");0==e.length&&(e=g.slice());return a}function z(a,
b,d,c){for(;a<=b&&a<n();a++)if(r(a)){var f=t(e,a);F(e,a,d);if(f!=A(a))if(d=w(e,a),d<n())if(!1!==G(d,f,e,!0)&&i[a%i.length].def==i[d%i.length].def)d=f;else if(r(d))break;else d=f;else break;else if(!0!==c)break}else K(e,a);c=e.length;e=M(e.join(""),v).split("");0==e.length&&(e=g.slice());return b-(c-e.length)}function D(b){C=!1;var c=this,f=b.keyCode,i=j(c);if(a.numericInput&&""!=a.radixPoint){var h=c._valueGet().indexOf(a.radixPoint);-1!=h&&(v=i.begin<=h||i.end<=h)}if(f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||
U&&127==f){h=n();if(0==i.begin&&i.end==h)e=g.slice(),x(c,e),j(c,m(c,e,!1));else if(1<i.end-i.begin||1==i.end-i.begin&&a.insertMode)Q(e,i.begin,i.end),x(c,e),j(v?m(c,e,!1):i.begin);else{var o=i.begin-(f==a.keyCode.DELETE?0:1);o<H&&f==a.keyCode.DELETE&&(o=H);o>=H&&(a.numericInput&&a.greedy&&f==a.keyCode.DELETE&&e[o]==a.radixPoint?(o=w(e,o),v=!1):a.numericInput&&(a.greedy&&f==a.keyCode.BACKSPACE&&e[o]==a.radixPoint)&&(o--,v=!0),v?(o=z(H,o,A(o),!0),o=a.numericInput&&a.greedy&&f==a.keyCode.BACKSPACE&&
e[o+1]==a.radixPoint?o+1:w(e,o)):o=s(o,h),x(c,e,o))}c._valueGet()==g.join("")&&d(c).trigger("cleared");b.preventDefault()}else f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=m(c,e,!1,!0);!a.insertMode&&(d==n()&&!b.shiftKey)&&d--;j(c,b.shiftKey?i.begin:d,d)},0):f==a.keyCode.HOME||f==a.keyCode.PAGE_UP?j(c,0,b.shiftKey?i.begin:0):f==a.keyCode.ESCAPE?(c._valueSet(y),j(c,0,m(c,e))):f==a.keyCode.INSERT?(a.insertMode=!a.insertMode,j(c,!a.insertMode&&i.begin==n()?i.begin-1:i.begin)):
b.ctrlKey&&88==f?setTimeout(function(){j(c,m(c,e,!0))},0):a.insertMode||(f==a.keyCode.RIGHT?(h=i.begin==i.end?i.end+1:i.end,h=h<n()?h:i.end,j(c,b.shiftKey?i.begin:h,b.shiftKey?h+1:h)):f==a.keyCode.LEFT&&(h=i.begin-1,h=0<h?h:0,j(c,h,b.shiftKey?i.end:h)));a.onKeyDown.call(this,b,a);q=-1!=d.inArray(f,a.ignorables)}function B(b){if(C)return!1;C=!0;var c=this,f=d(c),b=b||window.event,g=b.which||b.charCode||b.keyCode,i=String.fromCharCode(g);if(a.numericInput&&i==a.radixPoint){var h=c._valueGet().indexOf(a.radixPoint);
j(c,w(e,-1!=h?h:n()))}if(b.ctrlKey||b.altKey||b.metaKey||q)return!0;if(g){f.trigger("input");var k=j(c),l=n(),g=!0;Q(e,k.begin,k.end);if(v){var h=L(e,k.end),p;if(!1!==(p=G(h==l||t(e,h)==a.radixPoint?L(e,h):h,i,e,!1))){!0!==p&&(h=void 0!=p.pos?p.pos:h,i=void 0!=p.c?p.c:i);p=H;if(!0==a.insertMode){if(!0==a.greedy)for(var m=e.slice();t(m,p,!0)!=A(p)&&p<=h;)p=p==l?l+1:w(e,p);p<=h&&(a.greedy||e.length<l)?(e[H]!=A(H)&&e.length<l&&(l=P(e,-1,v),0!=k.end&&(h+=l),l=e.length),s(p,h,i)):g=!1}else F(e,h,i);g&&
(x(c,e,a.numericInput?h+1:h),setTimeout(function(){N(c)&&f.trigger("complete")},0))}else J&&x(c,e,k.begin)}else if(h=w(e,k.begin-1),P(e,h,v),!1!==(p=G(h,i,e,!1))){!0!==p&&(h=void 0!=p.pos?p.pos:h,i=void 0!=p.c?p.c:i);if(!0==a.insertMode){k=n();for(m=e.slice();t(m,k,!0)!=A(k)&&k>=h;)k=0==k?-1:L(e,k);k>=h?z(h,e.length,i):g=!1}else F(e,h,i);g&&(i=w(e,h),x(c,e,i),setTimeout(function(){N(c)&&f.trigger("complete")},0))}else J&&x(c,e,k.begin);b.preventDefault()}}function k(b){var c=d(this),f=b.keyCode;a.onKeyUp.call(this,
b,a);f==a.keyCode.TAB&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length)&&(e=g.slice(),x(this,e),v||j(this,0),y=this._valueGet())}var h=d(f);if(h.is(":input")){a.greedy=a.greedy?a.greedy:0==a.repeat;var l=h.prop("maxLength");n()>l&&-1<l&&(l<g.length&&(g.length=l),!1==a.greedy&&(a.repeat=Math.round(l/g.length)),h.prop("maxLength",2*n()));h.data("inputmask",{tests:i,_buffer:g,greedy:a.greedy,repeat:a.repeat,autoUnmask:a.autoUnmask,definitions:a.definitions,isRTL:!1});c(f);var e=g.slice(),
y=f._valueGet(),C=!1,q=!1,u=-1,H=w(e,-1);L(e,n());var v=!1;if("rtl"==f.dir||a.numericInput)f.dir="ltr",h.css("text-align","right"),h.removeAttr("dir"),l=h.data("inputmask"),l.isRTL=!0,h.data("inputmask",l),v=!0;h.unbind(".inputmask");h.removeClass("focus.inputmask");h.bind("mouseenter.inputmask",function(){if(!d(this).hasClass("focus.inputmask")&&a.showMaskOnHover){var b=this._valueGet().length;b<e.length&&(0==b&&(e=g.slice()),x(this,e))}}).bind("blur.inputmask",function(){var b=d(this),c=this._valueGet();
b.removeClass("focus.inputmask");c!=y&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==g.join("")?this._valueSet(""):R(this,e));N(this)||(b.trigger("incomplete"),a.clearIncomplete&&(a.clearMaskOnLostFocus?this._valueSet(""):(e=g.slice(),x(this,e))))}).bind("focus.inputmask",function(){var b=d(this),c=this._valueGet();if(!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c))c=c.length,c<e.length&&(0==c&&(e=g.slice()),j(this,m(this,e,!0)));b.addClass("focus.inputmask");y=this._valueGet()}).bind("mouseleave.inputmask",
function(){var b=d(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(this._valueGet()==g.join("")||""==this._valueGet()?this._valueSet(""):R(this,e)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=j(a);b.begin==b.end&&(b=b.begin,u=m(a,e,!1),v?j(a,b>u&&(!1!==G(b,e[b],e,!0)||!r(b))?b:u):j(a,b<u&&(!1!==G(b,e[b],e,!0)||!r(b))?b:u))},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){j(a,0,u)},0)}).bind("keydown.inputmask",D).bind("keypress.inputmask",
B).bind("keyup.inputmask",k).bind(V+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this;setTimeout(function(){j(a,m(a,e,!0))},0)}).bind("setvalue.inputmask",function(){y=this._valueGet();m(this,e,!0);this._valueGet()==g.join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);var u=m(f,e,!0),I;try{I=document.activeElement}catch(O){}I===f?(h.addClass("focus.inputmask"),j(f,u)):a.clearMaskOnLostFocus&&
(f._valueGet()==g.join("")?f._valueSet(""):R(f,e));b(f)}}var a=d.extend(!0,{},d.inputmask.defaults,C),V=function(a){var b=document.createElement("input"),a="on"+a,c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}("paste")?"paste":"input",U=null!=navigator.userAgent.match(/iphone/i),J=null!=navigator.userAgent.match(/android.*mobile safari.*/i);if(J)var W=navigator.userAgent.match(/mobile safari.*/i),J=533>=parseInt(RegExp(/[0-9]+/).exec(W));if("string"==typeof s)switch(s){case "mask":z(a.alias,
C);var g=D(),i=I();return this.each(function(){O(this)});case "unmaskedvalue":return i=this.data("inputmask").tests,g=this.data("inputmask")._buffer,a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,T(this);case "remove":return this.each(function(){var f=d(this),b=this;setTimeout(function(){if(f.data("inputmask")){i=f.data("inputmask").tests;g=f.data("inputmask")._buffer;a.greedy=f.data("inputmask").greedy;a.repeat=f.data("inputmask").repeat;
a.definitions=f.data("inputmask").definitions;b._valueSet(T(f,!0));f.removeData("inputmask");f.unbind(".inputmask");f.removeClass("focus.inputmask");var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value"));c&&c.get?b._valueGet&&Object.defineProperty(b,"value",{get:b._valueGet,set:b._valueSet}):document.__lookupGetter__&&b.__lookupGetter__("value")&&b._valueGet&&(b.__defineGetter__("value",b._valueGet),b.__defineSetter__("value",b._valueSet));delete b._valueGet;delete b._valueSet}},
0)});case "getemptymask":return this.data("inputmask")?this.data("inputmask")._buffer.join(""):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").autoUnmask:!1;case "isComplete":return i=this.data("inputmask").tests,g=this.data("inputmask")._buffer,a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,N(this[0]);default:return z(s,C)||(a.mask=s),g=D(),i=I(),this.each(function(){O(this)})}else{if("object"==
typeof s)return a=d.extend(!0,{},d.inputmask.defaults,s),z(a.alias,s),g=D(),i=I(),this.each(function(){O(this)});if(void 0==s)return this.each(function(){var f=d(this).attr("data-inputmask");if(f&&""!=f)try{var f=f.replace(RegExp("'","g"),'"'),b=d.parseJSON("{"+f+"}");a=d.extend(!0,{},d.inputmask.defaults,b);z(a.alias,b);a.alias=void 0;d(this).inputmask(a)}catch(c){}})}return this})})(jQuery);
