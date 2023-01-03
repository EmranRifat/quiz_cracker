import React from 'react';
import "./Quiz.css";

const Quiz = ({data,index}) => {
    const {id,options,question,curretAnswer}=data;

    // const option=options.
    // console.log(data);
    return (
        <div  className='box-container'>
     <h3 className='qsn' >Quiz: {index+1}: {question} </h3>
    <div className='options'>
    {
       
       options.map((option,index)=><div>
            <div key={index}></div>
          <p className='option'>{option}</p>
      </div>)
     
   }
    </div>


  </div>
    );
};

export default Quiz;