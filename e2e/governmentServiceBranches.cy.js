describe('Gov.il – Government Service Branches API checks', () => {

  it('בודק ש-3 קריאות API מחזירות סטטוס 200', () => {

    // Intercept 1 – רשימת תחומי שירות
    cy.intercept(
      'GET',
      '**/api/**/government-service-branches**'
    ).as('getServiceBranches');

    // Intercept 2 – נתוני תוכן / עמוד
    cy.intercept(
      'GET',
      '**/api/**/content**'
    ).as('getContent');

    // Intercept 3 – חיפוש / נתונים משלימים
    cy.intercept(
      'GET',
      '**/api/**/search**'
    ).as('getSearch');

    // כניסה לעמוד
    cy.visit('https://www.gov.il/he/government-service-branches');

    // בדיקת response status לכל קריאה
    cy.wait('@getServiceBranches')
      .its('response.statusCode')
      .should('eq', 200);

    cy.wait('@getContent')
      .its('response.statusCode')
      .should('eq', 200);

    cy.wait('@getSearch')
      .its('response.statusCode')
      .should('eq', 200);
  });

});
