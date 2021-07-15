"use strict";

const { renderPage } = require('../dist/server/renderPage')

module.exports = async (req, res) => {
    const result = await renderPage({
        url: req.url,
        pageProps: {},
    });
    if (result.nothingRendered) res.status(200).send('');
    else res.status(result.statusCode).setHeader("content-type", "text/html").send(result.renderResult);
}
