import * as actionTypes from './actionTypes';


const initialState ={

    dataDisplay: [],
    autoComplete: false
    
    
}

const addCardReducer =(state = initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_USER_CARD:
        return {
            ...state,
            dataDisplay: [...state.dataDisplay, action.dataDisplay],
            autoComplete: true
        }
        case actionTypes.REMOVE_USER_CARD:
        return {
            ...state, 
            dataDisplay: [...state.dataDisplay.filter(item => item.id !== action.id)]

        }
        default:
            return state;
    }
    
};

export default addCardReducer;

