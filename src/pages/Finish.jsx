import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import Navbar from "../components/Navbar";

export default function Finish() {
  const context = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded my-5">
        <div className="card my-5 position-relative">
          <div className="card-body">
            <p className="font-monospace">Name : {context.name}</p>
            <p className="font-monospace">
              Total Time taken to complete the whole test :{" "}
              {context.timeElapsed} seconds
            </p>
            <h3 className="font-monospace">Time taken per question</h3>
            {context.questions.map((question, index) => (
              <ul>
                <li>
                  <p className="font-monospace" key={index}>
                    QuestionIds : {question} || Time taken :{" "}
                    {Math.floor(context.timeTaken[index] / 1000)
                      ? `${Math.floor(context.timeTaken[index] / 1000)} seconds`
                      : "Not Attempt"}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
