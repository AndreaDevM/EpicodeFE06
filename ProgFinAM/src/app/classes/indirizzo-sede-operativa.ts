import { Comune } from "./comune";

export class IndirizzoSedeOperativa {
    id?: number;
        cap!: number;
        civico!: number;
        localita!: string;
        via!: string;
        comune!: Comune;

        constructor() {
            this.comune = new Comune;
        }
}
