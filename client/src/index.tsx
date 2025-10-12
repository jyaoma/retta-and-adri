import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import PublicPage from './pages/public';
import GuestsPage from './pages/forGuests';
import {LoaderProvider} from "./infra/loaderContext";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <HashRouter>
        <LoaderProvider>
            <Routes>
                <Route path="/" element={<PublicPage/>}/>
                <Route path="/:groupId" element={<GuestsPage/>}/>
            </Routes>
        </LoaderProvider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
