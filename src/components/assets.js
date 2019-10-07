import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
class Assets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: this.props.user.stocks ? JSON.parse(this.props.user.stocks) : {},
            costArray: [],
            assets: [],
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
                let cost = parseInt(data["Global Quote"]["05. price"])
                let qty = parseInt(this.state.stocks[stock])
                totalPrice += cost * qty;
                assets.push(<div >{`${stock} - ${cost} - ${qty} shares`}</div>)
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
                <p>{`Inventory - ${this.state.totalPrice}`}</p>
                {this.state.assets}
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