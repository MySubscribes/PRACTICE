
import { Component} from '@angular/core';
import  { TodoService } from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'app.todo-form.html',
    styleUrls: ['app.todo-form.css']
})

export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: TodoService){}

    onSubmit(){
        this.todoService.createTodo(this.title);
    }
}