import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Calculator from './Calculator'
import Notepad from './Notepad'
import LandingPage from './LandingPage'
import './App.css'

/**
 * The main React component for the application, providing routing between the landing page, calculator, and notepad views.
 * 
 * Renders a header with navigation and sets up client-side routes for the main features of the app.
 * @returns {JSX.Element} The root component containing the application's layout and routes.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>My App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/notepad" element={<Notepad />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
