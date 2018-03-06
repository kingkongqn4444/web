import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

class ManageLogAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Manage Log Admin
            </div>
        )
    }
}

export default Connect(ManageLogAdmin);