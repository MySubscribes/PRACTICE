
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {GoodsService} from "../../shared/goods.service";
import {Goods} from "../../shared/goodsClass";



@Component ({
    moduleId: module.id,
    selector: 'goods-stats',
    templateUrl: 'hero-goods-stats.component.html',
    styleUrls: ['hero-goods-stats.component.css']
})

export class HeroGoodsStatsComponent implements OnInit{
    goods: Goods[];
    // @Input() oneThing:any;
    name: any;
    // stats: any;
    // power: number;
    // agility: number;
    // intuition: number;
    // health:number;
    // intellect: number;
    constructor(private goodsService: GoodsService){}
    ngOnInit(){
       // this.goods = this.goodsService.getStats();
       // this.name = this.goods[0].name;
       // console.log(this.name)
    }

}

