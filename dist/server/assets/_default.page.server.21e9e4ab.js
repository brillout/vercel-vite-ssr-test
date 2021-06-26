"use strict";
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var logoUrl = "/assets/logo.bebe2e90.svg";
var PageLayout_vue_vue_type_style_index_0_lang = "\nbody {\n  margin: 0;\n  font-family: sans-serif;\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\n";
var PageLayout_vue_vue_type_style_index_1_scoped_true_lang = "\n.layout[data-v-55e1e7e8] {\n  display: flex;\n  max-width: 900px;\n  margin: auto;\n}\n.content[data-v-55e1e7e8] {\n  padding: 20px;\n  border-left: 2px solid #eee;\n  padding-bottom: 50px;\n  min-height: 100vh;\n}\n.navigation[data-v-55e1e7e8] {\n  padding: 20px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.8em;\n}\n.logo[data-v-55e1e7e8] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.navitem[data-v-55e1e7e8] {\n  padding: 3px;\n}\n";
const _sfc_main = {};
const _withId = /* @__PURE__ */ vue.withScopeId("data-v-55e1e7e8");
const _sfc_ssrRender = /* @__PURE__ */ _withId((_ctx, _push, _parent, _attrs) => {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "layout" }, _attrs))} data-v-55e1e7e8><div class="navigation" data-v-55e1e7e8><a href="/" class="logo" data-v-55e1e7e8><img${serverRenderer.ssrRenderAttr("src", logoUrl)} height="64" width="64" alt="logo" data-v-55e1e7e8></a><a class="navitem" href="/" data-v-55e1e7e8>Home</a><a class="navitem" href="/about" data-v-55e1e7e8>About</a></div><div class="content" data-v-55e1e7e8>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
});
_sfc_main.ssrRender = _sfc_ssrRender;
_sfc_main.__scopeId = "data-v-55e1e7e8";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("C:/Users/mark/Documents/vercel-vite-ssr-test/pages/_default/PageLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = {
    render() {
      return vue.h(_sfc_main, {}, {
        default() {
          return vue.h(Page, pageProps || {});
        }
      });
    }
  };
  const app = vue.createSSRApp(PageWithLayout);
  app.config.globalProperties.$routeParams = pageContext.routeParams;
  return app;
}
const passToClient = ["pageProps", "routeParams"];
async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = await serverRenderer.renderToString(app);
  const { documentProps } = pageContext;
  const title = (documentProps == null ? void 0 : documentProps.title) || "Vite SSR app";
  const desc = (documentProps == null ? void 0 : documentProps.description) || "App using Vite + vite-plugin-ssr";
  return vitePluginSsr.html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${vitePluginSsr.html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
exports.passToClient = passToClient;
exports.render = render;
