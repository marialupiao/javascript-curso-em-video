let amigo = {nome: 'José', genero: 'Masculino', idade: 80, fazerAniversario(i=0) {
    console.log('Fez Aniversário!')
    this.idade += i
}}

amigo.fazerAniversario(1)
console.log(`Agora ${amigo.nome} tem ${amigo.idade} anos.`)