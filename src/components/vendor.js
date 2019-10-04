import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addSymbolThunk } from '../store/utilities/portfolio'

const FlexedDiv = styled.div`
display: flex;
padding : 25px;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

class Vendor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracker: '',
            qty: 0,
            bought: [],
        }
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (<FlexedDiv>
            {this.state.error}
            <label>
                Tracker
            </label>
            <input type="text" onChange={this.handleChange('tracker')} />
            <label>
                Qty
            </label>
            <input type="number" min="1" onChange={this.handleChange('qty')} />
            <button onClick={() => this.props.buySymbol(this.state.tracker, this.state.qty)}>Buy</button>
        </FlexedDiv>)
    }
}

const mapDispatch = (dispatch) => {
    return {
        buySymbol: (id, qty) => {
            dispatch(addSymbolThunk(id, qty))
        },
    }
}


export default connect(null, mapDispatch)(Vendor)