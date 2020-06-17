class HomePage {
  constructor() {

  }

  visit() {
    cy.visit(Cypress.env('urlQa'));
  }

  getUserName() {

    return cy.get('input[minlength="2"]')
  }
  getUserEmail() {
    return cy.get('input[name="email"]')
  }


  getUserPassw() {
    return cy.get('#exampleInputPassword1')
  }

  getCheck(data) {

    if (data == 'si') {
      cy.get('#exampleCheck1').check();
    }
    return this
  }


  getTypeGender() {
    return cy.get('#exampleFormControlSelect1')
  }

  getOptionPofession() {
    return cy.get('input[name="inlineRadioOptions"]')
  }
  getDate() {
    return cy.get('input[name="bday"]')
  }


  getButtonSubmit() {
    return cy.get('input[value="Submit"]')

  }

  getMessageSuccesfull() {
    return cy.get('strong')

  }



}
export default HomePage;