import React, {
    Component
} from 'react';
import Utils, {
    LINK
} from "../../utils";
import {Link} from 'react-router-dom';
import Connect from '../../stores/connect';

import JarvisWidget from '../../components/jarvis_widget';
import serialize from 'form-serialize';


class AccountList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            state: 0,
            permission: 0,
            sortby: 0,
            isIncremet: 0

        };
    }

    search(e) {
        e.preventDefault();
        let form = document.querySelector('#search');
        var obj = serialize(form, {hash: true});
        console.log(obj)
        return false;

    }

    render() {

        return (<div id="content">
            <div className="row">
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                    <h1 className="page-title txt-color-blueDark">
                        Quản lý tài khoản
                    </h1>
                </div>
                {/*<div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">*/}
                    {/*<ul id="sparks" className="">*/}
                        {/*<li className="sparks-info">*/}
                            {/*<Link to={Utils.link(LINK.PRODUCT, "them-moi")} className="btn btn-success btn-lg">*/}
                                {/*Tạo mới*/}
                            {/*</Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>

            <JarvisWidget editbutton={false} custombutton={false}>
                <header>
                    <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                    <h2>Tìm kiếm tài khoản</h2>
                </header>
                <div>
                    {/* widget content */}
                    <div className="widget-body no-padding">
                        <form className="smart-form" id="search">

                            <fieldset className="col col-4">
                                <section>
                                    <label className="label">Từ khóa:</label>
                                    <label className="input">
                                        <input type="text" className="input-sm" placeholder="Họ tên | Số điện thoại"
                                               value={this.state.key} name="keyword"
                                               onChange={e => this.setState({key: e.target.value})}/>
                                    </label>
                                </section>
                                <section>
                                    <label className="label">Trạng thái</label>
                                    <label className="select">
                                        <select className="input-sm" name="state"
                                                value={this.state.state}
                                                onChange={e => this.setState({state: parseInt(e.target.value)})}>
                                            <option value={1}>Kích hoạt</option>
                                            <option value={2}>Đóng</option>
                                        </select> <i/> </label>
                                </section>
                            </fieldset>
                            <fieldset className="col col-4">
                                <section>
                                    <label className="label">Sắp xếp theo</label>
                                    <label className="select">
                                        <select className="input-sm" name="sortby"
                                                value={this.state.sortby}
                                                onChange={e => this.setState({sortby: parseInt(e.target.value)})}>
                                            <option value={1}>Họ tên</option>
                                            <option value={2}>Ngày đăng kí</option>
                                        </select> <i/> </label>
                                </section>
                                <section>
                                    <label className="label">Nhóm quyền</label>
                                    <label className="select">
                                        <select className="input-sm" name="permission"
                                                value={this.state.permission}
                                                onChange={e => this.setState({permission: parseInt(e.target.value)})}>
                                            <option value={1}>Kích hoạt</option>
                                            <option value={2}>Đóng</option>
                                        </select> <i/> </label>
                                </section>
                            </fieldset>
                            <fieldset className=" col col-4">

                                <section>
                                    <label className="label">Cách sắp xếp</label>
                                    <label className="select">
                                        <select className="input-sm" name="isIncremet"
                                                value={this.state.isIncremet}
                                                onChange={e => this.setState({isIncremet: parseInt(e.target.value)})}>
                                            <option value={0}>DESC</option>
                                            <option value={1}>ASC</option>
                                        </select> <i/> </label>
                                </section>
                            </fieldset>
                            <div className="clearfix"/>

                            <footer>
                                <button type="button" className="btn btn-primary btn-lg"
                                        onClick={this.search.bind(this)}>Tìm
                                    kiếm
                                </button>
                            </footer>
                        </form>
                    </div>
                </div>
            </JarvisWidget>
            <JarvisWidget editbutton={false} color="darken">
                <header>
                    <span className="widget-icon"> <i className="fa fa-table"/> </span>
                    <h2>Danh sách tài khoản</h2>
                </header>
                <div>
                    <div className="widget-body no-padding">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover table-scroll">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Điểm thưởng</th>
                                    <th>Nhóm quyền</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày đăng kí</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><Link  to={Utils.link(LINK.ACCOUNT,"chi-tiet/12345")}>Phạm Văn A</Link></td>
                                    <td>0123456789</td>
                                    <td>1000000</td>
                                    <td>Administrator</td>
                                    <td><span className="label label-success">Hoạt động</span></td>
                                    <td>10/10/2017</td>
                                </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
            </JarvisWidget>
        </div>)
    }
}

export default Connect(AccountList);