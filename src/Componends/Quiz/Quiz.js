import React from 'react';
import "./Quiz.css";

const Quiz = ({data}) => {
    const {id,options,question,curretAnswer}=data;
    // const option=options.
    console.log(question);
    return (
        <div  className='box-container'>
     <h4 className='qsn' >Quiz 1:{question} </h4>
    <div className='options'>
    {
       
       options.map(option=><div  className=''>
          <p className='option'>{option}</p>
      </div>)
     
   }
    </div>


  </div>
    );
};

export default Quiz;