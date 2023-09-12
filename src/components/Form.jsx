import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

export default function Form() {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  // const [questions, setQuestions] = useState([]);

  const handleName = (e) => {
    context.setName(e.target.value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    const checked = e.target.checked;
    // console.log(checked);
    if (checked) {
      context.setQuestions([...context.questions, value]);
    } else {
      context.setQuestions(context.questions.filter((e) => e !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(context.questions);
    navigate("/test");
  };

  return (
    <div className="mb-3 my-5 container">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        <h2>Name : {context.name}</h2>
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        onChange={handleName}
        placeholder="Enter Your Name"
      />

      <div className="container">
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_21"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_21
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_13"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_13
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_24"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_24
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_15"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_15
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_2"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_2
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_3"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_3
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="BinomialTheorem_4"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            BinomialTheorem_4
          </label>
        </div>
        <div className="form-check my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="AreaUnderTheCurve_5"
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            AreaUnderTheCurve_5
          </label>
        </div>
      </div>

      <div>
        <Link
          to={"/test"}
          style={{
            textDecoration: "none",
          }}
        >
          <div className="d-grid gap-2">
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-lg"
              type="button"
            >
              Start Test
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
