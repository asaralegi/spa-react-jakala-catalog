import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Layout from './template/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } 
        />
        <Route path="/product/:id" element={
            <Layout>
              <ProductPage />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
