import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from "react-redux";
import {updateUserThunk} from '../store/utilities/user'
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
                if (data["Global Quote"]["05. price"]) {
                    let ts = new Date();
                    let payload = [
                        this.state.tracker.toUpperCase(),
                        data["Global Quote"]["05. price"],
                        ts.toLocaleString(),
                        parseInt(this.state.qty)
                    ]
                    let costToBuy = payload[1] * payload[3]
                    if (costToBuy > this.state.balance) {
                        this.setState({
                            error: `Insufficent Balance`
                        })
                    } else {
                        let oldStocks = JSON.parse(this.props.user.stocks)
                        console.log(oldStocks)
                        oldStocks[this.state.tracker] = this.state.tracker in oldStocks ? oldStocks[this.state.tracker] + payload[3] : 1;
                        let toUpdate = {
                            balance : this.props.user.balance - costToBuy,
                            stocks : JSON.stringify(oldStocks),
                            history : [...this.props.user.history,payload.join('^')]
                        }
                        await this.props.updateUser(this.props.user.email,toUpdate)
                        this.props.updateBalance(this.props.user.balance - costToBuy);
                        this.setState({
                            error: 'Success!'
                        })
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
        user : state.user
    }

}

const mapDispatch = (dispatch) => {
    return {
        updateUser : (id,data) => dispatch(updateUserThunk(id,data))
    }
}


export default connect(mapState, mapDispatch)(Vendor)