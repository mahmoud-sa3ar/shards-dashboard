import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import ApolloProviderClass from './ApolloProviderClass'
import ReduxProviderClass from './ReduxProviderClass'

ReactDOM.render(
    <ApolloProviderClass >
        <ReduxProviderClass>
            < App />
        </ReduxProviderClass>
    </ApolloProviderClass>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
