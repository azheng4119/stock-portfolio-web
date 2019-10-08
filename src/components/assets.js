import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import TransactionCard from './transactionCard';
class Assets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: this.props.user.stocks ? JSON.parse(this.props.user.stocks) : {},
            costArray: [],
            assets: ['empty'],
            totalPrice : 0
        }
    }
    componentDidMount = async () => {
        await this.getData()
    }
    getData = async () => {
        let assets = []
        let totalPrice = 0;
        for (let stock of Object.keys(this.state.stocks)){
            let { data } = await axios.get(`https://api-stock-portfolio.herokuapp.com/symbols/${stock}`).then(data => data).catch(err => console.log(err))
            if (data["Global Quote"]) {
                let cost = parseFloat(data["Global Quote"]["05. price"])
                let open = parseFloat(data["Global Quote"]["02. open"])
                let qty = parseInt(this.state.stocks[stock])
                let color = cost > open ? "green" : "red";
                if (cost === open) color = "grey";
                totalPrice += cost * qty;
                assets.push(<TransactionCard
                    symbol={stock}
                    quantity={qty}
                    price={`Total : $${cost*qty}`}
                    color={color}
                    purchased={`$${cost} each`}
                />)

            }
        }
        this.setState({
            assets,
            totalPrice
        })
    }
    render = () => {
        return (
            <div>
                <p>{`Portfolio - $${this.state.totalPrice.toFixed(2)}`}</p>
                {this.state.assets[0] === 'empty' ? `Loading Assets...` : this.state.assets }
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapState, null)(Assets)