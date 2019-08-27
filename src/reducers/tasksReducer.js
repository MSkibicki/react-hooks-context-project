import uuid from "uuid/v1";

export const tasksReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return [...state, {
                name: action.task.name,
                date: action.task.date,
                id: uuid()
            }]
            case "REMOVE_TASK":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
    }
}