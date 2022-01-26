import { Comune } from "./comune";

export class IndirizzoSedeLegale {
    id!: number;
        via!: string;
        civico!: number;
        cap!: number;
        localita!: string;
        comune!: Comune;

        constructor() {
            this.comune = new Comune;
        }
}
