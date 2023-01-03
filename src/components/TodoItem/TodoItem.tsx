import { FC } from "react";
import { ITodoItem } from "./TodoItem.d";

const TodoItem: FC<ITodoItem> = ({ index, done, title, action }) => {
  return (
    <li className="todo__list__item">
      <div className="todo__list__itext">
        <input
          type="checkbox"
          className="todo__list__icheckbox"
          id={`item-${index}`}
          onChange={() => action("done")}
          checked={done}
        />
        <label htmlFor={`item-${index}`} className="todo__list__ilabel">
          {title}
        </label>
      </div>
      <div className="todo__list__ioptions">
        <button onClick={() => action("edit")} className="todo__list__iedit">
          Edit
        </button>
        <button
          onClick={() => action("delete")}
          className="todo__list__iremove"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
