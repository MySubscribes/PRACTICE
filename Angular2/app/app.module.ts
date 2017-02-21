
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './app.todolist/app.todolist';
import { TodoComponent } from './app.todo/app.todo';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        TodolistComponent,
        TodoComponent

    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
