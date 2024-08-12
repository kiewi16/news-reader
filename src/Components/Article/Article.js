import { format } from 'date-fns'

function Article({ article }) {
    console.log("article in Article component:", article)
    const formattedDate = format(new Date (article.publishedAt), 'MM-dd-yy')

    return (
        <div className="article">
             <h2>{article.title}</h2>
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>Description:</strong> {article.description}</p>
        </div>
    )
}

export default Article