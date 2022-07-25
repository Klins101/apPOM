class cart{
    elements = {
        item: () => cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container'),
        cartButton: () => cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default'),
        checkOutBtn: () => cy.get('.button-medium > span'),
        proceedCart: () => cy.get('.cart_navigation > .button > span'),
        terms: () => cy.get('#cgv')
    }
    showCart(){
        this.elements
            .item()
            .invoke('show')
    }
    AddItemCart(){
        this.elements
            .cartButton()
            .click({ force: true })
    }
    clickCheckOut(){
        this.elements
            .checkOutBtn()
            .click()
    }
    clickProceedCart(){
        this.elements
            .proceedCart()
            .click()
    }
    clickTerms(){
        this.elements
            .terms()
            .click()
    }


}
module.exports = new cart();