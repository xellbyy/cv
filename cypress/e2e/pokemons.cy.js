describe('Покупка аватара', function () {                               
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('LOGIN');      
         cy.get('input[type="password"]').type('PASSWORD');   
         cy.get('button[type="submit"]').click();                       
         cy.get('.header__btns > :nth-child(4)').click();              
         cy.get(':nth-child(4) > .shop__button').click();     
         cy.get('.credit').type('4620869113632996');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('IVAN IVANOV');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible'); 
         cy.get('.payment__adv').click();
         cy.get('.header__img').click();
     });
 })