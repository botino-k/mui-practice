import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication/Authentication"
import Database from "./pages/Database/Database"
import Storage from "./pages/Storage/Storage"
import Hosting from "./pages/Hosting/Hosting"
import Functions from "./pages/Functions/Functions"
import MachineLearning from "./pages/MachineLearning/MachineLearning"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="mui-practice/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="storage" element={<Storage />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="functions" element={<Functions />} />
          <Route path="machine-learning" element={<MachineLearning />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
