# projeto-Lanchonet
<!DOCTYPE html>
<html>
<head>
    <title></title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS baixe o bootstrap para ter acesso-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
   
      <!-- FONTAWESOME -->
    <link rel="stylesheet" type="text/css" href="fontawesome/css/all.css">
    <!-- MODO DE UTILIZAÇÃO fontawesome -> https://fontawesome.com/icons?d=gallery&m=free -->
    <!-- iconic -->
    <link rel="stylesheet" type="text/css" href="iconic/font/css/open-iconic-bootstrap.css">
    <!-- MODO DE UTILIZAÇÃO iconic -> https://useiconic.com/open/ -->
    <script type="text/javascript" src="lanchonete.js"></script>
    
  </head>
<body>

<div class="container">
  <table class="table text-center">
     <thead class="bg-info">
         <tr>
             <th>N° PEDIDO</th>
             <th>PRODUTO</th>
             <th>PREÇO</th>
         </tr>
     </thead>
     <tbody class="table-bordered bg-light">
        <tr>
             <td>1</td>
              <td>Cachorro Quente</td>
             <td> 6.50</td>
         </tr></button>
         <tr>
             <td>2</td>
             <td>X-bacon</td>
             <td> 9.99</td>
         </tr>
         <tr>
             <td>3</td>
             <td>X-salada</td>
             <td> 5.40</td>
         </tr>
         <tr>
             <td>4</td>
             <td>Água</td>
             <td> 4.00</td>
         </tr>
         <tr>
             <td>5</td>
             <td>Refrigerante</td>
             <td> 7.20</td>
         </tr>
         <tr>
             <td>6</td>
             <td>Misto Quente</td>
             <td> 4.50</td>
         </tr>
         <tr>
             <td>7</td>
             <td>Suco</td>
             <td> 3.20</td>
         </tr>
     </tbody>
 </table></div>
 <hr>
 
<div class="container">
    <div class="row justify-content-between">
    <span>Escolha o numero do seu pedido:
    <input type="number" min="1" max="7" id="pedido"></span>
<span>Escolha a quantidade do seu produto:
    <input type="number" min="1" max="100" id="quantidade"></span>
    <span>O valor da sua compra é:
    <input type="number" disabled="disabled" id="resultado"></span>
</div>
<br>
<div class="row">
    <button class="btn btn-info mr-2" onclick="lanchonete()"> ESCOLHER</button>
    <button class="btn font-weight-bold text-dark ml-auto" onclick="cancelarPedido()" style="background: red;"> CANCELAR PEDIDO</button>
</div>
<br>
</div>
<div class="container bg-light aling-self-center table-bordered">
    <h1 class="text-center"> COMANDA </h1>
    <div id="texto"></div>
 </div>
</body>
</html>

ARQUIVO JAVA SCRIPT
//variaveis que necessitam estar no escopo global
let valorTotal = 0
let resultado = 0
let id = 0

//função acionada ao clicar escolher
function lanchonete() {
let produto = document.getElementById('pedido')
let quantidade = document.getElementById('quantidade')
 function Valor() {
 	let valor = null
	switch(produto.value){
		case '1': 
		return valor = 6.50
			break
		case '2': 
		return valor = 9.90
			break
		case '3': 
		return valor = 5.40
			break
		case '4': 
		return valor = 4.00
			break
		case '5': 
		return valor = 7.20
			break
			case '6': 
			return valor = 4.50
			break
			case '7': 
			return valor = 3.20
			break
		}
}
let valor = Valor()
let pedido = {
produto: produto.value,
quantidade: quantidade.value,
valor: valor,
}
//teste, para saber o que se deve imprimir na tela e gravar

if (pedido.produto > 0 && pedido.produto < 8 && pedido.quantidade > 0) {
	//quando entrar nesta condição 1° devo mudar o nome do produto para o nome do mesmo escolhido.
switch(pedido.produto){
		case '1': 
		pedido.produto = 'Cachorro(s) Quente(s)'
			break
		case '2': 
		pedido.produto = 'X-Bacon(s)'
			break
		case '3': 
		pedido.produto = 'X-Salada(s)'
			break
		case '4': 
		pedido.produto = 'Água(s)'
			break
		case '5': 
		pedido.produto = 'Refrigerante(s)'
			break
		case '6': 
		pedido.produto = 'Misto Quente'
			break
		case '7': 
		pedido.produto = 'Sucos'
			break
		}
		console.log(pedido.produto)
//atribuir a valorTotal(no primeiro momento é 0) o valor do pedido X(vezes) quantidade.
valorTotal += pedido.valor * pedido.quantidade
//atribuo ao id resultado o valor de valorTotal.
parseFloat(document.getElementById('resultado').value = valorTotal.toFixed(2))
id++ //atribuo +1 a id para ele aumentar a cada escolha.
let escolha = `<hr><div class="d-flex" id="id_pedidos_${id}"> Você escolheu ${pedido.quantidade} ${pedido.produto}. Seu pedido custa ${pedido.valor * pedido.quantidade} Reais <button class="btn btn-danger ml-auto" onclick="limpador(${id}, ${pedido.quantidade}, ${pedido.valor} )">X</button>`
document.getElementById('texto').innerHTML += escolha
/*com esta implementação eu pude criar apenas 1 escolha de forma dinamica e cada uma terá um id diferente podendo ser acessado depois.*/
}
//caso não seja valido o produto ele não vai adicionar nada a nenhuma variavel do escopo global.
else {
	alert('Escolha um produto valido com sua respectiva quantidade')
}
}
function limpador(id, quantidade, valor) {/*ela vai receber o valor passado dentro de onclick na variavel escolha. */
//como cada div do botão escolher foi criada com um respectivo id diferente, podemos acessalo no toque daquele botão 
//de exclusão.
	let valorTo = quantidade * valor
	valorTotal -= valorTo
	document.getElementById(`id_pedidos_${id}`).remove()//a div com o id que clicamos será removida.
	parseFloat(document.getElementById('resultado').value = valorTotal.toFixed(2))
}
function cancelarPedido() {//com essa função no clique em cancelar pedidos ela irá eliminar todas divs criada.
	let produto = document.getElementById('pedido').value
let quantidade = document.getElementById('quantidade').value

if (document.getElementById('resultado').value == '' || document.getElementById('resultado').value == 0) {
	alert('Você so pode cancelar pedidos que exista!')
	}
	else if (produto > 0 && produto < 8 && quantidade > 0) {

document.getElementById('texto').innerHTML = ''
	valorTotal = 0.00
	parseFloat(document.getElementById('resultado').value = valorTotal.toFixed(2))
	}
}
