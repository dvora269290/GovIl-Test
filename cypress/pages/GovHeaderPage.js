class GovHeaderPage {

  visit() {
    cy.visit('https://www.gov.il')
  }
  
  openSearch() {
     return cy.get('#hp-main-search').should("be.visible").click();
    }

   
  getSearchInput() {
      return cy.get('#SearchInput')
  }

  typeSearch(text) {
    this.getSearchInput().clear().type(text)
  }

  submitSearch() {
    this.getSearchInput().type('{enter}')
  }

  getSearchResults() {
    return cy.get('.resultCounter')
  }

getSearchResultItem(){
  return cy.get('.result-item')
}

}

export default new GovHeaderPage()
