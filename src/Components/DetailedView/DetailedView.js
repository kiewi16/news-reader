import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import '../DetailedView/DetailedView.css'

function DetailedView({ articles }) {
    const { publishedAt } = useParams()
   
    const specificArticle = articles.find(article => {
        return article.publishedAt === publishedAt
    })

    return (
        <div className="detailed-view">
            <div className="home-page-button-container">
                <button className='home-page-button'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>Home Page</Link>
                </button>            
            </div>
            <h2>{specificArticle.title}</h2>
            {specificArticle.urlToImage ? 
            <img
                src={specificArticle.urlToImage}
                alt={specificArticle.title}
                className="detailed-view-image"
            />
            : null }
            <p className="source"><i>{specificArticle.source.name}</i></p>
            {specificArticle.author ? <p><strong>By:</strong> {specificArticle.author}</p> : null}
            <p><strong>Date:</strong> {format(new Date(specificArticle.publishedAt), 'MM-dd-yy')}</p>
            <p>{specificArticle.content}</p>
            <a href={specificArticle.url}>Click Here to Read More</a>
        </div>
    )
}

export default DetailedView