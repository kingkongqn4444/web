import React, {
    Component
} from 'react';

import serialize from 'form-serialize';
import Utils, {
    LINK
} from '../../utils';

import Connect from '../../stores/connect';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            email: '',
            password: '',
            registerName: '',
            registerEmail: '',
            resigterPass: '',
            confirmPass: '',
            register: false,
            renderDangNhap: true
        };
        if (this.props.storage.token !== "") {
            this.props.actions.app.navigate(Utils.link(LINK.DASHBOARD))
        }
    }

    handleLogin(e) {
        this.setState({ register: false })
        e.preventDefault();
        const form = document.querySelector('#login-form');
        const data = serialize(form, { hash: true });
        this.props.actions.authenticate.login(data)
        console.log('asdasdsdfjsdfkjghcsjkgsdfd', this.props.authenticate.token)
        this.props.actions.storage.setAccessToken(this.props.authenticate.token)
    }

    handerRegister(e) {
        if (this.state.resigterPass !== this.state.confirmPass) {
            alert("Mật khẩu phải giống nhau")
            return
        }
        if (this.state.resigterPass.length < 6) {
            alert("Mật khẩu ít nhất 6 ký tự")
            return
        }
        else {
            this.setState({ register: true })
            e.preventDefault();
            const form = document.querySelector('#register-form');
            const data = serialize(form, { hash: true });
            this.props.actions.authenticate.register(data)
        }

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.authenticate.token !== nextProps.authenticate.token) {
            this.props.actions.storage.setAccessToken(nextProps.authenticate.token);
            this.props.actions.app.navigate(Utils.link(LINK.DASHBOARD))
        }
        if (nextProps.authenticate.login && nextProps.authenticate.login.status == 200) {
            this.props.actions.app.navigate(Utils.link(LINK.DASHBOARD))
        }
        if (nextProps.authenticate.register && nextProps.authenticate.register.status == 200) {
            this.setState({ register: false })
        }
    }

    updateInputValue(evt) {
        this.setState({
            email: evt.target.value
        })
    }

    updateInputValuePassword(evt) {
        this.setState({
            password: evt.target.value
        })
    }



    render() {
        return (
            <div id="extr-page">
                <header id="header" className="animated fadeInDown">

                    <div id="logo-group">
                        <span id="logo"> <img src="/assets/img/logo.png" alt="PPMS" /> </span>
                    </div>
                </header>
                <div id="main" role="main" className="animated fadeInDown">

                    <div id="content" className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                                <h1 className="txt-color-red login-header-big">PTV</h1>

                                <div className="hero">
                                    <div className="pull-left login-desc-box-l">
                                        <h4 className="paragraph-header">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non vehicula
                                            leo, ut congue augue. Phasellus dictum lacus quis efficitur ultricies.
                                            Suspendisse potenti. Nullam tempor tortor ac convallis ultrices. Sed
                                            porttitor, enim id eleifend hendrerit, sem risus feugiat massa, sed mattis
                                            lectus est vel augue. Mauris at magna in lorem fermentum gravida.
                                            Suspendisse in eleifend justo.</h4>


                                    </div>
                                    <img src="/assets/img/demo/iphoneview.png" className="pull-right display-image"
                                        alt=""
                                        style={{ width: '210px' }} />
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                                <div className="well no-padding">

                                    {this.state.register ?

                                        <form id="register-form" className="smart-form client-form">
                                            <header>
                                                Đăng Ký
                                    </header>
                                            <fieldset>
                                                {
                                                    this.state.showError && (
                                                        <section>
                                                            <div className="alert alert-danger fade in">
                                                                <i className="fa-fw fa fa-times" />
                                                                <strong>Lỗi!</strong> {this.props.authenticate.error}
                                                            </div>
                                                        </section>
                                                    )
                                                }
                                                <section>
                                                    <label className="label">Tên</label>
                                                    <label className="input"> <i className="icon-append fa fa-user" />
                                                        <input type="email"
                                                            onChange={(abc) => this.setState({ registerName: abc.target.value })}
                                                            name="name" data-smart-validate-input=""
                                                            data-required="" data-email=""
                                                            data-message-required="Please enter your email address"
                                                            data-message-email="Please enter a VALID email address" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-user txt-color-teal" />
                                                            Email</b>
                                                    </label>
                                                </section>

                                                <section>
                                                    <label className="label">Email</label>
                                                    <label className="input"> <i className="icon-append fa fa-user" />
                                                        <input type="email"
                                                            onChange={(abc) => this.setState({ registerEmail: abc.target.value })}
                                                            name="email" data-smart-validate-input=""
                                                            data-required="" data-email=""
                                                            data-message-required="Please enter your email address"
                                                            data-message-email="Please enter a VALID email address" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-user txt-color-teal" />
                                                            Email</b>
                                                    </label>
                                                </section>
                                                <section>
                                                    <label className="label">Mật khẩu</label>
                                                    <label className="input"> <i className="icon-append fa fa-lock" />
                                                        <input type="password" name="password"
                                                            onChange={(def) => this.setState({ resigterPass: def.target.value })}
                                                            data-smart-validate-input="" data-required=""
                                                            data-minlength="3" data-maxnlength="20"
                                                            data-message="Please enter your email password" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-lock txt-color-teal" /> Mật khẩu</b> </label>
                                                </section>
                                                <section>
                                                    <label className="label">Xác nhận mật khẩu</label>
                                                    <label className="input"> <i className="icon-append fa fa-user" />
                                                        <input type="email"
                                                            onChange={(abc) => this.setState({ confirmPass: abc.target.value })}
                                                            name="xacnhan" data-smart-validate-input=""
                                                            data-required="" data-email=""
                                                            data-message-required="Please enter your email address"
                                                            data-message-email="Please enter a VALID email address" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-user txt-color-teal" />
                                                            Email</b>
                                                    </label>
                                                </section>
                                                <section>
                                                    <label className="checkbox">
                                                        <input type="checkbox" name="remember" defaultChecked={true} />
                                                        <i />Stay signed in</label>
                                                </section>
                                            </fieldset>
                                            <footer>
                                                <button type="button" className="btn btn-primary"
                                                    onClick={evt => this.handerRegister(evt)}
                                                >
                                                    Đăng ký
                                                </button>
                                                <a onClick={() => this.setState({ register: false })}>Đã có tài khoản ? Đăng nhập</a>
                                            </footer>
                                        </form> :
                                        <form id="login-form" className="smart-form client-form">
                                            <header>
                                                Đăng nhập
                                        </header>
                                            <fieldset>
                                                {
                                                    this.state.showError && (
                                                        <section>
                                                            <div className="alert alert-danger fade in">
                                                                <i className="fa-fw fa fa-times" />
                                                                <strong>Lỗi!</strong> {this.props.authenticate.error}
                                                            </div>
                                                        </section>
                                                    )
                                                }
                                                <section>
                                                    <label className="label">Email</label>
                                                    <label className="input"> <i className="icon-append fa fa-user" />
                                                        <input type="email"
                                                            onChange={(abc) => this.updateInputValue(abc)}
                                                            name="phone" data-smart-validate-input=""
                                                            data-required="" data-email=""
                                                            data-message-required="Please enter your email address"
                                                            data-message-email="Please enter a VALID email address" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-user txt-color-teal" />
                                                            Email</b>
                                                    </label>
                                                </section>
                                                <section>
                                                    <label className="label">Mật khẩu</label>
                                                    <label className="input"> <i className="icon-append fa fa-lock" />
                                                        <input type="password" name="password"
                                                            onChange={(def) => this.updateInputValuePassword(def)}
                                                            data-smart-validate-input="" data-required=""
                                                            data-minlength="3" data-maxnlength="20"
                                                            data-message="Please enter your email password" />
                                                        <b className="tooltip tooltip-top-right"><i
                                                            className="fa fa-lock txt-color-teal" /> Mật khẩu</b> </label>
                                                </section>
                                                <section>
                                                    <label className="checkbox">
                                                        <input type="checkbox" name="remember" defaultChecked={true} />
                                                        <i />Stay signed in</label>
                                                </section>
                                            </fieldset>
                                            <footer>
                                                <a onClick={() => this.setState({ register: true })}>Chưa có tài khoản ? Đăng ký</a>
                                                <button type="button" className="btn btn-primary"
                                                    onClick={evt => this.handleLogin(evt)}
                                                >
                                                    Đăng Nhập
                                            </button>
                                            </footer>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connect(Login);