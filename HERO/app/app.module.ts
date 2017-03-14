
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {GoodsService} from './shared/goods.service';
import {HeroGoodsStatsComponent} from "./hero-bagage-goods/hero-goods-stats/hero-goods-stats.component";
import {HeroComponent} from "./hero/hero.component";

import {ThingComponent} from "./hero-bagage-goods/thing.component/thing.component";
import {HeroService} from "./hero/hero.service";
import {HeroBagageComponent} from "./hero-bagage-goods/hero-bagage.component";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        HeroGoodsStatsComponent,
        HeroComponent,
        ThingComponent,
        HeroBagageComponent
    ],
    providers: [HeroService, GoodsService, ThingComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
