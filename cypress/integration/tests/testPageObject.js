/// <reference types="Cypress" />
import HomePage from '../pageObjectModel/HomePage';
import ProductHome from '../pageObjectModel/ProductHome';
describe('Usando Page object Model', function () {

    before(() => {
        cy.fixture('example').then((data) => {

            this.data = data

        })
    })

    it('Test home', () => {
        const home = new HomePage();
        home.visit()
        home.getUserName().type(this.data.name)
        home.getUserEmail().type(this.data.email)
        home.getUserPassw().type(this.data.password)
        home.getCheck(this.data.check)
        home.getTypeGender().select(this.data.gender)
        home.getOptionPofession().check(['option2']);
        home.getDate().type('1992-02-17')
        home.getButtonSubmit().click()
        cy.wait(2000)
        home.getMessageSuccesfull().should('have.text', 'Success!')
    })

    it('Test product with POM', () => {
        Cypress.config('defaultCommandTimeout', 4000)
        const productHome = new ProductHome();
        const home = new HomePage();
        productHome.getMenu().click()
        productHome.validateUrl().should('eq', 'https://www.rahulshettyacademy.com/angularpractice/shop')
        this.data.equipes.forEach(function (date) {
            cy.selectProduct(date)
        }
        )

        productHome.checkButton().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong')
            .each(($el, index, $list) => {
                const cont = $el.text();

                var val = parseInt(cont.replace("₹. ", ""));

                sum = sum + val


            }).then(function () {
                cy.log(sum)

            })

        cy.get('tr td:nth-child(5) strong').each(($el, index, $list) => {
            const cont = $el.text();

            var total = parseInt(cont.replace("₹. ", ""));

            expect(sum).to.equal(total)


        })

        cy.wait(2000)
        cy.get('.btn.btn-success').click();

        cy.get('#country').type('prueba')
        cy.get('label[for="checkbox2"]').click()



        cy.get('.nsm-dialog-animation-fade > .btn').then(function ($button) {
            if ($button.is(':visible')) {
                cy.wrap($button).click()
            }
        })

        cy.get('input[type="submit"]').click()
        home.getMessageSuccesfull().should('have.text', 'Success!')
    })

})