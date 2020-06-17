/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('switch Iframe', ()=> 
{

it('switch Iframe', ()=>{
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
  cy.frameLoaded('#courses-iframe')
  cy.iframe().find('a[href="#/mentorship"]').eq(0).click();

  cy.iframe().find('h1[class*="pricing-title text-white ls-1"]').eq(0).should('have.text','BRONZE')
})

}
)