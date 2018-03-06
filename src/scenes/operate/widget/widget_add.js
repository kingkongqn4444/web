import React, {
    Component
} from 'react';
import serialize from 'form-serialize';
import slug from 'slug';

import Connect from '../../../stores/connect';
import Utils, {LINK, BIGBOX} from '../../../utils';
import JarvisWidget from '../../../components/jarvis_widget';
// import BootstrapValidator from '../../../components/forms/bootstrap_validator';
import Validate from '../../../components/forms/ui_validate';

import DatePicker from '../../../components/forms/date_picker';
import ClockPicker from '../../../components/forms/clock_picker';

import Html from './components/html';
import List from './components/list';


const VALIDATION = {

    // Rules for form validation
    rules: {
        title: {
            required: true
        },
        slug: {
            required: true
        },
        description: {
            required: true
        },
        publishFrom: {
            required: true,
        },
        publishTo: {
            required: true,
        },
        data: {
            required: true,
        }
        // firstname: {
        //     required: true
        // },
        // lastname: {
        //     required: true
        // },
        // gender: {
        //     required: true
        // },
        // terms: {
        //     required: true
        // }
    },

    // Messages for form validation
    messages: {
        title: {
            required: 'Vui lòng nhập tên Widget'
        },
        slug: {
            required: 'Vui lòng nhập slug'
        },
        description: {
            required: 'Vui lòng nhập mô tả'
        },
        publishFrom: {
            required: 'Vui lòng chọn ngày bắt đầu',
        },
        publishTo: {
            required: 'Vui lòng chọn ngày hết hạn',
        },
        data: {
            required: 'Vui lòng nhập nội dung'
        },
        // lastname: {
        //     required: 'Please select your last name'
        // },
        // gender: {
        //     required: 'Please select your gender'
        // },
        // terms: {
        //     required: 'You must agree with Terms and Conditions'
        // }
    }

};

class WidgetAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            slug: "",
            description: "",
            component: "custom",
            type: "list",

            dateFrom: "",
            timeFrom: "",
            dateTo: "",
            timeTo: "",
            publishFrom: "",
            publishTo: "",
            isActive: true,
        };

        this.props.id && this.props.actions.widget.requestDetail(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.widget.detail !== nextProps.widget.detail) {
            let widget = nextProps.widget.detail;
            let publishFrom = new Date(widget.publishFrom);
            let publishTo = new Date(widget.publishTo);
            console.log("----------");
            this.setState({
                title: widget.title,
                slug: widget.slug,
                description: widget.description,
                type: widget.type,
                component: widget.component,
                data: {
                    [widget.component]: widget.data
                },
                dateFrom: Utils.formatDate(publishFrom, 'date'),
                timeFrom: Utils.formatDate(publishFrom, 'time'),
                dateTo: Utils.formatDate(publishTo, 'date'),
                timeTo: Utils.formatDate(publishTo, 'time'),
            });
        }
        if (this.props.widget.status !== nextProps.widget.status) {
            switch (nextProps.widget.status) {
                case 1 :
                    Utils.bigBox("Thành công", "Bạn đã tạo nội dung thành công", BIGBOX.SUCESS);
                    this.props.actions.app.navigate(Utils.link(LINK.WIDGET));
                    break;
                case 5 :
                    Utils.bigBox("Thành công", "Bạn đã cập nhật nội dung thành công", BIGBOX.SUCESS);
                    this.props.actions.app.navigate(Utils.link(LINK.WIDGET));
                    break;
            }
        }
    }


    onSubmit(form) {
        // form.preventDefault();
        // let form = document.querySelector('#widgetForm');
        let obj = serialize(form, {hash: true});
        console.log(obj);

        let publishFrom = new Date();
        if (obj.publishFrom) {
            publishFrom = this._toISOString(obj.publishFrom[0], obj.publishFrom[1]);
        }
        let publishTo = new Date();
        if (obj.publishTo) {
            publishTo = this._toISOString(obj.publishTo[0], obj.publishTo[1]);
        }

        if (publishFrom > publishTo) {
            Utils.smallBox("Lỗi", "Ngảy kết thúc không được sớm hơn ngày bắt đầu", BIGBOX.ERROR);
            return;
        }

        if (!obj.data && (obj.component === 'html' || obj.component === 'custom')) {
            Utils.smallBox("Lỗi", "Vui lòng nhập dữ liệu nội dung", BIGBOX.ERROR);
            return;
        }

        if (obj.component === "banner") {
            if (!obj.images || obj.images.length === 0) {
                Utils.smallBox("Lỗi", "Vui lòng nhập chọn hình ảnh quảng cáo", BIGBOX.ERROR);
                return;
            }

            obj.data = [];
            obj.images.map((image, i) => {
                //http://abc.9link.mobi/v1/file/2018/1/18/18/73cbe39eca433c119419fe4a76e469cd.png
                obj.data.push({
                    image: image,
                    link: obj.links[i] || ""
                })
            });
        }

        if (obj.component === "category") {
            if (!obj.category || obj.category.length === 0) {
                Utils.smallBox("Lỗi", "Vui lòng nhập chọn danh mục", BIGBOX.ERROR);
                return;
            }

            obj.data = obj.category;
        }

        if (obj.type === 'html') {
            obj.component = 'html';
        }


        if (this.props.id) {
            this.props.actions.widget.requestUpdate({
                widgetId: this.props.id,
                title: obj.title,
                slug: obj.slug,
                description: obj.description,
                type: obj.type, component: obj.component,
                data: obj.data,
                publishFrom: publishFrom.toISOString(),
                publishTo: publishTo.toISOString(),
                isActive: obj.isActive === '1',
                // isDelete: false,
            }, this.props.storage.token);
        } else {
            this.props.actions.widget.requestCreate({
                title: obj.title,
                slug: obj.slug,
                description: obj.description,
                type: obj.type,
                component: obj.component,
                data: obj.data,
                publishFrom: publishFrom.toISOString(),
                publishTo: publishTo.toISOString(),
                isActive: obj.isActive === '1',
                isDelete: false,
            }, this.props.storage.token);
        }

        // console.log(obj)
        // return false;
    }

    _toISOString(date, time) {
        let dateParse = date.split('/');
        let timeParse = time.split(':');

        let day = dateParse[0];
        let month = dateParse[1] - 1;
        let year = dateParse[2];

        let hour = timeParse[0];
        let min = timeParse[1];

        let d = new Date();
        d.setFullYear(year, month, day);
        d.setHours(hour, min, 0, 0);
        return d;
    }

    render() {
        // console.log(this.state.type);
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            {this.props.id ? "Chỉnh sửa widget" : "Tạo widget"}
                        </h1>
                    </div>
                </div>
                <JarvisWidget colorbutton={false} editbutton={false}
                              custombutton={false}>
                    <header>
                        <span className="widget-icon">
                            <i className="fa fa-edit"/>
                        </span>
                        <h2>Chi tiết widget</h2>
                    </header>
                    <div>
                        {/* widget content */}
                        <div className="widget-body no-padding">
                            <Validate options={{
                                ...VALIDATION,
                                submitHandler: this.onSubmit.bind(this)
                            }}
                            >
                                <form id="widgetForm" className="smart-form"
                                      onSubmit={e => e.preventDefault()}
                                      noValidate="novalidate"
                                >
                                    <fieldset>
                                        <section className="form-group">
                                            <label className="label">Tên Widget</label>
                                            <label className="input">
                                                <input type="text" name="title"
                                                       value={this.state.title}
                                                       onChange={e => this.setState({
                                                           title: e.target.value,
                                                           slug: slug(e.target.value, {lower: true}),
                                                       })}
                                                />
                                            </label>
                                        </section>
                                        <section className="form-group">
                                            <label className="label">Slug</label>
                                            <label className="input">
                                                <input type="text" className="form-control" name="slug"
                                                       value={this.state.slug}
                                                       onChange={e => this.setState({slug: e.target.value})}
                                                />
                                            </label>
                                        </section>
                                        <section className="form-group">
                                            <label className="label">Mô tả</label>
                                            <label className="input">
                                            <textarea className="form-control" name="description" rows="3"
                                                      value={this.state.description}
                                                      onChange={e => this.setState({description: e.target.value})}
                                            />
                                            </label>
                                        </section>
                                        <section className="form-group">
                                            <label className="label">Từ ngày</label>
                                            <div className="row">
                                                <section className="col col-3">
                                                    <DatePicker
                                                        name="publishFrom" placeholder="Chọn ngày"
                                                        className="form-control datepicker col-sm-6"
                                                        dateFormat="dd/mm/yy"
                                                        value={this.state.dateFrom}
                                                        onChange={e => this.setState({dateFrom: e.target.value})}
                                                    />
                                                </section>
                                                <section className="col col-3">
                                                    <ClockPicker
                                                        name="publishFrom" placeholder="Chọn giờ"
                                                        className="form-control datepicker"
                                                        // data-date-format="dd/mm/yy"
                                                        value={this.state.timeFrom}
                                                        onChange={e => this.setState({timeFrom: e.target.value})}
                                                    />
                                                </section>
                                            </div>
                                        </section>

                                        <section className="form-group">
                                            <label className="label">Đến ngày</label>
                                            <div className="row">
                                                <section className="col col-3">
                                                    <DatePicker
                                                        name="publishTo" placeholder="Chọn ngày"
                                                        className="form-control datepicker col-sm-6"
                                                        dateFormat="dd/mm/yy"
                                                        value={this.state.dateTo}
                                                        onChange={e => this.setState({dateTo: e.target.value})}
                                                    />
                                                </section>
                                                <section className="col col-3">
                                                    <ClockPicker
                                                        name="publishTo" placeholder="Chọn giờ"
                                                        className="form-control datepicker"
                                                        // data-date-format="dd/mm/yy"
                                                        value={this.state.timeTo}
                                                        onChange={e => this.setState({timeTo: e.target.value})}
                                                    />
                                                </section>
                                            </div>
                                        </section>

                                        <section className="form-group">
                                            <label className="label">Trạng thái</label>
                                            <label className="select">
                                                <select className="form-control" name="isActive"
                                                        value={this.state.isActive}
                                                        onChange={e => this.setState({isActive: parseInt(e.target.value)})}>
                                                    <option value={1}>Hoạt động</option>
                                                    <option value={0}>Đóng</option>
                                                </select> <i/>
                                            </label>
                                        </section>
                                        <section className="form-group">
                                            <label className="label">Loại</label>
                                            <label className="select">
                                                <select className="form-control" value={this.state.type} name="type"
                                                        onChange={e => this.setState({
                                                            type: e.target.value
                                                        })}>
                                                    <option value="list">Danh sách</option>
                                                    <option value="html">HTML</option>
                                                </select><i/>
                                            </label>
                                        </section>
                                        {
                                            this.state.type !== 'html' &&
                                            <section className="form-group">
                                                <label className="label">Component</label>
                                                <label className="select">
                                                    <select className="form-control" value={this.state.component}
                                                            name="component"
                                                            onChange={e => this.setState({
                                                                component: e.target.value
                                                            })}>
                                                        <option value="custom">Tuỳ biến</option>
                                                        <option value="banner">Banner</option>
                                                        <option value="category">Danh mục</option>
                                                        <option value="product">Sản phẩm</option>
                                                    </select><i/>
                                                </label>
                                            </section>
                                        }


                                        {
                                            this.state.type === 'html' ? <Html data={this.state.data}/> :
                                                <List component={this.state.component} data={this.state.data}/>
                                        }

                                    </fieldset>
                                    <footer>
                                        <button type="submit" className="btn btn-primary"
                                            // onClick={this.onSubmit.bind(this)}
                                        >
                                            <i className="fa fa-save"/> {this.props.id ? "Cập nhật" : "Thêm mới"}
                                        </button>
                                    </footer>
                                </form>
                            </Validate>
                        </div>
                    </div>

                </JarvisWidget>
            </div>
        )
    }
}

export default Connect(WidgetAdd);