import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class CharacterService{
    constructor(private http: Http){}
    getCharacters(){
        return this.http.get('http://www.anapioficeandfire.com/api/characters')
                   .map(res => res.json());
    }
}

export interface Characters{
  // "url": "http://anapioficeandfire.com/api/characters/583",
  name: string;
  gender: string;
  culture: string;

}


