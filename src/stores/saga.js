import app from './states/app/saga';
import authenticate from './states/authenticate/saga';
import product from './states/product/saga';
import widget from './states/widget/saga';
import vendor from './states/vendor/saga';
export default function* sagaRoot() {
    yield [
        app(),
        authenticate(),
        product(),
        widget(),
        vendor(),
    ]
}