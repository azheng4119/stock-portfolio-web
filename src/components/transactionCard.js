import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
display : flex;
flex-direction : column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
padding: 10px 16px;
margin-top: 20px;
border-radius: 15px;
transition: 0.3s;
width:200px;
`

export default function transactionCard(props) {
    let { symbol, quantity, purchased, price } = props
    return (
        <CardContainer>
            <div>{symbol}</div>
            <div>{`${quantity} ${quantity > 1 ? "shares" : "share"}`}</div>
            <div>{`$${price}`}</div>
            <div style ={{color : props.color ? props.color : "black"}}>{purchased}</div>
        </CardContainer>
    )
}