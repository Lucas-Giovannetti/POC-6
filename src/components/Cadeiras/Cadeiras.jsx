import styleCadeiras from "./Cadeiras.module.css"
import Cadeira from "./Cadeira";

export default function Cadeiras({assentos, preco, setPreco}){
    return(
        <div className={styleCadeiras.divCadeira}>

        {assentos.map(assento => (
           <Cadeira assento={assento} preco={preco} setPreco={setPreco}/>
        ))}
        </div>
    );
}
