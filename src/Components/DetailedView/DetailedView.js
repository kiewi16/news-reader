import { format } from 'date-fns'

function DetailedView() {
    const formattedDate = format(new Date (article.publishedAt), 'MM-dd-yy')
}

export default DetailedView