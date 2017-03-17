import { Component, OnInit } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Bookses, BooksService} from "../../shared/books.service";


@Component({
    moduleId: module.id,
    selector: "book-details",
    templateUrl: "book-details.component.html"
})

export class BookDetailsComponent implements OnInit {
    book: Bookses;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private booksService: BooksService
    ) {}

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.booksService.getBook(params.id).subscribe(book => {
          this.book = book;
        });
      });

    }

    goToBooksList() {
      this.router.navigate(["books"]);
    }
}


// this.activatedRoute.params.forEach((params: Params) => {
//   // console.log(params);
//   this.isbn = params['isbn'];
//     console.log(this.isbn);
//       this.postService.getPosts().subscribe(
//         books => {this.books = books;
//         console.log(this.books);
//       })
// });


