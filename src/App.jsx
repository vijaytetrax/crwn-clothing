import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Routes/Home/home.component';
import Navigation from './Routes/Navigation/navigation.component'

const Shop = () => {
  return (
    <div>
      <p>this is shop page</p>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
