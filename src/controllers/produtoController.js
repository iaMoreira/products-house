const ProdutoModel = require('../models/produtoModel')

const produtoController = {
    index: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.render('adm/produtos/lista.ejs', {produtos})
    },
    getCadastro: (req, res) => {
        return res.render('adm/produtos/cadastro.ejs')
    },
    postProduto: (req, res) => {
        const {nome, imagem, preco, ativo, descricao} = req.body

        const produto = {
            nome,
            imagem,
            preco,
            descricao,
            ativo: (ativo ? true : false)
        }

        ProdutoModel.save(produto);

        return res.redirect('/adm/produtos');
    }
}

module.exports = produtoController