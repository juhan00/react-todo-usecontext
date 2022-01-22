import React, { useContext } from "react";
import { TodoFrameContext } from "./TodoFrame";

export const TodoInput = () => {
  const { todos, setTodos, inputText, setInputText } =
    useContext(TodoFrameContext);

  const createId = function () {
    return Math.random().toString(36).substr(2, 16);
  };

  const addTodo = (event) => {
    if (inputText !== "") {
      const newId = createId();
      setTodos([
        ...todos,
        { id: newId, text: inputText, state: false, editState: false },
      ]);
      setInputText("");
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={onChangeInput} />
      <button onClick={addTodo}>등록</button>
    </div>
  );
};
