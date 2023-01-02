import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/styles/global.css'
import { routes } from './Routes'
export function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({path,element},index) => <Route path={path} element={element} key={index.toString()} />)
        }
      </Routes>
    </BrowserRouter>
  )
}
