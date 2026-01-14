describe('Government Service Branches – 3 API requests', () => {

  it('Checks that all 3 requests return a 200 status', () => {


    cy.intercept('GET', '**/BureausWebApi/bureaus/GetAggregationCities*').as('getAggregationCities')
    cy.intercept('GET', '**/BureausWebApi/bureaus/GetAggregationUnits*').as('getAggregationUnits')
   cy.intercept('GET', '**/BureausWebApi/bureaus/GetAggregationForOffices*').as('getAggregationForOffices')


    cy.visit('https://www.gov.il/he/government-service-branches')

   
    cy.wait('@getAggregationCities')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getAggregationUnits')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getAggregationForOffices')
      .its('response.statusCode')
      .should('eq', 200)
  })
})
