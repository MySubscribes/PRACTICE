import {Component, Input} from '@angular/core';


@Component ({
    moduleId: module.id,
    selector: 'thing',
    templateUrl: 'thing.component.html',
    styleUrls: ['thing.component.css']
})

export class ThingComponent {
    @Input() oneThing:any;
    // view:any;
    // change(){
    //     this.view = this.oneThing.view;
    // }
}
