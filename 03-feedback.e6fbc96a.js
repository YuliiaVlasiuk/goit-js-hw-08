var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var r,o,i,a,f,u,c=0,d=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),d?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function j(){var e=m();if(T(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return b?s(n,i-(e-c)):n}(e))}function O(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function h(){var e=m(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(b)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,v(n)&&(d=!!n.leading,i=(b="maxWait"in n)?l(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:O(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=r.test(e);return f||o.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},p={email:"",message:""},y=JSON.parse(localStorage.getItem("feedback-form-state"));y&&(b.email.value=y.email,b.message.value=y.message,p.email=b.email.value,p.message=b.message.value),b.email.addEventListener("input",(function(e){p.email=e.currentTarget.value,localStorage.setItem("feedback-form-state",JSON.stringify(p))})),b.message.addEventListener("input",(function(e){p.message=e.currentTarget.value,localStorage.setItem("feedback-form-state",JSON.stringify(p))})),b.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(p),localStorage.removeItem("feedback-form-state"),p.email="",p.message=""}));
//# sourceMappingURL=03-feedback.e6fbc96a.js.map
