import '../App/App.css'
import mockData from'../../mock-data'
import { useState, useEffect } from 'react'
import AllArticles from '../AllArticles/AllArticles'

function App() {
const [articles, setArticles] = useState(mockData.articles)

  return (
    <div className="App">
      <AllArticles articles={articles}/>
    </div>
  );
}

export default App;