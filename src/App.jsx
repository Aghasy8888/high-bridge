import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { MainPage, SharedLayout } from './components/main';
import useNotification from './hooks/useNotification';
import { AuthRoute } from './components';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useNotification();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute type="private" />}>
            <Route path="/" element={<SharedLayout />}>
              <Route path="dashboard" element={<MainPage />} />
              <Route path="orders" element={<h1>orders</h1>} />
              <Route path="products" element={<h1>products</h1>} />
              <Route path="reviews" element={<h1>reviews</h1>} />
              <Route path="statistics" element={<h1>statistics</h1>} />
              <Route path="currencies" element={<h1>currencies</h1>} />
              <Route path="setting" element={<h1>setting</h1>} />
            </Route>
          </Route>
          <Route element={<AuthRoute type="public" />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
