import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { App } from 'App';
import { Day02 } from 'Pages/Day02';
import { Day03 } from 'Pages/Day03';
import { Home } from 'Pages/Home';

import 'styles/main.css';
import 'styles/day02.css';
import 'styles/day03.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="days">
            <Route index element={<Home />} />
            <Route path="02" element={<Day02 />} />
            <Route path="03" element={<Day03 />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
