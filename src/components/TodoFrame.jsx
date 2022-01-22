import React, { useReducer } from "react";

export const TodoFrameContext = React.createContext();

const initialTodos = {
  todos: [
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
  ],
  inputText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (state.inputText !== "") {
        const newId = Math.random().toString(36).substr(2, 16);
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: newId,
              text: state.inputText,
              state: false,
              editState: false,
            },
          ],
          inputText: "",
        };
      } else {
        console.log("내용을 입력 해주세요.");
        return { ...state };
      }
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, text: action.event.target.value }
            : todo
        ),
      };
    case "CHANGE_TODO_STATE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, state: !todo.state } : todo
        ),
      };
    case "CHANGE_EDIT_STATE":
      const editInputText = state.todos
        .filter((todo) => todo.id === action.id)
        .map((todo) => todo.text)
        .toString();

      if (editInputText !== "") {
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id
              ? { ...todo, editState: !todo.editState }
              : todo
          ),
        };
      } else {
        console.log("내용을 입력 해주세요.");
        return { ...state };
      }
    case "DELETE_STATE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "ON_CHANGE_INPUT_TEXT":
      return { ...state, inputText: action.event.target.value };
    default:
      throw new Error("Unsupported action type:", action.type);
  }
};

export const TodoFrame = (props) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodoFrameContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoFrameContext.Provider>
  );
};
