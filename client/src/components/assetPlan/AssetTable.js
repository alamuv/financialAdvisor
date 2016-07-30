import React from 'react';
import assetPlan from '../../../data/data';
import Label from '../../../data/label';
import Griddle from 'griddle-react';

class AssetTable extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTable() {
    let data = assetPlan[this.props.riskLevel];
    let tableData = [];

    for (var key in data) {
      var row = {};
      row.asset = key.replace(/_/g, " ");
      row.percentage = data[key]+'%';
      row.value = '$' + Math.round(data[key]/100 * this.props.dollarValue);
      tableData.push(row);
    }

    return (
      <Griddle
        results={tableData}
        tableClassName="assettable"
        useGriddleStyles={false}
        showPager={false}
        columns={["asset", "percentage", "value"]}/>
    );
  }

  render () {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

export default AssetTable;