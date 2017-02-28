import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component ({
    moduleId: module.id,
    selector: 'todo-counter',
    templateUrl: 'todo-counter.component.html',
    styleUrls:['todo-counter.component.css']
})

export class TodoCounterComponent implements OnInit {
    allTodos: number = 0;
    doneTodo: number = 0;

    constructor (private todoService: TodoService){
    }

     ngOnInit(){

        this.todoService.eventEm.subscribe((counter:any)=> {
            this.doneTodo = counter.doneCounter;
            this.allTodos = counter.allCount;
        })
    }
}


