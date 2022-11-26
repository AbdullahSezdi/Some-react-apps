import { useState } from "react";
import "./app.css"


var count=0;
const Reviews =(reviews)=>{

    const [data,setData]=useState(reviews["reviews"][0]);


  
//setData(reviews["reviews"][count])
    
    return (
        <>
        <div className="Card">
            <img className="img" src={data.image}></img>
            <h4 className="name">{data.name}</h4>
            <span className="title">{data.job}</span>
            <p className="text">{data.text}</p>
            {console.log(reviews["reviews"].length)}
            <button onClick={()=>{reviews["reviews"].length-1>count ? count+=1:<></> }}> sağ'a geç</button> 
            {console.log(data)}
            <button>sol'a geç</button>
        </div>
        

        </>
    )




}

export default Reviews;