/// <reference types="Cypress" />

describe('Testing cypress', function() 
{

    before(() => {
        cy.fixture('example').then((data)=>{

       this.data=data

        })
      })


    it('Hooks', ()=>{
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

    cy.get('input[minlength="2"]').type(this.data.name)
    cy.get('input[name="email"]').type(this.data.email).debug()
    // la funcion detiene la automatización y se debe dar play de nuevo para seguir
    cy.pause()
    cy.get('#exampleInputPassword1').type(this.data.password)
  
  
    if(this.data.check == 'si'){
        cy.get('#exampleCheck1').check();
    }
    

    cy.get('#exampleFormControlSelect1').select(this.data.gender)
    cy.get('input[name="inlineRadioOptions"]').check(['option2']);

    cy.get('input[name="bday"]').type('1992-02-17')
    cy.get('input[value="Submit"]').click()
    cy.wait(2000)
    cy.get('strong').should('have.text','Success!')
    
    })


    it('Creando funcion en commands.js', ()=>{

        cy.get('a[href="/angularpractice/shop"]').click()
        cy.url().should('eq', 'https://www.rahulshettyacademy.com/angularpractice/shop') 
       cy.selectProduct('Samsung Note 8');

    

this.data.equipes.forEach(function(date)

{

    cy.selectProduct(date)
}
    )
})
})