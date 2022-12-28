import "../App.css"

export default function TimeButon({setTotalVolumedays,clone,setClone}){
    

    function fonksiyon(day){
        setClone(!clone)
        setTotalVolumedays(day)
    }

    return  (
    <div className='button-time'>
        <button onClick={()=>fonksiyon(7)}>7d</button>
        <button onClick={()=>fonksiyon(30)}>30d</button>
        <button onClick={()=>fonksiyon(90)}>90d</button>
        <button onClick={()=>fonksiyon(180)}>180d</button>
        <button onClick={()=>fonksiyon(360)}>Max</button>
  </div>
  
  )
}