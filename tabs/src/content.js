
import "./App.css"

const Content = ({data}) =>{
    console.log(data)
    
    return (
        <div className="card">
            <h1>{data.title}</h1>
            <h5 className="company">{data.company}</h5>
            <span>{data.dates}</span>
            <ul style={{padding:12}} >
                {data.duties?.map((veri)=><li className="li">{veri}</li>)}
            </ul>
            

        </div>

    )
}

export default Content;