export const addToHistory = amount => {
    return {
        type: 'ADD_TO_HISTORY',
        payload: amount
    }
}

export const adjustStartingHistory =  amount => {
    return {
        type : 'ADJUST',
        payload : amount
    }
}



export default (state = [],action) => {
    switch (action.type){
        case 'ADD_TO_HISTORY' :
            return [...state , action.payload];
        case 'ADJUST' :
            return action.payload
        default:
            return state;
    }
}