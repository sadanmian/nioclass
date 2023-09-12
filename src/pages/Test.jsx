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
  const [questionNo, setQuestionNo] = useState(0);
  const [question, setQuestion] = useState([]);

  const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${context.questions[questionNo]}`;

  useEffect(() => {
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

  return (
    <div>
      <Navbar />

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
