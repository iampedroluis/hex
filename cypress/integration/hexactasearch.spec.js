/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

let url = "https://www.hexacta.com/"

describe('Login with fixture file', function(){

    /// <--- Visit the website ---->>
    beforeEach(function(){

        cy.fixture("fix-data/data")
        .then(data => {
            this.data = data;
        })
        cy.visit(url)
        cy.url().should('eq',url)
    })
    
  
    it('Search in the website', function(){
        cy.title().should('eq',this.data.title)
        cy.get('.searchbox').click()
        cy.get('#search-field').type('outsource,{enter}')
        cy.url().should('eq',this.data.urlsearch)
        cy.get('.content',{timeout:40000}).should('contain.text', this.data.text)
        

    })  


})

