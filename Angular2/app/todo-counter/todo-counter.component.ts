import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component ({
    moduleId: module.id,
    selector: 'todo-counter',
    templateUrl: 'todo-counter.component.html',
    styleUrls:['todo-counter.component.css']
})

export class TodoCounterComponent implements OnInit{
    counter: number = 0;
    todoCounter: number = 0;

    constructor (private todoService: TodoService){
    }

    ngOnInit(){
        this.todoService.eventEm.subscribe((data:number)=> {
           this.counter = data;
        });

        this.todoService.counterTodoEm.subscribe((counter:number)=> {
            this.todoCounter = counter;
        })
    }
}


