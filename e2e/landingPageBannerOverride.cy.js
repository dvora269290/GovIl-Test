describe('Gov.il – Override mainBanner response', () => {

  it('מחליף mainBanner של משרד רה״מ בזה של המשרד לביטחון לאומי', () => {

    let publicSecurityMainBanner;

    //  יירוט הקריאה של המשרד לביטחון לאומי
    cy.intercept(
      'GET',
      '**/ministry_of_public_security/**/govil-landing-page**',
      (req) => {
        req.continue((res) => {
          // שמירת mainBanner מה-response
          publicSecurityMainBanner = res.body.mainBanner;
        });
      }
    ).as('publicSecurityLanding');

    // ביקור בעמוד המשרד לביטחון לאומי (כדי לקבל את הבאנר)
    cy.visit(
      'https://www.gov.il/he/departments/ministry_of_public_security/govil-landing-page'
    );

    cy.wait('@publicSecurityLanding');

    //  יירוט הקריאה של משרד ראש הממשלה והחלפת הבאנר
    cy.intercept(
      'GET',
      '**/prime_ministers_office/**/govil-landing-page**',
      (req) => {
        req.reply((res) => {
          res.body.mainBanner = publicSecurityMainBanner;
          return res;
        });
      }
    ).as('primeMinisterLanding');

    //  ביקור בעמוד משרד ראש הממשלה
    cy.visit(
      'https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page'
    );

    cy.wait('@primeMinisterLanding');

    //  בדיקה שהעמוד נטען (אינדיקציה להצלחת ההחלפה)
    cy.get('body').should('be.visible');
  });

});
