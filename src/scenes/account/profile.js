import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';
import JarvisWidget from '../../components/jarvis_widget';
import serialize from 'form-serialize';
import BootstrapValidator from '../../components/forms/bootstrap_validator';

class AccountProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyễn Văn A",
            phone: "",
            email: "",
            address: "",
            location: 0
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let form = document.querySelector('#smart-form');
        var obj = serialize(form, {hash: true});
        console.log(obj)
        return false;
    }

    render() {
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Chi tiết tài khoản
                        </h1>
                    </div>
                </div>
                    <JarvisWidget colorbutton={false} editbutton={false}
                                  custombutton={false}>
                        <header>
                                    <span className="widget-icon"> <i
                                        className="fa fa-edit"/> </span>
                            <h2>Cập nhật địa chỉ nhận hàng</h2>
                        </header>
                        <div>
                            {/* widget content */}
                            <div className="widget-body no-padding">
                                <BootstrapValidator>
                                    <form id="smart-form" className="smart-form"
                                          data-bv-message="This value is not valid"
                                          data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                                          data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                                          data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
                                        <fieldset>
                                            <section className="form-group">
                                                <label className="label">Họ & Tên</label>
                                                <label className="input">
                                                    <input type="text" className="input-xs"  name="name"
                                                           value={this.state.name}
                                                           onChange={e => this.setState({name: e.target.value})}
                                                           placeholder="Họ & Tên"
                                                           data-bv-notempty="true"
                                                           data-bv-notempty-message="Họ tên không được bỏ trống"/>
                                                </label>
                                            </section>
                                            <section className="form-group">
                                                <label className="label">Số điện thoại</label>
                                                <label className="input">
                                                    <input type="text" className="input-xs"  name="phone"
                                                           value={this.state.phone}
                                                           onChange={e => this.setState({phone: e.target.value})}
                                                           placeholder="Số điện thoại"
                                                           data-bv-notempty="true"
                                                           data-bv-notempty-message="Số điện thoại không được bỏ trống"/>
                                                </label>
                                            </section>
                                            <section className="form-group">
                                                <label className="label">Email</label>
                                                <label className="input">
                                                    <input type="email" className="input-xs"  name="email"
                                                           value={this.state.email}
                                                           onChange={e => this.setState({plug: e.target.value})}
                                                           placeholder="Email"
                                                           data-bv-notempty="true"
                                                           data-bv-notempty-message="Email không được bỏ trống"/>
                                                </label>
                                            </section>
                                            <section className="form-group">
                                                <label className="label">Địa chỉ</label>
                                                <label className="input">
                                                    <input type="text" className="input-xs"  name="address"
                                                           value={this.state.address}
                                                           onChange={e => this.setState({address: e.target.value})}
                                                           placeholder="Số điện thoại"
                                                           data-bv-notempty="true"
                                                           data-bv-notempty-message="Địa chỉ không được bỏ trống"/>
                                                </label>
                                            </section>
                                            <section className="form-group">
                                                <label className="label">Khu vực</label>
                                                <label className="select">
                                                    <select className="input-sm" value={this.state.location}
                                                            name="location" data-bv-field="color"
                                                            onChange={e => this.setState({
                                                                location: parseInt(e.target.value),
                                                                title: "",
                                                                alt: "",
                                                                contentHTML: ""
                                                            })}>
                                                        <option value={0}>Cống quỳnh</option>
                                                        <option value={1}>Bà Chiểu</option>
                                                    </select> <i/> </label>
                                            </section>
                                        </fieldset>



                                        <footer>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={this.onSubmit.bind(this)}>Xác nhận
                                            </button>
                                        </footer>

                                    </form>
                                </BootstrapValidator>
                            </div>
                        </div>
                    </JarvisWidget>

            </div>
        )
    }
}

export default Connect(AccountProfile);