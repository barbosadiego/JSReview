import initAnimaNumeros from "./anima-numeros.js";
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try{
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
    
      animaisJson.forEach((item) => {
        const animalDiv = createAnimal(item);
        document.querySelector('.numeros-grid').appendChild(animalDiv)
      });
    }
    catch(erro){
      console.log(erro)
    }
  
    initAnimaNumeros();
  }
  
  function createAnimal(data) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${data.specie}</h3>
    <span data-numero>${data.total}</span>`;
    return div;
  }
  
  fetchAnimais("../projeto-2/animaisapi.json");
}

