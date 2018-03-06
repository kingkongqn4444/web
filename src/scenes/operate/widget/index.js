import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

import Layout from '../../../components/layout';

import List from './widget_list';
import Add from './widget_add';

class Widget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        if (!this.props.match.params.action) {
            child = <List/>;
        } else if (this.props.match.params.action === "them-moi") {
            child = <Add/>;
        } else {
            child = <Add id={this.props.match.params.action}/>
        }
        return (
            <Layout>
                {child}
            </Layout>
        )
    }
}

export default Connect(Widget);