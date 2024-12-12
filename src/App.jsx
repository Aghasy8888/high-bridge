import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { MainPage, SharedLayout } from './components/main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="dashboard"
            element={<MainPage />}
          />
          <Route path="orders" element={<h1>orders</h1>} />
          <Route path="products" element={<h1>products</h1>} />
          <Route path="reviews" element={<h1>reviews</h1>} />
          <Route path="statistics" element={<h1>statistics</h1>} />
          <Route path="currencies" element={<h1>currencies</h1>} />
          <Route path="setting" element={<h1>setting</h1>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
