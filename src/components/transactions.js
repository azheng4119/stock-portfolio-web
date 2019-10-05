import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import Header from './header';

const FlexedDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

class Transactions extends React.Component {
    render() {
        let history = Object.values(this.props.portfolio).map((item, index) =>
            <div key={index}>
                {`${item.symbol} - ${item.cost} - ${item.timeBought} - ${item.shares}`}
            </div>
        )
        return <div>
            <Header></Header>
            <FlexedDiv>
                Transaction History
            {history}
            </FlexedDiv>
        </div>
    }
}

const mapState = (state) => {
    return {
        portfolio: state.portfolio
    }
}


export default connect(mapState, null)(Transactions)