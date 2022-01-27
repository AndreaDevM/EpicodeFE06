import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";

export class Client {

    id?: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: number;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: number;
    emailContatto!: string;
    indirizzoSedeOperativa!: IndirizzoSedeOperativa;
    indirizzoSedeLegale!: IndirizzoSedeLegale;
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale?: number;

    constructor() {
        this.indirizzoSedeLegale = new IndirizzoSedeLegale;
        this.indirizzoSedeOperativa = new IndirizzoSedeOperativa;
        this.dataInserimento = '2019-06-01T08:11:01.911+00:00';
        this.dataUltimoContatto = '2021-03-05T02:06:28.393+00:00';
    }
}
