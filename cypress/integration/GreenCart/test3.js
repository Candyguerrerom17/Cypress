/// <reference types="Cypress" />

describe('Obtener url', function() 
{
    before(() => {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    
      })


      it('remover target de DOM', ()=>{

        // con las funcion invoke eliminamos el targer :_black que abre una nueva ventana , asi se carga automticamente en la misma ventana
      cy.get('#opentab').invoke('removeAttr', 'target').click();
      cy.wait(2000);
        
      })
      it('Obtenet y validar url', ()=>{
        cy.url().should('include', '#/index')
        cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index') 

        // da click hacia atras
        cy.go('back')

      })

it('recorrer tabla', ()=>{

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

   
      if($el.text().includes('Python')){

        // se debe crear una funcion para poder extraer el texto de el DOM siguiente
        //para eso usamos la funcion .next()
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(logoelement)
        {
           
         //expect nos ayuda a validar que el campo contenga sea igual 25
            expect(logoelement.text()).to.equal('25')
        })

      }

    
})



})

it('mover mouse', ()=>{
// invoke muestra los elementos ocuentos de este elementomouse
  //  cy.get('#mousehover').invoke('show')


    // inicialmente debi ingresar en un etiqueta mas para que encontrara TOp
    // pero con {force: true} force a que lo hixiera
    cy.contains('Top').click({force: true});
    cy.url().should('include', '#top')
    })
}
)