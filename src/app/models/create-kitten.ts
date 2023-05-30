import { DatePipe } from "@angular/common";

export class Kitten {
    constructor(
        public name: string,
        public race: string,
        public birth_date: Date,
        public photo: string
    ) {}
}