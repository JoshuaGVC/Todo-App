import { TAction } from "../TodoItem";

export interface ITodo {
    title: string;
    done: boolean;
}

export interface ITodoList {
    items: ITodo[];
    actionTodo: ( index: number, action: TAction ) => void;
}
