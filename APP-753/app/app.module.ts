import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

// components
import { HomeComponent } from "./home/home.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";
import { PhraseListComponent } from "./phrase-list/phrase-list.component";

// services

import {BooksService} from "./shared/books.service";
import {PostService} from "./shared/my.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent,
        HomeComponent,
        PhraseDetailsComponent,
        PhraseListComponent
    ],
    providers: [BooksService, PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }

