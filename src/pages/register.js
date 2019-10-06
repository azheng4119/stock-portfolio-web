import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FlexedDiv = styled.div`
display: flex;
height : 70vw;
flex-direction: column;
align-items: center;
justify-content: center;
`
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            username: '',
            password: '',
            balance : 5000,
            error : ''
        }
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: target.value
        });
    }

    attemptToRegister = async () => {
        let {data} = await axios.post(`http://localhost:3000/user/register`,this.state);
        if (data === "Email In Use"){
            this.setState({
                error : data
            })
        }else{
            this.setState({
                error : "Success!"
            })
        }
    }
    render() {
        return <FlexedDiv>
            <div>Stock Portfolio Register</div>
            <br></br>
            <TextField
                label="First Name"
                variant="outlined"
                onChange={this.handleChange('firstName')}
                placeholder="Last Name"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Last Name"
                variant="outlined"
                onChange={this.handleChange('lastName')}
                placeholder="Last Name"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                onChange={this.handleChange('email')}
                placeholder="Email"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Username"
                variant="outlined"
                onChange={this.handleChange('username')}
                placeholder="Username"
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
            <Button onClick={()=>this.attemptToRegister()}>Register</Button>
            <br></br>
            {this.state.error}
        </FlexedDiv>
    }
}

export default connect()(Login)