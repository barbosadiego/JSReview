// Retorne no console todas as imagens do site
// console.log(document.querySelectorAll('img'))
// Retorne no console apenas as imagens que começaram com a palavra imagem
// console.log(document.querySelectorAll('img[src*="imagem"]'))
// Selecione todos os links internos (onde o href começa com #)
// const href = document.querySelectorAll('a[href^="#"]');
// console.log(href)
// Selecione o primeiro h2 dentro de .animais-descricao
const section = document.querySelector('.animais-descricao');
const firstH2 = section.querySelector('h2');
// console.log(firstH2)
// Selecione o último p do site
const paragraphs = document.querySelectorAll('p');
const lastParagraph = paragraphs[paragraphs.length - 1]
// console.log(lastParagraph)

// Mostre no console cada parágrado do site
// paragraphs.forEach(item => console.log(item))
// Mostre o texto dos parágrafos no console
// paragraphs.forEach(item => console.log(item.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  // console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  // console.log(i++);
});

imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('a');
menuItens.forEach(item => item.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach(item => item.classList.remove('ativo'))
menuItens[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll('img');
images.forEach((image, index) => {
  if(image.hasAttribute('alt')){
    console.log(`o item ${index} possui atributo alt`, image)
  } else {
    console.log(`o item ${index} não possui atributo alt`, image)
  }
})

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://google.com.br')