import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const QuizDetail = () => {
  const service=useLoaderData();
  const allData=service.data.questions;

  // console.log(allData);

  return (
    <div>
      <h4>Wellome to quiz page </h4>
      {
        allData.map(data=><Quiz
        key={data.id}
        data={data}
        ></Quiz>)
      }

    </div>
  );
};

export default QuizDetail;
