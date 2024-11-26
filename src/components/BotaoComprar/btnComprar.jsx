import btnStyle from "./btnStyle.module.css";


export default function Comprar({preco}){
    return(
        <div className={btnStyle.parent}>

            <button className={btnStyle.btn} onClick={() => alert("Compra realizada com sucesso")}><h3>Comprar</h3><p>R$: {preco},00</p></button>
            
        </div>
    );
}
