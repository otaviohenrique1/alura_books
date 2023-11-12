// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');

// btnFiltrarLivrosDeFront.addEventListener("click", filtrarLivros);

const botoes = document.querySelectorAll(".btn");

botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter((livro) => {
    return livro.categoria == categoria;
  });
  // console.table(livrosFiltrados);
  exibirOsLivrosNaTela(livrosFiltrados)
}