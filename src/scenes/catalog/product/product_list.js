import React, {
    Component
} from 'react';

import Utils, {
    LINK
} from "../../../utils";
import { Link } from 'react-router-dom';
import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import Paginate from '../../../components/paginate';
import serialize from 'form-serialize';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.query = Utils.parseQuery(this.props.router.location.search);
        console.log(this.props.router);
        this.state = {
            title: this.query['t'],
            productId: this.query['id'],
            limit: this.query['l'] || 20,
            page: parseInt(this.query['p']) || 1,
        };
    }

    async componentWillMount() {
        await this.props.actions.authenticate.getAllCustomer(this.props.storage.token)
        this._requestList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.router.location.search !== this.props.router.location.search) {
            this.query = Utils.parseQuery(nextProps.router.location.search);

            this.setState({
                title: this.query['t'],
                productId: this.query['id'],
                page: parseInt(this.query['p']) || 1,
                limit: this.query['l'] || 20,
            }, () => {
                this._requestList();
            })
        }

    }

    _requestList() {
        let offset = (this.state.page - 1) * this.state.limit;
        let filters = {};
        this.state.title && (filters['title'] = this.state.title);
        this.state.productId && (filters['productId'] = this.state.productId);
    }

    

    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Danh sách khách hàng
                        </h1>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                        <ul id="sparks" className="">
                            <li className="sparks-info">
                            </li>
                        </ul>
                    </div>
                </div>
                <JarvisWidget editbutton={false} color="darken">
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-table" />
                        </span>
                        <h2>Danh sách nội dung</h2>
                    </header>
                    <div>
                        <div className="widget-body no-padding">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Địa chỉ</th>
                                            <th>email</th>
                                            <th>Số điện thoại</th>
                                            <th>Note</th>
                                            <th>Chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.authenticate.allCustomer && this.props.authenticate.allCustomer.length > 0 ?
                                            this.props.authenticate.allCustomer.map((item, index) =>
                                                <tr key={index}>
                                                    <th>{item.name}</th>
                                                    <th>{item.address}</th>
                                                    <th>{item.email}</th>
                                                    <th>{item.phone}</th>
                                                    <th>{item.note}</th>
                                                    <th>asdasd</th>
                                                </tr>
                                            ) : null}
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </JarvisWidget>
                <Paginate
                    activeClassName="active"
                    initialPage={this.state.page - 1}
                    forcePage={this.state.page - 1}
                    containerClassName="pagination pagination-lg"
                    pageCount={this.props.product.total / 20}
                    hrefBuilder={(currentPage) => Utils.link(LINK.PRODUCT, "", {
                        page: currentPage,
                        title: this.state.title,
                        id: this.state.productId
                    })}
                />

            </div>
        )
    }
}

export default Connect(ProductList);