
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todolist',
    templateUrl: 'app.todolist.html',
    styleUrls:['app.todolist.css']
})

export class TodolistComponent {
    newTodoTitle: string = '';

    addBtn(){
        // let todo: Todo = new Todo(this.newTodoTitle);
        // this.todos.push(todo);
        // this.newTodoTitle = '';
    }
}