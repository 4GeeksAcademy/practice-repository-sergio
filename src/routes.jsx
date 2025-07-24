
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { FormLogin } from './components/FormLogin'
import { HeroesList } from './pages/HeroesList'
import { RegisterForm } from './components/RegisterForm'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form-login' element={<FormLogin />} />
        <Route path='/list-heroes/:id' element={<HeroesList />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </>
  )
}

export default App
