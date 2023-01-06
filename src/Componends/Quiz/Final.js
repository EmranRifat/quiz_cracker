import React,{useState} from 'react';
import "./Quiz.css"

const Final = ({option, correctAns}) => {
    const [ans, setAns] = useState("");

    // console.log(ans);


    const handleGetData = (e) => {
        setAns(e.target.textContent);
        
        if(ans===correctAns){
            alert("Your Answer is Correct..!")
        }
        else{
            alert('Wrong Answer')
        }
    }

    return (
        <div>
       <button  className='option' onClick={handleGetData}>{option}</button>

       </div>
    );
};

export default Final;