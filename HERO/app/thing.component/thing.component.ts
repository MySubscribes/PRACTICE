import {Component, Input} from '@angular/core';


@Component ({
    moduleId: module.id,
    selector: 'thing',
    templateUrl: 'thing.component.html',
    styleUrls: ['thing.component.css']
})

export class ThingComponent {
    @Input() bagageThing:any;
}
