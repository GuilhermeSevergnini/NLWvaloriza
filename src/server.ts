import express from "express";

// @types/express
const app = express();

/**
 * GET => Buscar informação
 * POST => inserir uma informação na API
 * PUT => Alterar uma inforamação (dados, nomes, endereço, produto etc)
 * DELETE => Remover informação
 * PATCH => Alterar informação especifica 
 */

app.get("/test", (request, response) => {
    // Request = entrando
    // Response = saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW test post");

});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));