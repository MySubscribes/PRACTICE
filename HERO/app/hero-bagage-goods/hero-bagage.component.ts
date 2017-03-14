import {Component, OnInit} from '@angular/core';
import {Goods} from "../shared/goodsClass";
import {GoodsService} from "../shared/goods.service";
import {HeroService} from "../hero/hero.service";


@Component ({
    moduleId: module.id,
    selector: 'bagage-goods',
    templateUrl: 'hero-bagage.component.html',
    styleUrls:['hero-bagage.component.css'],
})

export class HeroBagageComponent implements OnInit {
    goods: Goods[];

    constructor(private goodsService: GoodsService) {
        this.goods = [];
    }

    ngOnInit() {
        this.goods = this.goodsService.goods;
    }
}



