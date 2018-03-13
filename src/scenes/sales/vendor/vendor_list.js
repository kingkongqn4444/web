import React, {
    Component
} from 'react';
import Utils, {
    LINK
} from "../../../utils";
import { Link } from 'react-router-dom';
import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';




class VendorList extends Component {
    constructor(props) {
        super(props);
        this.query = Utils.parseQuery(this.props.router.location.search);
        // console.log(this.props.router);
        this.state = {
            name: '',
            isActive: false,
            limit: this.query['l'] || 20,
            page: parseInt(this.query['p']) || 1,
            city: 0,
            province: "q1"
        };
    }
    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (<div id="content">
            <div className="row">
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                    <h1 className="page-title txt-color-blueDark">
                        Danh sách nhà cung cấp
                        </h1>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">
                    <ul id="sparks" className="">
                        <li className="sparks-info">
                            <Link to={Utils.link(LINK.VENDOR, "them-moi")} className="btn btn-success btn-lg">
                                Tạo mới
                                </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <JarvisWidget editbutton={false} custombutton={false}>
                <header>
                    <span className="widget-icon"> <i className="fa fa-edit" /> </span>
                </header>
                <div>
                    {/* widget content */}
                    <div className="widget-body no-padding">
                        <form className="smart-form" id="search">
                            <fieldset>
                                <section className="col col-4">
                                    <label className="input">
                                        <input type="text" placeholder="Tên nhà cung cấp"
                                            value={this.state.name}
                                            className="form-control"
                                            name="name"
                                            onChange={e => this.setState({ name: e.target.value })} />
                                    </label>
                                </section>
                                <section className="col col-4">
                                    <label className="select">
                                        <select className="form-control" name="isActive"
                                            value={this.state.isActive ? 1 : 0}
                                            onChange={e => this.setState({ isActive: !!parseInt(e.target.value) })}>
                                            <option value={0}>Đóng</option>
                                            <option value={1}>Hoạt động</option>
                                        </select>
                                    </label>
                                </section>
                            </fieldset>
                            <footer>
                                <Link to={Utils.link(LINK.VENDOR, "danh-sach", {
                                    name: this.state.name,
                                    isActive: this.state.isActive,
                                    limit: this.state.limit,
                                    page: 1
                                })} type="submit" className="btn btn-primary">
                                    Tìm kiếm
                                    </Link>
                            </footer>
                        </form>
                    </div>
                </div>
            </JarvisWidget>
            <JarvisWidget editbutton={false} color="darken">
                <header>
                    <span className="widget-icon"> <i className="fa fa-table" /> </span>
                    <h2>Danh sách nhà cung cấp</h2>
                </header>
                <div>
                    <div className="widget-body no-padding">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên nhà cung cấp</th>
                                        <th>Địa chỉ</th>
                                        <th>Hoạt động</th>
                                        <th>Ngày tạo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    }
                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
            </JarvisWidget>
        </div>
        )
    }
}

export default Connect(VendorList);