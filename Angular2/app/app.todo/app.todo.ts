
import { Component } from '@angular/core';
import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: 'app.todo.html',
    styleUrls:['app.todo.css']
})

export class TodoComponent {
    todos: Todo[] = todos;

    toggle(todo: Todo){
        todo.completed = !todo.completed;
    }

    deleteBtn(todo: Todo){
        let index = this.todos.indexOf(todo);
        if(index > -1){
            this.todos.splice(index, 1);
        }
    }
}