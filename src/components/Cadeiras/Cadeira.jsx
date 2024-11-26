import styleCadeiras from "./Cadeiras.module.css"
import { useState } from 'react';





export default function Cadeira({assento, preco, setPreco}) {
    const [buttonClass, setButtonClass] = useState(styleCadeiras.cadeira)

    function onLugarClick(){
        if (!assento.disponivel)
            return;
    
        if (buttonClass == styleCadeiras.cadeira){
            setButtonClass(styleCadeiras.cadeira2)
            setPreco(preco + 25)
        } else {
            setButtonClass(styleCadeiras.cadeira)
            setPreco(preco - 25)
        }
    }
    
    return(
    <button 
    id={assento.numero} 
    disabled={!assento.disponivel} 
    className={buttonClass} 
    onClick={() => onLugarClick()}>  
    </button>
    )
}