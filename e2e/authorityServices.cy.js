describe('Govisit – Authority services appointment flow', () => {

  it('עובר על כל השירותים ובודק ניווט לזימון תור', () => {

    // כניסה לעמוד הרשות
    cy.visit('https://govisit.gov.il/he/authorities/authority/262');

    // מוודא שיש שירותים בדף
    cy.get('[data-testid="service-card"]')
      .should('have.length.greaterThan', 0);

    // לולאה על כל השירותים
    cy.get('[data-testid="service-card"]').each(($service, index) => {

      // גלילה לשירות הנוכחי (למניעת בעיות תצוגה)
      cy.wrap($service).scrollIntoView();

      // לחיצה על כפתור "לזימון תור"
      cy.wrap($service)
        .contains('לזימון תור')
        .click();

      // בדיקה שה-URL מכיל appointment
      cy.url().should('include', 'appointment');

      // חזרה לעמוד השירותים
      cy.go('back');

      // מוודא שחזרנו לעמוד הרשות
      cy.url().should('include', '/authority/262');
    });
  });

});
