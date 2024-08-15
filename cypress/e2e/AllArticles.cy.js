describe('All Articles Component', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://newsapi.org/v2/everything?q=science&sortBy=relevancy&language=en&pageSize=21&apiKey=61c3d32aeb4943d0a55e840f01a6e449", {
      statusCode: 200,
      fixture: "articles"
    })
    cy.visit('http://localhost:3000')
  })
  it('should display a header, a section title, a search input, a search button, and a grid of articles', () => {
    cy.get('.header').should('contain', 'News Reader')
    cy.get('.section').should('contain', 'Science Section')
    cy.get('.search-input').should('be.visible')
    cy.get('.search-button').should('contain', 'SEARCH')
    cy.get('.all-articles-container, .article').should('have.length', 6)
  })
})
