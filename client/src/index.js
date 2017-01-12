import React from 'react';
import {render} from 'react-dom';
// import { Router, DefaultRoute, Route, RouteHandler, hashHistory } from 'react-router';
import App from './components/App';
// import GeneratePortfolio from './components/portfolioReport/GeneratePortfolio';

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App} />
//     <Route path="/print/:riskLevel/:dollarValue" component={GeneratePortfolio}/>
//   </Router>
// ), document.getElementById('app'));

render(<App />, document.getElementById('app'));
    // "test": "mocha -w client/test/helpers/browser.js client/test/spec/*.spec.js",