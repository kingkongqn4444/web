import React, { Component } from "react";

import Connect from "../../stores/connect";
import JarvisWidget from "../../components/jarvis_widget";
import Loading from "../../components/loading";
import serialize from "form-serialize";
import Modal from "react-modal";
import Utils, { LINK } from "../../utils";
import { Link } from "react-router-dom";
import PrintTemplate from "react-print";
class SearchCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      data: [],
      loading: false,
      dataCustomer: [],
    };
  }

  afterOpenModal = () => {
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  async componentWillMount() {
    this.setState({ loading: true });
    await this.props.actions.authenticate.getListOrder(
      this.props.storage.token
    );
  }

  getTime(time) {
    var maxDate = new Date(time * 1000);
    var maxDateFormatted =
      this.pad(maxDate.getDate(), 2, "0") +
      "/" +
      this.pad(maxDate.getMonth() + 1, 2, "0") +
      "/" +
      maxDate.getFullYear();
    return maxDateFormatted;
  }

  pad(s, width, character) {
    return new Array(width - s.toString().length + 1).join(character) + s;
  }

  detailOrder = id => {
    this.props.actions.authenticate.getDetailOrder(
      this.props.storage.token,
      id
    );
    this.setState({ modalIsOpen: true });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.authenticate.detailOrder &&
      nextProps.authenticate.detailOrder.status == 200
    ) {
      this.setState({ data: nextProps.authenticate.detailOrder.data });
    }
    if (
      nextProps.authenticate.listOrder &&
      nextProps.authenticate.listOrder.status == 200
    ) {
      this.setState({
        loading: false,
        dataCustomer: nextProps.authenticate.listOrder.data,
      });
    }

    if (
      nextProps.authenticate.detailCustomer &&
      nextProps.authenticate.detailCustomer.status == 200
    ) {
      this.setState({
        loading: false,
        dataCustomer: nextProps.authenticate.detailCustomer.data.order,
      });
    }
  }

  editOrder = () => {};

  render() {
    return (
      <div id="content">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
            <h1 className="page-title txt-color-blueDark">
              Danh Sách Đơn Hàng
            </h1>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
            <ul id="sparks" className="">
              <li className="sparks-info">
                <button
                  onClick={() =>
                    this.setState({
                      dataCustomer: this.props.authenticate.listOrder.data,
                    })
                  }
                  type="button"
                  className="btn btn-success btn-lg"
                >
                  Xem Tất Cả
                </button>
              </li>
            </ul>
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
                    {this.state.dataCustomer
                      ? this.state.dataCustomer.map((item, index) => (
                          <tr key={index}>
                            <th>{item.name}</th>
                            <th>{item.address}</th>
                            <th>{this.getTime(item.delivery_date)}</th>
                            <th>{item.phone}</th>
                            <th>{item.note}</th>
                            <th>
                              <button
                                className="btn btn-success col-xs-offset-2"
                                type="button"
                                onClick={() => this.detailOrder(item.id)}
                              >
                                Chi tiết
                              </button>
                              <Link
                                className="btn btn-info col-xs-offset-2"
                                to={Utils.link(LINK.WIDGET, item.id)}
                              >
                                Chỉnh sửa
                              </Link>
                            </th>
                          </tr>
                        ))
                      : null}
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
          style={Modal.zeroStyle}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              alignSelf: "center",
            },
            content: {
              position: "absolute",
              top: "30%",
              left: "40%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
            },
          }}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div id="react-no-print">
            <h4>Tên : {this.state.data.name}</h4>
            <h4>Địa chỉ :{this.state.data.address}</h4>
            <h4>Số điện thoại :{this.state.data.phone}</h4>
            <h4>
              Ngày đặt hàng :{this.getTime(this.state.data.delivery_date)}
            </h4>
            <h4>Ghi chú :{this.state.data.note}</h4>
            <h4 ref={subtitle => (this.subtitle = subtitle)}>
              Chi tiết đơn đặt hàng
            </h4>
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
                {this.state.data.po_product &&
                this.state.data.po_product.length > 0
                  ? this.state.data.po_product.map((item, index) => (
                      <tr key={index}>
                        <th>{item.name}</th>
                        <th>{item.uom}</th>
                        <th>{item.price}</th>
                        <th>{item.quantity}</th>
                        <th>{item.amount}</th>
                        <th>{item.note}</th>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            <h2>Tổng tiền đơn hàng : {this.state.tongtien}</h2>
          </div>
        </Modal>
        <Loading loading={this.state.loading} />
      </div>
    );
  }
}

export default Connect(SearchCart);
