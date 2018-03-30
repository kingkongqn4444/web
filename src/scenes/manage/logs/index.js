import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

import Layout from '../../../components/layout';

import LogAccount from './account';
import LogAdmin from './admin';

class LogManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        switch (this.props.match.params.action) {
            case "account" :
                child = <LogAccount/>;
                break;
            case "admin" :
                child = <LogAdmin/>;
                break;
        }
        return (
            <Layout   logout={() => {
                this.props.actions.storage.removeAccessToken(),
                  this.props.actions.storage.removeUser();
              }}>
                {child}
            </Layout>
        )
    }
}

export default Connect(LogManager);