import './App.css';
import TimeButon from './Component/timeButton';
import SumLabel from './Component/sumLabel';
import data from "./fakeData.js"
import React, { useState,useEffect } from 'react';
import Navbar from './Component/Navbar';
import Box from './Component/Box';
import { NumericFormat } from 'react-number-format';
import { Line ,Bar,Pie} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  PieElement,
  ArcElement,
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
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);


function App() {
  const [alotPrice,setAlotPrice]=useState()
  const [circulationSupply,setCirculationSupply]=useState(22350500)
  const [lastTotalVolume,setLastTotalVolume]=useState(data[0].datasets[0].data.slice(-1))

  const [totalVolumeDays,setTotalVolumeDays]=useState(60)
  const [dailyVolumeDays,setDailyVolumeDays]=useState(60)
  const [alotPriceDays,setAlotPriceDays]=useState(60)
  const [dailyUniqueDays,setDailyUniqueDays]=useState(60)

  const CloneTotalVolumeData = structuredClone(data[0]);
  const CloneDailyVolumeData = structuredClone(data[1]);
  const CloneAlotPriceData = structuredClone(data[2]);
  const CloneUniqueData = structuredClone(data[4]);




  const [chartTotalVolume,setChartTotalVolume]=useState(data[0])
  const [chartDailyVolume,setChartDailyVolume]=useState(data[1])
  const [chartAlotPrice,setChartAlotPricee]=useState(data[2])
  const [chartUniqueAdres,setChartUniqueAdres]=useState(data[4])
 
  
  useEffect(()=>{
    CloneTotalVolumeData.datasets[0].data= data[0].datasets[0].data.slice(-totalVolumeDays)
    CloneTotalVolumeData.labels=data[0].labels.slice(-totalVolumeDays)
    if(totalVolumeDays<90){
      CloneTotalVolumeData.datasets[0].pointRadius=3
    }
    setChartTotalVolume(CloneTotalVolumeData)

  },[totalVolumeDays])

  useEffect(()=>{
    CloneDailyVolumeData.datasets[0].data= data[1].datasets[0].data.slice(-dailyVolumeDays)
    CloneDailyVolumeData.labels=data[1].labels.slice(-dailyVolumeDays)
    if(dailyVolumeDays<180){
      CloneDailyVolumeData.datasets[0].pointRadius=3
    }
    setChartDailyVolume(CloneDailyVolumeData)

  },[dailyVolumeDays])

  useEffect(()=>{
    CloneAlotPriceData.datasets[0].data= data[2].datasets[0].data.slice(-alotPriceDays)
    CloneAlotPriceData.labels=data[2].labels.slice(-alotPriceDays)
    if(alotPriceDays<90){
      CloneAlotPriceData.datasets[0].pointRadius=3
    }
    setChartAlotPricee(CloneAlotPriceData)

  },[alotPriceDays])

  useEffect(()=>{
    CloneUniqueData.datasets[0].data= data[4].datasets[0].data.slice(-dailyUniqueDays)
    CloneUniqueData.labels=data[4].labels.slice(-dailyUniqueDays)
    setChartUniqueAdres(CloneUniqueData)

  },[dailyUniqueDays])











   useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=dexalot&vs_currencies=usd')
     .then(response => response.json())
     .then(data => setAlotPrice(data.dexalot.usd));
    }, 1000);

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

    <div className='chart-contain'>
    <SumLabel data={<NumericFormat value={lastTotalVolume[0]} displayType={'text'} thousandSeparator={true} />} text="Total Volume:" />
      <h2>Total Volume</h2>
      <TimeButon category="1" setFunction={setTotalVolumeDays}></TimeButon>
      <Line className='chart' data={chartTotalVolume}></Line>
      
    </div>


    <div className='chart-contain'>
      <SumLabel day={dailyVolumeDays} data={data[1]} text="days avarage:" avg={true}></SumLabel>
      <h2>Daily Volume</h2>
      <TimeButon category="2" setFunction={setDailyVolumeDays}></TimeButon>
      <Line className='chart' data={chartDailyVolume}></Line>
    </div>

    <div className='chart-contain'>
      <h2>Inflow - Outflow</h2>
      <Bar className='chart' data={data[3]}/>
    </div>

    <div className='chart-contain'>
      <SumLabel day={alotPriceDays} data={data[2]} text="days avarage:" avg={true}></SumLabel>
      <h2>Alot Price</h2>
      <TimeButon category="3" setFunction={setAlotPriceDays}></TimeButon>
      <Line className='chart' data={chartAlotPrice}></Line>
    </div>

    <div className='chart-contain'>
      <h2>Dexalot Portfolio</h2>
      <Pie className='pie' data={data[5]}/>
    </div>

    <div className='chart-contain'>
     <SumLabel day={dailyUniqueDays} data={data[4]} text="days avarage:" avg={true}></SumLabel>
      <h2>Daily Unique Users</h2>
      <TimeButon category="4" setFunction={setDailyUniqueDays}></TimeButon>
      <Bar className='chart' data={chartUniqueAdres}/>
    </div>
 
    </section>
    
    
      
    </div>
  );
}

export default App;
