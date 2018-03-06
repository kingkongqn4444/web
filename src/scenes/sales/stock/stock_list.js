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

                            <h2>Danh sách Kho chứa</h2>
                        </header>
                        <div>
                            <div className="widget-body no-padding">

                                <div className="table-responsive">

                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Kho chứa</th>
                                            <th>Địa chỉ</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr >
                                            <td>1</td>
                                            <td><a href="/sales/stock/add">Coopmark Lý Thường Kiệt</a></td>
                                            <td>Lý Thường Kiệt</td>
                                            <td><label className="label label-success">Hoạt động</label></td>
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