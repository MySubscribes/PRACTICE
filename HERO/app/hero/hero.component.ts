import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";


@Component({
    moduleId: module.id,
    selector: 'hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.css'],
})

export class HeroComponent implements OnInit {
    name = 'Roma';
    armor:any = null;
    belt:any = null;
    boots:any = null;
    bracers:any = null;
    helmet:any = null;
    shield:any = null;
    sword:any = null;

    private things: any = [
        'armor','belt','boots','bracers','helmet','shield','sword'
    ];

    constructor(public heroService: HeroService) {}

    ngOnInit() {
        this.heroService.eventAddThing.subscribe((selectThing: any) => {
            if (selectThing.type) {
                this[selectThing.type] = selectThing;
            }
            this.heroService.eventUndressThing.emit(this.getThingsStats());
        });
    }

    getThingsStats(){
    let stat = {};
        for(let thing of this.things){
            if(this[thing]) {
            for (let stats in this[thing].stats){
                if(stat[stats]){
                    stat[stats] += this[thing].stats[stats];
                }
                else{
                    stat[stats] = this[thing].stats[stats]}
                }
            }
        }
        return stat;
    }

    undressHero(selectThing: any){
        if(selectThing){
            selectThing.wear = false;
            this[selectThing.type] = null;
            this.heroService.eventUndressThing.emit(this.getThingsStats());
        }
    }
}
