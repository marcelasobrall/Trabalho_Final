import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Fornecedores from './pages/Fornecedores.jsx'
import Home from './pages/Home.jsx'
import Contatos from './pages/Contatos.jsx'
import NotFound from './pages/NotFound.jsx'
import AuthProvider from './contexts/AuthContext.jsx'


export default function App() {
  

  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/fornecedores" element={<Fornecedores />}/>
        <Route path="/contatos" element={<Contatos />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </AuthProvider>
    </Router>
    
  )
}

