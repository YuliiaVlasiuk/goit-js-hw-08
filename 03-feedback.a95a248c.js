!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,s=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),s?S(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=g();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function h(e){return f=void 0,b&&o?S(e):(o=i=void 0,u)}function w(){var e=g(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,p(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(y(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function p(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=p(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var S="feedback-form-state",j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},O={email:"",message:""},T=JSON.parse(localStorage.getItem(S));T&&(j.email.value=T.email,j.message.value=T.message,O.email=j.email.value,O.message=j.message.value),j.email.addEventListener("input",(function(e){O.email=e.currentTarget.value,localStorage.setItem(S,JSON.stringify(O))})),j.message.addEventListener("input",(function(e){O.message=e.currentTarget.value,localStorage.setItem(S,JSON.stringify(O))})),j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(O),localStorage.removeItem(S),O.email="",O.message=""}))}();
//# sourceMappingURL=03-feedback.a95a248c.js.map