import Article from "../Article/Article"
import { v4 as uuidv4 } from 'uuid'

function AllArticles({ articles }) {
    console.log("articles in AllArticles:", articles)

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
            <h1>All Articles</h1>
            {allArticles}
        </div>
    )
}

export default AllArticles