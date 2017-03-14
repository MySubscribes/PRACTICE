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
    // stat = {};

    private things: any = [
        'armor','belt','boots','bracers','helmet','shield','sword'
    ];

    constructor(public heroService: HeroService) {}

    ngOnInit() {
        this.heroService.eventAddThing.subscribe((selectThing: any) => {
            // if(this.armor) {
            //     console.log('selectThing', selectThing.view);
            //     console.log(this.armor.view);
            // }

            // if(this[selectThing.type]) {
            //
            //     const currentThing = this[selectThing.type];
            //     // debugger;
            //     // this.undressHero();
            //     if (currentThing.type === selectThing.type && currentThing.id !== selectThing.id) {
            //
            //
            //         console.log(this[selectThing.type].id);
            //         console.log(this[selectThing.type].type);
            //         console.log(selectThing.type);
            //         this.heroService.eventUndressThing.emit({state: 'plus', thing: selectThing});
            //     }
            // }

            if (selectThing.type) {
                // debugger;
                this[selectThing.type] = selectThing;
                // console.log(this[selectThing.type].view);
                // console.log(selectThing.view);
            }

            this.getThings();
        });
    }


    getThings(){
        let stat = {power:0};
          for(let thing of this.things){
            if(this[thing]) {
                console.log(stat);
                    for (let stats in this[thing].stats){
                        if(stat[stats]==='power'){
                            stat.power += this[thing].stats;
                        }
                        // stat[stats] += this[thing].stats[stats];
                    // console.log(stat[stats]);
                // }

                    // console.log(stat);

                    // console.log(stat);
                    // stat[i] = this[thing].stats.power;

                }
            }

        }
        return stat;
        console.log(stat);
    }


    undressHero(selectThing: any){
        if(selectThing){
            selectThing.wear = false;
            this[selectThing.type] = null;
            this.heroService.eventUndressThing.emit({state: 'minus', thing: selectThing});
        }
    }


}




