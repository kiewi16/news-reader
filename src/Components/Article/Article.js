import '../Article/Article.css'
import { format } from 'date-fns'

function Article({ article }) {

    return (
        <div className="article">
            <img
                src={article.urlToImage}
                alt={article.title}
                className="article-image"
            />
            <h3 className="article-title">{article.title}</h3>
            {article.description ? <p className="article-description">{article.description}</p> : null}
            <p className="article-date"><strong>Date: </strong>{format(new Date(article.publishedAt), 'MM-dd-yy')}</p>
        </div>
    )
}

export default Article