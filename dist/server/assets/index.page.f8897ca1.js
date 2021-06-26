"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var index_page_vue_vue_type_style_index_0_lang = "\nh1, p {\n  color: green;\n}\n";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1>About</h1><p>A colored page.</p><!--]-->`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("C:/Users/mark/Documents/vercel-vite-ssr-test/pages/about/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
