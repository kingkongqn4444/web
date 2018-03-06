import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';

import Layout from '../../components/layout';

import Role from './role';
import List from './list';
import Detail from './detail';
import Profile from './profile';
class AccountList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        switch (this.props.match.params.action) {
            case "danh-sach" :
                child = <List list=""/>;
                break;
            case "nhom-quyen" :
                child = <Role/>;
                break;
            case "chi-tiet":
                child =<Detail id={this.props.match.params.id}/>;
                break;
            case "thong-tin-ca-nhan":
                child =<Profile/>;
                break;
        }
        return (
            <Layout>
                {child}
            </Layout>
        )
    }
}

export default Connect(AccountList);