import Tour from "./tour";

const Tours=({tours,removeTours})=>{

  

    return <>
        <div className="Title">
            <h2>Our Tours</h2>
        </div>

        <section>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeTours={removeTours}></Tour>
            })}
        </section>


    </>

}



export default Tours;