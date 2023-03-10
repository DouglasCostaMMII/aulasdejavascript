const valores = [7.7, 8.8 , 7.7, 9.9]
console.log(valores[0], valores[3])
console.log(valores[4])  //ler um valor do array , quando nao tiver le vai mostrar undefined
valores[4] = 10 
console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null,'teste')
console.log(valores)
delete valores[0] // deletar valores do array
console.log(valores.pop())  //tirar dado
console.log(valores)