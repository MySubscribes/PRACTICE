import {Component, OnInit} from '@angular/core';
import {Goods} from "../shared/goodsClass";
import {GoodsService} from "../shared/goods.service";


@Component ({
    moduleId: module.id,
    selector: 'houses',
    templateUrl: 'houses.component.html',
    styleUrls:['houses.component.css'],
})

export class HousesComponent implements OnInit {
    goods: Goods[];

    constructor(private goodsService: GoodsService) {
        this.goods = [];
    }

    ngOnInit() {
        this.goods = this.goodsService.goods;
    }
}



