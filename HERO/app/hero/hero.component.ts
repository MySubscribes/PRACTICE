import { Component, Input, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";


@Component ({
    moduleId: module.id,
    selector: 'hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
    providers: [HeroService]
})

export class HeroComponent implements OnInit {
    name:any;
    constructor(private heroService: HeroService){}
    ngOnInit(){
        this.name = this.heroService.hero.name;
    }
}




