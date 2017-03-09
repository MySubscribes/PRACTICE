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
    private stat: any = [
        'power','agility','intuition','health','intellect'
    ];

    power: number;
    agility: number;
    intuition: number;
    health: number;
    intellect: number;


    eventEm = new EventEmitter();
    eventEmSkills = new EventEmitter();

    heroUndress(selectThing: any){
        if (this[selectThing.type]){
            this[selectThing.type].wear = false;
        }
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

    refreshSkills() {

        for(let stat of this.stat){
            this[stat] = 0;
        }
        for(let think of this.things) {
            if (this[think]!== null) {
                for (let stat in this[think].stats) {
                    this[stat] += this[think].stats[stat];
                }
            }
        }
        this.updateSkills();
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
