const escola = "cod3r"
console.log(escola.charAt(4)) // vai retornar o quarto numero 
console.log(escola.charAt(5)) //vai retornar um valor nulo em branco
console.log(escola.charCodeAt(3))  // codigo relacionado a tabela unicode 

console.log(escola.indexOf('3'))
console.log(escola.substring(0,3 ))  // vá do indece 0 ao 3 

console.log('escola '.concat(escola).concat("!"))
console.log(escola.replace(/\d/,'e'))

console.log('ana,maria,douglas'.split(',')) // array/lista 
