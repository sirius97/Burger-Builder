import * as actionType from './action';

const initialState = {
    ingridiants : {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIANT:
            return{
                ...state,
                ingridiants: {
                    ...state.ingridiants
                    [action.ingrediantName] = state.ingridiants[action.ingrediantName] + 1
                }
            }
        case actionType.REMOVE_INGREDIANT:
            return{
                ...state,
                ingridiants: {
                    ...state.ingridiants
                    [action.ingrediantName] = state.ingridiants[action.ingrediantName] - 1
                }
            }
        default:
            return state;

    }
}

export default reducer;