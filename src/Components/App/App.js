import '../App/App.css'
import HomePage from '../HomePage/HomePage'
import PageNotFound from '../PageNotFound/PageNotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />       
      </Routes>
    </div>
  )
}

export default App;