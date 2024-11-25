import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Product/ProductPage';
import Layout from './template/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <Layout breadcrumb={[{ label: "Inicio", active: true }]}>
              <HomePage />
            </Layout>
          } 
        />
        <Route path="/product/:id" element={
            <Layout
              breadcrumb={[
                { label: "Inicio", path: "/" },
                { label: "Producto", active: true },
              ]}
            >
              <ProductPage />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
