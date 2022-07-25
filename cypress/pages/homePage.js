class homePage{
    elements = {
        signInButton: () => cy.get('.login'),
        contactUsButton: () => cy.get('.contact-link'),
        searchField: () => cy.get('#search_query_top'),
        searchButton: () => cy.get('[name="submit_search"]'),
        logo: () => cy.get('.logo'),
        
    }
    clickSignIn(){
        this.elements
            .signInButton()
            .click()
    }
    gotoHomePage(){
        this.elements
            .logo()
            .click()
    }
    
}
module.exports = new homePage();