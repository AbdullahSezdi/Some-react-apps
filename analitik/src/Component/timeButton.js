import "../App.css"

export default function TimeButon({setTotalVolumeDays}){

    


    return  (
    <div className='button-time'>
        <button onClick={()=>setTotalVolumeDays(7)}>7d</button>
        <button>30d</button>
        <button>90d</button>
        <button>180d</button>
        <button>Max</button>
  </div>
  
  )
}