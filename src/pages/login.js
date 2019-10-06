import React from 'react';
import axios from 'axios';
import md5 from 'blueimp-md5';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const FlexedDiv = styled.div`
display: flex;
height : 40vw;
flex-direction: column;
align-items: center;
justify-content: center;
`
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    attemptToLogin = async () => {
        let {data} = await axios.post(`https://api-stock-portfolio.herokuapp.com/user/login`,this.state)
        if (data === "Success"){
            
        }
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: name === "password" ? md5(target.value): target.value
        });
    }

    render() {
        return <FlexedDiv>
            <div>Stock Portfolio Log In</div>
            <br></br>
            <TextField
                label="Email"
                variant="outlined"
                onChange={this.handleChange('email')}
                placeholder="Email"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                onChange={this.handleChange('password')}
                placeholder="Password"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <Button onClick={()=>this.attemptToLogin()}>Log In</Button>
            <br></br>
            <Link to='/register'>Register</Link>
        </FlexedDiv>
    }
}

export default connect()(Login)