const { createPageRender } = require('vite-plugin-ssr');
// const { resolve } = require('path')

const renderPage = createPageRender({ isProduction: true, root: __dirname });

module.exports = async (req, res) => {
    const result = await renderPage({
        url: req.url,
        pageProps: {},
    });
    if (result.nothingRendered) res.status(200).send('');
    res.status(result.statusCode).send(result.renderResult);
}
