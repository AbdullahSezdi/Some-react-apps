
import { useState } from "react";
import "./app.css"


    const Tour = ({id,name,description,image,price,removeTours})=>{

        const [readMore,setReadMore]=useState(false)
        const [interested,setInterested]=useState(true)

    return  <>

            <div className="card">

                <img className="t-img" src={image}></img>
                <div className="t-title">
                    <h2>{name}</h2>
                    <span className="price">${price}</span>
                </div>

        
          

                <p className="t-desc">{readMore ? description:`${description.substring(0, 200)}...`}        
                   <button className="btn" onClick={()=>setReadMore(!readMore)}>{readMore ?  "Show less" :"Show more"}</button>
                </p>

                <button className="remove-btn" onClick={()=>removeTours(id)} >Not interested</button>
                

            </div>



        </>




}

export default Tour;