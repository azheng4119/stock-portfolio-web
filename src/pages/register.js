import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            first : '',
            last : '',
            email : '',
            username: '',
            password: ''
        }
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return <FlexedDiv>
            <div>Stock Portfolio Register</div>
            <br></br>
            <TextField
                label="First Name"
                variant="outlined"
                onChange={this.handleChange('first')}
                placeholder="Last Name"
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Last Name"
                type="password"
                variant="outlined"
                onChange={this.handleChange('last')}
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
            <Button><Link to='/portfolio'>Register</Link></Button>

        </FlexedDiv>
    }
}

export default connect()(Login)