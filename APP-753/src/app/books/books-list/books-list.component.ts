import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Bookses, BooksService} from '../../shared/books.service';
import {ImgService, Images} from '../../shared/Img.service';


@Component({
    moduleId: module.id,
    selector: 'books-list',
    templateUrl: 'books-list.component.html',
    styleUrls: ['books-list.component.css']
})

export class BookListComponent implements OnInit {

    books: Bookses[];
    imgs: any = [];
    // img: any = [];


    constructor( private router: Router,
                 private imgService: ImgService,
                 private booksService: BooksService ) {
    }

    ngOnInit() {
      this.booksService.getBooks().subscribe(books => {
        this.books = books;
        this.imgs = this.imgService.getImg();
        console.log('this.imgs', this.imgs);

        this.books.forEach(book => {
          let id = 2;
          // debugger
          const img = this.imgs.find(elem => {
              if (elem.id === id){
                return elem
              }
              else {console.log(3)}
          });
          book.view = img.view;
        });
        console.log('this.books', this.books);
        console.log('this.imgs', this.imgs);
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



