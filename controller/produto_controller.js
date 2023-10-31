const { connect } = require("../config/connection.js");

const Produto = {};

Produto.all = async function (req, res) {
    try {
        const con = await connect();
        let produtos = await con.query("SELECT * FROM produtos;");
        res.send(produtos);
    } catch (e) {
        console.log("Erro......", e);
    }
};

Produto.create = async function (req, res) {
    try {
        const con = await connect();
        let produtos = req.body;
        let sql = "INSERT INTO produtos (nome_produto, cod_produto, preco_produto) VALUES (?,?,?);";
        let values = [produtos.nome_produto, produtos.cod_produto, produtos.preco_produto];
        let result = await con.query(sql, values);
        res.send({
            status: "Inserção efetuada com sucesso!",
            result: result,
        });
    } catch (e) {
        console.log("Erro:..........", e);
    }
};

Produto.update = async function (req, res) {
    try {
        const con = await connect();
        let id = req.params.id;
        let produtos = req.body;
        let sql = "UPDATE produtos SET nome_produto=?, cod_produto=?, preco_produto=? WHERE id=?;";
        let values = [produtos.nome_produto, produtos.cod_produto, produtos.preco_produto, id];
        let result = await con.query(sql, values);
        res.send({
            status: "Atualização do produto " + produtos.nome_produto + " efetuada!",
            result: result,
        });
    } catch (e) {
        console.log("Erro:..........", e);
    }
};

Produto.delete = async function (req, res) {
    try {
        const con = await connect();
        let id = req.params.id;
        let sql = "DELETE FROM produtos WHERE id=?;";
        let result = await con.query(sql, [id]);
        res.send({
            status: "Exclusão do produto " + id + " foi efetuada!",
            result: result,
        });
    } catch (e) {
        console.log("Erro:..........", e);
    }
};

module.exports = Produto;
