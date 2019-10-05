import React from 'react'
import { connect } from 'react-redux'
class Assets extends React.Component {

    render() {
        let assets = Object.values(this.props.assets).map((asset, index) => {
            console.log(asset)
            return (
                <div key = {index}>
                    <div>{`${asset.symbol} - ${asset.shares} Share`}</div>
                </div>
            )
        })

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
        assets: state.portfolio
    }
}

export default connect(mapState, null)(Assets)