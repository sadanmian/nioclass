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

  const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${context.questions[questionNo]}`;

  useEffect(() => {
    if (!isTestFinished) {
      const interval = setInterval(() => {
        console.log(context.timeElapsed);
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
        console.log(res);
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
      <h3>{context.timeElapsed}</h3>
      {!isTestFinished && (
        <div className="container my-5 display-6">
          {question.map((q, i) => (
            <MathJaxContext key={i} version={3} config={config}>
              <MathJax hideUntilTypeset={"first"}>{q.Question}</MathJax>
            </MathJaxContext>
          ))}

          <h1 className="display-4">{}</h1>
          <div className="container my-5">
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
              onClick={handleNext}
              type="button"
              className="btn btn-primary mx-5"
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
      )}
    </div>
  );
}
