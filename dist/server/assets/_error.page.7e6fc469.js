"use strict";
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("@vue/server-renderer");
var vue = require("vue");
const props = ["is404"];
const _sfc_main = { props };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.is404) {
    _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1>404 Page Not Found</h1> This page could not be found. </div>`);
  } else {
    _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1>500 Internal Server Error</h1> Something went wrong. </div>`);
  }
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("C:/Users/mark/Documents/vercel-vite-ssr-test/pages/_error.page.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
exports.default = _sfc_main;
