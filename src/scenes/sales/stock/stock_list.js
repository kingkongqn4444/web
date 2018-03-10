import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import Loading from '../../../components/loading';
class StockList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }


    componentWillMount() {
        this.setState({ loading: true })
        this.props.actions.authenticate.listOutler(this.props.storage.token)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticate.listOutlet && nextProps.authenticate.listOutlet.status == 200) {
            this.setState({ loading: false })
        }
    }


    render() {
        return (
            <div className="panel">
                <Loading loading={this.state.loading} />
                <div className="panel panel-heading">
                    <h1>Quản lý kho chứa</h1>
                </div>
                <div className="panel panel-body">
                    <JarvisWidget editbutton={false} color="darken">
                        <header>
                            <span className="widget-icon"> <i className="fa fa-table" /> </span>

                            <h2>Danh sách hàng trong kho</h2>
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
                                            {this.props.authenticate.listOutlet && this.props.authenticate.listOutlet.data ?
                                                this.props.authenticate.listOutlet.data.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{index}</td>
                                                        <td><a href="/sales/stock/add">{item.name}</a></td>
                                                        <td>{item.stock_balance}</td>
                                                        <td><label className="label label-success"> Còn hàng</label></td>
                                                    </tr>
                                                )
                                                : null
                                            }
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