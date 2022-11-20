import { useState } from "react";
import "./app.css"


const List = ({tours,showMore,setShowMore})=>{


    return  <>
    

        {tours.map((tour)=>{

            const {id,name,description,image,price}=tour;
            

            return <div className="card">

                <img className="t-img" src={image}></img>
                <div className="t-title">
                    <h2>{name}</h2>
                    <span className="price">${price}</span>
                </div>
                
                <p className="t-desc">
                    {showMore ? {description}: `${description.substring(0,240)}`}
                    
                    <button onClick={()=> setShowMore(!showMore)}></button>


                </p>
                
               

            </div>




        })}


        </>




}

export default List;