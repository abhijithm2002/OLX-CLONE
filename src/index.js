import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import Context from './store/FirebaseContext';
import { firestore,Firebase } from './firebase/config';

ReactDOM.render(

    <FirebaseContext.Provider value={{ firestore,Firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
    , document.getElementById('root'));
