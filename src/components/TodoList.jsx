import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoFrameContext } from "./TodoFrame";

export const TodoList = () => {
  const { state } = useContext(TodoFrameContext);

  return (
    <ul>
      {state.todos !== "" &&
        state.todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
    </ul>
  );
};
