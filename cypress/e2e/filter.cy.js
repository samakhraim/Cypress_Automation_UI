describe('filter goals', () => {
  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
    cy.get('#id_username').type('Aya');
    cy.get('#id_password').type('Ayasoud123#');
    cy.get('select[name="login_as"]').type('staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
  });


  it('Open goals page', () => {
    
  })


})