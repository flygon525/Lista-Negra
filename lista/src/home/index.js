import { useEffect, useState } from 'react';
import Api from '../services/api';
const api = new Api();

export default function Lista(){
    const [nomes, setNome] = useState([]);

    async function listando(){
        let f = await api.listarNomes();
        console.log(f)
        setNome(f);
    }

    useEffect(()=> {
        listando();
    }, [])

    return(
        
        <div>
            
            
            <div>Novo</div>

            <div>Nome:</div>
            <input/>
            <button> ok </button>
                
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