import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ============== ADMIN ROUTES ==============  */}
        {/* <Route path='/login' element={<AdminLogin />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
        {/* ============== ADMIN ROUTES ==============  */}

        {/* ============== CLIENT ROUTES ==============  */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/location' element={<Location />} />
        {/* ============== CLIENT ROUTES ==============  */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
