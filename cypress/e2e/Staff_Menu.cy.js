describe('Staff Menu goals', () => {
  beforeEach(() => {
    // Visit the login page and log in as a staff member
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
    cy.get('#id_username').type('samakhraim1');
    cy.get('#id_password').type('sama@117');
    cy.get('select[name="login_as"]').select('staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
  });

  // Script 1: The staff can edit a staff first name
  it('The staff can edit a staff first name', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Clear the first name input and enter a new value
    cy.get('tr#edit_staff_Aya input[name="first_name"]')
      .clear()
      .type('hiba');

    // Click the "Save" button to save the changes
    cy.contains('button', 'Save').click({ force: true });
  });

  // Script 2: The edit button must work
  it('The edit button must work', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Click the "Save" button to save the changes
    cy.contains('button', 'Save').click({ force: true });
  });

  // Script 3: Verify that a staff can save the edition of another staff
  it('Verify that a staff can save the edition of another staff', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Clear the first name input and enter a new value
    cy.get('tr#edit_staff_Aya input[name="first_name"]')
      .clear()
      .type('hiba');

    // Click the "Save" button to save the changes
    cy.get('button.btn-primary[form="form_staff_Aya"]').contains('Save').click({ force: true });
  });

  // Script 4: Verify that a staff can remove a staff
  it('verify that a staff can remove a staff', () => {
    // Enter the staff name to be added
    cy.get('input#new_staff').should('exist').click().type('admin');

    // Click the button to add the staff
    cy.get('.btn.btn-primary[onclick="addStaff()"]').click();

    // Log a message to indicate checking if Staff admin exists
    cy.log('Checking if Staff admin exists...');

    // Find the table row of the staff with id "staff_admin"
    cy.get('tr[id="staff_admin"] td:nth-child(1)').then(($element) => {
      if ($element.length > 0) {
        // Log a message if Staff admin is found
        cy.log('Staff admin found!');

        // Click on the "Remove" link for the staff
        cy.get('a[data-href="admin"]').contains('Remove').should('exist').click({ force: true });

        // Confirm the removal by clicking on the "Remove" button in the modal
        cy.get('a.btn.btn-danger.btn-ok').contains('Remove').should('exist').click({ force: true });
      } else {
        // Log a message if Staff admin is not found
        cy.log('Staff admin not found!');
      }
    });
  });

  // Script 5: Verify that a staff can cancel the edition for another staff
  it('Verify that a staff can cancel the edition for another staff', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'samakhraim1').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Clear the email input and enter a new value
    cy.get('input[value="samakhraim12@gmail.com"]')
      .clear()
      .type('sama@117.com');

    // Click the "Cancel" button to cancel the changes
    cy.get('tr#edit_staff_samakhraim1 button[type="reset"]').contains('Cancel').click({ force: true });
  });

  // Script 6: Verify that a staff can edit staff with special characters
  it('Verify that a staff can edit staff with special characters', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya@').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();
  });

  // Script 7: Verify that a staff can remove a staff with a special character in the name
  it('Verify that a staff can remove a staff with a special character in the name', () => {
    // Add a new staff member with a special character in the name
    cy.get('input#new_staff').click().type('Aya@');

    cy.get('.btn.btn-primary[onclick="addStaff()"]').click();

    cy.log('Checking if Staff Aya@ exists...');

    // Check if the new staff member's row exists
    cy.get('tr[id="staff_Aya@"] td:nth-child(1)').then(($element) => {
      if ($element.length > 0) {
        cy.log('Staff Aya@ found!');
      } else {
        cy.log('Staff Aya@ not found!');
      }
    });

    // Click the "Remove" link to remove the staff member
    cy.get('a[data-href="Aya@"]').contains('Remove').click({ force: true });

    // Confirm the removal by clicking the "Remove" button in the confirmation dialog
    cy.get('a.btn.btn-danger.btn-ok').contains('Remove').click({ force: true });
  });

  // Script 8: Verify that a staff can edit user goal
  it('Verify that a staff can edit user goal', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    cy.get('tr#edit_staff_Aya select[name="permissions_Goals"]').then(($select) => {
      // Get the currently selected option from the select dropdown
      const selectedOption = $select.val();

      // Determine the desired option by switching between the available options
      const desiredOption = selectedOption === '2' ? '1' : '2';

      // Select the desired option from the dropdown
      cy.get('tr#edit_staff_Aya select[name="permissions_Goals"]').select(desiredOption);

      // Click the "Save" button to save the changes
      cy.contains('button', 'Save').click({ force: true });
    });
  });

  // Script 9: Verify that staff Sort arrow functionality should sort the staff by name alphabetically (arrow after)
  it('Verify that staff Sort arrow functionality should sort the staff by name alphabetically (arrow after)', () => {
    // Click on the first column header to activate the sort functionality
    cy.get('th[aria-label="Username: activate to sort column descending"]').first().click({ force: true });
  });

  // Script 10: When staff reclicks on the same arrow, it should resort the whole menu depending on the staff names (arrow before)
  it('When staff reclicks on the same arrow, it should resort the whole menu depending on the staff names (arrow before)', () => {
    // Click on the first column header again to activate the sort functionality
    cy.get('th[aria-label="Username: activate to sort column descending"]').first().click({ force: true });
  });

  // Script 11: Verify that a staff can add email for another staff
  it('Verify that a staff can add email for another staff', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'samazuhdi').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Enter the email address in the input field
    cy.get('tr#edit_staff_samazuhdi input[name="email"]').should('exist').type('sama@117.com');

    // Click the "Save" button to save the changes
    cy.contains('button', 'Save').click({ force: true });
  });

  // Script 12: Verify that staff can't search for a staff who doesn't exist on the staff menu
  it("Verify that staff can't search for a staff who doesn't exist on the staff menu", () => {
    const nonExistentStaffName = 'Omar';

    // Enter the non-existent staff name in the search input field
    cy.get('input[type="search"]').type(nonExistentStaffName);

    // Verify that no staff rows with the given name exist
    cy.get('tr[id^="staff_"]').should('not.exist');
  });

  // Script 13: Verify that staff can search for a staff who exists on the staff menu
  it("Verify that staff can search for a staff who exists on the staff menu", () => {
    const existentStaffName = 'Aya11';

    // Enter the existing staff name in the search input field
    cy.get('input[type="search"]').type(existentStaffName);

    // Verify that staff rows with the given name exist
    cy.get('tr[id^="staff_"]').should('exist');
  });

  // Script 14: Verify that staff can add a last name to a staff
  it('Verify that staff can add a last name to a staff', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Clear the last name input field and enter the desired last name
    cy.get('tr#edit_staff_Aya input[name="last_name"]').clear().type('soud');

    // Click the "Save" button to save the changes
    cy.contains('button', 'Save').click({ force: true });
  });

  // Script 15: Verify that staff can clear the last name of a staff
  it('Verify that staff can clear the last name of a staff', () => {
    // Click on a staff member's row to expand it
    cy.contains('td', 'Aya').click();

    // Click on the "Edit" button in the expanded row
    cy.get('tr.child a:contains("Edit")').click();

    // Clear the last name input field
    cy.get('tr#edit_staff_Aya input[name="last_name"]').clear();

    // Click the "Save" button to save the changes
    cy.contains('button', 'Save').click({ force: true });
  });
});


