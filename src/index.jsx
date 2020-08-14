
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CountriesProvider} from './components/hooks/Countries'

ReactDOM.render( 
<CountriesProvider>
    <App />
</CountriesProvider>
, document.getElementById('app'));
