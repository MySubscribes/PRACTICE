import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import {Books} from "../shared/books";
import {BooksService} from "../shared/books.service";
import {PostService} from "../shared/my.service";

@Component({
    moduleId: module.id,
    selector: "phrase-list",
    templateUrl: "phrase-list.component.html",
    styleUrls: ["phrase-list.component.css"]
})

export class PhraseListComponent implements OnInit {

    bookss: Books[];
    books: Bookses[];

    constructor(private router: Router,
                private booksService: BooksService,
                private postService:PostService ) {

        this.postService.getPosts().subscribe(books => {
            this.books = books;
        });

    }

    ngOnInit() {
        this.booksService
            .getAll()
            .then(result => this.bookss = result);
    }

    onSelect(selected: Books) {
        this.router.navigate(["phrase", selected.id]);
    }
}


interface Post{
    title: string;
    name: string;
}

interface Bookses{
    name: string;
}

