import Navbar from './components/Navbar/Navbar'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div style={{display: "flex"}}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
