import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';
import Layout from '../../../components/layout';
import APIerror from './api_error';
class Monitor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        switch (this.props.match.params.action) {

            case "api_error" :
                child = <APIerror/>;
                break;
        }
        return (
            <Layout>
                {child}
            </Layout>
        )
    }
}

export default Connect(Monitor);