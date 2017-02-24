
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../shared/todo' /*Получаю доступ к классу*/


@Component ({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();
    // todo: Todo = new Todo('wwwww');/*почему необходимо создавать новый экземпляр класса?*/
    // toggle(todo: Todo){
    //     this.todo.completed = !this.todo.completed;
    // }

    onDelete(){
        this.delete.emit(this.todo)
        // console.log(this.todo)
    }

    onToggle(){
        this.toggle.emit(this.todo)
        // console.log(this.todo)
    }

}