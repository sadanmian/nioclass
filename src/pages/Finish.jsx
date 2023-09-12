import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import Navbar from "../components/Navbar";

export default function Finish() {
  const context = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <p>Total Time:</p>
      <p>Name : {context.name} </p>
      <p>QuestionIds with time on each Question</p>
      <p>Total time taken to complete the test</p>
    </div>
  );
}
