import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import JarvisWidget from '../../../components/jarvis_widget';
import BootstrapValidator from '../../../components/forms/bootstrap_validator';
import serialize from 'form-serialize';
class StockAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            bref:"",
            state:0,
            address:"",
            city:0,
            province:0
        }
    }
        onSubmit(e) {
            e.preventDefault();
            let form = document.querySelector('#attributeForm');
            var obj = serialize(form, {hash: true});
            console.log(obj)
            return false;
        }
    render() {
        return (
            <div className="panel">
                <div className="panel panel-heading">
                    <h1>
                        Tạo kho chứa
                    </h1>
                </div>
                <div className="panel panel-body">
                    <article className="col-sm-12 col-md-12">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget colorbutton={false} editbutton={false}
                                      custombutton={false}>
                            <header>
                                    <span className="widget-icon"> <i
                                        className="fa fa-edit"/> </span>
                                <h2>Chi tiết kho chứa</h2>
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
                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-lg-3 control-label">Tên kho chứa</label>
                                                    <div className="col-lg-7">
                                                        <input type="text" className="form-control" name="plug"
                                                               value={this.state.name}
                                                               onChange={e=>this.setState({name:e.target.value})}
                                                               placeholder="Tên kho chứa"
                                                               data-bv-notempty="true"
                                                               data-bv-notempty-message="Tên Plug không được bỏ trống"/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-lg-3 control-label">Mô tả</label>
                                                    <div className="col-lg-7">
                                                        <textarea className="form-control" name="bref"
                                                        placeholder="Mô tả" rows="3"
                                                                  value={this.state.bref}
                                                                  onChange={e=>this.setState({bref:e.target.value})}></textarea>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-xs-2 col-lg-3 control-label">Thành phố</label>
                                                    <div className="col-xs-7 ">
                                                        <select className="form-control" value={this.state.city} name="type"
                                                                onChange={e=>this.setState({city:parseInt(e.target.value)})}>
                                                            <option value={0}>Hà Nội</option>
                                                            <option value={1}>Hồ Chi Minh</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-xs-2 col-lg-3 control-label">Quận/Huyện</label>
                                                    <div className="col-xs-7 ">
                                                        <select className="form-control" value={this.state.province} name="type"
                                                                onChange={e=>this.setState({province:parseInt(e.target.value)})}>
                                                            <option value={0}>Q1</option>
                                                            <option value={1}>Q2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-lg-3 control-label">Địa chỉ</label>
                                                    <div className="col-lg-7">
                                                        <input type="text" className="form-control" name="address"
                                                               placeholder="Địa chỉ" rows="3"
                                                               value={this.state.address}
                                                               onChange={e=>this.setState({address:e.target.value})}/>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <div className="form-group">
                                                    <label className="col-xs-2 col-lg-3 control-label">Trang thái</label>
                                                    <div className="col-xs-7 ">
                                                        <select className="form-control" value={this.state.state} name="type"
                                                                onChange={e=>this.setState({state:parseInt(e.target.value)})}>
                                                            <option value={0}>Hoạt động</option>
                                                            <option value={1}>Đóng</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <footer>
                                                <div className="form-group">
                                                    <div className="col-lg-7">
                                                        <input type="submit" className="btn btn-primary center-block"
                                                               onClick={this.onSubmit.bind(this)} value="Xác nhận"/>
                                                    </div>
                                                </div>
                                            </footer>
                                        </form>
                                    </BootstrapValidator>
                                </div>
                            </div>

                        </JarvisWidget>
                    </article>
                </div>

            </div>
        )
    }
}

export default Connect(StockAdd);