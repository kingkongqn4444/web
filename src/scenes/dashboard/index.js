import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';
import JarvisWidget from '../../components/jarvis_widget';
import Layout from '../../components/layout';
import Utils, {
    LINK
} from '../../utils';

class Dashboard extends Component {

    componentWillMount() {
    }

    async componentDidMount() {
    }


    constructor(props) {
        super(props);
        this.state = {
            search: "",
            loading: false
        }
    }

    onSearchChange = (value) => {
        this.setState({
            search: value
        })
    };

    render() {
        return (

            <Layout>
                {this.state.loading ?
                    <div id="content">Loading....</div> :
                    <div id="content">
                        <div className="well well-sm">
                            <div className="input-group">
                                <input className="form-control input-lg"
                                    value={this.state.search}
                                    onChange={event => this.onSearchChange(event.target.value)}
                                    placeholder="Search for an icon..." />
                                <span className="input-group-addon"><i className="fa fa-fw fa-lg fa-search" /></span>
                            </div>
                        </div>
                        <div className="row">

                            {/* NEW WIDGET START */}
                            <article className="col-sm-12">

                                {/* Widget ID (each widget will need unique ID)*/}
                                <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false} deletebutton={false}
                                    color="purple">

                                    <header>
                                        <h2>Chức Năng </h2>
                                    </header>

                                    {/* widget div*/}
                                    <div>


                                        {/* widget content */}
                                        <div className="widget-body" ref='demoContainer'>

                                            <ul className="bs-glyphicons">
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}
                                                        href="/account/list"><span className="glyphicon glyphicon-user" />
                                                        <span className="glyphicon-class">Account</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-lg fa-fw fa-book" />
                                                        <span className="glyphicon-class">Widget</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon glyphicon-shopping-cart" />
                                                        <span className="glyphicon-class">Sản phẩm</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-fw fa-users" />
                                                        <span className="glyphicon-class">Nhà cung cấp</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-fw fa-university" />
                                                        <span className="glyphicon-class">Kho chứa</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-fw fa-truck" />
                                                        <span className="glyphicon-class">Đơn vị vận chuyển</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-fw fa-database" />
                                                        <span className="glyphicon-class">Thuộc tính sản phẩm</span></a>
                                                </li>
                                                <li>
                                                    <a style={{ width: "100%", height: "100%", margin: "0px", display: "block" }}>
                                                        <span className="glyphicon fa fa-fw fa-line-chart" />
                                                        <span className="glyphicon-class">Thống kê</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </JarvisWidget>
                            </article>
                        </div>
                    </div>
                }
            </Layout>
        )
    }
}

export default Connect(Dashboard);