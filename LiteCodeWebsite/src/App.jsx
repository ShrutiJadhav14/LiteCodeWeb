import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App