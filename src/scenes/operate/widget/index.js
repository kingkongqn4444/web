import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

import Layout from '../../../components/layout';
import Utils, {
    LINK
} from '../../../utils';

import List from './widget_list';
import Add from './widget_add';

class Widget extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind()
    }

    render() {
        let child = <div />;
        if (!this.props.match.params.action) {
            child = <List />;
        } else if (this.props.match.params.action === 'them-moi') {
            child = <List />;
        } else {
            child = <List id={this.props.match.params.action} />;
        }

        return (
            <Layout logout={() => this.logout()}>
                {child}
            </Layout>
        )
    }

    logout() {
        this.props.actions.storage.removeAccessToken()
        this.props.actions.app.navigate(Utils.link(LINK.LOGIN));
    }
}

export default Connect(Widget);