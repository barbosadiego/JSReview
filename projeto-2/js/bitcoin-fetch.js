export default function iniBitcoin() {
  const display = document.querySelector(".bitcoin");
  
  function fetchBitcoin() {
    const fetchUrl = fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((data) => showData(data));
  }
  
  function showData(data) {
    display.innerText = (1000 / data.BRL.buy).toFixed(4);
  }
  
  fetchBitcoin();
}
