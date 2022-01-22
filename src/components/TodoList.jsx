import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoFrameContext } from "./TodoFrame";

export const TodoList = () => {
  const { todos } = useContext(TodoFrameContext);

  return (
    <ul>
      {todos !== "" &&
        todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
    </ul>
  );
};
