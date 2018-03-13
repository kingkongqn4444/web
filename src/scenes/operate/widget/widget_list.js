import React, {
    Component
} from 'react';
import Modal from 'react-modal';
import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import Paginate from '../../../components/paginate';
import Autosuggest from 'react-autosuggest';
import UiDatepicker from '../../../components/forms/date_picker';
import Loading from '../../../components/loading';
import Utils, {
    BIGBOX,
    LINK
} from "../../../utils";
import { Link } from 'react-router-dom';
import index from '../../../stores/states/authenticate/index';
const theme = {
    container: {
        position: 'relative'
    },
    input: {
        height: 30,
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        border: '1px solid #aaa',
    },
    inputFocused: {
        outline: 'none'
    },
    inputOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    suggestionsContainer: {
        display: 'none'
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: 51,
        width: 280,
        border: '1px solid #aaa',
        backgroundColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: 16,
        maxHeight: 200,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        zIndex: 2,
        overflow: 'auto',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    suggestion: {
        cursor: 'pointer',
        padding: '10px 20px'
    },
    suggestionHighlighted: {
        backgroundColor: '#ddd'
    }
};

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <span>
        {suggestion.name}
    </span>
);

class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numChildren: 0,
            value: '',
            suggestions: [],
            nameCustomer: '',
            phoneCustomer: '',
            dateCustomer: '',
            addressCustomer: '',
            noteCustomer: '',
            tenthuoc: '',
            donvi: '',
            gia: 0,
            soluong: 1,
            thanhtien: 0,
            ghichu: '',
            bill: [],
            modalIsOpen: false,
            tongtien: 0,
            editbill: false,
            loading: false,
            idBill: 0
        }
        this.submitDonThuoc = this.submitDonThuoc.bind()
        this.submitBill = this.submitBill.bind()
        this.openModal = this.openModal.bind()
        this.handleKeyDown = this.handleKeyDown.bind()
        this.onForCus = this.onForCus.bind()
    }



    async componentWillMount() {
        if (this.props.id) {
            this.setState({ loading: true })
            this.props.actions.authenticate.getDetailOrder(this.props.storage.token, this.props.id)
            this.setState({ idBill: this.props.id, editbill: true, loading: false })
        }
        await this.props.actions.storage.getListBill()

        if (this.props.storage.dataProduct && this.props.storage.dataProduct.name) {
            this.setState({
                nameCustomer: this.props.storage.dataProduct.name,
                phoneCustomer: this.props.storage.dataProduct.phone,
                addCustomer: this.props.storage.dataProduct.address,
                noteCustomer: this.props.storage.dataProduct.note,
                bill: this.props.storage.dataProduct.po_product
            })
        }
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.authenticate.detailOrder && nextProps.authenticate.detailOrder.status == 200) {
            let data = nextProps.authenticate.detailOrder.data
            await this.setState({
                noteCustomer: data.note,
                addressCustomer: data.address,
                dateCustomer: data.delivery_date,
                phoneCustomer: data.phone,
                nameCustomer: data.name,
                bill: data.po_product,
                loading: false
            })
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    getSuggestions = value => {
        const languages = this.props.authenticate.allProduct.data
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : languages.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    componentDidMount() {
        // this.props.actions.product.addProduct(this.props.storage.token, 'Thinh Thêm', 20000, 'Hộp')
    }


    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({ donvi: suggestion.uom, tenthuoc: suggestion.name, gia: suggestion.price })
    };

    submitDonThuoc = () => {
        if (this.state.tenthuoc == '') {
            alert('Tên không để trống')
            return
        }
        if (this.state.donvi == '') {
            alert('Đơn vị để trống')
            return
        }
        if (this.state.gia == '') {
            alert('Giá không để trống')
            return
        }
        if (this.state.soluong == '') {
            alert('Số lượng không để trống')
            return
        }
        else {
            let thuoc = {
                name: this.state.tenthuoc,
                uom: this.state.donvi,
                price: this.state.gia,
                quantity: this.state.soluong,
                amount: this.state.soluong * this.state.gia,
                note: this.state.ghichu
            }
            let array = this.state.bill.slice()
            array.push(thuoc)
            this.setState({
                bill: array
            })

            this.setState({
                tenthuoc: "",
                donvi: '',
                gia: 0,
                soluong: 1,
                thanhtien: 0,
                ghichu: '',
                value: '',
                tongtien: parseInt(this.state.tongtien) + parseInt(this.state.thanhtien)
            })
        }
    }

    handleSave = () => {
        let data = {
            name: this.state.nameCustomer,
            phone: this.state.phoneCustomer,
            address: this.state.addressCustomer,
            note: this.state.noteCustomer,
            po_product: this.state.bill
        }
        this.props.actions.storage.setListBill(data)
    }

    submitBill = () => {
        this.setState({ loading: true })
        this.props.actions.authenticate.addCustomer(
            this.props.storage.token, this.state.nameCustomer, this.state.addressCustomer, "",
            this.state.phoneCustomer, this.state.noteCustomer)
        var that = this
        let data = {
            "address": this.state.addressCustomer,
            "customer_id": 0,
            "delivery_date": this.state.dateCustomer,
            "name": this.state.nameCustomer,
            "note": this.state.noteCustomer,
            "phone": this.state.phoneCustomer,
            "po_product": this.state.bill
        }

        fetch('https://medicine-api.herokuapp.com/api/v1/order', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.props.storage.token
            },
        }).then(function (response) {
            if (response.status == 200) {
                that.setState({ bill: [], loading: false })
            }
        }, function (error) {
            error.message
        })
    }

    editBill = () => {
        this.setState({ loading: true })
        var that = this
        let data = {
            "address": this.state.addressCustomer,
            "name": this.state.nameCustomer,
            "note": this.state.noteCustomer,
            "phone": this.state.phoneCustomer,
            "po_product": this.state.bill
        }

        fetch('https://medicine-api.herokuapp.com/api/v1/order/' + this.state.idBill, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.props.storage.token
            },
        }).then(function (response) {
            if (response.status == 200) {
                that.setState({ loading: false })
            }
        }, function (error) {
            error.message
        })
    }

    handleKeyDown = (e) => {
        if (e.keyCode == 9) {
            if (this.state.tenthuoc == '') {
                alert('Tên không để trống')
                return
            }
            if (this.state.donvi == '') {
                alert('Đơn vị để trống')
                return
            }
            if (this.state.gia == '') {
                alert('Giá không để trống')
                return
            }
            if (this.state.soluong == '') {
                alert('Số lượng không để trống')
                return
            }
            else {
                let thuoc = {
                    name: this.state.tenthuoc,
                    uom: this.state.donvi,
                    price: this.state.gia,
                    quantity: this.state.soluong,
                    amount: parseInt(this.state.soluong) * parseInt(this.state.gia),
                    note: this.state.ghichu
                }
                let tong = parseInt(thuoc.amount)
                let array = this.state.bill.slice()
                array.push(thuoc)
                this.setState({
                    bill: array
                })

                this.setState({
                    tenthuoc: "",
                    donvi: '',
                    gia: 0,
                    soluong: 1,
                    thanhtien: 0,
                    ghichu: '',
                    value: '',
                    tongtien: parseInt(this.state.tongtien) + parseInt(tong)
                })
            }
        }
    }

    onForCus = () => {
        // if (this._input.value != "") {
        // this.setState({ tenthuoc: this._input.value })
        // }
        this._input.focus();
    }



    deleteThuoc(index) {
        let arrayClone = this.state.bill.slice()

        if (index > -1) {
            arrayClone.splice(index, 1);
        }
        this.setState({ bill: arrayClone })
    }

    format2(n, currency) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + " " + currency;
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Tên thuốc',
            value,
            onChange: this.onChange
        };

        const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(this.renderChildern());
        };

        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Thông tin đơn hàng
                        </h1>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                        <ul id="sparks" className="">
                            <li className="sparks-info">

                                <button onClick={() => {
                                    this.state.editbill ? this.editBill() :
                                        this.submitBill()
                                }} type="button" className="btn btn-success btn-lg">
                                    {this.state.editbill ? "Lưu chỉnh sửa" : "Tạo mới"}
                                </button>
                            </li>
                        </ul>
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
                                                type="text" name="t" onBlur={this.handleSave} placeholder="Tên khách hàng" id="one"
                                                value={this.state.nameCustomer}
                                                onChange={e => this.setState({ nameCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Số điện thoại:</h3>
                                            <input
                                                type="number" name="t" onBlur={this.handleSave} placeholder="Số điện thoại" id="one"
                                                value={this.state.phoneCustomer}
                                                onChange={e => this.setState({ phoneCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-4 col-sm-4 col-xs-4">
                                        <label className="input">
                                            <h3>Ngày giao hàng :</h3>
                                            <UiDatepicker
                                                type="text" name="finishdate" id="finishdate"
                                                maxRestrict="#startdate"
                                                placeholder="Ngày giao hàng"
                                                data-date-format="dd/mm/yy"
                                                defaultValue={this.state.dateCustomer}
                                                onChange={e => this.setState({ dateCustomer: e.target.value })} />
                                        </label>
                                    </div>

                                </div>

                                <div className="row input-order">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Địa chỉ :</h3>
                                            <input type="text" onBlur={this.handleSave} name="t" placeholder="Địa chỉ"
                                                value={this.state.addressCustomer}
                                                onChange={e => this.setState({ addressCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="row input-order ">
                                    <div className="col col-lg-12 col-sm-12 col-xs-12">
                                        <label className="input">
                                            <h3>Ghi chú :</h3>
                                            <input type="text" onBlur={this.handleSave} name="t" placeholder="Ghi chú" id="one"
                                                value={this.state.noteCustomer}
                                                onChange={e => this.setState({ noteCustomer: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </JarvisWidget>
                <JarvisWidget editbutton={false} custombutton={false}>
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-edit" />
                        </span>
                        <h2>Nội dung</h2>
                    </header>
                    <div>
                        <div className="widget-body no-padding">
                            <form className="smart-form" id="search">
                                <div className="row input-order">
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Tên thuốc :</h3>
                                            <Autosuggest
                                                suggestions={suggestions}
                                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                getSuggestionValue={getSuggestionValue}
                                                renderSuggestion={renderSuggestion}
                                                inputProps={inputProps}
                                                theme={theme}
                                                highlightFirstSuggestion={true}
                                                onSuggestionSelected={this.onSuggestionSelected}
                                                renderInputComponent={(inputProps) => (
                                                    <input {...inputProps}
                                                        ref={(c) => this._input = c}
                                                    />
                                                )}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Đơn vị :</h3>
                                            <input type="text" name="t" placeholder="Đơn vị" id="one"
                                                value={this.state.donvi}
                                                onChange={e => this.setState({ donvi: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Giá :</h3>
                                            <input type="number" name="t" placeholder="Giá" id="one"
                                                value={this.state.gia}
                                                onChange={e =>
                                                    this.setState({ gia: e.target.value, thanhtien: (e.target.value * this.state.soluong) })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Số lượng:</h3>
                                            <input type="number" name="t" placeholder="Số lượng" id="one"
                                                value={this.state.soluong}
                                                onChange={e => this.setState({ soluong: e.target.value, thanhtien: this.state.gia * e.target.value })}
                                            />
                                        </label>
                                    </div>

                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Ghi chú :</h3>
                                            <input type="text" name="t" onKeyDown={this.handleKeyDown}
                                                placeholder="Ghi chú" id="one"
                                                value={this.state.ghichu}
                                                onChange={e => this.setState({ ghichu: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="col col-md-2 col-sm-2 col-xs-2">
                                        <label className="input">
                                            <h3>Thành tiền:</h3>
                                            <input type="number" name="t" placeholder="Thành tiền" id="one"
                                                onFocus={() => this.onForCus()} onBlur={this.handleSave}
                                                value={this.state.gia * this.state.soluong}
                                                onChange={e => this.setState({ thanhtien: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <footer>
                                    <button type="button" onClick={() => this.submitDonThuoc()} className="btn btn-primary"> Thêm</button>
                                </footer>
                            </form>
                        </div>
                    </div>
                </JarvisWidget>
                {
                    <JarvisWidget editbutton={false} color="darken">
                        <header>
                            <span className="widget-icon">
                                <i className="fa fa-table" />
                            </span>
                            <h2>Danh sách nội dung</h2>
                        </header>
                        <div className="widget-body">
                            <div className="custom-table-bill">
                                <div className="no-padding">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover ">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Tên</th>
                                                    <th>Đơn vị</th>
                                                    <th>Giá</th>
                                                    <th>Số lượng</th>
                                                    <th>Thành Tiền</th>
                                                    <th>Ghi chú</th>
                                                    <th>Thay đổi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.bill.map((item, index) =>
                                                    <tr key={index}>
                                                        <th>{index + 1}</th>
                                                        <th>{item.name}</th>
                                                        <th>{item.uom}</th>
                                                        <th>{item.price}</th>
                                                        <th>{item.quantity}</th>
                                                        <th>{this.format2(item.amount, "VND")}</th>
                                                        <th>{item.note}</th>
                                                        <th><button type='button' onClick={() => this.deleteThuoc(index)}>Xóa</button></th>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-offset-7">
                                <label className="input">
                                    <h3>Tổng tiền: {this.format2(this.state.tongtien, "VND")}</h3>
                                </label>
                            </div>
                        </div>
                    </JarvisWidget>
                }
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
                        <h4>Tên : </h4>
                        <h4>Địa chỉ :</h4>
                        <h4 >Số điện thoại :</h4>
                        <h4 >Ngày đặt hàng  :</h4>
                        <h4 >Ghi chú  :</h4>
                        <h4 ref={subtitle => this.subtitle = subtitle}>Chi tiết đơn đặt hàng</h4>
                    </div>
                </Modal>
                <Loading loading={this.state.loading} />
            </div>
        )
    }
}

export default Connect(WidgetList);