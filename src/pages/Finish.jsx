import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import Navbar from "../components/Navbar";

export default function Finish() {
  const context = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <p>Total Time taken: {context.timeElapsed}</p>
      <p>Total Time:</p>
      <p>Name : {context.name} </p>
      {context.questions.map((question, index) => (
        <p key={index}>
          QuestionIds:{question} : Time{" "}
          {Math.floor(context.timeTaken[index] / 1000)} s
        </p>
      ))}

      <p>Total time taken to complete the test</p>
    </div>
  );
}
