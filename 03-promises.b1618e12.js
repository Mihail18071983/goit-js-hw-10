!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire4c75;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequire4c75=t);var r=t("h6c0i");const i={form:document.querySelector("form")};function l(e,o){return new Promise(((n,t)=>setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)))}i.form.addEventListener("submit",(function(e){e.preventDefault();const o=Number(i.form.elements.step.value);let n=Number(i.form.elements.delay.value);const t=i.form.elements.amount.value;for(let e=1;e<=t;e+=1)l(e,n).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),n+=o}))}();
//# sourceMappingURL=03-promises.b1618e12.js.map
