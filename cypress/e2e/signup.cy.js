import homePage from '../pages/homePage';
import signUpForm from '../pages/signUpForm';
import signup_data from '../fixtures/signup_data.json';
import BasePage from '../pages/BasePage';
import cart from '../pages/cart';

describe('Automation Practice Free Flow', () => {
  beforeEach(() => {
    cy.visit("/");

})
  it('Sign Up', () => {
    homePage.clickSignIn();
    signUpForm.typeEmail(signup_data.email);
    signUpForm.clickCreateAccount();
    signUpForm.selectTitle(signup_data.title);
    signUpForm.typeFirstName(signup_data.firstName);
    signUpForm.typeLastName(signup_data.lastName);
    signUpForm.typePassword(signup_data.password);
    signUpForm.selectDay(signup_data.dobDay);
    signUpForm.selectMonth(signup_data.dobMonth);
    signUpForm.selectYear(signup_data.dobYear);
    signUpForm.clickNewsletter();
    signUpForm.typeCompanyName(signup_data.companyName);
    signUpForm.typeAddress1(signup_data.address);
    signUpForm.typeAddress2(signup_data.address2);
    signUpForm.typeCity(signup_data.city);
    signUpForm.selectState(signup_data.state);
    signUpForm.typeZipCode(signup_data.zipCode);
    signUpForm.selectCountry(signup_data.country);
    signUpForm.typeAdditionalInfo(signup_data.additionalInfo);
    signUpForm.typeHomePhone(signup_data.homePhone);
    signUpForm.typeMobilePhone(signup_data.mobilePhone);
    signUpForm.typeAddressAlias(signup_data.addressAlias);
    signUpForm.clickRegister();
    homePage.gotoHomePage();
    cart.showCart();
    cart.AddItemCart();
    cart.clickCheckOut();
    cart.clickProceedCart();
    cart.clickProceedCart();
    cart.clickTerms();
    cart.clickProceedCart();   
  })
})