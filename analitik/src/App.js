import './App.css';
import Navbar from './Component/Navbar';
import Box from './Component/Box';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <div className="container">
        <Box text="TOTAL VOLUME" number="17,545,344,343" sign="$"></Box>
        <Box text="DAILY VOLUME" number="1,240,212" sign="$"></Box>
        <Box text="TOTAL UNIQUE USER" number="11.235"></Box>
        <Box text="ALOT PRICE" number="1.25" sign="$"></Box>
        <Box text="CIRCULATING SUPPLY" number="22,350,500"></Box>
        <Box text="MARKETCAP" number="30,243,230" sign="$"></Box>
        
        
    </div>
    
      
    </div>
  );
}

export default App;
