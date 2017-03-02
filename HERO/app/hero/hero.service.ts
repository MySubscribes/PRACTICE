import {Hero} from "./hero";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class HeroService {
    armor: any;
    belt: any;
    boots:any;
    bracers:any;
    helmet:any;
    shield:any;
    sword:any;

    hero: Hero = new Hero();
    eventEm = new EventEmitter();

    undress(type: string){
        if(type === 'armor'){

        }
        console.log(this.wear);

    }

    addNewGoods(target:any){
        if(target.type == 'armor'){
            this.armor = target.view;
            this.updateItem();
            }

        if(target.type === 'belt'){
            this.belt = target.view;
            this.updateItem();
        }
        if(target.type === 'boots'){
            this.boots = target.view;
            this.updateItem();
        }
        if(target.type === 'bracers'){
            this.bracers = target.view;
            this.updateItem();
        }
        if(target.type === 'helmet'){
            this.helmet = target.view;
            this.updateItem();
        }
        if(target.type === 'shield'){
            this.shield = target.view;
            this.updateItem();
        }
        if(target.type === 'sword'){
            this.sword = target.view;
            this.updateItem();
        }
        // else{console.log('не работает')}
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



