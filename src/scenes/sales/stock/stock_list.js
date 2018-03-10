import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
class StockList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel">
                <div className="panel panel-heading">
                    <h1>Quản lý kho chứa</h1>
                </div>
                <div className="panel panel-body">
                    <JarvisWidget editbutton={false} color="darken">
                        <header>
                            <span className="widget-icon"> <i className="fa fa-table"/> </span>

                            <h2>Danh hàng trong kho</h2>
                        </header>
                        <div>
                            <div className="widget-body no-padding">

                                <div className="table-responsive">

                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>số lượng</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr >
                                            <td>1</td>
                                            <td><a href="/sales/stock/add">Paractamon</a></td>
                                            <td>200</td>
                                            <td><label className="label label-success">Còn hàng</label></td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </JarvisWidget>
                </div>
            </div>
        )
    }
}

export default Connect(StockList);