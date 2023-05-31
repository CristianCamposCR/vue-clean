export type Entity<Tidentifier extends number | string> = {
    id? : Tidentifier
}

export type ResponseApi<T> = {
    status : number;
    result : boolean;
    message? : string;
    entities? : T[];
    entity? : T;
}