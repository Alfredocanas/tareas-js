import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// Creo clase - Tarea
export const todoList = new TodoList();

// Opcion # 1
// todoList.todos.forEach( todo => crearTodoHtml( todo ));

// Opcion # 2 Razon por que hay solo un argumento "todo"
todoList.todos.forEach( crearTodoHtml );