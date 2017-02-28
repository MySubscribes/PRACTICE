
import { Component, OnInit} from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component ({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'app.todo-list.html',
    styleUrls: ['app.todo-list.css']
})

export class TodoListComponent implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService){
        this.todos = [];
    }

    ngOnInit(){
        this.todos = this.todoService.todos;
    }

    delete(event: Todo){
        this.todoService.deleteTodo(event);
        setTimeout(this.todos = this.todoService.todos, 0);
    }

    toggle(todo: Todo){
        this.todoService.toggleTodo(todo);
    }
}
