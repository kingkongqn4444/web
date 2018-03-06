import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';
import JarvisWidget from '../../components/jarvis_widget';
import Data from '../../../public/assets/api/report/location.json';
import DataChart from '../../../public/assets/api/graphs/chartjs.json';
import UiDatepicker from '../../components/forms/date_picker';
import ChartJsGraph from '../../components/graphs/ChartJsGraph';
import serialize from 'form-serialize';
class PaymentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "none",
            province: "",
            branch: "",
            dataChart:null

        };
    }
    setData(data) {
        this.setState({
            location: data.id,
            province: data.province[0].id,
            branch: data.province[0].branch[0].id
        })
    }

    componentWillMount() {
        let data = Data[0];
        this.setData(data);
        // request('GET', '/assets/api/graphs/chartjs.json', {json: true}).done((res)=> {
        //     this.setState(JSON.parse(res.getBody()));
        // })
        this.setState({dataChart:DataChart});
    }

    onSubmit(e) {
        e.preventDefault();
        let form = document.querySelector('#search');
        var obj = serialize(form, {hash: true});
        console.log(obj)
        return false;
    }

    changeLocation(e) {
        let data = Data.find(item => item.id === e.target.value);
        this.setData(data)

    }
    render() {
        let location = [];
        location = Data.find(item => item.id === this.state.location);
        let provinces = [];
        if (location) {
            provinces = location.province;
        }
        let branch = [];
        if (provinces) {
            let province = provinces.find(item => item.id === this.state.province);
            branch = province.branch;
        }
        return (
            <div id="content">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4">
                        <h1 className="page-title txt-color-blueDark">
                            Thống kê doanh thu
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <article className="col-sm-12">

                        {/* Widget ID (each widget will need unique ID)*/}
                        <JarvisWidget editbutton={false} custombutton={false}>
                            <header>
                                <span className="widget-icon"> <i className="fa fa-edit"/> </span>

                            </header>
                            <div>
                                {/* widget content */}
                                <div className="widget-body no-padding">
                                    <form className="smart-form" id="search">
                                        <fieldset>
                                            <div className="row">
                                                <section className=" col col-xs-4">
                                                    <div className="form-group">
                                                        <select className="form-control" name="location"
                                                                value={this.state.location}
                                                                onChange={(e) => this.changeLocation(e)}>
                                                            {
                                                                Data.map((data, i) => (
                                                                    <option key={data.id} value={data.id}>{data.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </section>
                                                <section className="col col-xs-4">
                                                    <div className="form-group">
                                                        <select className="form-control" name="province"
                                                                value={this.state.province}
                                                                onChange={e => this.setState({province: e.target.value})}>
                                                            {
                                                                provinces.map((data, i) => (
                                                                    <option key={data.id} value={data.id}>{data.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </section>
                                                <section className="col col-xs-4">
                                                    <div className="form-group">
                                                        <select className="form-control" name="branch"
                                                                value={this.state.branch}
                                                                onChange={(e) => this.setState({branch: e.target.value})}>
                                                            {
                                                                branch.map((data, i) => (
                                                                    <option key={data.id} value={data.id}>{data.name}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </section>
                                                <section className="col col-6">
                                                    <label className="input"> <i className="icon-append fa fa-calendar"/>
                                                        <UiDatepicker type="text" name="startdate" id="startdate"
                                                                      minRestrict="#finishdate"
                                                                      placeholder="Expected start date"/>
                                                    </label>
                                                </section>
                                                <section className="col col-6">
                                                    <label className="input"> 
                                                    <i className="icon-append fa fa-calendar"/>
                                                        <UiDatepicker type="text" name="finishdate" id="finishdate"
                                                                      maxRestrict="#startdate"
                                                                      placeholder="Expected finish date"/>
                                                    </label>
                                                </section>

                                            </div>
                                        </fieldset>
                                        <footer>
                                                <button className="btn btn-primary btn-lg" onClick={this.onSubmit.bind(this)}>Xuất báo cáo</button>
                                        </footer>

                                    </form>
                                </div>
                            </div>
                        </JarvisWidget>
                    </article>
                    <article className="col-lg-7">
                        <JarvisWidget editbutton={false}>
                            <header>
                                <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                <h2>Line Chart</h2>
                            </header>
                            <div>
                                <div className="widget-body">
                                    <ChartJsGraph type="line" data={this.state.dataChart['line-chart']} option="multi"/>
                                </div>
                            </div>
                        </JarvisWidget>
                    </article>
                    <article className="col-lg-5">
                        <div className="row">
                            <div className="col-xs-12">
                                <JarvisWidget editbutton={false} color="darken">
                                    <header>
                                        <span className="widget-icon"> <i className="fa fa-table"/> </span>
                                        <h2>Báo cáo doanh thu</h2>
                                    </header>
                                    <div>
                                        <div className="widget-body no-padding">

                                            <div className="table-responsive">

                                                <table className="table table-bordered table-striped table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Ngày</th>
                                                        <th>Đơn hàng</th>
                                                        <th>Số tiền</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>10/10/2017</td>
                                                        <td>100</td>
                                                        <td>100,000</td>
                                                    </tr>
                                                    </tbody>

                                                </table>

                                            </div>

                                        </div>
                                    </div>
                                </JarvisWidget>
                            </div>
                        </div>
                    </article>
                </div>


            </div>
        )
    }
}

export default Connect(PaymentAdd);