import {Hero} from "./hero";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
    get hero(): Hero {
        return this._hero;
    }

    set hero(value: Hero) {
        this._hero = value;
    }
    private _hero: Hero = new Hero();
}



