import React, {
    Component
} from 'react';

import Connect from '../../../stores/connect';

class GeolocationAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Geolocation Add
            </div>
        )
    }
}

export default Connect(GeolocationAdd);