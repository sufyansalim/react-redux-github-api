import * as actionTypes from './actionTypes';


export const addUserCard = (dataDisplay) => {
    return{
        type: actionTypes.ADD_USER_CARD,
        dataDisplay
    
    }
};

export const removeUserCard = (id) => {
    return{
        type: actionTypes.REMOVE_USER_CARD,
        id: id
    }
};


