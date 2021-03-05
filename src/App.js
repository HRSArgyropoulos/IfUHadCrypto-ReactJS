import CryptoPrice from './components/CryptoPrice'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";

function App() {

  const coins = [
    {
      name: "BitCoin",
      price: "42,137.60",
      currency: "€"
    },
    {
      name: "Ethereum",
      price: "1,302.56",
      currency: "€"
    },
    {
      name: "XRP",
      price: "0.3844",
      currency: "€"
    },
    {
      name: "Litecoin",
      price: "146.5211",
      currency: "€"
    },

  ]

  return (
    <div className="App">
      <Header />
      <Portfolio />
      <div className="prices-container">
        <CryptoPrice data = {coins[0]} />
        <CryptoPrice data = {coins[1]} />
        <CryptoPrice data = {coins[2]} />
        <CryptoPrice data = {coins[3]} />
      </div>
    </div>
  )
}

export default App;