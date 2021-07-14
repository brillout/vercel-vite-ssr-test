"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
const pageFiles = {
  ".page": { "/pages/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.84f3600c.js");
  }), "/pages/_error.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/_error.page.7e6fc469.js");
  }), "/pages/about/index.page.vue": () => Promise.resolve().then(function() {
    return require("./assets/index.page.f8897ca1.js");
  }) },
  ".page.client": { "/pages/_default/_default.page.client.js": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.client.e46d795d.js");
  }) },
  ".page.server": { "/pages/_default/_default.page.server.js": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.server.21e9e4ab.js");
  }) },
  ".page.route": {}
};
exports.pageFiles = pageFiles;
