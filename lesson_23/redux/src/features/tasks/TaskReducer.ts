import { uid } from "uid"; // uid - генератор уникальных идентификаторов
import Action from "./types/Action";
import TasksState from "./types/TasksState";
import { stat } from "fs";

const initialState: TasksState = [
    {
        id: uid(),
        title: 'Изучить React',
        description: 'Изучить Redux, React, Typescript',
        isDone: false
    }
];
export default function tasksReducer(
    state: TasksState = initialState,
    action: Action
): TasksState{
    switch(action.type) {
        case 'tasks/addTask':
            return[...state,{...action.payload, id: uid() }];
        case 'tasks/changeStatus':
            return state.map((task) => (task.id === action.payload ?
                {...task, isDone: !task.isDone } : task));
        case 'tasks/removeTask':
            return state.filter((task) => task.id !== action.payload);
        default:
            return state;

    }
}