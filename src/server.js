"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// @types/express
var app = express_1.default();
/**
 * GET => Buscar informação
 * POST => inserir uma informação na API
 * PUT => Alterar uma inforamação (dados, nomes, endereço, produto etc)
 * DELETE => Remover informação
 * PATCH => Alterar informação especifica
 */
app.get("/test", function (request, response) {
    // Request = entrando
    // Response = saindo
    return response.send("Olá NLW");
});
app.post("/test-post", function (request, response) {
    return response.send("Olá NLW test post");
});
//http://localhost:3000
app.listen(3000, function () { return console.log("Server is running"); });
