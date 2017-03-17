import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BookListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {HouseListComponent} from "./houses-list/houses-list.component";



export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "books",
        component: BookListComponent
    },
    {
        path: "books/:name",
        component: BookDetailsComponent
    },
    {
      path: "houses",
      component: HouseListComponent
    }

];
