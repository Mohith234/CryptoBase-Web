import React, { useState } from 'react';
import CoinItem from './CoinItem';

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState('');
  console.log(coins)
  return (
    <div className='rounded-div mb-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-3xl font-bold my-2 pl-4'>Market Update</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
            type='text'
            placeholder='Search for a Coin..'
          />
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className=' text-xl px-3'>#</th>
            <th className=' text-xl text-left p-2'>Coin</th>
            <th className=' text-xl p-2'></th>
            <th className=' text-xl p-2'>Price</th>
            <th className=' text-xl p-2'>24h</th>
            <th className=' text-xl hidden sm:table-cell p-2'>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins
          // eslint-disable-next-line
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
