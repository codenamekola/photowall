import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';

import './styles/stylesheet.css';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));
