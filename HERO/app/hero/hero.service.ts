import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class HeroService {

    eventAddThing = new EventEmitter();
    eventUndressThing = new EventEmitter();

    addNewThing(selectThing: any) {
        this.eventAddThing.emit(selectThing);
    }
}

