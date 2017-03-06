import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class HeroService {

    armor: any = null;
    belt: any = null;
    boots:any = null;
    bracers:any = null;
    helmet:any = null;
    shield:any = null;
    sword:any = null;

    eventEm = new EventEmitter();
    undress(type: any){
        if (this[type]){
            this[type].wear = false;
            this[type] = null;
        }
    }
    heroUndress(selectThing: any){
        this[selectThing.type] = null;
        this.updateItem();
    }

    addNewThing(selectThing:any){
        if (selectThing.type){
            this[selectThing.type] = selectThing;
            this.updateItem();
        }
        this[selectThing.type].wear = true;
    }
    updateItem(){
        this.eventEm.emit({
            armor: this.armor,
            belt: this.belt,
            boots: this.boots,
            bracers: this.bracers,
            helmet: this.helmet,
            shield: this.shield,
            sword: this.sword,
        });
    }


    // addNewSkills(){
    //
    // }
}



