/**
 * Created by pskrebnev on 20.10.2016.
 */
namespace TodoApp.Model {

    export interface Todo {
        id: number;
        name: string;
        state: TodoState;
    }

}

namespace TodoApp.Model {

    export enum TodoState {
        New = 1,
        Active,
        Complete,
        Deleted
    }
}

