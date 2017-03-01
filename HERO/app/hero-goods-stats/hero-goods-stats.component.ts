
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component ({
    moduleId: module.id,
    selector: 'goods-stats',
    templateUrl: 'hero-goods-stats.component.html',
    styleUrls: ['hero-goods-stats.component.css']
})

export class HeroGoodsStatsComponent {
    @Input() stat:any;

}

