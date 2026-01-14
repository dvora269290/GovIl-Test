import GovHeaderPage from '../pages/GovHeaderPage'

describe('Gov.il Header Search', () => {

  beforeEach(() => {
    GovHeaderPage.visit()
    GovHeaderPage.openSearch()
  })

  it('Search returns results for valid term', () => {
    GovHeaderPage.typeSearch('דרכון')
    GovHeaderPage.submitSearch()

    GovHeaderPage.getSearchResultItem()
      .should('have.length.greaterThan',0)
  })

it("No search results", () => {
   
 let query="חליח";
    GovHeaderPage.typeSearch(query);
    GovHeaderPage.submitSearch()
    
GovHeaderPage.getSearchResultItem()
.should('have.length', 0);

    GovHeaderPage.getSearchResults()
      .should("contain.text", "לא נמצאו")
      .and("contain.text", `תוצאות לערך "${query}"`);
  });


 it('Search does not crash on empty input', () => {
    GovHeaderPage.submitSearch()
    cy.url().should('include', 'Search')
  })

})
