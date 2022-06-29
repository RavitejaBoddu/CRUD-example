const uname = "Ravi"
const email = "ravi@test.com"
const age = 25;

describe('Update the user', () => {
  it('Adding user to the API', () => {
    cy.visit('http://localhost:3001/')
    cy.wait(2000);
    cy.get('#uname').type(uname);
    cy.get('#email').type(email);
    cy.get('#age').type(age);
    cy.get('#male').check();
    cy.get('#add-btn').click();
    cy.wait(1000);
    cy.get('#table_body').get('.tbody_row').last().contains(email);
  })


  it('Deletes the user from API', () => {
    cy.visit('http://localhost:3001/')
    cy.get('.delete-btn').last().click();
    cy.get('.confirm-btn').click();
    cy.wait(2000);
    cy.get('#refresh-btn').click();
    cy.wait(5000);
    cy.get('.tbody_row').last().contains(email);
  })
})