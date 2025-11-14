import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Rallye from './pages/Rallye'
import Solidarite from './pages/Solidarite'
import Inscription from './pages/Inscription'
import Galerie from './pages/Galerie'
import Partenaires from './pages/Partenaires'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rallye" element={<Rallye />} />
        <Route path="/solidarite" element={<Solidarite />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
