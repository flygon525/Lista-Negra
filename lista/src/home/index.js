import { useEffect, useState } from 'react';
import Api from '../services/api';
const api = new Api();

export default function Lista(){
    const [nomes, setNomes] = useState([]);
    const [nome, setNome] = useState('');

    async function listando(){
        let f = await api.listarNomes();
        console.log(f)
        setNomes(f);
    }

    async function inserindo() {
        let f = await api.inserirNomes(nome);
        alert('inseriu')

        listando();
    }

    useEffect(()=> {
        listando();
    }, [])

    return(
        
        <div>
            <div>Novo</div>

            <div>Nome:</div>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <button onClick={inserindo}> ok </button>
                
            <div>Listar</div>
            {nomes.map(item =>
            <div>
                <div><div>id:</div> {item.id} </div>
                <div><div>nome:</div> {item.id_nome} </div>
            </div>
            )}
        </div>
    )
}