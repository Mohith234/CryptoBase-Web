import React from 'react'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import { useEffect } from 'react'
import SelectButton from './SelectButton'

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState([])
  const [days, setDays] = useState(1)
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=inr&days=${days}`)
      const data = await response.json()
      setHistoricData(data.prices)
    };
    fetchData();
  }, [days, coin.id, historicData])

  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  return (
    <main className='w-auto md:w-3/4 mt-5 py-5 flex flex-col md:p-4'>
      { historicData && (
        <>
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price (past ${days} day${days === 1 ? "" : "s"}) in INR`,
                borderColor: "#1E3A8A",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div className="flex my-5 py-5 justify-around w-full">
        {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
        </div>
      </>
      )}
    </main>
  )
}

export default CoinInfo