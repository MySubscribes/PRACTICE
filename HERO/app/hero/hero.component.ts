import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
// import {Hero} from "./hero";
// import {Hero} from "./hero";


@Component({
    moduleId: module.id,
    selector: 'hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
})

export class HeroComponent implements OnInit {
    // hero: Hero;
    name: string;
    armor: any;
    belt: any;
    boots:any;
    bracers:any;
    helmet:any ;
    shield:any ;
    sword:any;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.name = 'Roma';

        this.heroService.eventEm.subscribe((goods: any) => {
            console.log(goods);
            this.armor = goods.armor;
            this.belt = goods.belt;
            this.boots = goods.boots;
            this.bracers = goods.bracers;
            this.helmet = goods.helmet;
            this.shield = goods.shield;
            this.sword = goods.sword;
        });
    }
    //
    undressHero(thing: any){
        if(thing) {
            this.heroService.undress(thing.type)
            this.heroService.heroUndress(thing);
            console.log(thing);
        }
    }
}




