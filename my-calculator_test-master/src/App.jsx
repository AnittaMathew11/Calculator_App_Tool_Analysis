import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Calculator from './Calculator'
import Notepad from './Notepad'
import LandingPage from './LandingPage'
import './App.css'

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
            {/* <Route path="/calculator" element={<Calculator />} /> */}
            <Route path="/notepad" element={<Notepad />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
