import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';
import JarvisWidget from '../../components/jarvis_widget';
import serialize from 'form-serialize';
import Modal from 'react-modal';
import Utils, {
    LINK
} from "../../utils";
import { Link } from 'react-router-dom';

class SearchCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            data: []
        }
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    componentWillMount() {
        this.props.actions.authenticate.getListOrder(this.props.storage.token)
    }

    getTime(time) {
        var maxDate = new Date(time * 1000);
        var maxDateFormatted = this.pad(maxDate.getDate(), 2, '0') + '/' + this.pad(maxDate.getMonth() + 1, 2, '0') + '/' + maxDate.getFullYear()
        return maxDateFormatted
    }

    pad(s, width, character) {
        return new Array(width - s.toString().length + 1).join(character) + s;
    }

    detailOrder = (id) => {
        this.props.actions.authenticate.getDetailOrder(this.props.storage.token, id)
        this.setState({ modalIsOpen: true })

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticate.detailOrder && nextProps.authenticate.detailOrder.status == 200) {
            this.setState({ data: nextProps.authenticate.detailOrder.data })
        }
    }


    editOrder = () => {

    }

    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Tra cứu đơn hàng
                        </h1>
                    </div>
                </div>

                <JarvisWidget editbutton={false} color="darken">
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-table" />
                        </span>
                        <h2>Danh sách đơn hàng</h2>
                    </header>
                    <div>
                        <div className="widget-body no-padding">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Địa chỉ</th>
                                            <th>Ngày giao hàng</th>
                                            <th>Số điện thoại</th>
                                            <th>Note</th>
                                            <th>Chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.authenticate.listOrder && this.props.authenticate.listOrder.length > 0 ?
                                            this.props.authenticate.listOrder.map((item, index) =>
                                                <tr key={index}>
                                                    <th>{item.name}</th>
                                                    <th>{item.address}</th>
                                                    <th>{this.getTime(item.delivery_date)}</th>
                                                    <th>{item.phone}</th>
                                                    <th>{item.note}</th>
                                                    <th>
                                                        <button type='button' onClick={() => this.detailOrder(item.id)}>Chi tiết</button>
                                                        <Link to={Utils.link(LINK.WIDGET, item.id)}>Chỉnh sửa</Link>
                                                    </th>
                                                </tr>
                                            ) : null}
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </JarvisWidget>
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
                        <h4 >Ngày đặt hàng  :{this.getTime(this.state.data.delivery_date)}</h4>
                        <h4 >Ghi chú  :{this.state.data.note}</h4>
                        <h4 ref={subtitle => this.subtitle = subtitle}>Chi tiết đơn đặt hàng</h4>
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
                                {this.state.data.po_product && this.state.data.po_product.length > 0 ?
                                    this.state.data.po_product.map((item, index) =>
                                        <tr key={index}>
                                            <th>{item.name}</th>
                                            <th>{item.uom}</th>
                                            <th>{item.price}</th>
                                            <th>{item.quantity}</th>
                                            <th>{item.amount}</th>
                                            <th>{item.note}</th>
                                        </tr>
                                    ) : null}
                            </tbody>
                        </table>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Connect(SearchCart);