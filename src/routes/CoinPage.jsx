import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import CoinInfo from '../components/CoinInfo';

const CoinPage = () => {
  const topContainer = useRef();
  const [coin, setCoin] = useState({});
  const params = useParams()
  const url =`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <main className='rounded-div my-12 py-8 flex flex-col items-center md:flex md:flex-row'>
      <div ref={topContainer}/>
      <div className="sidebar w-auto md:w-2/5 md:m-5 flex flex-col items-center md:border-r-2 mr-auto">
        <div className="heading">
          <img
            src={coin.image?.large}
            alt={coin?.name}
            style={{ marginBottom: 20 }}
            className='w-44'
          />
        </div>
        <div className='text-3xl font-bold pb-3'>{coin.name}</div>
        <div className='px-4 pb-2 w-auto'>
          {ReactHtmlParser(coin.description?.en.split(". ")[0])}.
        </div>
        <div className="flex flex-col my-3 justify-start">
          <span className="flex">
            <p className='text-2xl'>Rank :</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>{(coin.market_cap_rank)}</p>
          </span>
          <span className="flex">
            <p className='text-2xl'>Current Price :</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>₹ {(coin.market_data?.current_price.inr)}</p>
          </span>
          <span className="flex">
            <p className='text-2xl'>Market Cap:</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>₹ {(coin.market_data?.market_cap.inr.toString().slice(0,-6))}M</p>
          </span>
        </div> 
      </div>
      <CoinInfo coin = {coin}/>
    </main>
  );
};

export default CoinPage;
