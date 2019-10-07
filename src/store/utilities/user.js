import Axios from "axios"

export const updateUser = data => {
    return {
        type: 'UPDATE_USER',
        payload: data
    }
}

export const setUserThunk = id => async dispatch => {
    try {
        let {data} = await Axios.get(`https://api-stock-portfolio.herokuapp.com/user/${id}`)
        if (data) dispatch(updateUser(data));
    }catch(error){
        console.log(error)
    }
}

export const updateUserThunk = (id,data) => async dispatch => {
    try {
        console.log(id,data)
        await Axios.put(`https://api-stock-portfolio.herokuapp.com/user/${id}`,data)
    }catch(error){
        console.log(error)
    }
    await dispatch(updateUser(data))
}

export default (state = {}, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload
        case "UPDATE_USER" :
            Object.keys(action.payload).map(key => state[key] = action.payload[key]);
            return state
        default:
            return state;
    }
}

