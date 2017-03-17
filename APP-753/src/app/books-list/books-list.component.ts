import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import {PostService, Bookses} from "../shared/books.service";

@Component({
    moduleId: module.id,
    selector: "books-list",
    templateUrl: "books-list.component.html",
    styleUrls: ["books-list.component.css"]
})

export class BookListComponent implements OnInit {

    books: Bookses[];
    constructor(private router: Router,
                private postService:PostService ) {
    }

    ngOnInit() {
      this.postService.getPosts().subscribe(books => {
        this.books = books;
      });
    }

    onSelect(selected: Bookses) {
        this.router.navigate(["books", selected.name]);
    }
}


