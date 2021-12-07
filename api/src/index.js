import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/listar', async (req, resp) => {
    try {
        let mensagens = await db.tb_lista_negra.findAll();
        resp.send(mensagens);
    } catch (e) {
        resp.send(e.toString())
    }
})

app.post('/inserir', async (req, resp) => {
    try {
        let {id_nome} = req.body;

        let f = await db.tb_lista_negra.create({
            id_nome: id_nome
        })
        resp.send(f);
    } catch (e) {
        resp.send({erro: e.toString()})
    }
});

app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))