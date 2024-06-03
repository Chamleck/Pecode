//creating empty variable
let id
//this command is to set value for id variable and returning id
Cypress.Commands.add('setId',(value) =>{
 id = value
 return id
});
//this command is to extract id which was set bebore
Cypress.Commands.add('getId',() =>{
 return id
});


