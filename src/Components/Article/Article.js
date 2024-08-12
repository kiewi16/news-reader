import '../Article/Article.css'
import DetailedView from '../DetailedView/DetailedView'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function Article({ article, index }) {
    console.log("index:", index)

    return (
        <div className="article">
            <Link to={`/DetailedView/${article.title}`}>
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="article-image"
                />
            </Link>
            <h3 className="article-title">{article.title}</h3>
            {article.description ? <p className="article-description">{article.description}</p> : null}
            <p className="article-date"><strong>Date: </strong>{format(new Date(article.publishedAt), 'MM-dd-yy')}</p>
        </div>
    )
}

export default Article