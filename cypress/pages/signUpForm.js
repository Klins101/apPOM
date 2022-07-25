class signUpForm{
    elements = {
        emailField: () => cy.get('#email_create'),
        createAccountButton: () => cy.get('#SubmitCreate > span'),
        mrButton: () => cy.get('#id_gender1'),
        mrsButton: () => cy.get('#id_gender2'),
        fnameField: () => cy.get('#customer_firstname'),
        lnameField: () => cy.get('#customer_lastname'),
        passwordField: () => cy.get('#passwd'),
        dobDay: () => cy.get('#days'),
        dobMonth: () => cy.get('#months'),
        dobYear: () => cy.get('#years'),
        newsletterBtn: () => cy.get('#newsletter'),
        specialOfferBtn: () => cy.get('#optin'),
        companyField: () => cy.get('#company'),
        addressField: () => cy.get('#address1'),
        addressField2: () => cy.get('#address2'),
        cityField: () => cy.get('#city'),
        stateDrop: () => cy.get('#id_state'),
        zipField: () => cy.get('#postcode'),
        countryDrop: () => cy.get('#id_country'),
        additionalInfoField: () => cy.get('#other'),
        homePhoneField: () => cy.get('#phone'),
        mobilePhoneField: () => cy.get('#phone_mobile'),
        addressAliasField: () => cy.get('#alias'),
        registerButton: () => cy.get('#submitAccount')
    }
    typeEmail(email){
        this.elements
            .emailField()
            .type(email)
            .should("have.value", email)
    }
    clickCreateAccount(){
        this.elements
            .createAccountButton()
            .click()
    }
    selectTitle(name){
        if (name.toLowerCase() == "mr"){
            this.elements
                .mrButton()
                .click()
        }
        else{
            this.elements
                .mrButton()
                .click()
        }                    
    }
    typeFirstName(fname){
        this.elements
            .fnameField()
            .type(fname)
            .should("have.value", fname)
    }
    typeLastName(lname){
        this.elements
            .lnameField()
            .type(lname)
            .should("have.value", lname)
    }
    typePassword(pword){
        this.elements
            .passwordField()
            .type(pword)
            
    }
    selectDay(day){
        this.elements
            .dobDay()
            .select(day)
            .should('have.value', day)
    }
    selectMonth(month){
        this.elements
            .dobMonth()
            .select(month)
            .should('have.value', month)
    }
    selectYear(year){
        this.elements
            .dobYear()
            .select(year)
            .should('have.value', year)
    }
    clickNewsletter(){
        this.elements
            .newsletterBtn()
            .click()
    }
    clickSpecialOffer(){
        this.elements
            .specialOfferBtn()
            .click()
    }
    typeCompanyName(company){
        this.elements
            .companyField()
            .type(company)
            .should("have.value", company)
    }
    typeAddress1(address){
        this.elements
            .addressField()
            .type(address)
            .should("have.value", address)
    }
    typeAddress2(address){
        this.elements
            .addressField2()
            .type(address)
            .should("have.value", address)
    }
    typeCity(city){
        this.elements
            .cityField()
            .type(city)
            .should("have.value", city)
    }
    selectState(state){
        this.elements
            .stateDrop()
            .select(state)
            .should('have.value', state)
    }
    typeZipCode(zip){
        this.elements
            .zipField()
            .type(zip)
            .should("have.value", zip)
    }
    selectCountry(country){
        this.elements
            .countryDrop()
            .select(country)
            .should('have.value', country)
    }
    typeAdditionalInfo(info){
        this.elements
            .additionalInfoField()
            .type(info)
            .should("have.value", info)
    }
    typeHomePhone(number){
        this.elements
            .homePhoneField()
            .type(number)
            .should("have.value", number)
    }
    typeMobilePhone(number){
        this.elements
            .mobilePhoneField()
            .type(number)
            .should("have.value", number)
    }
    typeAddressAlias(alias){
        this.elements
            .addressAliasField()
            .type(alias)
    }
    clickRegister(){
        this.elements
            .registerButton()
            .click()
    }








}
module.exports = new signUpForm();