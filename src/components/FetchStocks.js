import React from 'react';
import Websocket from 'react-websocket';

const url = "ws://stocks.mnet.website/";

const FetchStocks = (props) => {
    return <Websocket url={url}
        onMessage={(e) => props.handleData(e)}
        onClose={(e) => props.closeConnection(e)} />
}
export default FetchStocks;


//Importing this components will get the live stock data