import '../AllArticles/AllArticles.css'
import Article from '../Article/Article'
import { v4 as uuidv4 } from 'uuid'

function AllArticles({ articles }) {
    const allArticles = articles.map(article => {
        return (
            <Article
                key={uuidv4()}
                article={article}
            />
        )
    })

    return (
        <div className="articles-container">
            <form className="search-form">
            <input
                type="text"
                className="search-input"
                placeholder="search articles"
                // value={}
            />
            <button type="submit" className="search-button">SEARCH</button>
            </form>

            <h1 className="header">News Reader</h1>
            <h2 className="section"><i>Science Section</i></h2>
            <div className="all-articles-container">
                {allArticles}
            </div>
        </div>
    )
}

export default AllArticles