import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
// import {Http} from '@angular/http';
import {BooksService} from '../../shared/books.service';
import {CharacterService} from '../../shared/characters.service';


@Component({
    moduleId: module.id,
    selector: 'hero-details',
    templateUrl: 'hero-details.component.html',
    styleUrls: ['hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  
    char: Char[];
    
         constructor(
          private router: Router,
          private activatedRoute: ActivatedRoute,
          // private booksService: BooksService,
          private characterService: CharacterService,
          // private http: Http
        ) {}
        
  ngOnInit(){
      this.activatedRoute.params.subscribe((params: any) => {
        this.characterService.getChariD(params.id).subscribe(char => {
          this.char = char;

          
        });
      });
  
    console.log(this.char);
  
  }

  
  // goToBooksList():void {
  //   this.router.navigate(['books']);
  // }
}

export interface Char {
  id:number;
  url: string;
  name:string,
  gender:string,
  culture:string,
  povBooks:string,
  playedBy:string,
  view:string,
  titles:string
}

