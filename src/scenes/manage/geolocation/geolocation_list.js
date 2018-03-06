import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import SmartNestable from '../../../components/common/smart_nestable';
import BootstrapValidator from '../../../components/forms/bootstrap_validator';
import serialize from 'form-serialize';
class GeolocationList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            output:'',
            name:'',
            parent:'',
            longitude:'',
            latitude:'',
            display:'0',
            state:''
        }
    }
    onChange = (output)=> {
        this.setState({
            output: output
        })
    };
    onSubmit(){
        console.log(this.state.output)
    }
    addNewGeolocation(e){
        e.preventDefault();
        let form = document.querySelector('#attributeForm');
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
                            Quản lý khu vực
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <article className="col-sm-6">
                        <div className="panel">
                            <div className="panel panel-heading">
                                <button className="btn btn-primary" onClick={()=>this.onSubmit()}>Xác Nhận</button>
                            </div>
                            <div className="panel panel-body">
                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>
                            <header>
                                <span className="widget-icon"> <i className="fa fa-reorder"/> </span>
                                <h2>Danh sách khu vực </h2>
                            </header>
                            <div>
                                {/* widget content */}
                                <div className="widget-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <SmartNestable onChange={this.onChange}>
                                                <div className="dd" style={{maxWidth:"100%"}}>
                                                    <ol className="dd-list">
                                                        <li className="dd-item " data-id="1">
                                                            <div className="dd-handle">
                                                                TP Hồ Chí Minh
                                                                <div className="pull-right">
                                                                    <button href="#"><span className="fa fa-pencil-square-o"></span></button>
                                                                    <button href="#"><span className="fa fa-files-o"></span></button>
                                                                    <button href="#"> <span className="fa fa-recycle"></span></button>
                                                                </div>

                                                            </div>
                                                            <ol className="dd-list">
                                                                <li className="dd-item" data-id="2">
                                                                    <div className="dd-handle">
                                                                        Q1
                                                                        <div className="pull-right">
                                                                            <button href="#"><span className="fa fa-pencil-square-o"></span></button>
                                                                            <button href="#"><span className="fa fa-files-o"></span></button>
                                                                            <button href="#"> <span className="fa fa-recycle"></span></button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="dd-item" data-id="3">
                                                                    <div className="dd-handle">
                                                                        Q2
                                                                        <div className="pull-right">
                                                                            <button href="#"><span className="fa fa-pencil-square-o"></span></button>
                                                                            <button href="#"><span className="fa fa-files-o"></span></button>
                                                                            <button href="#"> <span className="fa fa-recycle"></span></button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li className="dd-item" data-id="4">
                                                            <div className="dd-handle">
                                                                Hà Nội
                                                                <div className="pull-right">
                                                                    <button href="#"><span className="fa fa-pencil-square-o"></span></button>
                                                                    <button href="#"><span className="fa fa-files-o"></span></button>
                                                                    <button href="#"> <span className="fa fa-recycle"></span></button>
                                                                </div>
                                                            </div>
                                                            <ol className="dd-list">
                                                                <li className="dd-item" data-id="3">
                                                                    <div className="dd-handle">
                                                                        Long Biên
                                                                        <div className="pull-right">
                                                                            <button href="#"><span className="fa fa-pencil-square-o"></span></button>
                                                                            <button href="#"><span className="fa fa-files-o"></span></button>
                                                                            <button href="#"> <span className="fa fa-recycle"></span></button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </SmartNestable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </JarvisWidget>
                            </div>
                        </div>
                    </article>
                    <article className="col-sm-6">
                        <div className="panel panel-body">
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          custombutton={false}>
                                <header>
                                    <span className="widget-icon"> <i
                                        className="fa fa-edit"/> </span>
                                    <h2>Thêm mới khu vực</h2>
                                </header>
                                <div>


                                    {/* widget content */}
                                    <div className="widget-body no-padding">
                                        <BootstrapValidator>
                                            <form id="attributeForm" className="smart-form"
                                                  data-bv-message="This value is not valid"
                                                  data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
                                                  data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
                                                  data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">
                                                <fieldset style={{margin: "0px auto"}}>
                                                    <div className="form-group">
                                                        <label className="col-lg-3 control-label">Tên khu vực</label>
                                                        <div className="col-lg-7">
                                                            <input type="text" className="form-control" name="name"
                                                                   value={this.state.name}
                                                                   onChange={e => this.setState({name: e.target.value})}
                                                                   placeholder="Tên khu vực"
                                                                   data-bv-notempty="true"
                                                                   data-bv-notempty-message="Tên khu vực không được bỏ trống"/>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <fieldset>
                                                    <div className="form-group">
                                                        <label className="col-xs-2 col-lg-3 control-label">Khu vực
                                                            cha</label>
                                                        <div className="col-xs-7 ">
                                                            <select className="form-control" name="parent"
                                                                    value={this.state.parent} onChange={e=>this.setState({parent:e.target.value})}>
                                                                <option value="0">root</option>
                                                                <option value="1">Hà Nội</option>
                                                                <option value="2">--- Hoàn Kiếm</option>
                                                                <option value="3">--- Long Biên</option>
                                                                <option value="4">Hồ Chí Minh</option>
                                                                <option value="5">--- Q1</option>
                                                                <option value="6">--- Bình Thạnh</option>
                                                                <option value="7">------ Thanh Đa</option>
                                                                <option value="8">------ Bình Quới</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset style={{margin: "0px auto"}}>
                                                    <div className="form-group">
                                                        <label className="col-lg-3 control-label">Kinh độ</label>
                                                        <div className="col-lg-7">
                                                            <input type="text" className="form-control" name="longitude"
                                                                   value={this.state.longitude}
                                                                   onChange={e => this.setState({longitude: e.target.value})}
                                                                   placeholder="Kinh độ"/>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset style={{margin: "0px auto"}}>
                                                    <div className="form-group">
                                                        <label className="col-lg-3 control-label">Vĩ độ</label>
                                                        <div className="col-lg-7">
                                                            <input type="text" className="form-control" name="latitude"
                                                                   value={this.state.latitude}
                                                                   onChange={e => this.setState({latitude: e.target.value})}
                                                                   placeholder="Vĩ độ"/>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset style={{margin: "0px auto"}}>
                                                    <div className="form-group">
                                                        <label className="col-lg-3 control-label">Hiển thị</label>
                                                        <div className="col-lg-7">
                                                            <label className="radio">
                                                                <input type="radio" value={true} name="display" defaultChecked/>
                                                                <i/>Hiện thị</label>
                                                            <label className="radio">
                                                                <input type="radio" value={false} name="display"/>
                                                                <i/>Ẩn</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset style={{margin: "0px auto"}}>
                                                    <div className="form-group">
                                                        <label className="col-lg-3 control-label">Trang thái</label>
                                                        <div className="col-lg-7">
                                                            <label className="radio">
                                                                <input type="radio" value={true} name="state" defaultChecked/>
                                                                <i/>Hoạt động</label>
                                                            <label className="radio">
                                                                <input type="radio" value={false} name="state"/>
                                                                <i/>Không hoạt động</label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <footer>
                                                    <input type="submit" className="btn btn-primary center-block"
                                                           onClick={this.addNewGeolocation.bind(this)} value="Xác nhận"/>
                                                </footer>

                                            </form>
                                        </BootstrapValidator>
                                    </div>
                                </div>

                            </JarvisWidget>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Connect(GeolocationList);