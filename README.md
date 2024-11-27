# AppHome
Este é o componente principal que organiza a interface da aplicação.

## Estado

``` jsx
const [preco, setPreco] = useState(0);
```

* preco: Estado que armazena o preço total da compra.
* setPreco: Função para atualizar o valor do preço.

## Estrutura JSX

A função retorna o seguinte layout:

**1. Cabeçalho**

``` jsx
<Cabecalho cabeca={filme.titulo} hora={filme.horario}/>
```

* Passa o título do filme e o horário como props para o componente Cabecalho.
**2. Corpo Principal (`parent`)**

Dividido em dois filhos:

* **Primeiro Filho (`child`)**:
   - Contém o componente `Cadeiras`, que recebe:
     - **`filme.assentos`**: Lista de assentos disponíveis.
     - **`preco` e `setPreco`**: Para gerenciar o preço conforme os assentos são selecionados.
   - Exibe uma indicação de "Tela" e estiliza a área da tela do cinema com `appStyle.telaScreen`.

* **Segundo Filho (`child2`)**:
   - Contém o componente `Textos`, que exibe as informações do filme, como:
     - Descrição.
     - Elenco.

**3. Botão Comprar:**
``` jsx
<Comprar preco={preco}/>
```
* Passa o valor do preço total como prop para o botão de compra.

# BotaoComprar
O componente recebe uma única prop chamada preco, que é exibida no botão como o valor total da compra. Ele deve ser passado pelo componente pai.

1. Estrutura JSX
* `<div className={btnStyle.parent}>:`
É um contêiner que agrupa o botão, estilizado com a classe btnStyle.parent.
* `<button>`:
Representa o botão de compra.
- Classe: `btnStyle.btn` para estilização.
- Evento `onClick`: Quando o botão é clicado, executa:
``` jsx
() => alert("Compra realizada com sucesso")
```
Mostra um alerta indicando que a compra foi concluída com sucesso.
* Conteúdo:
    - `<h3>`: Texto "Comprar" para indicar a ação principal.
    - ``<p>``: Exibe o preço total no formato "R$: {preco},00".



# Cadeira

Este componente individual representa um assento (ou cadeira) na interface gráfica de seleção. Ele é responsável por gerenciar o estado visual e a lógica associada à seleção ou deseleção de um assento.

Estrutura do Código
``` jsx
import styleCadeiras from "./Cadeiras.module.css";
import { useState } from 'react';

export default function Cadeira({assento, preco, setPreco}) {
    const [buttonClass, setButtonClass] = useState(styleCadeiras.cadeira);

    function onLugarClick() {
        if (!assento.disponivel)
            return;

        if (buttonClass === styleCadeiras.cadeira) {
            setButtonClass(styleCadeiras.cadeira2);
            setPreco(preco + 25);
        } else {
            setButtonClass(styleCadeiras.cadeira);
            setPreco(preco - 25);
        }
    }
    
    return (
        <button 
            id={assento.numero} 
            disabled={!assento.disponivel} 
            className={buttonClass} 
            onClick={() => onLugarClick()}
        >  
        </button>
    );
}
```
**Explicação**
1. Importação de Estilos e Hooks:
    - ``styleCadeiras``: Contém as classes CSS para estilizar o botão (assento).
    - ``useState``: Utilizado para gerenciar o estado visual do assento (selecionado ou não).

2. Props:
   - ``assento``: Representa o objeto de um assento específico (ex.: número e disponibilidade).
   - ``preco``: O preço atual, gerenciado pelo componente pai.
   - ``setPreco``: Função passada pelo pai para atualizar o preço total.
  
3. Estado Local (``buttonClass``):
   - Inicializa com a classe CSS ``styleCadeiras.cadeira``, indicando que o assento está no estado padrão.

4. Função ``onLugarClick``:
   - É executada quando o botão (assento) é clicado.
   - Lógica:
      - Se o assento não estiver disponível (``assento.disponivel === false``), a função retorna sem realizar nenhuma ação.
      - Caso o assento esteja no estado padrão:
        - Altera a classe para ``styleCadeiras.cadeira2`` (indica seleção).
        - Adiciona 25 ao preço.
      - Caso já esteja selecionado:
        - Retorna a classe para ``styleCadeiras.cadeira``.
        - Subtrai 25 do preço.

5. Renderização:
   - O botão:
     - ``id``: Usa o número do assento para identificá-lo.
     - ``disabled``: Desativa o botão se o assento não estiver disponível.
     - ``className``: Define a aparência com base no estado atual.
     - ``onClick``: Chama a função onLugarClick ao clicar.
    
# Cadeiras
Este componente agrupa várias cadeiras e mapeia os dados de assentos para instanciar o componente Cadeira para cada assento disponível.

Estrutura do Código
``` jsx
import styleCadeiras from "./Cadeiras.module.css";
import Cadeira from "./Cadeira";

export default function Cadeiras({assentos, preco, setPreco}) {
    return (
        <div className={styleCadeiras.divCadeira}>
            {assentos.map(assento => (
                <Cadeira 
                    key={assento.numero} 
                    assento={assento} 
                    preco={preco} 
                    setPreco={setPreco} 
                />
            ))}
        </div>
    );
}
```

Explicação
1. Importação de Estilos e Componentes:
   - ``styleCadeiras``: Contém as classes CSS para o layout do grupo de cadeiras.
   - `Cadeira`: Componente utilizado para renderizar individualmente cada assento.
2. Props:
   - ``assentos``: Array de objetos que representam os assentos disponíveis no layout.
   - ``preco`` e ``setPreco``: Passados diretamente para cada componente ``Cadeira``.
3. Renderização:
   - ``<div className={styleCadeiras.divCadeira}>``:
      - Contêiner estilizado para agrupar todos os assentos.
   - ``assentos.map``:
      - Itera sobre o array de assentos e, para cada item:
         - Cria um componente ``Cadeira``.
         - Passa:
           - ``assento``: O objeto do assento atual.
           - ``preco`` e ``setPreco``: Para gerenciar o preço total.
           - ``key``: Identificador único baseado no número do assento (boa prática no React).

# Resultado
![image](https://github.com/user-attachments/assets/1c215421-04e0-491f-a1dc-e3745bff5908)

# Integrantes:
* Thiago de Oliveira Silva - RA: 10427342
* Lucas Giovanneti Motta Horn - RA: 10374691
* Erik Yutaka Takara - RA: 10427684
