import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addSymbol } from '../store/utilities/portfolio'
import { subtractFromBalance } from '../store/utilities/balance'
import { addToHistory } from '../store/utilities/history'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
                    let ts = new Date();
                    let payload = {
                        symbol: this.state.tracker.toUpperCase(),
                        cost: data[`4. close`],
                        timeBought: [ts.toLocaleString()],
                        shares: parseInt(this.state.qty)
                    }
                    let costToBuy = payload.cost * payload.shares
                    if (costToBuy > this.state.balance) {
                        this.setState({
                            error: `Insufficent Balance`
                        })
                    } else {
                        this.props.addHistory(Object.values(payload).join('^'))
                        this.props.buySymbol(payload)
                        this.props.subtractBalance(costToBuy)
                        this.setState({
                            balance: this.state.balance - costToBuy,
                            error: 'Success!'
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
            <TextField
                label="Ticker"
                variant="outlined"
                placeholder="Ticker"
                type="text"
                onChange={this.handleChange('tracker')}
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <TextField
                label="Qty"
                defaultValue="0"
                variant="outlined"
                type="number"
                min="1"
                onChange={this.handleChange('qty')}
                InputLabelProps={{
                    shrink: true,
                }} />
            <br></br>
            <Button
                variant="outlined" 
                color="primary"
                onClick={() => this.attemptToBuy()}>Buy
            </Button>
            <br></br>
            <div style={{ color: this.state.error === "Success!" ? "green" : "red" }}>{this.state.error}</div>
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
        },
        addHistory: receipt => {
            dispatch(addToHistory(receipt));
        }

    }
}


export default connect(mapState, mapDispatch)(Vendor)