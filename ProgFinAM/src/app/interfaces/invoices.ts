import { Fatture } from "../classes/fatture";

export interface Invoices {

    content: Array<Fatture>;
    empty: false;
    first: true;
    last: false;
    number: number;
    numberOfElements: number;
    pageable: Object;
    size: number;
    sort: Object;
    totalElements: number;
    totalPages: number;

}
