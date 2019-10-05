import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexedDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

class Header extends React.Component {
    render() {
        return <FlexedDiv>
            <div>
                <Link to="/transactions">Transactions</Link>
                |
            <Link to="/portfolio">Portfolio</Link>
            </div>
            <div>
                <Link to="/">Log Out</Link>
            </div>
        </FlexedDiv>
    }
}
export default Header;