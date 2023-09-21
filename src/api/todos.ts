import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const updateTodos = (userId: number, todos: Todo[]) => {
  return client.patch(`/todos?userId=${userId}`, todos);
};

export const addTodo = (userId: number, todo: Todo) => {
  return client.post(`/todos?userId=${userId}`, todo);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};