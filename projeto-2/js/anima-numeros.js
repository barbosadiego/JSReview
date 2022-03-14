export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
  
    numeros.forEach((numero) => {
      let num = +numero.innerText;
      let i = 0;
      const passo = Math.floor(num / 100);
      const timer = setInterval(() => {
        i += passo;
        numero.innerText = i;
        if (i > num) {
          clearInterval(timer);
          numero.innerText = num;
        }
      }, 15 * Math.random());
    });
  }
  
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, { attributes: true });
}

