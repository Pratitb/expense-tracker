import { Route, Routes } from 'react-router-dom'
import './App.css'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Layout from './layout'
import Home from './pages/Home'
import AddTransaction from './pages/AddEntry'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/add-entry' element={<AddTransaction />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Layout>

  )
}

export default App
