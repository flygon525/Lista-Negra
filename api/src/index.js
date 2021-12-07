import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/listar', async (req, resp) => {
    try {
        let mensagens = await db.tb_lista_negra.findAll();
        resp.send(mensagens);
    } catch (e) {
        resp.send(e.toString())
    }
})

app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))