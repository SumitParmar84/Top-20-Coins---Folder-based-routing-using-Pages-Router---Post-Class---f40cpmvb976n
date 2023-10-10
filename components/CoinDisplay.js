import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinlore.net/api/tickers/")
    .then((response)=>response.json())
    .then((res)=>{
      let sort = res.data.sort((a, b) => a.rank-b.rank);
      sort = sort.slice(0,20)
      setCoins(sort)
      console.log(sort)
      })
    .catch(err=>console.log(err))

    setCoins()
  },[])
  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins && coins.map((coin) => (
          <CoinCard coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
