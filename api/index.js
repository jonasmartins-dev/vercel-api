const app = require('express')()

app.use(express.static('public'))

app.get('/api', (req, res) => {
    res.end('Teste')
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params
    res.end(slug)
});

module.exports = app