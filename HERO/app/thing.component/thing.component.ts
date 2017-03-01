
import { Component} from '@angular/core';
import {Goods} from "../shared/goodsClass";
import {goods} from "../shared/goods";


@Component ({
    moduleId: module.id,
    selector: 'thing',
    templateUrl: 'thing.component.html',
    styleUrls: ['thing.component.css']
})

export class ThingComponent {
    goods: Goods = goods;
}
