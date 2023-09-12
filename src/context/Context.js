import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserState = (props) => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [timeTaken, setTimeTaken] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(1);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        questions,
        setQuestions,
        timeTaken,
        setTimeTaken,
        timeElapsed,
        setTimeElapsed,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
