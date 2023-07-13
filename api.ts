import { ITask } from "./types/tasks";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const newToDo = await res.json();
    return newToDo;
}

export const EditTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const updatedToDo = await res.json();
    return updatedToDo;
}

export const DeleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE',
    });
}