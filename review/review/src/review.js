import { useState, useEffect } from "react";
import "./app.css"



const Reviews =(props)=>{

    const {reviews} = props 


    const [count, setCount] = useState(0);
    const [data,setData]=useState(reviews[count]);


    function sagaGec(){
        if( props.reviews.length-1 > count){
          setCount(count+1) 
          setData(reviews[count+1]) 

        }
        
    }

    function solaGec(){
        if(count>0){
            setCount(count-1)
            setData(props.reviews[count-1])
        }
        
        
    }
    
    
    return (
        <>
        <div className="Card">
            <img className="img" src={data.image}></img>
            <h4 className="name">{data.name}</h4>
            <span className="title">{data.job}</span>
            <p className="text">{data.text}</p>
           

            <button onClick={sagaGec}> sağ'a geç</button> 
        
            <button onClick={solaGec}>sol'a geç</button>
        </div>
        

        </>
    )




}

export default Reviews;