import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";

export class Client {
    id!: number;
    cognomeContatto!: string;
    dataInserimento!: string;
    dataUltimoContatto!: string;
    email!: string;
    emailContatto!: string;
    fatturatoAnnuale!: number;
    indirizzoSedeLegale!: IndirizzoSedeLegale;
    indirizzoSedeOperativa!: IndirizzoSedeOperativa;
    nomeContatto!: string;
    partitaIva!: string;
    pec!: string;
    ragioneSociale!: string;
    telefono!: number;
    telefonoContatto!: number;
    tipoCliente!: string;

    constructor() {
        this.indirizzoSedeLegale = new IndirizzoSedeLegale;
        this.indirizzoSedeOperativa = new IndirizzoSedeOperativa;
        this.dataInserimento = '2019-06-01T08:11:01.911+00:00';
        this.dataUltimoContatto = '2021-03-05T02:06:28.393+00:00';
    }
}
