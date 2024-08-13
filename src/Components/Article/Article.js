import '../Article/Article.css'
import placeholderImage from '../../Images/article-placeholder-image.jpg'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function Article({ article }) {
    return (
        <div className="article">
            <Link to={`/DetailedView/${article.publishedAt}`}>
            {article.urlToImage ? 
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="article-image"
                />
            :
                <img
                    src={placeholderImage}
                    alt="magnifying glass mafnifying newspaper text related to science and technology"
                    className="article-placeholder-image"
                />
            }
            </Link>
            <h3 className="article-title">{article.title}</h3>
            {article.description ? <p className="article-description">{article.description}</p> : null}
            <p className="article-date"><strong>Date: </strong>{format(new Date(article.publishedAt), 'MM-dd-yy')}</p>
        </div>
    )
}

export default Article