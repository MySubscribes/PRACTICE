
export class Goods{
    constructor( public type:string,
                 public view:string,
                 public stats: {
                     power: number;
                     agility: number;
                     intuition: number;
                     health: number;
                     intellect: number
                 }){}
}

export interface Goods1{
    power: number;
    agility: number;
    intuition: number;
    health: number;
    intellect: number;
}