import React from 'react'
import { Link } from 'react-router-dom'

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Hero = ({coins}) => {
    // console.log(coins);
    return (
        <main className='h-screen'>
            <div className="flex flex-col justify-center my-16">
                <h1 className='text-center font-bold text-6xl md:text-8xl'> TRACK AND TRADE</h1>
                <h1 className="text-center text-6xl md:text-8xl font-bold m-5"> CRYPTO CURRENCIES</h1>
                <p className="text-center text-xl font-extrabold">A simple application to track the price of your favorite cryptocurrencies.</p>
            </div>
            <div className="justify-center images flex space-x-16">
                {coins.slice(0, 4).map((item) => (
                    <Link
                        to={`/coin/${item.id}`}
                        key={item.id}
                        className="slider-coin flex flex-col items-center"
                    >
                        <img className='w-24 mr-2 rounded-full' src={item?.image} alt={item?.name}/>
                        <p className="coin-name mt-3 font-semibold text-2xl">
                            {item?.name}{" "}
                            <span className={item.price_change_percentage_24h <= 0 ? "text-red-600": "text-green-600"}
                            >
                            {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                            </span>
                        </p>
                        <p className="price mt-3 text-xl font-extrabold">
                            {"₹ " + numberWithCommas(item.current_price?.toFixed(2))}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Hero