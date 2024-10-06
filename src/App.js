import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaHouse from './components/Pizza'; // Đảm bảo đường dẫn đúng
import PurchasePage from './components/PurchasePage'; // Đảm bảo đường dẫn đúng
import { PurchaseProvider } from './components/PurchaseContext'; // Đảm bảo đường dẫn đúng
import './App.css'; // Đảm bảo bạn có file App.css cho styling

function App() {
  return (
    <PurchaseProvider> {/* Bọc toàn bộ ứng dụng trong PurchaseProvider */}
      <Router>
        <Routes>
          {/* Trang chính của Pizza House */}
          <Route path="/" element={<PizzaHouse />} />

          {/* Trang khi người dùng chọn mua một sản phẩm */}
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </Router>
    </PurchaseProvider>
  );
}

export default App;