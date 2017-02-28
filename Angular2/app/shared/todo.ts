
export class Todo {
    constructor( public title: string,
                 public completed: boolean = false,
                 public id: any = +new Date()){}
}
