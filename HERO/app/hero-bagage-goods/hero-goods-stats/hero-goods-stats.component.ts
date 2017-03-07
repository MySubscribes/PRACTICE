
import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../hero/hero.service";
// import {goods} from "../../shared/goods";



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

    power: number =0;
    agility: number=0;
    intuition: number=0;
    health: number=0;
    intellect: number=0;


    constructor( private heroService: HeroService ) {
    }
    ngOnInit(){
            this.heroService.eventEmSkills.subscribe((skills: any) => {
                this.power = skills.power;
                this.agility = skills.agility;
                this.intuition = skills.intuition;
                this.health = skills.health;
                this.intellect = skills.intellect;
            });
    }
}

