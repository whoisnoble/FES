import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Nav from './components/Nav.jsx'
import Users from "./pages/Users"

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
