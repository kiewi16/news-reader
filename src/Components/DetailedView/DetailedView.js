import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

function DetailedView({ articles }) {
    // const formattedDate = format(new Date (article.publishedAt), 'MM-dd-yy')
    const { title } = useParams()
    const specificArticle = articles.find(article => {
        return article.title === title
    })

    console.log("specificArticle:", specificArticle)
    return (
        <div className="detailed-view">
            <h2>{specificArticle.title}</h2>
            <img
                src={specificArticle.urlToImage}
                alt={specificArticle.title}
            />
            {specificArticle.author ? <p><strong>By:</strong> {specificArticle.author}</p> : null}
            <p>Date: {format(new Date(specificArticle.publishedAt), 'MM-dd-yy')}</p>
            <p>{specificArticle.content}</p>
        </div>
    )
}

export default DetailedView