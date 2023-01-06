import React from 'react';
import Final from "./Final"
import "./Quiz.css";

const Quiz = ({data,index}) => {
    const {options,question,correctAnswer}=data;

    const handleAnswer=()=>{
        if(options===correctAnswer){
            alert("Answer us correct")
        }
        else{
            alert("Wrong answer")
        }
    }

    
    return (
        <div  className='box-container'>
     <h3 className='qsn' >Quiz: {index+1}: {question} </h3>
    <div className='options'>
    {
    options.map((option,index)=><Final
    key={index}
    handleAnswer={handleAnswer}
    index={index}
    option={option}
    correctAns={correctAnswer}
    
    ></Final>)   

  
       //    options.map((option,index)=><div>
    //       <button onClick={handleAnswer} className='option'>{option}</button>
    //   </div>)
     
   }
    </div>


  </div>
    );
};

export default Quiz;