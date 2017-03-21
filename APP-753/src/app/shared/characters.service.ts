import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

export const characters = [
  {
    name: 'Daenerys Targaryen',
    view: '../../../assets/heroimg/DaenerysTargaryen.jpg',
  },
  
  {
    name: 'Arya Stark',
    view: '../../../assets/heroimg/AryaStark.jpg',
  },
  
  {
    name: 'Brandon Stark',
    view: '../../../assets/heroimg/BrandonStark.jpg',
  },
  
  {
    name: 'Catelyn Stark',
    view: '../../../assets/heroimg/CatelynStark.jpg',
  },
  
  {
    name: 'Eddard Stark',
    view: '../../../assets/heroimg/EddardStark.jpg',
  },
  
  {
    name: 'Tyrion Lannister',
    view: '../../../assets/heroimg/TyrionLannister.jpg',
  },
  
  {
    name: 'Jon Snow',
    view: '../../../assets/heroimg/JonSnow.jpg',
  },
  
  {
    name: 'Sansa Stark',
    view: '../../../assets/heroimg/SansaStark.jpg',
  },
  
  {
    name: 'Will',
    view: '../../../assets/heroimg/Will.jpg',
  },
  {
    name: 'Duncan',
    view: '../../../assets/heroimg/Duncan.jpg',
  },
  {
    name: "Melisandre",
    view: '../../../assets/heroimg/Melisandre.jpg',
  }
];



@Injectable()
export class CharacterService{
    constructor(private http: Http){}
    
    imgCharacters: Characters[] = characters;
  
    getChariD(id){
      return this.http.get(`http://www.anapioficeandfire.com/api/characters/${id}`)
        .map(res => res.json());
    }
    
    getImgCharacters(){
      return this.imgCharacters;
    }
}

export interface Characters{
  name: any;
  view: any;
}


