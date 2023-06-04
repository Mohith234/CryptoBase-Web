import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
// import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
// import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas } from '../components/Hero';
import CoinInfo from '../components/CoinInfo';

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <main className='rounded-div my-12 py-8 flex flex-col md:flex-row'>
      <div className="sidebar w-full md:w-1/3 m-5 flex flex-col border-r-2 items-center">
        <div className="image">
          <img
            src={coin.image?.large}
            alt={coin?.name}
            style={{ marginBottom: 20 }}
            className='w-44'
          />
        </div>
        <div className='text-3xl font-bold pb-3'>{coin.name}</div>
        <div className='my-3'>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </div>
        <div className="flex flex-col my-3 justify-start">
          <span className="flex">
            <p className='text-2xl'>Rank :</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>{numberWithCommas(coin.market_cap_rank)}</p>
          </span>
          <span className="flex">
            <p className='text-2xl'>Current Price :</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>₹ {numberWithCommas(coin.market_data?.current_price.inr)}</p>
          </span>
          <span className="flex">
            <p className='text-2xl'>Market Cap:</p> &nbsp; &nbsp;
            <p className='text-2xl font-bold'>₹ {numberWithCommas(coin.market_data?.market_cap.inr.toString().slice(0,-6))}M</p>
          </span>
        </div> 
      </div>
      <div className="right">
        THis is right chart
      </div>
      <CoinInfo coin = {coin}/>
    </main>
    // <div className='rounded-div my-12 py-8'>
    //   <div className='flex py-6'>
    //     <img className='w-20 mr-8' src={coin.image?.large} alt='/' />
    //     <div>
    //       <p className='text-3xl font-bold'>{coin?.name} price</p>
    //       <p>({coin.symbol?.toUpperCase()} / INR)</p>
    //     </div>
    //   </div>

    //   <div className='grid md:grid-cols-2 gap-8'>
    //     <div>
    //       <div className='flex justify-between'>
    //         {coin.market_data?.current_price ? (
    //           <p className='text-3xl mb-2 font-bold'>₹ {coin.market_data.current_price.inr.toLocaleString()}</p>
    //         ) : null}
    //         <p>7 Day</p>
    //       </div>
    //       <div>
    //         <Sparklines data={coin.market_data?.sparkline_7d.price}>
    //           <SparklinesLine color='teal' />
    //         </Sparklines>
    //       </div>
    //       <div className='flex justify-between py-4'>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Market Cap</p>
    //           {coin.market_data?.market_cap ? (
    //             <p>₹ {coin.market_data.market_cap.inr.toLocaleString()}</p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Volume (24h)</p>
    //           {coin.market_data?.market_cap ? (
    //             <p>₹ {coin.market_data.total_volume.usd.toLocaleString()}</p>
    //           ) : null}
    //         </div>
    //       </div>

    //       <div className='flex justify-between py-4'>
    //         <div>
    //           <p className='text-gray-500 text-sm'>24h High</p>
    //           {coin.market_data?.high_24h ? (
    //             <p>₹ {coin.market_data.high_24h.usd.toLocaleString()}</p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>24h Low</p>
    //           {coin.market_data?.low_24h ? (
    //             <p>₹ {coin.market_data.low_24h.usd.toLocaleString()}</p>
    //           ) : null}
    //         </div>
    //       </div>
    //     </div>

    //     <div>
    //       <p className='text-xl font-bold'>Market Stats</p>
    //       <div className='flex justify-between py-4'>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Market Rank</p>
    //           {coin.market_cap_rank}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
    //           {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Trust Score</p>
    //           {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
    //         </div>
    //       </div>

    //       <div className='flex justify-between py-4'>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (24h)</p>
    //           {coin.market_data ? (
    //             <p>
    //               {coin.market_data.price_change_percentage_24h.toFixed(2)}%
    //             </p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (7d)</p>
    //           {coin.market_data ? (
    //             <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (14d)</p>
    //           {coin.market_data ? (
    //             <p>
    //               {coin.market_data.price_change_percentage_14d.toFixed(2)}%
    //             </p>
    //           ) : null}
    //         </div>
    //       </div>
    //       <div className='flex justify-between py-4'>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (30d)</p>
    //           {coin.market_data ? (
    //             <p>
    //               {coin.market_data.price_change_percentage_30d.toFixed(2)}%
    //             </p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (60d)</p>
    //           {coin.market_data ? (
    //             <p>
    //               {coin.market_data.price_change_percentage_60d.toFixed(2)}%
    //             </p>
    //           ) : null}
    //         </div>
    //         <div>
    //           <p className='text-gray-500 text-sm'>Price Change (1y)</p>
    //           {coin.market_data ? (
    //             <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
    //           ) : null}
    //         </div>
    //       </div>
    //       <div className='flex justify-around p-8 text-accent'>
    //         <FaTwitter />
    //         <FaFacebook />
    //         <FaReddit />
    //         <FaGithub />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Description */}
    //   <div className='py-4'>
    //     <p className='text-xl font-bold'>About {coin.name}</p>
    //     <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
    //   </div>
    // </div>
  );
};

export default CoinPage;
