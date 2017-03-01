
const baseSkills =  {
    power: 10,
    agility: 10,
    intuition: 10,
    stamina:10,
    intellect: 10
};

export class Hero {
    get sword(): any {
        return this._sword;
    }

    set sword(value: any) {
        if (this._sword !== undefined) {
            // minusSkills()
        }
        this._sword = value;
        // plusSkills()
    }
    get helmet(): any {
        return this._helmet;
    }

    set helmet(value: any) {
        console.log('Before', this._helmet);
        this._helmet = value;
        // this.setSkills(value.skills);
        console.log('After', this._helmet);
    }


    get skills(): any {
        return this._skills;
    }

    set skills(value: any) {
        this._skills = value;
    }

    private setSkills(skills:any) {
        /**
         * @todo Считаем скилы с новыми значениями
         */
    }

    private _skills: any;
    private _helmet: any;
    private _sword: any;
    constructor( public name: string = 'Roma'){
        this._skills = baseSkills;

    }
}
