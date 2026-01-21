import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Home from './pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import ScrollTop from './utils/ScrollTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      
        <Navbar />
        <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/services/:slug" element={<ProtectedRoute><ServiceDetail /></ProtectedRoute>} />
         </Routes>
        </main>
        <Footer />
 
    </BrowserRouter>
  ) 

}
export default App