import React from 'react'
import { connect } from 'react-redux'
class Assets extends React.Component {

    render() {
        let assets = this.props.assets.map((asset, index) => {
            return (
                <div key = {index}>
                    <div>{`${asset.symbol.toUpperCase()} - ${asset.shares} Shares`}</div>
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