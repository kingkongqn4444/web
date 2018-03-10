import React, {
    Component
} from 'react';

import Utils, {
    LINK
} from "../../../utils";
import { Link } from 'react-router-dom';
import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import Loading from '../../../components/loading';
import Paginate from '../../../components/paginate';
import serialize from 'form-serialize';
import Modal from 'react-modal';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            listCustomer: [],
            modalIsOpen: false,
        };
        this.detailCustomer = this.detailCustomer.bind()
    }

    async componentWillMount() {
        this.setState({ loading: true })
        await this.props.actions.authenticate.getAllCustomer(this.props.storage.token)

    }

    afterOpenModal = () => {
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    async deleteCustomer(id) {
        await this.props.actions.authenticate.deleteCustomer(this.props.storage.token, id)
        this.props.actions.authenticate.getAllCustomer(this.props.storage.token)
    }

    detailCustomer = (id) => {
        this.props.actions.authenticate.detailCustomer(this.props.storage.token, id)
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.authenticate.allCustomer && nextProps.authenticate.allCustomer.status == 200) {
            this.setState({
                listCustomer: nextProps.authenticate.allCustomer.data, loading: false
            })
        }
        if (nextProps.authenticate.detailCustomer && nextProps.authenticate.detailCustomer.status == 200) {
            this.setState({
                modalIsOpen: true,
                data: nextProps.authenticate.detailCustomer.data
            })
        }
    }

    render() {
        return (
            <div id="content">
                <Loading loading={this.state.loading} />
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
                                        {this.state.listCustomer && this.state.listCustomer.length > 0 ?
                                            this.state.listCustomer.map((item, index) =>
                                                <tr key={index}>
                                                    <th>{item.name}</th>
                                                    <th>{item.address}</th>
                                                    <th>{item.email}</th>
                                                    <th>{item.phone}</th>
                                                    <th>{item.note}</th>
                                                    <th>
                                                        <button type='button' onClick={() => this.detailCustomer(item.id)}>Chi tiết</button>
                                                        <button type='button' onClick={() => this.deleteCustomer(item.id)}>Xóa</button>
                                                    </th>
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

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            alignSelf: 'center',
                        },
                        content: {
                            position: 'absolute',
                            top: '30%',
                            left: '40%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div>
                        <h4>Tên : {this.state.data.name}</h4>
                        <h4>Địa chỉ :{this.state.data.address}</h4>
                        <h4 >Số điện thoại :{this.state.data.phone}</h4>
                        <h4 >Ghi chú  :{this.state.data.note}</h4>
                        <h4 ref={subtitle => this.subtitle = subtitle}>Danh sách đơn hàng đã đặt</h4>
                        {this.state.data.order && this.state.data.order.length > 0 ?

                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Đơn vị</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.order.map((item, index) =>
                                        <tr key={index}>
                                            <th>{item.name}</th>
                                            <th>{item.uom}</th>
                                            <th>{item.price}</th>
                                            <th>{item.quantity}</th>
                                            <th>{item.amount}</th>
                                            <th>{item.note}</th>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            : <div>Khách hàng này chưa có đơn đặt hàng nào</div>
                        }
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Connect(ProductList);