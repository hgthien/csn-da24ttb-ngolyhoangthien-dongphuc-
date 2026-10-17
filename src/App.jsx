import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Header />

        <main style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/gio-hang" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;