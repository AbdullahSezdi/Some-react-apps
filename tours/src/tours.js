import Tour from "./tour";

const Tours=({tours})=>{


   
    return <>
        <div className="Title">
            <h2>Our Tours</h2>
        </div>

        <section>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour}></Tour>
            })}
        </section>


    </>

}



export default Tours;