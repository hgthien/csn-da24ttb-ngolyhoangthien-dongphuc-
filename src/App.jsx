import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Search from './components/Search';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      {/* Header luôn hiện ở mọi trang */}
      <Header />
      
      <main style={{ minHeight: '80vh', backgroundColor: '#ffffff' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/tim-kiem" element={<Search />} />
          <Route path="/gio-hang" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;