import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

export default function Test() {
  const context = useContext(UserContext);
  const [startTime, setStartTime] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQuestion] = useState([]);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${context.questions[questionNo]}`;

  useEffect(() => {
    if (!isTestFinished) {
      const interval = setInterval(() => {
        // console.log(context.timeElapsed);
        context.setTimeElapsed((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  useEffect(() => {
    setStartTime(Date.now());
    async function fetch() {
      try {
        const res = await axios.get(url);
        setIsLoading(false);
        setQuestion(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [url]);

  const handleNext = () => {
    const endTime = Date.now();
    const questionTime = endTime - startTime;
    context.setTimeTaken([...context.timeTaken, questionTime]);
    setQuestionNo(questionNo + 1);
  };

  const handleEnd = () => {
    setIsTestFinished(true);
    const endTime = Date.now();
    const questionTime = endTime - startTime;
    context.setTimeTaken([...context.timeTaken, questionTime]);
  };

  return (
    <div>
      <Navbar />

      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded my-4">
        {context.questions.length ? (
          <div className="card my-5 position-relative">
            <div className="card-body">
              <div className="container my-5 display-6">
                {isLoading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                {question.map((q, i) => (
                  <MathJaxContext key={i} version={3} config={config}>
                    <MathJax hideUntilTypeset={"first"}>{q.Question}</MathJax>
                  </MathJaxContext>
                ))}

                <div className="container my-5">
                  <button
                    disabled={questionNo === 0}
                    onClick={() => setQuestionNo(questionNo - 1)}
                    type="button"
                    className="btn btn-primary mx-5 my-3"
                  >
                    Previous
                  </button>
                  <button
                    disabled={questionNo === context.questions.length - 1}
                    onClick={handleNext}
                    type="button"
                    className="btn btn-primary mx-5 my-3"
                  >
                    Next
                  </button>
                </div>
                <div className="container my-3">
                  <Link to={"/finish"}>
                    <button
                      onClick={handleEnd}
                      type="button"
                      className="btn btn-success"
                    >
                      Submit Test
                    </button>
                  </Link>
                </div>
              </div>
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                Time Elapsed : {context.timeElapsed}s
              </span>
            </div>
          </div>
        ) : (
          <p className="fw-bolder">Select atleast one question to Start Test</p>
        )}
      </div>
    </div>
  );
}
