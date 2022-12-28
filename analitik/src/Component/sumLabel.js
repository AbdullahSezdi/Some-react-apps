export default function SumLabel({day,data,text,avg}){

    const avarage=(day,data)=>{

        const lastDays = data.datasets[0].data.slice(-day);
        const sum = lastDays.reduce((partialSum, a) => partialSum + a, 0);
        return (sum/day).toFixed(2);
    
      }


    return(
        <div className="sum-labels">
        {avg ?<p className="sumlabel-content">{day} {text} {avarage(day,data)}</p>: <p className="sumlabel-content">{day} {text} {data}</p>}
            
        </div>

    )
}