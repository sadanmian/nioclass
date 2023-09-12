import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserState = (props) => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [timeTaken, setTimeTaken] = useState([]);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        questions,
        setQuestions,
        timeTaken,
        setTimeTaken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
