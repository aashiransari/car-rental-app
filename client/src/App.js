import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        {/* ============== ADMIN ROUTE ==============  */}
        {/* <Route path='/login' element={<AdminLogin />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/edit-product/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
