import Article from "../Article/Article"

function AllArticles({ articles }) {
    console.log("articles in AllArticles:", articles)

    const allArticles = articles.map(article => {
        return (
            <Article
                // key={}
                article={article}
            />
        )
    })

    return (
        <div className="articles-container">
            <h1>All Articles</h1>
            {allArticles}
        </div>
    )
}

export default AllArticles