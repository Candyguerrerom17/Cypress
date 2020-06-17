/// <reference types="Cypress" />
describe('Clicks en Cyrpress', function() 
{

    before(() => {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
     //   cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/').screenshot('prueba screenshots')
      })
    

      it('clik checkbox', ()=>{

       // Se identifica el elemento por type <input value="radio1" name="radioButton" class="radioButton" type="radio" xpath="1">
       // con la funcion check se le ingresa que va a ser el  value="radio1"
        cy.get('input[type="radio"]').check(['radio3']).should('be.checked');
      })

      it('clik checkbox optiones multiples', ()=>{
// se valida que dee estar chekeado y se valida que tiene el value = option1
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('input[type="checkbox"]').check(['option2']);
        cy.get('input[type="checkbox"]').uncheck(['option2']);
        cy.get('input[type="checkbox"]').check(['option2','option3']);
        
      })


      it('listas depregables select', ()=>{
        cy.get('select').select('Option3').should('have.value','option3');
      })

      it('Campo autocompletar', ()=>{
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($el, index, $list) =>{

            if($el.text()=='India'){
                $el.click();

            }

        }

        
      )
      cy.get('#autocomplete').should('have.value', 'India')
})



it('campos visbles o no', ()=>{

  cy.get('#show-textbox').click();
   cy.get('#displayed-text').should('be.visible');

   cy.get('#hide-textbox').click();
   cy.get('#displayed-text').should('be.not.be.visible');

})


it('ventana alerta popap', ()=>{

cy.get('#alertbtn').click();


cy.on('window:alert', (str)=>{
  //Mocha
expect(str).equals('Hello , share this practice page and share your knowledge');


})


cy.get('[value="Confirm"]').click();
//Mocha
cy.on('window:confirm', (str)=>{
  expect(str).equals('Hello , Are you sure you want to confirm?');
  
  
  })
})


it('remover target de DOM', ()=>{

  // con las funcion invoke eliminamos el targer :_black que abre una nueva ventana , asi se carga automticamente en la misma ventana
cy.get('#opentab').invoke('removeAttr', 'target').click();
  
})
})