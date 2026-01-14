import AuthorityServicesPage from '../pages/AuthorityServicesPage'

describe('Govisit – Authority services appointment flow', () => {
    
  beforeEach(() => {

   AuthorityServicesPage.visit();
  })

  it("Should appointment buttons include 'appointment'", () => {

    AuthorityServicesPage.getServices().each(($service, index) => {

     // appointment לחיצה על כפתור למידע נוסף מכיוון שזימון תור יש לו בעיה ומביא לדף התחברות שאין שם
      cy.wrap($service)
        .contains('למידע נוסף')
        .click();

   
      cy.url().should('include', 'appointment');

      cy.go('back');

    });
  });

});
