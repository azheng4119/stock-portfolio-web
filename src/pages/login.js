import React from 'react';
import axios from 'axios';
import md5 from 'blueimp-md5';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { setUserThunk } from "../store/utilities/user"

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
            password: '',
            error: '',
        }
    }

    attemptToLogin = async () => {
        await axios.post(`https://api-stock-portfolio.herokuapp.com/user/login`, this.state).then(
            async () => {
                console.log(this.state.email)
                await this.props.setUser(this.state.email);
                this.setState({
                    error: "Success"
                })
            }).catch(error => {
                this.setState({
                    error: "Invalid Credentials"
                })
                console.log(error)
            }).catch(err => console.log(err))
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: name === "password" ? md5(target.value) : target.value
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
            {this.state.error === "Success" ? <Redirect to="/portfolio"></Redirect> : this.state.error}
            <Button onClick={() => this.attemptToLogin()}>Log In</Button>
            <br></br>
            <span>Not a member? <Link to='/register'>Register!</Link></span>
        </FlexedDiv>
    }
}

const mapDispatch = (dispatch) => {
    return {
        setUser: (id) => dispatch(setUserThunk(id))
    }
}

export default connect(null, mapDispatch)(Login)