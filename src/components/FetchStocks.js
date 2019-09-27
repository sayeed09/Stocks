import React from 'react';
import Websocket from 'react-websocket';

const url = "ws://stocks.mnet.website/";

class FetchStocks extends React.Component {

    componentDidCatch = () => {                                       // for catching unsafe scripts warning
        this.props.handleScriptWarning();
    }
    render() {
        return <Websocket url={url}
            onMessage={(e) => this.props.handleData(e)}
            onClose={(e) => this.props.closeConnection(e)} />
    }
}

export default FetchStocks;


//Importing this components will get the live stock data