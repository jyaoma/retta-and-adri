import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home';
import RsvpPage from './pages/rsvp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rsvp/:groupId" element={<RsvpPage />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
