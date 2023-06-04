import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'
import Hero from '../components/Hero'

const Home = ({coins}) => {
  return (
    <div>
      <Hero coins={coins} />
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  )
}

export default Home