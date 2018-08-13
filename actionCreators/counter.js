import { INC, DEC } from "../actionTypes/counter";

export function incActionCreator(by=1){
    return{
        type: INC,
        by
    }
}

export function decActionCreator(by=1){
    return{
        type: DEC,
        by
    }
}