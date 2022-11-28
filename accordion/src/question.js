import React, { useState } from 'react';

const Question= (question)=>{
    const [more,setMore]=useState(false)


    return (
        <div className="content">
            <div className="question-label">
            <h2>{question.question}</h2>
            <button onClick={()=>{
                setMore(!more)

            }}>+</button>
            </div>
            {more!=false ? <p>{question.answer}</p>: null}
            
            
        </div>
    )

}

export default Question;