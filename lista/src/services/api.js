import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listarNomes() {
        let r = await api.get('/listar');
        return r.data;
    }

    async inserirNomes(id_nome) {
        let r = await api.post('/inserir', {id_nome})
        return r.data;
    }
}