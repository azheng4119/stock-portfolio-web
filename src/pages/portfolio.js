import React from 'react'
import Vendor from '../components/vendor'
import styled from 'styled-components'
import Assets from '../components/assets';
import Header from '../components/header'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const FlexedDiv = styled.div`
display: flex;
padding : 25px;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
`

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName : `${this.props.user.firstName} ${this.props.user.lastName}`,
            balance: this.props.user.balance
        }
    }

    updateBalance = amount => {
        this.setState({
            balance: amount
        })
    }
    render() {
        console.log('yeet',this.props.user)
        return (
            <div>
                {this.props.user.email ?  <></> : <Redirect to="/"/> }
                <Header></Header>
                <p style = {{textAlign : 'center'}}>{`Welcome back, ${this.state.fullName} !`}</p>
                <div style = {{textAlign : 'center'}}>{`Current Balance : ${parseInt(this.state.balance).toFixed(2)}`}</div>
                <FlexedDiv>
                    <Vendor updateBalance={this.updateBalance} />
                    <Assets />
                </FlexedDiv>
            </div>
        )
    }
}

const mapState = state => {
    return {
        user : state.user
    }
}
export default connect(mapState, null)(Portfolio)