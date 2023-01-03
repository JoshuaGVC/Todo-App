import { FC } from "react";
import TodoItem, { TAction } from "../TodoItem";
import { ITodo, ITodoList } from "./TodoList.d";

const TodoList: FC<ITodoList> = ({ items, actionTodo }) => {
  return (
    <ul className="todo__list">
      {items.map((item: ITodo, index: number) => (
        <TodoItem
          key={`item-${index}`}
          index={index}
          done={item.done}
          title={item.title}
          action={(actionItem: TAction) => actionTodo(index, actionItem)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
