import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {Books} from "../shared/books";
import {BooksService} from "../shared/books.service";
import {PostService} from "../shared/my.service";

import 'rxjs/add/operator/map';



@Component({
    moduleId: module.id,
    selector: "phrase-details",
    templateUrl: "phrase-details.component.html"
})

export class PhraseDetailsComponent implements OnInit {

    book: Books;


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: BooksService,
        private postservice: PostService ) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.service
                .getBook(id)
                .then(result => this.book = result);
        });

    }

    goToPhrasesList() {
        this.router.navigate(["phrases"]);
    }
}
