import * as React from "react";
import ReactDom from 'react-dom';
import Root from './containers/Root.jsx';
import './styles/index.css';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';

const {store, actions} = configureStore();

ReactDom.render(
    <Root store={store} actions={actions} />,
    document.getElementById('root')
);
// registerServiceWorker();