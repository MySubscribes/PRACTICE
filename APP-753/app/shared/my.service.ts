import {Injectable} from "@angular/core";
// import {Books} from "./books";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';


@Injectable()
export class PostService{
    constructor(private http: Http){}
    getPosts(){
        return this.http.get('http://www.anapioficeandfire.com/api/books')
                   .map(res => res.json());
    }
}


