interface  Airplane{
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number; //опциональное поле
}

const tu: Airplane ={
    numberOfEngines: 4,
    isJet: false,
    maxHeight: 10000,
    capacity: 150
}

const mig: Airplane ={
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 10000
}