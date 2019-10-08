import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import Header from './header';
import { Redirect } from 'react-router-dom'
import TransactionCard from './transactionCard';

const FlexedDiv = styled.div`
display: flex;
padding : 40px;
flex-direction: row;
flex-wrap : wrap;
justify-content: space-between;
`

class Transactions extends React.Component {
    render() {
        let history = this.props.user.history ? this.props.user.history.map((item, index) => {
            let data = item.split("^");
            return (<TransactionCard
                symbol={data[0]}
                quantity={data[3]}
                purchased={data[2]}
                price={data[1]}
            />) 
        } 
        ): ""
        return <div>
            {this.props.user.email ? <></> : <Redirect to="/" />}
            <Header title="Transactions"></Header>
            <h3 style={{textAlign : 'center',padding : '25'}}>Transaction History</h3>
            <FlexedDiv>
            {history}
            </FlexedDiv>
        </div>
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapState, null)(Transactions)