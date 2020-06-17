class ProductHome {
    constructor() {

    }

    getMenu() {
        return cy.get('a[href="/angularpractice/shop"]')
    }

    validateUrl() {
        return cy.url()

    }

    checkButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

}

export default ProductHome;