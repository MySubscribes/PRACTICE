import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";


@Component({
    moduleId: module.id,
    selector: 'hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
})

export class HeroComponent implements OnInit {
    name = 'Roma';
    armor: any;
    belt: any;
    boots:any;
    bracers:any;
    helmet:any ;
    shield:any ;
    sword:any;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.heroService.eventEm.subscribe((goods: any) => {
            this.armor = goods.armor;
            this.belt = goods.belt;
            this.boots = goods.boots;
            this.bracers = goods.bracers;
            this.helmet = goods.helmet;
            this.shield = goods.shield;
            this.sword = goods.sword;
        });
    }

    undressHero(thing: any){
        this.heroService.heroUndress(thing);
    }
}




