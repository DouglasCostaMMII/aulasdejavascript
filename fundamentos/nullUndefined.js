let valor   // nao inicializado  |  undefined

console.log(valor)
valor = null // ausencia de valor | null
console.log(valor) 
const produto = {}
console.log(produto.preco)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined  //evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)
produto.preco = null
console.log(!!produto.preco)
console.log(produto)