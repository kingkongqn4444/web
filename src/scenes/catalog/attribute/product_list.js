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
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            note: ''
        };
    }

    async componentWillMount() {

    }

    componentDidMount() {
    };


    componentWillReceiveProps(nextProps) {
    }

    submitCustomer() {
        // this.props.actions.product.addCustomer(this.state.name, this.state.phone, this.state.email, this.state.address, this.state.note)
    }

    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Thêm khách hàng mới
                        </h1>
                    </div>
                </div>
                <JarvisWidget editbutton={false} custombutton={false}>
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-edit" />
                        </span>
                        <h2>Thông tin khách hàng</h2>
                    </header>
                    <div>
                        {/* widget content */}
                        <div className="no-padding">
                            <form className="smart-form" id="search">
                                <div className="row input-order">
                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Tên khách hàng :</h3>
                                            <input
                                                type="text" name="t" placeholder="Tên khách hàng" id="one"
                                                defaultValue={this.state.name}
                                                onChange={e => this.setState({ name: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Số điện thoại:</h3>
                                            <input
                                                type="number" name="t" placeholder="Số điện thoại" id="one"
                                                defaultValue={this.state.phone}
                                                onChange={e => this.setState({ phone: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Email</h3>
                                            <input
                                                type="text" name="t" placeholder="email" id="one"
                                                defaultValue={this.state.email}
                                                onChange={e => this.setState({ email: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                </div>

                                <div className="row input-order">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Địa chỉ :</h3>
                                            <input type="text" name="t" placeholder="Địa chỉ"
                                                defaultValue={this.state.address}
                                                onChange={e => this.setState({ address: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="row input-order ">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Ghi chú :</h3>
                                            <input type="text" name="t" placeholder="Ghi chú" id="one"
                                                defaultValue={this.state.note}
                                                onChange={e => this.setState({ note: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </JarvisWidget>
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                    <ul id="sparks" className="">
                        <li className="sparks-info">
                            <button onClick={() => this.submitCustomer()} type="button" className="btn btn-success btn-lg">
                                Tạo mới
                                </button>
                        </li>
                    </ul>
                </div>
                <Link to={Utils.link(LINK.PRODUCT, "")} className="btn btn-success btn-lg">
                    Chi tiết khách hàng
                                </Link>
            </div>
        )
    }
}

export default Connect(ProductList);