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
            {allArticles}
        </div>
    )
}

export default AllArticles