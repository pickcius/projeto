function toggleMode() {
  //é o comando para criar funções

  const html = document.documentElement
  // pegando o html

  html.classList.toggle("light")
  //fazendo a trocas das classes

  //comando if e comando else se comandos condicionais que aplicam condições

  // pegar a tag imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatarpa.png")

    //se tiver sem o light mode
  } else {
    img.setAttribute("src", "./assets/avatarp.png")
  }

  // o comando html.classList.toggle('light') fas a mesma função que tuodo esse codigo ali de cima e pode ser usado para simplificar
}
