import React from 'react'
import Vendor from '../components/vendor'
import styled from 'styled-components'
import Assets from '../components/assets';


const FlexedDiv = styled.div`
display: flex;
padding : 25px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`

export default class Portfolio extends React.Component{
    render(){
        return (
            <FlexedDiv>
                <Vendor/>
                <Assets></Assets>
            </FlexedDiv>
        )
    }
}