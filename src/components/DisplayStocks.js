import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import TimeAgo from 'react-timeago';

let stocks = {};
class DisplayStock extends React.Component {

    renderRows() {
        let newStock = stocks;
        this.props.stockResults.map((item) => {
            let da = stocks[item[0]];
            if (newStock && newStock[item[0]]) {            // already stock present update it else add
                newStock[item[0]].textClass = da.value < item[1] ? "text-success" : "text-danger";     // this condition takes care of comparison betn previous & current
                newStock[item[0]].previousData.push({ time: Date.now(), value: item[1] })
                newStock[item[0]].value = item[1];
            }
            else {
                newStock[item[0]] = { name: item[0], previousData: [{ time: Date.now(), value: item[1] }], value: item[1], textClass: '' };
            }

        })
        stocks = newStock;
        if (stocks != null) {
            var tableData = Object.keys(stocks).map((item) => {
                let data = stocks[item];
                let selectedClassName = item === this.props.selectedItem ? "selected-row" : '';
                return <tr onClick={() => this.props.onStockItemSelect(item)} className={selectedClassName}>
                    <td>{item.charAt(0).toUpperCase()+item.substring(1)}</td>
                    <td className={data.textClass}>{Number(data.value).toFixed(2)}</td>
                    <td><TimeAgo date={data.previousData.slice(-1)[0].time} /></td>
                    <td><Sparklines data={data.previousData.map((previousData) => { return previousData.value })}>
                        <SparklinesLine color="blue" />
                    </Sparklines></td>
                </tr>
            });
        }
        this.props.updateStockDetail(stocks);

        return tableData;
    }

    render() {
        if (this.props.stockResults != null && this.props.stockResults.length > 0) {
            var stocktableDetails = this.renderRows();
        }
        return (
            <div className="col-sm-4 bg-light">

                <h4 className="bg-dark px-2 text-white pb-2 mt-2">Live Stock App</h4>
                <table className="table table-hover bg-white">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">History</th>
                        </tr>
                    </thead>
                    <tbody className="tablebody-pointer">
                        {stocktableDetails}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DisplayStock;