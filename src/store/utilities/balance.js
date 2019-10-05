export const addToBalance = amount => {
    return {
        type: 'ADD_TO_BALANCE',
        payload: amount
    }
}

export const subtractFromBalance = amount => {
    return {
        type: 'SUBTRACT_FROM_BALANCE',
        payload: amount
    }
}

export const adjustStartingBalance =  amount => {
    return {
        type : 'ADJUST',
        payload : amount
    }
}

export default (state = 5000,action) => {
    switch (action.type){
        case 'ADD_TO_BALANCE' :
            return state + action.payload;
        case 'SUBTRACT_FROM_BALANCE' :
            return state - action.payload;
        case 'ADJUST' :
            return action.payload
        default:
            return state;
    }
}