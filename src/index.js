import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter} from 'react-router-dom';
>>>>>>> contactlist
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
<<<<<<< HEAD
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
=======
<BrowserRouter><App /></BrowserRouter>
, document.getElementById('root'));
>>>>>>> contactlist
registerServiceWorker();
