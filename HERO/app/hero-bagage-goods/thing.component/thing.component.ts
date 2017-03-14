import {Component, Input} from '@angular/core';
import {HeroService} from "../../hero/hero.service";


@Component ({
    moduleId: module.id,
    selector: 'thing',
    templateUrl: 'thing.component.html',
    styleUrls: ['thing.component.css']
})

export class ThingComponent {

    @Input()
    bagageThing:any;

    constructor(private heroService: HeroService) {}

    selectedThing(selectThing: any) {
        if(selectThing) {
              selectThing.wear = true;
        }
        this.heroService.addNewThing(selectThing);
    }
}
