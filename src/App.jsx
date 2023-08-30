import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from "./routes"

function App() {
  
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
