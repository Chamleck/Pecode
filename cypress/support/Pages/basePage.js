// basePage.js
class basePage {
   visit() {
       cy.log('**Open login page**');
       return cy.visit('/');
   }

   // elements on page
   getLogo() {
       cy.log('**Get Logo**');
       return cy.get('#logomini');
   }

   getHeader() {
       cy.log('**Get Header**');
       return cy.get('h1:contains("AQA internship Login")');
   }

   getEmailField() {
       return cy.get('[placeholder="Username"]');
   }

   getPasswordField() {
       return cy.get('[placeholder="Password"]');
   }

   getLoginBtn() {
       return cy.get('[value="Login"]');
   }

   getEmailError() {
       return cy.get('input[placeholder="Username"] + span.help-block');
   }

   getPasswordError() {
       return cy.get('input[placeholder="Password"] + span.help-block');
   }

   // actions with elements
   submitLogInForm(email, password) {
       cy.log(`**Adding ${email} email**`);
       this.getEmailField().type(email);
       cy.log(`**Adding ${password} to password field**`)
       this.getPasswordField().type(password);

       cy.log('**Click login button**');
       this.getLoginBtn().click();
   }

   clickLoginBtn(){
      cy.log('**Click login button**');
      this.getLoginBtn().click();
   }
}

export default basePage;
