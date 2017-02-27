
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../shared/todo' /*Получаю доступ к классу*/


@Component ({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {


    dateTime = new Date().toLocaleTimeString();
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onDelete(){
        this.delete.emit(this.todo);
    }

    onToggle(){
        this.toggle.emit(this.todo);
    }
}