export type TAction = 'done' | 'delete' | 'edit';

export interface ITodoItem {
    index: number;
    done: boolean;
    title: string;
    action: (action: TAction) => void
}
