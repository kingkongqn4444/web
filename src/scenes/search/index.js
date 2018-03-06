import React, {
    Component
} from 'react';

import Connect from '../../stores/connect';

import Layout from '../../components/layout';

import Cart from './cart';
import Invoice from './invoice';
import InvoiceDetail from './invoice_detail';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let child = <div/>;
        switch (this.props.match.params.action) {
            case "gio-hang" :
                child = <Cart/>;
                break;
            case "don-hang" :
                child = this.props.match.params.id?<InvoiceDetail id={this.props.match.params.id}/>:<Invoice/>;
                break;

        }
        return (
            <Layout>
                {child}
            </Layout>
        )
    }
}

export default Connect(Search);