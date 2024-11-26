import Cadeiras from "../Cadeiras/Cadeiras";
import { useState } from 'react';
import filme from '../../mocks/filme.mock.json';
import Cabecalho from "../Cabecalho";
import Textos from "../Textos/Textos";
import appStyle from "./appStyle.module.css";
import Comprar from "../BotaoComprar/btnComprar";


function AppHome(){

    
        const [preco, setPreco] = useState(0);
        
    return(
        <div>
            <div className={appStyle.cabeca}>
                <Cabecalho cabeca={filme.titulo} hora={filme.horario}/>
            </div>      
            <div className={appStyle.parent}>
                <div className={appStyle.child}>
                <Cadeiras assentos={filme.assentos} preco={preco} setPreco={setPreco}/> 
                <br/><h3>Tela</h3>
                <div className={appStyle.telaScreen}></div>
                </div>
                <div className={appStyle.child2}>      
                <Textos filme={filme}/>
                </div>
            </div>
            <Comprar preco={preco}/>
        </div>
);
}
export default AppHome;
