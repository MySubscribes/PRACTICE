import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

// components
import {HomeComponent } from "./home/home.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookListComponent} from "./books-list/books-list.component";

// services
import {PostService} from "./shared/books.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {HoussesService} from "./shared/houses.service";
import {HouseListComponent} from "./houses-list/houses-list.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [AppComponent,
        HomeComponent,
        BookDetailsComponent,
        BookListComponent,
        HouseListComponent

    ],
    providers: [PostService, HoussesService],
    bootstrap: [AppComponent]
})
export class AppModule { }

