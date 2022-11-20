

const List = ({tours})=>{



    return  <>

        {tours.map((tour)=>{

            const {id,name,description,image,price}=tour;

            return <div>

                <h2>{name}</h2>
                <p>{description}</p>
                <img src={image}></img>
                <span>{price}</span>

            </div>




        })}


        </>




}

export default List;