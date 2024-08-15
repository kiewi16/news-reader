describe('App', () => {
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
    cy.get('.article').should('have.length', 6)
    cy.get('.article, article-title').first().should('contain', "Is the ‘Diaper’ Method in 'Twisters' a Real Solution For Massive Tornadoes? Not Exactly")
    cy.get('.article, article-description').first().should('contain', "The ‘Twister’ sequel, which brought in over $80 billion at the box office this weekend, is full of good science. But its big reveal is full of spin.")
    cy.get('.article, .article-date').first().should('contain', "Date: 07-22-24")
  })

  it('should get a detailed view for an article when the image is clicked', () => {
    cy.get(':nth-child(1) > a > .article-image').click()
    cy.get('.home-page-button').should('contain', 'Home Page')
    cy.get('h2').should('contain', "Is the ‘Diaper’ Method in 'Twisters' a Real Solution For Massive Tornadoes? Not Exactly")
    cy.get('.detailed-view-image').should('be.visible')
    cy.get('.source').should('contain', 'Wired')
    cy.get('.detailed-view > :nth-child(5)').should('contain', 'By: Dennis Mersereau')
    cy.get('.detailed-view > :nth-child(6)').should('contain', 'Date: 07-22-24')
    cy.get('.detailed-view > :nth-child(7)').should('contain', "OK, so the films twins are possible, but what about its flaming tornado? During one of Twisters climatic moments multiple fireballs fill the stormy skies as a violent tornado runs through an industri… [+2709 chars]")
    cy.get('[href="https://www.wired.com/story/is-twisters-diaper-method-a-real-solution-for-massive-tornadoes/"]').should('be.visible')
  })

  it('should navigate to the home page when the home page button is clicked from the detailed view', () => {
    cy.get(':nth-child(1) > a > .article-image').click()
    cy.url().should('contain', 'DetailedView/2024-07-22T14:13:12Z')
    cy.get('.home-page-button').click()
    cy.url().should('contain', 'localhost:3000/')
  })

  it('should display any articles that match the search criteria entered into the search input after the search button is clicked. The search input and search button should not be displayed.', () => {
    cy.get('.search-input').type('food')
    cy.get('.search-button').click()
    cy.get('.search-input').should('not.exist')
    cy.get('.search-button').should('not.exist')
    cy.get('.article').should('have.length', 1)
    cy.get('.article-title').should('contain', "Why we might never know the truth about ultra-processed foods")
    cy.get('.article-description').should('contain', "Experts can’t agree how exactly they affect us and it’s not clear that science will give us an answer.")
    cy.get('.article-date').should('contain', 'Date: 07-27-24')
  })

  it('should clear the search results when the clear search results button is clicked and display all articles', () => {
    cy.get('.search-input').type('food')
    cy.get('.search-button').click()
    cy.get('.clear-search-results-button').click()
    cy.get('.header').should('contain', 'News Reader')
    cy.get('.section').should('contain', 'Science Section')
    cy.get('.search-input').should('be.visible')
    cy.get('.search-button').should('contain', 'SEARCH')
    cy.get('.article').should('have.length', 6)
  })

  it('should display a customized message if no articles match the search criteria entered into the search input after the search button is clicked. The search input and search button should not be displayed.', () => {
    cy.get('.search-input').type('blah')
    cy.get('.search-button').click()
    cy.get('.no-results-message').should('contain', 'No results returned for blah')
    cy.get('.search-input').should('not.exist')
    cy.get('.search-button').should('not.exist')    
  })

  it('should navigate back to all articles when the back to all articles button is clicked from the search results page', () => {
    cy.get('.search-input').type('blah')
    cy.get('.search-button').click()
    cy.get('.back-to-all-articles-button').click()
    cy.get('.header').should('contain', 'News Reader')
    cy.get('.section').should('contain', 'Science Section')
    cy.get('.search-input').should('be.visible')
    cy.get('.search-button').should('contain', 'SEARCH')
    cy.get('.article').should('have.length', 6)
  })
})
