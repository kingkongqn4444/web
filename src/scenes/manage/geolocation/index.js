import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

import Layout from '../../../components/layout';

import Add from './geolocation_add';
import List from './geolocation_list';

class AccountList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        switch (this.props.match.params.action) {
            case "list" :
                child = <List/>;
                break;
            case "add" :
                child = <Add/>;
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