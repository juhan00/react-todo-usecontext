import React, { useContext } from "react";
import { TodoFrameContext } from "./TodoFrame";

export const TodoItem = ({ todo, index }) => {
  const { dispatch } = useContext(TodoFrameContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.state ? true : false}
        onChange={() => {
          dispatch({ type: "CHANGE_TODO_STATE", id: todo.id });
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
              dispatch({ type: "EDIT_TODO", event, id: todo.id });
            }}
          />
        )}
      </span>
      {!todo.editState ? (
        <span className="button">
          <a
            href="#none"
            onClick={() => {
              dispatch({ type: "CHANGE_EDIT_STATE", id: todo.id });
            }}
          >
            수정
          </a>
          <a
            href="#none"
            onClick={() => {
              dispatch({ type: "DELETE_STATE", id: todo.id });
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
              dispatch({ type: "CHANGE_EDIT_STATE", id: todo.id });
            }}
          >
            저장
          </a>
        </span>
      )}
    </li>
  );
};
