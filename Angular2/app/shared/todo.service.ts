
import { Todo } from './todo';
import {EventEmitter} from '@angular/core';

export class TodoService {
    todos: Todo[] = [];
    private counter: number = 0;
    private counterTodo: number = 0;
    eventEm = new EventEmitter();
    counterTodoEm = new EventEmitter();

    updateCouter(){
        this.eventEm.emit(this.todos.length);
    }

    getTodos(): Todo[]{
        return this.todos;
    }

    createTodo(title: string){
        let todo = new Todo(title);
        this.todos.push(todo);
        this.updateCouter();
    }
    serchTodoChecked(){
        let itemCount: any =0;
        for(let item of this.todos){
            if(item.completed){
               itemCount++;
            }
        }
        this.counterTodo = itemCount;
        this.counterTodoEm.emit(this.counterTodo);
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
        if(todo.completed){this.counterTodo++}
        else{this.counterTodo--}
        this.serchTodoChecked();
    }

    deleteTodo(todo: Todo){
        let index = this.todos.indexOf(todo);
        if(index>-1){
            this.todos.splice(index, 1);
            this.updateCouter();
            this.serchTodoChecked();
        }
    }
}
