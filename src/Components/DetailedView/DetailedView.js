import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

function DetailedView({ articles }) {
    const { publishedAt } = useParams()
   
    const specificArticle = articles.find(article => {
        return article.publishedAt === publishedAt
    })

    console.log("specificArticle:", specificArticle)

    return (
        <div className="detailed-view">
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