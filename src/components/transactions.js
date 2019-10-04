import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'

const FlexedDiv = styled.div`
display: flex;
padding : 25px;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

class Transactions extends React.Component {
    render() {
        let history = this.props.portfolio.map((item, index) =>
            <div key={index}>{Object.values(item).join()}</div>
        )
        return <FlexedDiv>
            Transactions
            {history}
        </FlexedDiv>
    }
}

const mapState = (state) => {
    return {
        portfolio: state.portfolio
    }
}


export default connect(mapState, null)(Transactions)