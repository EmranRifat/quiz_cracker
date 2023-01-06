import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const QuizDetail = () => {
  const service=useLoaderData();
  const allData=service.data.questions;

  // console.log(allData);

  return (
    <div>
      <p>Wellome to quiz page ...</p>
      {
        allData.map((data,index)=><Quiz
        index={index}
        key={data.id}
        data={data}
        ></Quiz>)
      }

    </div>
  );
};

export default QuizDetail;

