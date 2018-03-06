import React, {
    Component
} from 'react';
import Utils, {
    LINK
} from "../../../utils";
import {Link} from 'react-router-dom';
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
        this._requestList();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.router.location.search !== this.props.router.location.search) {
            this.query = Utils.parseQuery(nextProps.router.location.search);
            this.setState({
                isActive: this.query['isActive']==="true"?true:false ,
                page: parseInt(this.query['p']) || 1,
                limit: this.query['l'] || 20,
            }, () => {
                this._requestList();
            })

        }

    }
    _requestList() {
        // let query = Utils.parseQuery(queryParam);
        // let limit = query.l || 20;
        // let page = query.p || 1;
        let offset = (this.state.page - 1) * this.state.limit;
        let filters = {};
        // this.state.name && (filters['name'] = this.state.name);
        filters['isActive'] = this.state.isActive;

        this.props.actions.vendor.requestList(filters, offset, this.state.limit);
    }


    render() {
console.log(this.props.vendor.list)
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
                        <span className="widget-icon"> <i className="fa fa-edit"/> </span>
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
                                                   onChange={e => this.setState({name: e.target.value})}/>
                                        </label>
                                    </section>
                                    <section className="col col-4">
                                        <label className="select">
                                            <select className="form-control" name="isActive"
                                                    value={this.state.isActive?1:0}
                                                    onChange={e => this.setState({isActive: !!parseInt(e.target.value)})}>
                                                <option value={0}>Đóng</option>
                                                <option value={1}>Hoạt động</option>
                                            </select>
                                        </label>
                                    </section>
                                    {/*<section className="col col-4">*/}
                                    {/*<label className="select">*/}
                                    {/*<select className="form-control" name="city"*/}
                                    {/*value={this.state.city}*/}
                                    {/*onChange={e => this.setState({city: parseInt(e.target.value)})}>*/}
                                    {/*<option value={0}>Chọn khu vực</option>*/}
                                    {/*<option value={1}>Hồ Chí Minh</option>*/}
                                    {/*<option value={2}>Ha Noi</option>*/}
                                    {/*</select>*/}
                                    {/*</label>*/}
                                    {/*</section>*/}
                                    {/*<section className="col col-4">*/}
                                    {/*<label className="select">*/}
                                    {/*<select className="form-control" name="province"*/}
                                    {/*value={this.state.province}*/}
                                    {/*onChange={e => this.setState({province: e.target.value})}>*/}
                                    {/*<option value="">Quận/Huyện</option>*/}
                                    {/*<option value="q1">Quận 1</option>*/}
                                    {/*<option value="q2">Quận 2</option>*/}
                                    {/*</select>*/}
                                    {/*</label>*/}
                                    {/*</section>*/}

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
                        <span className="widget-icon"> <i className="fa fa-table"/> </span>
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
                                        this.props.vendor.list.length>0&&this.props.vendor.list.map((vendor,index)=>
                                            <tr key={"vendor_list_"+vendor.vendorId}>
                                                <td>{index}</td>
                                                <td><Link to={Utils.link(LINK.VENDOR,vendor.vendorId)}>{vendor.title}</Link></td>
                                                <td>{vendor.geoLocation.parents.length>0?vendor.geoLocation.parents[0]:"Đang cập nhật"}</td>
                                                <td>{
                                                    vendor.isActive?<label className="label label-success">Đang hoạt động</label>:
                                                        <label className="label label-danger">Đóng</label>
                                                }</td>
                                                <td>{Utils.formatDate(vendor.createAt)}</td>
                                            </tr>)
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