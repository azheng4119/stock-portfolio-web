import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addSymbol } from '../store/utilities/portfolio'
import { subtractFromBalance } from '../store/utilities/balance'

const FlexedDiv = styled.div`
display: flex;
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
            balance: this.props.balance,
            error: ''
        }
    }

    handleChange = name => ({ target }) => {
        this.setState({
            [name]: target.value
        });
    }

    attemptToBuy = async () => {
        this.setState({ error: `` })
        if (this.state.qty <= 0) {
            this.setState({ error: `Invalid Number` })

        } else {
            try {
                let { data } = await axios.get(`https://api-stock-portfolio.herokuapp.com/symbols/${this.state.tracker}`)
                if (data['4. close']) {
                    let payload = {
                        symbol: this.state.tracker.toUpperCase(),
                        cost: data[`4. close`],
                        timeBought: [Date.now()],
                        shares: parseInt(this.state.qty)
                    }
                    let costToBuy = payload.cost * payload.shares
                    if (costToBuy > this.state.balance) {
                        this.setState({
                            error: `Insufficent Balance`
                        })
                    } else {
                        this.props.buySymbol(payload)
                        this.props.subtractBalance(costToBuy)
                        this.setState({
                            balance: this.state.balance - costToBuy,
                            error : 'Success!'
                        })
                        this.props.updateBalance(this.state.balance)
                    }
                } else {
                    this.setState({
                        error: `Symbol Not Found`
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    render() {
        return (<FlexedDiv>
            <label>
                Tracker
            </label>
            <input type="text" onChange={this.handleChange('tracker')} />
            <label>
                Qty
            </label>
            <input type="number" min="1" onChange={this.handleChange('qty')} />
            <button onClick={() => this.attemptToBuy()}>Buy</button>
            <div style={{ color: this.state.error === "Success!"? "green" : "red" }}>{this.state.error}</div>
        </FlexedDiv>)
    }
}

const mapState = (state) => {
    return {
        balance: state.balance
    }

}

const mapDispatch = (dispatch) => {
    return {
        buySymbol: (payload) => {
            dispatch(addSymbol(payload))
        },
        subtractBalance: (amount) => {
            dispatch(subtractFromBalance(amount));
        }
    }
}


export default connect(mapState, mapDispatch)(Vendor)