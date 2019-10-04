import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const FlexedDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export default class login extends React.Component {

    render() {
        return <FlexedDiv>
            <label>
                Username:
                </label>
            <input type="text" name="username" />
            <label>
                Password:
                </label>
            <input type="password" name="password">
            </input>
            <Link to='/vendor'>Login</Link>
        </FlexedDiv>
    }
}