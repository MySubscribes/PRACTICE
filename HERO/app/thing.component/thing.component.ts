import {Component, OnInit, Input} from '@angular/core';
// import {GoodsService} from  '../shared/goods.service';
// import {Goods} from "../shared/goodsClass";


@Component ({
    moduleId: module.id,
    selector: 'thing',
    templateUrl: 'thing.component.html',
    styleUrls: ['thing.component.css']
})

export class ThingComponent {
    // goods: Goods[];
    @Input() oneThing:any;

    // constructor(private goodsService: GoodsService ){}

}
