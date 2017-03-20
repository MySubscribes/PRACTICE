import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Bookses, BooksService} from '../../shared/books.service';
import {CharacterService, Characters} from '../../shared/characters.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';


@Component({
    moduleId: module.id,
    selector: 'book-details',
    templateUrl: 'book-details.component.html',
    styleUrls: ['book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
    book: Bookses;
    characters: Characters[];
    // b: any = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private booksService: BooksService,
        // private characterService: CharacterService,
        private http: Http
    ) {}

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: any) => {
        this.booksService.getBookiD(params.id).subscribe(book => {
          this.book = book;
  
          Observable.forkJoin([
          // this.http.get(this.book.povCharacters)
            this.http.get(this.book.povCharacters[0]),
            this.http.get(this.book.povCharacters[1]),
            this.http.get(this.book.povCharacters[2]),
            this.http.get(this.book.povCharacters[3]),
            this.http.get(this.book.povCharacters[4]),
            this.http.get(this.book.povCharacters[5]),
            this.http.get(this.book.povCharacters[6]),
            this.http.get(this.book.povCharacters[7]),
            this.http.get(this.book.povCharacters[7])
            // this.http.get(this.book.povCharacters[8]),
            // this.http.get(this.book.povCharacters[9])
          ]).subscribe(data => {
            console.log(data);
            let charackers = data.map(char => char.json());
            this.characters = charackers;
            console.log('charackers', charackers);
          });
                    
          
          
  
        //   for(let i=1;  i<7; i++) {
        //        Observable.forkJoin([
        //          this.http.get(this.book.povCharacters[i]),
        //          this.http.get(this.book.povCharacters[1])
        //        ])
        //         .subscribe(data => {
        //         console.log(data);
        //         // debugger
        //         let characters = data.map(char => char.json());
        //         // this.characters.push(characters);
        //         console.log(characters);
        //         this.characters = characters;
        //
        //       });
        //   }
        //   console.log('this.characters', this.characters);
        //   // }
        });
      });
    }

    goToBooksList() {
      this.router.navigate(['books']);
    }
}

// РАБОЧЕЕ
// Observable.forkJoin([
//   // this.http.get(this.book.povCharacters)
//   this.http.get(this.book.povCharacters[1]),
//   this.http.get(this.book.povCharacters[2]),
//   this.http.get(this.book.povCharacters[3])
// ]).subscribe(data => {
//   console.log(data);
//   let charackers = data.map(char => char.json());
//   this.characters = charackers;
//   console.log('charackers', charackers);
// });




//
// this.http.get('http://anapioficeandfire.com/api/characters/232').subscribe(
//
//   result => this.httpArray = result.json(),
//   error => console.log(error.statusText))
//





// this.book.characters

//   for(let i of this.book.povCharacters){
//     console.log(i);
//     Observable.forkJoin([
//       this.http.get(i)
//     ]).subscribe(data => {
//       console.log(data);
//       let charackers = data.map(char => char.json());
//       this.book.povCharacters = charackers;
//       console.log('charackers', charackers);
//     });
// }
// this.http.get(this.book.povCharacters[1]),
// this.http.get(this.book.povCharacters[2]),
// this.http.get(this.book.povCharacters[3])



// ----------------------------------------
// ngOnInit() {
//   this.activatedRoute.params.subscribe((params: any) => {
//     this.booksService.getBookiD(params.id).subscribe(book => {
//       this.book = book;
//
//       for(let i=1;  i<7; i++) {
//
//         // console.log(this.book.povCharacters[2]);
//         // console.log(this.book.povCharacters);
//
//         // console.log('this.b',this.b);
//         //   console.log(Object.keys(this.book.povCharacters));
//         // console.log(this.a);
//         // let i = (Object.keys(this.book.povCharacters));
//         // console.log(i);
//         Observable.forkJoin([
//
//           // this.http.get(Object.keys(this.book.povCharacters)),
//           // this.http.get(this.book.povCharacters[1]),
//
//           this.http.get(this.book.povCharacters[i])
//
//         ]).subscribe(data => {
//           // console.log(data);
//           // debugger
//           let characters = data.map(char => char.json());
//           // this.characters.push(characters);
//           this.characters = characters;
//
//         });
//       }
//       console.log('this.characters', this.characters);
//       // }
//     });
//
//   });
// }
