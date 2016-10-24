/**
 * Created by pskrebnev on 20.10.2016.
 */
export interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}



