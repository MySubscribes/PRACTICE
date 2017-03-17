import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import {Bookses, BooksService} from "../../shared/books.service";
// import {ImgService, Images} from "../../shared/img.service";


@Component({
    moduleId: module.id,
    selector: "books-list",
    templateUrl: "books-list.component.html",
    styleUrls: ["books-list.component.css"]
})

export class BookListComponent implements OnInit {

    books: Bookses[];
    // img: Images;
    constructor(private router: Router,
                // private imgService: ImgService,
                private booksService:BooksService ) {
    }

    ngOnInit() {
      this.booksService.getBooks().subscribe(books => {
        this.books = books;
      });

    }

    onSelect(selected: Bookses) {
      let link = selected.url;
      let linkId = link.split('/');
      let id = linkId[linkId.length-1];
      selected.id = +id;
      this.router.navigate(["books", selected.id]);
    }
}


// this.books.img = this.imgService.getImg()
