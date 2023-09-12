import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { UserContext } from "../context/Context";

export default function Home() {
  const context = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Form />
      <span className="badge rounded-pill text-bg-primary">
        Total time for the test : {`${context.questions.length * 5} Minutes`}
      </span>
    </>
  );
}
