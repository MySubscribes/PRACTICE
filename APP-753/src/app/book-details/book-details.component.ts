import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";
import {PostService, Bookses} from "../shared/books.service";


@Component({
    moduleId: module.id,
    selector: "book-details",
    templateUrl: "book-details.component.html"
})

export class BookDetailsComponent implements OnInit {
    books: Bookses[];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private postService: PostService ) {}

    ngOnInit() {
        // this.activatedRoute.params.forEach((params: Params) => {
        //     let id = +params["name"];
        //     this.service
        //         .getBook(id)
        //         .then(result => this.book = result);
        // });

      this.postService.getPosts().subscribe(books => {
        this.books = books;
      })

    }

    goToPhrasesList() {
        this.router.navigate(["books"]);
    }
}
