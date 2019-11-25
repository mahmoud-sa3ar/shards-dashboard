import React from 'react'
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';



const store = createStore(reducers, applyMiddleware(thunk))

class ReduxProviderClass extends React.Component {


    render() {
        return (
            <Provider store={store}>
             
                {this.props.children}

            </Provider>

        );
    }
}

export default ReduxProviderClass 