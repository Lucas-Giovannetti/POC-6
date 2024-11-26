import Sinopse from "./Sinopse";
import Lancamento from "./Lancamento";
import Direcao from "./Direcao";
import styleTextos from "./Textos.module.css";

export default function Textos({filme}){
    return(
        <div className={styleTextos.parent}>
        <ul>
            <li><Sinopse sinopse={filme.sinopse}/></li>
            <li><Lancamento lancamento={filme.dataLancamento}/></li>
            <li><Direcao diretor={filme.direcao}/></li>
        </ul>
        </div>
    );
}