import Action from "./types/Action";
import SandwichState from "./types/SandwichState";

// начальное значение централизованного состояния
const initialState: SandwichState = {
    value: ''
};
export default function sandwichReducer(
    state: SandwichState = initialState,
    action: Action
    // state - централизованное состояние
    // action - это объект в котором два поля type и payload
    // type - тип действия (имя нашего действия)
    // payload - данные действия (информация необходимая для выполнения операции)
): SandwichState{
    switch(action.type){
        case 'sandwich/addIngredient':
            return {...state,value: `${state.value} ${action.payload}`};
        case 'sandwich/clear':
            return{ ...state, value: '' };
        default:
            return state;
    }
}