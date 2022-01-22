import React, { useContext } from "react";
import { TodoFrameContext } from "./TodoFrame";

export const TodoItem = ({ todo, index }) => {
  const { todos, setTodos } = useContext(TodoFrameContext);

  const editTodo = (event, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: event.target.value } : todo
      )
    );
  };

  const changeState = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const changeEditState = (id) => {
    const editInputText = todos
      .filter((todo) => todo.id === id)
      .map((todo) => todo.text)
      .toString();
    if (editInputText !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, editState: !todo.editState } : todo
        )
      );
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const deleteState = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.state ? true : false}
        onChange={() => {
          changeState(todo.id);
        }}
      />
      <span className="list">
        {index + ` : `}
        {!todo.editState ? (
          todo.text
        ) : (
          <input
            type="text"
            value={todo.text}
            onChange={(event) => {
              editTodo(event, todo.id);
            }}
          />
        )}
      </span>
      {!todo.editState ? (
        <span className="button">
          <a
            href="#none"
            onClick={() => {
              changeEditState(todo.id);
            }}
          >
            수정
          </a>
          <a
            href="#none"
            onClick={() => {
              deleteState(todo.id);
            }}
          >
            삭제
          </a>
        </span>
      ) : (
        <span className="button">
          <a
            href="#none"
            onClick={() => {
              changeEditState(todo.id);
            }}
          >
            저장
          </a>
        </span>
      )}
    </li>
  );
};
