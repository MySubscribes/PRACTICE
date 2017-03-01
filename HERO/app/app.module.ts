
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {GoodsService} from './shared/goods.service';
import {HeroGoodsStatsComponent} from "./hero-bagage-goods/hero-goods-stats/hero-goods-stats.component";
import {HeroComponent} from "./hero/hero.component";
import {HeroBagageGoodsComponent} from "./hero-bagage-goods/hero-bagage-goods.component";
import {HeroBagageComponent} from "./hero-bagage/hero-bagage.component";
import {ThingComponent} from "./thing.component/thing.component";
import {HeroService} from "./hero/hero.service";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        HeroGoodsStatsComponent,
        HeroComponent,
        HeroBagageGoodsComponent,
        HeroBagageComponent,
        ThingComponent
    ],
    providers: [HeroService, GoodsService ],
    bootstrap: [AppComponent]
})

export class AppModule {}
