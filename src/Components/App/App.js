import '../App/App.css'
import mockData from'../../mock-data'
import { useState, useEffect } from 'react'

function App() {
const [articles, setArticles] = useState(mockData.articles)

console.log("articles:", articles)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
