describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru ');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
        })


         it(' Логика восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('vndhsc@yandex.ru ');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        })

        it('Верный логин, неверный пароль, наличие кнопки "крестик"', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru ');
            cy.get('#pass').type('iLoveqastudo1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Неверный логин, верный пароль, наличие кнопки "крестик"', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru ');
            cy.get('#pass').type('iLoveqastujio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Негативный кейс валидации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandolnikov.ru ');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        })

            it('Верный пароль и верный логин', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Авторизация прошла успешно');
        })
 })

 
 
 
 // 
 