
describe('Staff Menu goals', () => {
  beforeEach(() => {
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
    cy.get('#id_username').type('samakhraim1');
    cy.get('#id_password').type('sama@117');
    cy.get('select[name="login_as"]').select('staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
  });

  it('Test If the staff can edit a staff first name ', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('tr[id="edit_staff_Aya"] input[name="first_name"]')
      .should('exist')
      .clear()
      .type('hiba');
    cy.get('button[type="submit"]').contains('Save').click({ force: true });
  });

  it('Test If the edit button works  ', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    
  
    cy.get('button[type="submit"]').contains('Save').click({ force: true });
  });

  it('Test If the staff can save the edition of another staff', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('tr[id="edit_staff_Aya"] input[name="first_name"]')
      .should('exist')
      .clear()
      .type('hiba');
    cy.get('.btn.btn-primary[form="form_staff_Aya"]').contains('Save').click({ force: true });
  });
  

  it('Test that a staff can remove a staff', () => {
    cy.get('input#new_staff').should('exist').click().type('Marah');
    cy.get(' .btn.btn-primary[onclick="addStaff()"]').click();
    cy.log('Checking if Staff Marah exists...');
    cy.get('tr[id="staff_Marah"] td:nth-child(1)').then(($element) => {
      if ($element.length > 0) {
        cy.log('Staff Marah found!');
      } else {
        cy.log('Staff Marah not found!');
      }
    });
    cy.get('a[data-href="Marah"]').contains('Remove').should('exist').click({ force: true });
    cy.get('a.btn.btn-danger.btn-ok').contains('Remove').should('exist').click({ force: true });
  });

  it('Test if a staff can cancel the edition for another staff', () => {
    cy.get('tr[id="staff_samakhraim1"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('input[value="samakhraim12@gmail.com"]').should('exist').clear().type('sama@117.com');
    cy.get('tr[id="edit_staff_samakhraim1"] button[type="reset"]').contains('Cancel').click({ force: true });
  });
  
  

  it('Test if a staff can edit staff with special character', () => {
    cy.get('tr[id="staff_Aya@"] td:nth-child(1)').click();
  
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
  });
  it('Test that a staff can remove a staff with speacial character name ', () => {
    cy.get('input#new_staff').should('exist').click().type('Aya@');
    cy.get(' .btn.btn-primary[onclick="addStaff()"]').click();
    cy.log('Checking if Staff Marah exists...');
    cy.get('tr[id="staff_Aya@"] td:nth-child(1)').then(($element) => {
      if ($element.length > 0) {
        cy.log('StaffAya@ found!');
      } else {
        cy.log('Staff Aya@ not found!');
      }
    });
    cy.get('a[data-href="Aya@"]').contains('Remove').should('exist').click({ force: true });
    cy.get('a.btn.btn-danger.btn-ok').contains('Remove').should('exist').click({ force: true });
  });
  
  it('Test that a staff can edit user goal', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
  
    cy.get('tr[id="edit_staff_Aya"] select[name="permissions_Goals"]').then(($select) => {
      const selectedOption = $select.val();
      const desiredOption = selectedOption === '2' ? '1' : '2';
  
      cy.get('tr[id="edit_staff_Aya"] select[name="permissions_Goals"]').select(desiredOption);
    });
  
    cy.get('button[type="submit"]').contains('Save').click({ force: true });

  });
  it('Sort arrow functionality should sort the staff by name alphabetically (arrow after)', () => {
    cy.get('th[aria-label="Username: activate to sort column descending"]').first().click({ force: true });
    });

    it('when staff reclick on the same arrow should resort the whole menue depending on the staff names  (arrow Before)', () => {
      cy.get('th[aria-label="Username: activate to sort column descending"]').first().click({ force: true });

    
      
  });
  
  
  
  it('Test if a staff can add email for another staff', () => {
    cy.get('tr[id="staff_samazuhdi"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('tr[id="edit_staff_samazuhdi"] input[name="email"]').should('exist').type('sama@117.com');
    cy.get('.btn.btn-primary[form="form_staff_samazuhdi"]').contains('Save').click({ force: true });
  });
  
  
  it('Verify that staff can\'t search for a staff who doesn\'t exist on staff menu', () => {
    const nonExistentStaffName = 'Omar';
  
    cy.get('input[type="search"]').type(nonExistentStaffName);
    cy.get('tr[id^="staff_"]').should('not.exist');
  });
  it('Verify that staff can search for a staff who exists on staff menu', () => {
    const existentStaffName = 'Aya11';
  
    cy.get('input[type="search"]').type(existentStaffName);
    cy.get('tr[id^="staff_"]').should('exist');
  });
  it('Verify that staff can add last name to a staff', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('tr[id="edit_staff_Aya"] input[name="last_name"]')
      .should('exist')
      .clear()
      .type('soud');
    cy.get('.btn.btn-primary[form="form_staff_Aya"]').contains('Save').click({ force: true });
  });

  it('Verify that staff can clear the last name of a staff', () => {
    cy.get('tr[id="staff_Aya"] td:nth-child(1)').click();
    cy.get('tr[class="child"] div[class="row m-0 p-0"] div:nth-child(1) a')
      .contains('Edit')
      .should('exist')
      .click();
    cy.get('tr[id="edit_staff_Aya"] input[name="last_name"]')
      .should('exist')
      .clear();
  
    cy.get('.btn.btn-primary[form="form_staff_Aya"]').contains('Save').click({ force: true });


    });
});