import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

function DetailedView({ articles }) {
    const { publishedAt } = useParams()
    console.log("DetailedView publishedAt:", publishedAt)

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
            />
            : null }
            {specificArticle.author ? <p><strong>By:</strong> {specificArticle.author}</p> : null}
            <p>Date: {format(new Date(specificArticle.publishedAt), 'MM-dd-yy')}</p>
            <p>{specificArticle.content}</p>
        </div>
    )
}

export default DetailedView