import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

class ManageLogAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Manage Log Account
            </div>
        )
    }
}

export default Connect(ManageLogAccount);