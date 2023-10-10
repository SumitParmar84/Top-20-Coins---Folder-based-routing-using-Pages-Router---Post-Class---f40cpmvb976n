import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
function CoinDetail() {
  const [coin, setCoin] = useState(null);
  const router = useRouter();
  useEffect(()=>{
    fetch(`https://api.coinlore.net/api/ticker/?id=${router.query.coin_id}`)
    .then((response)=>response.json())
    .then((res)=>{
      setCoin(res[0])
      console.log(res[0])
      })
    .catch(err=>console.log(err))
  },[])
  
  
  return (
    <div className="coin-detail">
      { coin &&
      <div className="name-symbol">
        <h1 className="name">{coin.name}</h1>
        <h2 className="symbol">{coin.symbol}</h2>
      </div>
    }
     {
      coin &&  <div className="market-description">
      <p className="coin-rank">Rank: {coin.rank}</p>
      <p className="coin-price">Price: ${coin.price_usd}</p>
      <p className="coin-market-cap">Market Cap: ${coin.market_cap_usd}</p>
      <p className="coin-total-supply">Total Supply: {coin.tsupply}</p>
      <p className="coin-max-supply">Max Supply: {coin.msupply ? coin.msupply : "N/A"}</p>
    </div>
     }

    </div>
  );
}

export default CoinDetail;
