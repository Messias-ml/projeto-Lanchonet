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