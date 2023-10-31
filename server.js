const express = require("express");
const { router } = require("./routes/produto_routes.js");

let server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use("/", router)

server.listen(3000, function () {
    console.log('port 3000')
})
