

function List (props){
    const styles={
        height:50,
    }

    return (
        <div className="card">
            <img style={{height:50}} src={props.datas.img}></img>
            <div className="content">
                <div>
                <h4>{props.datas.title}</h4>
                <p>{props.datas.price}</p>
                </div>
                <p>{props.datas.desc}</p>
  
            </div>
        </div>
    )

}



export default List;