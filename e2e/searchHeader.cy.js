import HeaderSearch from './pageObjects/HeaderSearch.page';

describe('Gov.il – Header Search (data-testid)', () => {

  beforeEach(() => {
    HeaderSearch.visit();
  });

  it('TC-01: חיפוש עם טקסט תקין מציג תוצאות', () => {
    HeaderSearch.submitWithEnter('דרכון');

    HeaderSearch.resultsContainer()
      .should('be.visible')
      .and('not.be.empty');
  });

  it('TC-02: חיפוש באמצעות כפתור החיפוש עובד', () => {
    HeaderSearch.submitWithButton('תעודת זהות');

    cy.url().should('include', 'search');
    HeaderSearch.resultsContainer().should('be.visible');
  });

  it('TC-03: חיפוש ריק לא גורם לשגיאה', () => {
    HeaderSearch.submitWithEnter(' ');

    cy.get('body').should('be.visible');
    cy.url().should('not.include', 'error');
  });
});
