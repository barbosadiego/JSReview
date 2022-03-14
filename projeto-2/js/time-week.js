export default function initWeekTime(){
  const semana = document.querySelector('[data-semana]');
  const time = new Date();
  const diasAberto = semana.dataset.semana.split(',').map(Number);
  const horarioAberto = semana.dataset.horario.split(',').map(Number);
  
  const hoje = time.getDay();
  const horaAtual = time.getHours();
  const estaAberto = (horaAtual >= horarioAberto[0] && horaAtual < horarioAberto[1]);
  
  if(diasAberto.indexOf(hoje) !== -1 && estaAberto){
    semana.classList.add('active')
  }
}
