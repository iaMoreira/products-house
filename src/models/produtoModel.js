const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

function open() {
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content); // de texto json para js
    return db;
}

function store(db) {
    content = JSON.stringify(db); // de js para texto json
    fs.writeFileSync("./db.json", content, "utf8")
}

const ProdutoModel = {
    findAll: () => {
        const db = open();
        return db.produtos;
    },
    findById: (id) => {
        const db = open();
        const produto = db.produtos.find(produto => produto.id == id);
        return produto;
    },
    save: (produto) => {
        const db = open();
        produto.id = geradorDeId();
        db.produtos.push(produto);
        store(db);
    },
    update: (id, produtoAtualizado) => {
        const db = open();
        const index = db.produtos.findIndex(produto => produto.id == id);
        db.produtos[index] = produtoAtualizado;
        store(db);
    },
    delete: (id) => {
        const db = open();
        const index = db.produtos.findIndex(produto => produto.id == id);
        db.produtos.splice(index, 1);
        store(db);
    }
}

module.exports = ProdutoModel;
