let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco); // Ordena do maior para o maior
  exibirOsLivrosNaTela(livrosOrdenados);
}