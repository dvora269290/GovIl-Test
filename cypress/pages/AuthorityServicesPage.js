class AuthorityServicesPage {
  
  visit(){
     cy.visit('https://govisit.gov.il/he/authorities/authority/262')
  }
  
 getServices() {
    return cy.get('div.service') 
  }
}

export default new AuthorityServicesPage()
