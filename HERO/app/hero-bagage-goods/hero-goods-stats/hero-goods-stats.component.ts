
import {Component, OnInit} from '@angular/core';
// import {GoodsService} from "../../shared/goods.service";
import {Goods} from "../../shared/goodsClass";
import {HeroService} from "../../hero/hero.service";



@Component ({
    moduleId: module.id,
    selector: 'goods-stats',
    templateUrl: 'hero-goods-stats.component.html',
    styleUrls: ['hero-goods-stats.component.css']
})

export class HeroGoodsStatsComponent implements OnInit{
    // goods: Goods[];
    stats: any;
    power: number;

    // agility: number;
    // intuition: number;
    // health:number;
    // intellect: number;
    // constructor(private goodsService: GoodsService){}
    constructor(private heroService: HeroService) {
    }
    ngOnInit(){

            this.heroService.eventEm.subscribe((things: any) => {
                console.log(things);
                // this.belt = goods.belt;
                // this.boots = goods.boots;
                // this.bracers = goods.bracers;
                // this.helmet = goods.helmet;
                // this.shield = goods.shield;
                // this.sword = goods.sword;
            });
    }

}

