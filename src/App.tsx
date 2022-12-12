import { useEffect, useState } from "react"
import { ITodo } from "./App.d"
import Form from "./components/Form"
import Title from "./components/Title"
import { TAction } from "./components/TodoItem"
import TodoList from "./components/TodoList"


const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const saveInLocal = (list: ITodo[]) => {
    const toSave = JSON.stringify(list);
    localStorage.setItem("todos", toSave);
  };

  const editTodo = (index: number) => {
    const edition = prompt('Editando la tarea:', todos[index].title)
    if (edition !== null && edition !== todos[index].title) {
      const myTodos = [...todos]
      todos[index].title = edition
      setTodos(myTodos)
    }
  };

  const deleteTodo = (index: number) => {
    const isConfirmed = confirm('¿Seguro que te sale de los webos borrar esta tarea?');
    if (isConfirmed) {
      const myTodos = [...todos]
      myTodos.splice(index, 1)
      setTodos(myTodos)
    };
  };

  const doneTodo = (index: number) => {
    const myTodos = [...todos];
    myTodos[index].done = !myTodos[index].done
    setTodos(myTodos)
  };

  const onNewTodo = (newTodo: string) => {
    const item = {
      title: newTodo,
      done: false
    };
    const newTodos = [ ...todos, item];
    setTodos(newTodos)
  };

  const onActionTodo = (index: number, action: TAction) => {
    switch (action) {
      case 'delete':
        deleteTodo(index)
        break;

      case 'done':
        doneTodo(index)
        break;

      case 'edit':
        editTodo(index)
        break;
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      saveInLocal(todos)
    }
  }, [todos]);

  useEffect(() => {
    let myTodos = localStorage.getItem('todos');
    if (myTodos !== null) {
      setTodos(JSON.parse(myTodos))
    }
  }, []);

  return (
    <>
      <main className="todo">
        <Title value={todos.length} />
        <div className="todo__content">
          <Form onAddTodo={onNewTodo}/>
          <TodoList
            items={todos}
            actionTodo={ onActionTodo }
          />
        </div>
      </main>
    </>
  )
}

export default App
