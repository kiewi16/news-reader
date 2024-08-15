import '../AllArticles/AllArticles.css'
import Article from '../Article/Article'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function AllArticles({ articles }) {
    const [searchValue, setSearchValue] = useState('')
    const [filteredArticles, setFilteredArticles] = useState([])
    const [noResultsMessage, setNoResultsMessage] = useState(false)
    const [clearResults, setClearResults] = useState(false)

    const allArticles = articles.map(article => {
        return (
            <Article
                key={uuidv4()}
                article={article}
            />
        )
    })
    
    function handleSearch(event) {
        event.preventDefault()
        const allFilteredArticles = articles.filter(article => {
            return article.title.toLowerCase().includes(searchValue.toLowerCase()) || article.description.toLowerCase().includes(searchValue.toLowerCase())
        }).map(filteredArticle => {
            return (
                <Article
                    key={uuidv4()}
                    article={filteredArticle}
                />
            )
        })
        setFilteredArticles(allFilteredArticles)

        if (allFilteredArticles.length === 0) {
            setNoResultsMessage(true)
        } else {
            setClearResults(true)
        }
    }

    function handleBackToAllArticles() {
        setSearchValue('')
        setFilteredArticles([])
        setNoResultsMessage(false)
    }

    function handleClearResults() {
        setSearchValue('')
        setFilteredArticles([])
        setClearResults(false)
    }

    return (
        <div className="articles-container">
            <form className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search articles"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <button type="submit" className="search-button" onClick={handleSearch}>SEARCH</button>
            </form>
            <h1 className="header">News Reader</h1>
            <h2 className="section"><i>Science Section</i></h2>
            <div className="all-articles-container">
                {(filteredArticles.length === 0 && !noResultsMessage) && allArticles}
                {filteredArticles.length > 0 && filteredArticles}
                {clearResults && <button className="clear-search-results-button" onClick={handleClearResults}>Clear Search Results</button>}
                {noResultsMessage && <p className="no-results-message"><strong>No results returned for {searchValue}</strong></p>}
                {noResultsMessage && <button className="back-to-all-articles-button" onClick={handleBackToAllArticles}>Back to All Articles</button>}
            </div>
        </div>
    )
}

export default AllArticles