import {
    AddTodo,
    UpdateTodo,
    GetToDoList,
    DeleteTodo
} from "./Types";


export function addToDoList(addToDo) {
    return {
        type: AddTodo,
        payload: addToDo
    };
}

export function updateToDoList(updateToDo) {
    return {
        type: UpdateTodo,
        payload: updateToDo
    };
}


export function deleteToDoList(deleteToDo) {
    return {
        type: DeleteTodo,
        payload: deleteToDo
    };
}

