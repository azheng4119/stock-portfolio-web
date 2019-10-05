import axios from 'axios'


export const loginThunk = (userData) => dispatch =>{
    
}

export const registerUserThunk = (userData, history) => async(dispatch) => {
    await axios.post('https://stockportfolio-api.herokuapp.com/auth/register', userData)
    .then(res=>history.push('/'))
    .catch(err =>
        console.log(err)
    );
};