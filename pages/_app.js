import '../Styles/global.css';
import '../Styles/Navbar.css';
import '../Styles/HomePage.css';

import {Provider} from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import rootReducer from '../Store/Reducer/rootReducer';
import {createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer,composeWithDevTools())

 function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp)