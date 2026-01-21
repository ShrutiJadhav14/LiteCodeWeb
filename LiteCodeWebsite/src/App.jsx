import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Careers from './pages/Careers';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute'; 
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      
        <Navbar />
        <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin-login" element={<AdminLogin />} />
                <Route
        path="/admin-dashboard"
        element={
         <ProtectedRoute>
        <AdminDashboard />
       </ProtectedRoute>
       }
  />
         </Routes>
    
        </main>
        <Footer />
 
    </BrowserRouter>
  ) 

}
export default App