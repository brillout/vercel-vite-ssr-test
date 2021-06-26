
import { createPageRender } from 'vite-plugin-ssr';
import '../dist/server/importer.js';
import { resolve } from 'path';

const renderPage = createPageRender({ isProduction: true, root: resolve(__dirname, '..') });

module.exports = async (req, res) => {
    const result = await renderPage({
        url: req.url,
        pageProps: {},
    });
    if (result.nothingRendered) res.status(200).send('');
    else res.status(result.statusCode).send(result.renderResult);
}