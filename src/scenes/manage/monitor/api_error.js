import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

class APIerror extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                API error
            </div>
        )
    }
}

export default Connect(APIerror);