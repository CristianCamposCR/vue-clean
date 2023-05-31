import { Entity } from "@/kernel/types";

export type Person = Entity<number> & {
    name: string;
    job: string;
    createdAts? : Date
}