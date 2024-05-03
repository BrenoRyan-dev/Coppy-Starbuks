document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os botões
  const btnEntrar = document.querySelector(".botao-01");
  const btnParticipar = document.querySelector(".botao-02");

  // Adiciona um evento de clique para o botão "Entrar"
  btnEntrar.addEventListener("click", function () {
    alert("Você clicou no botão 'Entrar'!");
  });

  // Adiciona um evento de clique para o botão "Participar agora"
  btnParticipar.addEventListener("click", function () {
    alert("Você clicou no botão 'Participar agora'!");
  });

  // Adiciona uma classe de destaque quando passar o mouse sobre os botões
  btnEntrar.addEventListener("mouseover", function () {
    this.classList.add("destaque");
  });

  btnEntrar.addEventListener("mouseout", function () {
    this.classList.remove("destaque");
  });

  btnParticipar.addEventListener("mouseover", function () {
    this.classList.add("destaque");
  });

  btnParticipar.addEventListener("mouseout", function () {
    this.classList.remove("destaque");
  });

  // Adiciona uma função para alternar a cor de fundo do cabeçalho
  const header = document.querySelector("header");
  let isHeaderBackgroundWhite = true;

  header.addEventListener("click", function () {
    if (isHeaderBackgroundWhite) {
      this.style.backgroundColor = "black";
      isHeaderBackgroundWhite = false;
    } else {
      this.style.backgroundColor = "white";
      isHeaderBackgroundWhite = true;
    }
  });
});
