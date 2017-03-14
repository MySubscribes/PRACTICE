
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HttpModule}   from '@angular/http';

import {GoodsService} from "./shared/goods.service";
import {MembersComponent} from "./members/members.component";
import {PersonComponent} from "./members/person/person.component";
import {HousesComponent} from "./houses/houses.component";
import {BooksComponent} from "./books/books.component";



@NgModule({
    imports: [BrowserModule, HttpModule,
        RouterModule.forRoot([
            {path: "books", component: BooksComponent},
            {path: "houses", component: HousesComponent},
            {path: "members", component: MembersComponent},
            {path: "", redirectTo: "books", pathMatch: "full"}
        ])
    ],
    declarations: [
        AppComponent,
        MembersComponent,
        PersonComponent,
        HousesComponent,
        BooksComponent
    ],
    providers: [GoodsService],
    bootstrap: [AppComponent]
})

export class AppModule {}
