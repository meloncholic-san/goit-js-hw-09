function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("1GAPJ");const u={createPromiseForm:document.querySelector("form"),inputDelay:document.querySelector("input[name = 'delay']"),inputStep:document.querySelector("input[name = 'step']"),inputAmount:document.querySelector("input[name = 'amount']")};function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}u.createPromiseForm.addEventListener("submit",(function(o){o.preventDefault();const t=Number(u.inputDelay.value),n=Number(u.inputStep.value),r=Number(u.inputAmount.value);console.log("Delay:",t),console.log("Step:",n),console.log("Amount:",r);for(let o=0;o<r;o++){l(o+1,t+o*n).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.9298e100.js.map
