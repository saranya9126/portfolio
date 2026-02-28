

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'

  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div>
  <BrowserRouter>
  <ToastContainer />
  <Routes>

    <Route index element={<Home/>}/>
<Route path='*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>

    </div>
  )
}

export default App