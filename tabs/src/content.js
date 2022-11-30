


const Content = ({data}) =>{
    console.log(data)
    
    return (
        <div>
            <h1>{data.title}</h1>
            <h5>{data.company}</h5>
            <span>{data.dates}</span>
            <ul>
                {data.duties.map((veri)=><li>{veri}</li>)}
            </ul>
            

        </div>

    )
}

export default Content;