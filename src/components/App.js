import React from "react";

/* import { BrowserRouter as Router, Route } from "react-router-dom";

import {AuthenticatedRoutes} from "../routes";
import withTracker from "../withTracker";
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


/* const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))
 */

import AuthenticatedApp from './authenticated-app';
import UnauthenticatedApp from './unauthenticated-app';





function App() {

  const auth = true

  return auth ? <AuthenticatedApp /> : <UnauthenticatedApp />;


};


export default App;