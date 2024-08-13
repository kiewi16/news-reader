import '../AllArticles/AllArticles.css'
import Article from '../Article/Article'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function AllArticles({ articles }) {
    const [searchValue, setSearchValue] = useState('')

    const allArticles = articles.map(article => {
        return (
            <Article
                key={uuidv4()}
                article={article}
            />
        )
    })

    const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            article.description.toLowerCase().includes(searchValue.toLowerCase())
    }).map(filteredArticle => {
        return (
            <Article
                key={uuidv4()}
                article={filteredArticle}
            />
        )
    })

    function handleSearch(event) {
        event.preventDefault()
    }

    return (
        <div className="articles-container">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="search articles"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <button type="submit" className="search-button">SEARCH</button>
            </form>

            <h1 className="header">News Reader</h1>
            <h2 className="section"><i>Science Section</i></h2>
            <div className="all-articles-container">
                {filteredArticles.length > 0 ? filteredArticles : allArticles}
            </div>
        </div>
    )
}

export default AllArticles