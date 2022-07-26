export default class BasePage {
    static pause(ms) {
      cy.wait(ms)
    }

    static goBack(){
      cy.go('back')
    }
  
    static setMobileViewport() {
      cy.viewport('iphone-x')
    }
  
    static setDesktopViewport() {
      cy.viewport('macbook-13')
    }
  
 
}
