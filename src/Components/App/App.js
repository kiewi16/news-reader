import '../App/App.css'
// import mockData from '../../mock-data'
import getArticles from '../../apiCall'
import AllArticles from '../AllArticles/AllArticles'
import DetailedView from '../DetailedView/DetailedView'
import PageNotFound from '../PageNotFound/PageNotFound'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
    // .then(data => console.log("data from API call:", data.articles))
    .then(data => setArticles([...articles, ...data.articles]))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllArticles articles={articles} />} />
        <Route path="/DetailedView/:publishedAt" element={<DetailedView articles={articles} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;