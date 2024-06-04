// cypress/integration/tests/loginPageTest.js
import loginPage from '../support/Pages/loginPage';
import {faker} from '@faker-js/faker';
import genericUsers from "../fixtures/genericUser";
import user from "../fixtures/user.json";
import validUser from "../fixtures/validUser.json";

describe('Login Page Tests', () => {

    it('verifying logo and header exist', () => {
        loginPage.visit();
        loginPage.getLogo().should('exist');
        loginPage.getHeader().should('exist');
    });

  
    it('log in with invalid generic credentials', () => {
        
        loginPage.visit();
        genericUsers.forEach(({ email, password }, index) => {
            cy.log(`**adding credentials, run # ${index}, checking elements**`);
            loginPage.submitLogInForm(email, password); 
            loginPage.getEmailError().should('contain','No account found with that username.')
        });      
    });

    it('log in with invalid manual credentials', () => {
        
        loginPage.visit();
        user.forEach(({ email, password }, index) => {
            cy.log(`**adding credentials, run # ${index}, checking elements**`);
            loginPage.submitLogInForm(email, password); 
            loginPage.getEmailError().should('contain','No account found with that username.')
        });     
    });

    it('Error messages check', () => {
        
        loginPage.visit();
        loginPage.clickLoginBtn();
        loginPage.getEmailError().should('contain','Please enter username.');
        loginPage.getPasswordError().should('contain', 'Please enter your password.');
    });

    it('log in with valid manual credentials', () => {
        
        loginPage.visit();
        validUser.forEach(({ email, password }, index) => {
            cy.log(`**adding credentials, run # ${index}, checking elements**`);
            loginPage.submitLogInForm(email, password); 
            cy.url().should('include', '/home');
        });     
    });
});