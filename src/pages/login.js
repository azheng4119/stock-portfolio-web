import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {connect} from 'react-redux'

const FlexedDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
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
            <label>
                Username:
                </label>
            <input type="text" name="username" onChange={this.handleChange('username')} />
            <label>
                Password:
                </label>
            <input type="password" name="password" onChange={this.handleChange('password')} />
            <Link to='/portfolio'>Login</Link>
        </FlexedDiv>
    }
}

export default connect()(Login)