import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
  <main className="app-container">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </main>
  )
}

export default App
