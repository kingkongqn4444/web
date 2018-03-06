import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import BootstrapValidator from '../../../components/forms/bootstrap_validator';
import serialize from 'form-serialize';
import FuelUxWizard from '../../../components/forms/FuelUxWizard';
import Configs from "../../../configs";

class VendorAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            slug:"",
            email: "",
            sdt: "",
            address: "",
            geoLocation: "hcm",
            delivery:[],
            metadata:{
              code:''
            },
            status:"",
            paymentMethod:[],
            service: "uber",
            coopmart: true,
            isActive: true,
            bref: "",
            stock: "kho1",
            nameStock: "",
            emailStock: "",
            sdtStock: "",
            addressStock: "",
            locationStock: "hcm",
            brefStock: ""

        }
        if (this.props.id) {
            this.props.actions.vendor.requestDetail(this.props.id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.vendor.detail !== this.props.vendor.detail) {
            let vendor = nextProps.vendor.detail;
            // console.log(this.props.vendor.detail.category[0]);
            this.setState({
                title: vendor.title,
                slug: vendor.slug,
                geoLocation: vendor.geoLocation.parents.length>0?vendor.geoLocation.parents[0]:'',
                isActive:vendor.isActive,
                delivery:vendor.delivery,
                status:vendor.status,
                metadata:vendor.metadata,
                paymentMethod:vendor.paymentMethod
            });
        }
    }

    onSubmit() {
        // e.preventDefault();
        let form = document.querySelector('#smart-form');
        var obj = serialize(form, {hash: true});
        console.log(obj)
        return false;
    }

    onWizardComplete(data) {
        console.log('fuelux wizard submit stuff', data);

    }

    render() {
console.log(this.props.vendor.detail)
        return (
            <div>
                <div id="content">
                    <div className="row">
                        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                            <h1 className="page-title txt-color-blueDark">
                                Thêm Nhà Cung Cấp
                            </h1>
                        </div>
                    </div>
                    <JarvisWidget editbutton={false} deletebutton={false}>

                        {/* widget div*/}
                        <div>
                            <FuelUxWizard className="widget-body fuelux" onComplete={this.onWizardComplete}>

                                <div className="wizard">
                                    <ul className="steps">
                                        <ul className="steps">
                                            <li data-step="1" className="active">
                                                <span className="badge badge-info">1</span>Bước 1<span
                                                className="chevron"/>
                                            </li>
                                            <li data-step="2">
                                                <span className="badge">2</span>Bước 2<span
                                                className="chevron"/>
                                            </li>
                                        </ul>
                                    </ul>
                                    <div className="actions">
                                        <button type="button" className="btn btn-sm btn-primary btn-prev">
                                            <i className="fa fa-arrow-left"/>Prev
                                        </button>
                                        <button type="button" className="btn btn-sm btn-success btn-next" data-last="Finish">
                                            Next<i className="fa fa-arrow-right"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="step-content">
                                    <BootstrapValidator>
                                    <form className="smart-form"
                                          data-bv-message="This value is not valid"
                                          data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                                          data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                                          data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
                                        <br/>
                                        <div className="step-pane active" data-step="1">
                                            <h3><strong>Bước 1 </strong>- Thông tin nhà cung cấp</h3>

                                            {/* wizard form starts here */}
                                            <fieldset>
                                                <section className="form-group">
                                                    <label className="label">Tên nhà
                                                        cung cấp</label>
                                                    <label className="input">
                                                        <input type="text" className="form-control"
                                                               name="title"
                                                               value={this.state.title}
                                                               onChange={e => this.setState({title: e.target.value})}
                                                               placeholder="Tên sản phẩm"
                                                               data-bv-notempty="true"
                                                               data-bv-notempty-message="Tên sản phẩm không được bỏ trống"/>
                                                    </label>
                                                </section>
                                                <section className="form-group">
                                                    <label className="label">Slug</label>
                                                    <label className="input">
                                                        <input type="text" className="form-control"
                                                               name="slug"
                                                               value={this.state.slug}
                                                               onChange={e => this.setState({slug: e.target.value})}
                                                               placeholder="Slug"
                                                               data-bv-notempty="true"
                                                               data-bv-notempty-message="Slug không được bỏ trống"/>
                                                    </label>
                                                </section>
                                                {/*<section className="form-group">*/}
                                                    {/*<label className="label">Logo</label>*/}
                                                    {/*<label className="input">*/}
                                                        {/*<div className="input input-file">*/}
                                                                                {/*<span className="button">*/}
                                                                                    {/*<input type="file" id="file"*/}
                                                                                           {/*name="photo"/>Browse</span>*/}
                                                            {/*<input type="text"*/}
                                                                   {/*placeholder="Include some files"*/}
                                                                   {/*readOnly/>*/}
                                                        {/*</div>*/}
                                                    {/*</label>*/}
                                                {/*</section>*/}

                                                {/*<section className="form-group">*/}
                                                    {/*<label*/}
                                                        {/*className="label">Email</label>*/}
                                                    {/*<div className="input">*/}
                                                        {/*<input className="form-control" name="email"*/}
                                                               {/*type="email" data-bv-emailaddress="true"*/}
                                                               {/*data-bv-emailaddress-message="The input is not a valid email address"*/}
                                                               {/*value={this.state.email}*/}
                                                               {/*onChange={e => this.setState({email: e.target.value})}/>*/}
                                                    {/*</div>*/}
                                                {/*</section>*/}

                                                {/*<section className="form-group">*/}
                                                    {/*<label className="label">Điện*/}
                                                        {/*thoại</label>*/}
                                                    {/*<label className="input">*/}
                                                        {/*<input className="form-control"*/}
                                                               {/*name="mobilePhone" type="text"*/}
                                                               {/*value={this.state.sdt}*/}
                                                               {/*onChange={e => this.setState({sdt: e.target.value})}/>*/}
                                                    {/*</label>*/}
                                                {/*</section>*/}
                                                {/*<section className="form-group">*/}
                                                    {/*<label className="label">Địa*/}
                                                        {/*chỉ</label>*/}
                                                    {/*<div className="input">*/}
                                                        {/*<input className="form-control" name="address"*/}
                                                               {/*type="text"*/}
                                                               {/*value={this.state.address}*/}
                                                               {/*onChange={e => this.setState({address: e.target.value})}/>*/}
                                                    {/*</div>*/}
                                                {/*</section>*/}
                                                <section className="form-group">
                                                    <label className="label">Khu
                                                        vực</label>
                                                    <label className="select">
                                                        <select className="form-control" name="location"
                                                                value={this.state.geoLocation}
                                                                onChange={e => this.setState({geoLocation: e.target.value})}>
                                                            <option value="hn">Hà Nội</option>
                                                            <option value="hcm">TP HCM</option>
                                                        </select><i/>
                                                    </label>
                                                </section>
                                                <section className="form-group">
                                                    <label className="label">Dịch vụ
                                                        giao hàng</label>
                                                    <div className="select">
                                                        <select className="form-control" name="service"
                                                                value={this.state.service}
                                                                onChange={e => this.setState({service: e.target.value})}>
                                                            <option value="dn">Delivery Now</option>
                                                            <option value="uber">Uber</option>
                                                        </select><i/>
                                                    </div>
                                                </section>
                                                <section className="form-group">
                                                    <label className="label">Status</label>
                                                    <label className="select">
                                                        <select className="form-control" name="location"
                                                                value={this.state.status}
                                                                onChange={e => this.setState({status: e.target.value})}>
                                                            <option value="new">New</option>
                                                            <option value="unverify">Unverify</option>
                                                            <option value="verify">Verify</option>
                                                            <option value="close">Close</option>
                                                        </select><i/>
                                                    </label>
                                                </section>
                                                <section className="col-lg-12">
                                                    <label className="toggle col-lg-3" style={{
                                                        display: "inline-block"
                                                    }}>
                                                        <input type="checkbox" name="Nhà thuốc"
                                                               value={this.state.coopmart}
                                                               defaultChecked={this.state.coopmart}
                                                               onChange={e => this.setState({coopmart: e.target.checked})}/>
                                                        <i data-swchon-text="Bật" data-swchoff-text="Tắt"/>
                                                        Thuộc
                                                        chuỗi Nhà thuốc
                                                    </label>
                                                </section>
                                                <section className="col-lg-12">
                                                    <label className="toggle col-lg-3" style={{
                                                        display: "inline-block"
                                                    }}>
                                                        <input type="checkbox" name="isActive"
                                                               value={this.state.isActive}
                                                               defaultChecked={this.state.isActive}
                                                               onChange={e => this.setState({isActive: e.target.checked})}/>
                                                        <i data-swchon-text="Bật" data-swchoff-text="Tắt"/>
                                                        Hoạt
                                                        động
                                                    </label>
                                                </section>
                                            </fieldset>

                                        </div>

                                        <div className="step-pane" data-step="2">
                                            <h3><strong>Bước 2 </strong>- Thông tin kho hàng</h3>

                                            <fieldset>
                                                <section className="form-group">
                                                    <label className="label">Chọn kho hàng</label>
                                                    <label className="select">
                                                        <select className="form-control" name="stock"
                                                                value={this.state.stock}
                                                                onChange={e => this.setState({stock: e.target.value})}>
                                                            <option value="kho1">Kho 1</option>
                                                            <option value="kho2">Kho 2</option>
                                                        </select><i/>
                                                    </label>
                                                </section>

                                                <h1><strong>Thông tin kho hàng </strong></h1>
                                                <br/>
                                                <section className="form-group">
                                                    <label className="label">Tên kho hàng</label>
                                                    <label className="input">
                                                        <input type="text" className="form-control"
                                                               name="nameStock"
                                                               value={this.state.nameStock}
                                                               onChange={e => this.setState({nameStock: e.target.value})}
                                                               placeholder="Tên kho hàng"
                                                               data-bv-notempty="true"
                                                               data-bv-notempty-message="Tên kho hàng không được bỏ trống"/>
                                                    </label>
                                                </section>

                                                <section className="form-group">
                                                    <label className="label">Email</label>
                                                    <label className="input">
                                                        <input className="form-control" name="emailStock"
                                                               placeholder="email"
                                                               type="email" data-bv-emailaddress="true"
                                                               data-bv-emailaddress-message="Cần nhập đúng form email"
                                                               value={this.state.emailStock}
                                                               onChange={e => this.setState({emailStock: e.target.value})}/>
                                                    </label>
                                                </section>

                                                <section className="form-group">
                                                    <label className="label">Điện
                                                        thoại</label>
                                                    <label className="input">
                                                        <input className="form-control"
                                                               name="sdtStock" type="text" placeholder="Số điện thoại"
                                                               value={this.state.sdtStock}
                                                               onChange={e => this.setState({sdtStock: e.target.value})}/>
                                                    </label>
                                                </section>
                                                <section className="form-group">
                                                    <label className="label">Địa
                                                        chỉ</label>
                                                    <label className="input">
                                                        <input className="form-control" name="addressStock"
                                                               placeholder="Địa chỉ"
                                                               type="text"
                                                               value={this.state.addressStock}
                                                               onChange={e => this.setState({addressStock: e.target.value})}/>
                                                    </label>
                                                </section>
                                                <section className="form-group">
                                                    <label className="label">Khu
                                                        vực</label>
                                                    <label className="select ">
                                                        <select className="form-control" name="locationStock"
                                                                value={this.state.locationStock}
                                                                onChange={e => this.setState({locationStock: e.target.value})}>
                                                            <option value="hn">Hà Nội</option>
                                                            <option value="hcm">TP HCM</option>
                                                        </select><i/>
                                                    </label>
                                                </section>

                                                <section className="form-group">
                                                    <label className="label">Mô tả</label>
                                                    <label className="textarea">
                                                                        <textarea className="form-control"
                                                                                  name="brefStock"
                                                                                  rows="3" value={this.state.brefStock}
                                                                                  onChange={e => this.setState({brefStock: e.target.value})}></textarea>
                                                    </label>
                                                </section>
                                            </fieldset>
                                        </div>



                                    </form>
                                    </BootstrapValidator>
                                </div>

                            </FuelUxWizard>
                        </div>
                    </JarvisWidget>

                </div>
            </div>
        )
    }
}

export default Connect(VendorAdd);