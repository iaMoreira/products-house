const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    return res.render('home/landingpage.ejs', {produtos: []})
});

router.get('/adm/produtos', function (req, res) {
    return res.render('adm/produtos/lista.ejs', {produtos: []})
});

router.get('/adm/produtos/cadastro', function (req, res) {
    return res.render('adm/produtos/cadastro.ejs')
});


router.get('/login', function (req, res) {
    return res.render('home/login.ejs')
});

module.exports = router;