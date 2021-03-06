import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartJsConfig, data } from '../configs/Graph';

class DisplayGraph extends React.Component {
    setProperty = () => {
        let stockData = this.props.stockDetails[this.props.selectedItem];
        data.datasets[0].label = stockData.name;
        data.datasets[0].backgroundColor = "rgb(255,165,0)";
        data.datasets[0].borderColor = "rgb(255,165,0)";

        let getData = stockData.previousData.map((item) => {
            return { t: new Date(item.time), y: item.value };
        })
        data.datasets[0].data = getData;
    }
    render() {
        if (this.props.selectedItem != null) {
            this.setProperty();
        }
        return (
            <div className="col-sm-7" >
                <h2 className="px-2 mt-2 pb-2 bg-light">Graph</h2>
                <p className="text-info">Click on any of the stock to see the graph</p>
                <Line ref="chart" data={data} options={chartJsConfig} />
            </div>
        );

    }
}

export default DisplayGraph;