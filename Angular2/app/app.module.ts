
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/app.todo-form';
import { TodoListComponent } from './todo-list/app.todo-list';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './shared/todo.service';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoCounterComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})

export class AppModule {}
