import Datas from "./datas.js"
import Question from "./question.js";
import "./app.css";
import React from "react"



function App() {

    return (
        <div className="card">
            <h3>Questions and answers about login</h3>
            <div className="question-t">
            {Datas.map((data)=>{
                return <Question key={data.id} {...data}></Question>
             })} 

            </div>
        </div>
    )

}

export default App;

