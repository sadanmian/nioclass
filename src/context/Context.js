import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserState = (props) => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);

  return (
    <UserContext.Provider value={{ name, setName, questions, setQuestions }}>
      {props.children}
    </UserContext.Provider>
  );
};
