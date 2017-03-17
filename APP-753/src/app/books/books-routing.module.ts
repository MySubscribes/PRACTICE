
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BookListComponent} from "./books-list/books-list.component";
import {BookDetailsComponent} from "./book-details/book-details.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: "books",
      component: BookListComponent
    },
    {
      path: "books/:id",
      component: BookDetailsComponent
    }
    ]),
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
