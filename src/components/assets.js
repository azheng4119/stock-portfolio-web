import React from 'react'
import { connect } from 'react-redux'
class Assets extends React.Component {

    render() {
        let stocks = {}
        let assets = ""
        if (this.props.user) {
            stocks = JSON.parse(this.props.user.stocks);
            assets = Object.keys(stocks).map((asset,index) =>{
            return (
                <div key = {index}>
                    <div>{`${asset} - ${stocks[asset]} shares`}</div>
                </div>
            )
            })
        }


        return (
            <div>
            Inventory
            { assets }
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapState, null)(Assets)