import React,{Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link
} from 'react-router-dom'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
const Profile = React.lazy(() => import('./App'));
const Login = React.lazy(() => import('./Login'));


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Suspense>
</Router>,
  document.getElementById('root')
);


