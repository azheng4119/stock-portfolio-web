import axios from 'axios'

export const addSymbol = symbol => {
    return {
        type: 'ADD_SYMBOL',
        payload: symbol
    }
}

export const addSymbolThunk = (symbol,qty) => async dispatch => {
    console.log(symbol,qty);
    try {
        let { data } = await axios.get(`https://api-stock-portfolio.herokuapp.com/symbols/${symbol}`)
        if (data['4. close']) {
            console.log('added')
            let payload = {
                symbol : symbol,
                cost : data[`4. close`],
                timeBought : Date.now(),
                shares : qty
            }
            dispatch(addSymbol(payload))
        }else{
            console.log('Not found')
        }
    } catch (error) {
        console.log(error)
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_SYMBOL':
            return [
                ...state, action.payload
            ]
        default:
            return state
    }
}