/* OBJETOS */

// São coleções de propriedades, onde cada propriedade é composta por uma chave e um valor.

const carro = {
	marca: "Audi",
	modelo: "Q3", 
	ano: 2016,
	placa: "ABC-1234",
    buzina: function() { console.log('Biiiiiiiiiiiiiiiiiiii'); },
};

// Acessando valores
console.log(carro.marca); // Audi

// Alterando valores 
carro.ano = 2018;

// Acessando Método
carro.buzina()

// Adicionando novas propriedades
carro.cor = "Verde"

// Iterando sobre Propriedades
for(let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`)
}
