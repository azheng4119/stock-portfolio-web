import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import Header from './header';

const FlexedDiv = styled.div`
display: flex;
padding : 25px;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

class Transactions extends React.Component {
    render() {
        let history = Object.values(this.props.history).map((item, index) => {
            let data = item.split("^");
            return (<div key={index}>
                {`${data[3]} share${parseInt(data[3]) > 1 ? 's': ''} of ${data[0]} @ $${data[1]} each on ${data[2]}`}
            </div>)
        }
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
        history: state.history
    }
}


export default connect(mapState, null)(Transactions)