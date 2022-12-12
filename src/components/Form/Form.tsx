import { FC, FormEvent, useState } from 'react'
import Input from '../Input';
import { IForm } from './Form.d';

const Form:FC<IForm> = ({ onAddTodo }) => {
    const [todo, setTodo] = useState("");

    const handleOnChange = (value: string | number) => {
        setTodo((value as string))
    }

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (todo !== "") {
            onAddTodo( todo );
            setTodo("")
        } else {
            alert("no puede estar vacio")
        }
    };

    return (
        <form className="todo__form" onSubmit={addTodo}>
            <Input
                value={todo}
                onChange={handleOnChange}
                name="todo"
            />
            <input className="todo__form__submit" type="submit" value="Add" />
        </form>
    )
}

export default Form
