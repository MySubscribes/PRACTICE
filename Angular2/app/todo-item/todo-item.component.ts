
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';


@Component ({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    id: any = Date.now();
    dateTime = new Date().toLocaleTimeString();
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    constructor(private todoService: TodoService){}

    onDelete(){
        this.todoService.deleteTodo(this.todo);
    }

    onToggle(){
        this.todoService.toggleTodo(this.todo);
    }
}