
const Metodos = () => {
    const items = [
    {name: "Celular", price: 2000},
    {name: "Livro", price: 40},
    {name: "Notebook", price:3000},
    {name: "Teclado", price:100},
    {name: "CaneKenzie", price: 2000},
];
// FILTER
const itensFiltrados = items.filter((item) => {
    return item.price <= 100;
});
console.log(itensFiltrados);


// MAP
const itensNomes = items.map((item) => {
    return item.name;
});
console.log(itensNomes)


// FIND
const itemEncontrado = items.find((item) => {
    return item.name === "CaneKenzie";
});
console.log(itemEncontrado);


// REDUCE
const valorTotal = items.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
}, 0);
console.log("result",valorTotal)














}
export default Metodos;