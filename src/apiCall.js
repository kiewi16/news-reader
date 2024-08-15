function getArticles() {
    return fetch("https://newsapi.org/v2/everything?q=science&sortBy=relevancy&language=en&pageSize=21&apiKey=61c3d32aeb4943d0a55e840f01a6e449")
    .then(response => {
        if(!response.ok) {
            throw new Error("We've encountered an unexpected error and were unable to get the articles.")
        }
        return response.json()
    })
}

export default getArticles