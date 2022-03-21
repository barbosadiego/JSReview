export default function fetchBitcoin(url, target) {
  const display = document.querySelector(target);

  function fetchBitcoin() {
    const fetchUrl = fetch(url)
      .then((response) => response.json())
      .then((data) => showData(data));
  }

  function showData(data) {
    display.innerText = (1000 / data.BRL.buy).toFixed(4);
  }

  fetchBitcoin();
}
