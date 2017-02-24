
import { Component } from '@angular/core';
// import { Todo } from './shared/todo';
// import { todos } from './shared/data'

@Component({
	moduleId: module.id,
	selector: 'app-todo',
	templateUrl: 'app.component.html',
	styleUrls:['app.component.css']
})

export class AppComponent {
    title: string = 'TODOList';
}
