class HeaderSearch {
  visit() {
    cy.visit('https://www.gov.il');
  }

  searchInput() {
    return cy.get('[data-testid="header-search-input"]');
  }

  searchButton() {
    return cy.get('[data-testid="header-search-button"]');
  }

  resultsContainer() {
    return cy.get('[data-testid="search-results"]');
  }

  typeSearch(text) {
    this.searchInput().clear().type(text);
  }

  submitWithEnter(text) {
    this.searchInput().clear().type(`${text}{enter}`);
  }

  submitWithButton(text) {
    this.typeSearch(text);
    this.searchButton().click();
  }
}

export default new HeaderSearch();
