import React from 'react';
import FetchStocks from './FetchStocks';
import DisplayStock from './DisplayStocks';
import DisplayGraph from './DisplayGraph';
import LoadingView from './LoadingView';


let stockDetails = {};
class App extends React.Component {
    state = {
        isLoading: true,
        stockResults: null,
        selectedItem: null,
        hasError: false
    }
    componentWillMount = () => {
        window.location.protocol === 'https:' && (window.location.href = window.location.href.replace(/^https:/, 'http:'));

    }
    handleData = (data) => {
        let result = JSON.parse(data);
        if (result && result.length > 0) {
            this.setState({ isLoading: false, stockResults: result })
        }
    }
    onStockItemSelect = (item) => {
        this.setState({ selectedItem: item });
    }
    updateStockDetail = (data) => {
        stockDetails = data
    }
    closeConnection = (err) => {
        this.setState({ hasError: true })
        console.log(err);
    }
    render() {
        return <React.Fragment>
            <FetchStocks handleData={this.handleData}                       //fetching real time stocks
                closeConnection={this.closeConnection} />
            {!this.state.isLoading &&
                <div className="container-fluid">
                    <div className="row">
                        <DisplayStock stockResults={this.state.stockResults} onStockItemSelect={this.onStockItemSelect}
                            selectedItem={this.state.selectedItem} updateStockDetail={this.updateStockDetail} />
                        <DisplayGraph selectedItem={this.state.selectedItem} stockDetails={stockDetails} />
                    </div>
                </div>}
            {this.state.isLoading && <LoadingView />}
        </React.Fragment>
    }
}
export default App;