import React from 'react';
import FetchStocks from './FetchStocks';
import DisplayStock from './DisplayStocks';
import DisplayGraph from './DisplayGraph';
import LoadingView from './LoadingView';
import DisplayError from './DisplayError';


let stockDetails = {};
class App extends React.Component {
    state = {
        isLoading: true,
        stockResults: null,
        selectedItem: null,
        hasError: false
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

            {!this.state.isLoading && !this.state.hasError &&
                <div className="container-fluid">
                    <div className="row">
                        <DisplayStock stockResults={this.state.stockResults} onStockItemSelect={this.onStockItemSelect}
                            selectedItem={this.state.selectedItem} updateStockDetail={this.updateStockDetail} />
                        <DisplayGraph selectedItem={this.state.selectedItem} stockDetails={stockDetails} />
                    </div>
                </div>}
            {this.state.isLoading && !this.state.hasError && <LoadingView />}

            {this.state.hasError && <DisplayError />}
        </React.Fragment>
    }
}
export default App;