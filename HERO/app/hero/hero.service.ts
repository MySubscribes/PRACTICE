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

    private things: any = [
        'armor','belt','boots','bracers','helmet','shield','sword'
    ];

    power = 0;
    agility = 0;
    intuition = 0;
    health = 0;
    intellect = 0;

    eventEm = new EventEmitter();
    eventEmSkills = new EventEmitter();

    undress(type: any){
        if (this[type]){
            this[type].wear = false;
            this[type] = null;
        }
    }

    heroUndress(selectThing: any){
        this[selectThing.type] = null;
        this.refreshSkills();
        this.updateItem();
    }

    addNewThing(selectThing:any){
        if (selectThing.type){
            this[selectThing.type] = selectThing;
            this.refreshSkills();
            this.updateItem();
        }
        this[selectThing.type].wear = true;
    }


    updateItem(){
        this.eventEm.emit({
            armor : this.armor,
            belt: this.belt,
            boots: this.boots,
            bracers: this.bracers,
            helmet: this.helmet,
            shield: this.shield,
            sword: this.sword,
        });
    }

    refreshSkills() {
        this.power = 0;
        this.agility = 0;
        this.intuition = 0;
        this.health = 0;
        this.intellect = 0;
            for(let think of this.things) {
               if (this[think]!== null) {
                console.log(this[think]);
                for (let stat in this[think].stats) {
                    this[stat] += this[think].stats[stat];
                }
            }
        }
        this.updateSkills();
    }

    updateSkills(){
        this.eventEmSkills.emit({
            power: this.power,
            agility: this.agility,
            intuition: this.intuition,
            health: this.health,
            intellect: this.intellect,
        });
    }
}
