import React from 'react'
import Vendor from '../components/vendor'
import styled from 'styled-components'
import Assets from '../components/assets';
import Header from '../components/header'
import { connect } from 'react-redux'

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
            balance: this.props.balance
        }
    }

    updateBalance = amount => {
        this.setState({
            balance: amount
        })
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div style = {{textAlign : 'center'}}>{`Current Balance : $${this.state.balance.toFixed(2)}`}</div>
                <FlexedDiv>
                    <Vendor updateBalance={this.updateBalance} />
                    <Assets balance = {this.state.balance} />
                </FlexedDiv>
            </div>
        )
    }
}

const mapState = state => {
    return {
        balance: state.balance
    }
}
export default connect(mapState, null)(Portfolio)