
import { Todo } from './todo';
import { EventEmitter } from '@angular/core';

export class TodoService {
    todos: Todo[] = [];
    private counterTodo: number = 0;
    eventEm = new EventEmitter();

    updateCouter(){
        let itemCount:any = 0;
            for(let item of this.todos){
                if(item.completed){
                   itemCount++;
                }
            }
        this.eventEm.emit({
            doneCounter:itemCount,
            allCount:this.todos.length
        });
    }

    createTodo(title: string){
        let todo = new Todo(title);
        this.todos.push(todo);
        this.updateCouter();
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
        if(todo.completed){this.counterTodo++}
        else{this.counterTodo--}
        this.updateCouter();
    }

    // deleteTodo(todo: Todo){
    //     debugger;
    //     let s = this.todos.filter(item=>{
    //         if(item.id !== todo.id){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     this.todos = s;
    //     console.log(this.todos);
    //     this.updateCouter();
    //
    // }

    deleteTodo(todo: Todo){
        let index = this.todos.indexOf(todo);
        if(index>-1){
            this.todos.splice(index, 1);
            this.updateCouter();
        }
    }
}
