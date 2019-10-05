export const addSymbol = symbol => {
    return {
        type: 'ADD_SYMBOL',
        payload: symbol
    }
}

const updatePayload = (payload,newPayload) => {
    if (!(newPayload.symbol in payload)) {
        payload[newPayload.symbol] = newPayload
    }
    else{
        newPayload.shares += payload[newPayload.symbol].shares;
        newPayload.timeBought = payload[newPayload.symbol].timeBought.concat(newPayload.timeBought);
        payload[newPayload.symbol] = newPayload
    }
    return payload
}

export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SYMBOL':
            updatePayload(state,action.payload)
            return state
        default:
            return state
    }
}