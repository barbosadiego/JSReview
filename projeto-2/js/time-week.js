export default class WeekTime {
  constructor(dias, activeClass) {
    this.semana = document.querySelector(dias);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasAberto = this.semana.dataset.semana.split(",").map(Number);
    this.horarioAberto = this.semana.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.time = new Date();
    this.hoje = this.time.getDay();
    this.horaAtual = this.time.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasAberto.indexOf(this.time) != -1;
    const horarioFuncionanmento =
      this.horaAtual >= this.horarioAberto[0] &&
      this.horaAtual < this.horarioAberto[1];
    return semanaAberto && horarioFuncionanmento;
  }

  ativaAberto() {
    if (this.estaAberto) {
      this.semana.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.semana) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
