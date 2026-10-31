import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    element:<Home/>,
    path:"/"
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
