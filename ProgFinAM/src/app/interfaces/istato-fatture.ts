import { StatoFatture } from "../classes/stato-fatture";

export interface IstatoFatture {

    content: Array<StatoFatture>
    empty: string;
    first: string;
    last: string;
    number: number;
    numberOfElements: number;
    pageable: Object ;
    size: number;
    sort: Object;
    totalElements: number;
    totalPages: number;

}
