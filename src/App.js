import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        console.ignoredYellowBox = ['Setting a timer'];
        const config = {
            apiKey: 'AIzaSyC1vuSPo3DoNnBR4GaALWKnXR9e9lKo-TY',
            authDomain: 'manager-e01cc.firebaseapp.com',
            databaseURL: 'https://manager-e01cc.firebaseio.com',
            projectId: 'manager-e01cc',
            storageBucket: 'manager-e01cc.appspot.com',
            messagingSenderId: '911189147292'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store= { store }>
                <Router />
            </Provider>
        );
    }
}

export default App;