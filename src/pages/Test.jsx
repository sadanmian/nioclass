import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function Test() {
  const context = useContext(UserContext);
  const [questionNo, setQuestionNo] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="display-4">{context.questions[questionNo]}</h1>
        <div className="container my-2">
          <button
            disabled={questionNo === 0}
            onClick={() => setQuestionNo(questionNo - 1)}
            type="button"
            className="btn btn-primary mx-5"
          >
            Previous
          </button>
          <button
            disabled={questionNo === context.questions.length - 1}
            onClick={() => setQuestionNo(questionNo + 1)}
            type="button"
            className="btn btn-primary mx-5"
          >
            Next
          </button>
        </div>
        <div className="container my-3">
          <Link to={"/finish"}>
            <button type="button" className="btn btn-success">
              Submit Test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
