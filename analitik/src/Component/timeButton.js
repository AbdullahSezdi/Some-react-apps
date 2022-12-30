import "../App.css"

export default function TimeButon({category,setFunction}){
    

    function changeDays(category,days){
        if (category==="1"){
            console.log(days)
            setFunction(days)
        }
        if (category==="2"){
            setFunction(days)
        }
        if (category==="3"){
            setFunction(days)
        }
        if (category==="4"){
            setFunction(days)
        }
    }
    


    return  (
    <div className='button-time'>
        <button onClick={()=>changeDays(category,7)}>7d</button>
        <button onClick={()=>changeDays(category,30)}>30d</button>
        <button onClick={()=>changeDays(category,90)}>90d</button>
        <button onClick={()=>changeDays(category,180)}>180d</button>
        <button onClick={()=>changeDays(category,360)}>Max</button>
  </div>
  
  )
}