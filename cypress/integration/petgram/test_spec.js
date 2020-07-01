/* global describe, it, sxpect */

describe('Petgram', function () {
    it('Para ver si la app funciona', function () {
        // expect(true).to.equal(true)
        cy.visit('/');
    })

    it('navegamos a una categoria y vemos fotos', function () {
        cy.visit('/pet/1');
        cy.get('article');
    })

    it('Si podemos navegar con la navbar a la home', function () {
        cy.visit('/pet/1');
        cy.get('nav a').first().click();
        cy.url().should('include', '/');

    })

    it('los usuairos no registrados ven el formulario de registro e inicio de sesión al ir a favs', function () {
        cy.visit('/favs');
        cy.get('form').should('have.length', 2);
    })
})