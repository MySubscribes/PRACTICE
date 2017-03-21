import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class BooksService{
    constructor(private http: Http){}
    books: any;

    getBooks(){
        return this.http.get('http://www.anapioficeandfire.com/api/books')
                   .map(res => res.json());
    }

    getBookiD(id){
      return this.http.get(`http://www.anapioficeandfire.com/api/books/${id}`)
        .map(res => res.json());
    }
}

export interface Bookses{
  url: string;
  name: string;
  isbn: any;
  id: any;
  view: any;
  povCharacters:any;
  characters: any;
}





