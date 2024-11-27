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

# Resultado
![image](https://github.com/user-attachments/assets/1c215421-04e0-491f-a1dc-e3745bff5908)
