import {
    AddTodo,
    UpdateTodo,
    GetToDoList,
    DeleteTodo
} from "./Types"

const initialState = {
    toDoList:[{title:'My First Todo', description:'This is Description'},]
}

export default function ToDoReducer(state = initialState, action) {
    switch (action.type) {
        case AddTodo:
            return {
                ...state,
                toDoList: action.payload
            }
        case UpdateTodo:
            return {
                ...state,
                toDoList: action.payload
            }
        case DeleteTodo:
            return {
                ...state,
                toDoList: action.payload
            }
    }
    return state
}