import "../App.css"
export default function Box({text,number,sign}){

    return(
        <div className="box-body">
            <div className="box-content">
                <p>{text}</p>
                <p><span>{sign}</span>{number}</p>
            </div>

        </div>
    )
}