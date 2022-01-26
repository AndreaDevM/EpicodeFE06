import { Client } from "./client";
import { StatoFatture } from "./stato-fatture";

export class Fatture {

    id?: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: StatoFatture;
    cliente!: Client;

    constructor(){
        this.stato = new StatoFatture;
        this.cliente = new Client;
    }


}
