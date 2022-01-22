import React, { useState } from "react";

export const TodoFrameContext = React.createContext();

export const TodoFrame = (props) => {
  const initialTodos = [
    {
      id: "1hsh234",
      text: "출석체크",
      state: false,
      editState: false,
    },
    {
      id: "1sdg2345",
      text: "운동하기",
      state: false,
      editState: false,
    },
    {
      id: "123fdgdf456",
      text: "글쓰기",
      state: true,
      editState: false,
    },
    {
      id: "13sagd234",
      text: "공부하기",
      state: false,
      editState: false,
    },
    {
      id: "123fdg45",
      text: "놀기",
      state: false,
      editState: false,
    },
    {
      id: "123ag456",
      text: "게임하기",
      state: true,
      editState: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");

  return (
    <TodoFrameContext.Provider
      value={{ todos, setTodos, inputText, setInputText }}
    >
      {props.children}
    </TodoFrameContext.Provider>
  );
};
