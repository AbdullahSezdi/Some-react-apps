
import "./app.css"


const Tour = ({tour})=>{

    return  <>
    
            
            <div className="card">

                <img className="t-img" src={tour.image}></img>
                <div className="t-title">
                    <h2>{tour.name}</h2>
                    <span className="price">${tour.price}</span>
                </div>
                
                

            </div>



        </>




}

export default Tour;