import React from 'react';
import Websocket from 'react-websocket';

const url = "ws://stocks.mnet.website/";

class FetchStocks extends React.Component {
    render() {
        return <Websocket url={url}
            onMessage={this.props.handleData.bind(this)}
            onClose={() => this.props.closeConnection} />
    }
}
export default FetchStocks;


//Importing this components will get the live stock data