/// <reference types="Cypress" />
describe('Test web services', function(){

it('get', ()=>{

    cy.visit(Cypress.env('urlBaseWebSertice'))
    cy.request('GET', 'comments').as('comments')

cy.get('@comments').should((response) => {
  expect(response.body).to.have.length(500)
  expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
})
})



})