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
        hasError: false,
        count: 0,
        isUnsafe: false
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
    }
    handleScriptWarning = () => {                                    //unsafe script warnings are catched here
        this.setState({ isUnsafe: true })
    }
    render() {
        return <React.Fragment>
            {!this.state.isUnsafe &&                      // managing unsafe script 
                <FetchStocks handleData={this.handleData}
                    closeConnection={this.closeConnection} handleScriptWarning={this.handleScriptWarning} />
            }

            {!this.state.isLoading && !this.state.hasError &&
                <div className="container-fluid">
                    <div className="row">
                        <DisplayStock stockResults={this.state.stockResults} onStockItemSelect={this.onStockItemSelect}
                            selectedItem={this.state.selectedItem} updateStockDetail={this.updateStockDetail} />
                        <DisplayGraph selectedItem={this.state.selectedItem} stockDetails={stockDetails} />
                    </div>
                </div>
            }
            {this.state.isLoading && !this.state.hasError && !this.state.isUnsafe && <LoadingView />}

            {(this.state.hasError || this.state.isUnsafe) && <DisplayError hasError={this.state.hasError} />}
        </React.Fragment>
    }
}
export default App;