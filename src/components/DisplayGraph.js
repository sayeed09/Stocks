import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { chartJsConfig, data } from '../configs/Graph';

class DisplayGraph extends Component {
    render() {
        if (this.props.selectedItem != null) {
            let stockData = this.props.stockDetails[this.props.selectedItem];
            data.datasets[0].label = stockData.name;
            data.datasets[0].backgroundColor = "blue";
            data.datasets[0].borderColor = "blue";
            let getD = stockData.previousData.map((item) => {
                return { t: new Date(item.time), y: item.value };
                ;
            })
            data.datasets[0].data = getD;
        }
        return (
            <div className="col-sm-7" >
                <h2 className="px-2 mt-2 pb-2 bg-light">Graph</h2>
                <Line ref="chart" data={data} options={chartJsConfig} />
            </div>
        );

    }
}

export default DisplayGraph;