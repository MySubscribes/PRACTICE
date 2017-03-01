
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeroService } from './shared/hero.service';
import {HeroGoodsStatsComponent} from "./hero-goods-stats/hero-goods-stats.component";
import {HeroComponent} from "./hero/hero.component";
import {HeroBagageGoodsComponent} from "./hero-bagage-goods/hero-bagage-goods.component";
import {HeroBagageComponent} from "./hero-bagage/hero-bagage.component";
import {ThingComponent} from "./thing.component/thing.component";


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
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {}
