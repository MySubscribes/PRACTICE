
import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../hero/hero.service";


@Component ({
    moduleId: module.id,
    selector: 'goods-stats',
    templateUrl: 'hero-goods-stats.component.html',
    styleUrls: ['hero-goods-stats.component.css']
})

export class HeroGoodsStatsComponent implements OnInit{

    prevPower = 0;
    prevAgility = 0;
    prevIntuition = 0;
    prevHealth = 0;
    prevIntellect = 0;

    power: number = 0;
    agility: number = 0;
    intuition: number = 0;
    health: number = 0;
    intellect: number = 0;

    private stat: any = [
        'power','agility','intuition','health','intellect'
    ];

    constructor( private heroService: HeroService ) {}

    ngOnInit() {
        this.heroService.eventUndressThing.subscribe((data: any) => {
            for (let stat of this.stat) {
                if (Object.keys(data).length == 0) {
                    this[stat] = 0;
                }
                else {
                    this[stat] = data[stat];
                }
            }
        });
    }
}



