abstract class Lavoratore {

    constructor(public type:string, public codredd:number, public redditoAnnuoLordo:number, public tasseInps:number, public tasseIrpef:number){
        console.log(`Reddito Netto di ${this.type}`, this.getRedditoAnnuoNetto)
    }

    get getUtileTasse():number {
        return (this.codredd*this.redditoAnnuoLordo)/100
    }

    get getTasseInps():number {
        return (this.getUtileTasse*this.tasseInps)/100
    }

    get getTasseIrpef():number {
        return (this.getUtileTasse*this.tasseIrpef)/100
    }

    get getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - (this.getTasseInps + this.getTasseIrpef)
    }
}

class Commerciante extends Lavoratore{
    constructor() {
        super('Commerciante', 40, 25000, 24, 27)
    }
}

class Ambulante extends Lavoratore{
    constructor() {
        super('Ambulante', 54, 10000, 25, 26)
    }
}

class Edilizia extends Lavoratore{
    constructor() {
        super('Edilizia', 86, 100000, 27, 36 )
    }
}

class Mario extends Lavoratore {
    constructor() {
        super('Mario il fortunato', 0, 1000000, 0, 0)
        console.log('Tasse INPS di Mario',this.getTasseInps)
        console.log('Tasse IRPEF di Mario',this.tasseIrpef);
        console.log('Mario non paga le tasse');
        
        
    }
}

let commerciante = new Commerciante
let ambulante = new Ambulante
let edile = new Edilizia
let mario = new Mario
