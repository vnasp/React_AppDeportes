import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./views/Home"
import Register from "./views/Register"
import NotFound from "./views/NotFound"

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/register"
          element={<Register />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
