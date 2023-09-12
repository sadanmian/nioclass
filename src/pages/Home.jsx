import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { UserContext } from "../context/Context";

export default function Home() {
  const context = useContext(UserContext);
  return (
    <>
      <Navbar />
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded my-4">
        <div className="card position-relative">
          <div className="card-body">
            <Form />
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              Total time for the test :{" "}
              {`${context.questions.length * 5} Minutes`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
