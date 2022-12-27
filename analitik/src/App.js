import './App.css';
import data from "./fakeData.js"
import React, { useState,useEffect } from 'react';
import Navbar from './Component/Navbar';
import Box from './Component/Box';
import { NumericFormat } from 'react-number-format';
import { Line ,Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);


function App() {
  const [alotPrice,setAlotPrice]=useState()
  const [circulationSupply,setCirculationSupply]=useState(22350500)

  

  

   useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=dexalot&vs_currencies=usd')
     .then(response => response.json())
     .then(data => setAlotPrice(data.dexalot.usd));
     console.log("messi")
    }, 10000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="App">
    <Navbar></Navbar>
    <div className="container">
        <Box text="TOTAL VOLUME" number="17,545,344,343" sign="$"></Box>
        <Box text="DAILY VOLUME" number="1,240,212" sign="$"></Box>
        <Box text="TOTAL UNIQUE USER" number="11.235"></Box>
        <Box text="ALOT PRICE" number={alotPrice} sign="$"></Box>
        <Box text="CIRCULATING SUPPLY" number={<NumericFormat value={circulationSupply} displayType={'text'} thousandSeparator={true} />}></Box>
        <Box text="MARKETCAP" number={<NumericFormat value={alotPrice*circulationSupply} displayType={'text'} thousandSeparator={true} prefix={'$'} />}></Box>
    </div>
    <section className='graph'>
    <h2>Total Volume</h2>
    <Line className='chart' data={data[0]}></Line>
    <h2>Daily Volume</h2>
    <Line className='chart' data={data[1]}></Line>
    <h2>Inflow - Outflow</h2>
    <Bar className='chart' data={data[3]}/>
    <h2>Alot Price</h2>
    <Line className='chart' data={data[2]}></Line>
    <h2>Daily Unique Users</h2>
    <Bar className='chart' data={data[4]}/>
   
    

    </section>
    
    
      
    </div>
  );
}

export default App;
