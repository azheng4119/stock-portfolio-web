import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

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
            <div>Stock Portfolio Log In</div>
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
            <Link to='/portfolio'>Login</Link>
            <br></br>
            <Link to='/register'>Register</Link>
        </FlexedDiv>
    }
}

export default connect()(Login)