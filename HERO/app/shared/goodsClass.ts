//
// export class Goods{
//     constructor( public name:string,
//                  public view:string,
//                  public stats: {
//                      power: number;
//                      agility: number;
//                      intuition: number;
//                      stamina: number;
//                      intellect: number
//                  }){}
// }

export class Hero {
    constructor( public title: string,
                 public completed: boolean = false,
                 public id: any = +new Date()){}
}
