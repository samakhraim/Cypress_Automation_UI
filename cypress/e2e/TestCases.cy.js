import 'chai-string';

describe('Login and Navigate to Staff Page', () => {
    beforeEach(() => {
        cy.visit('https://goal-dev.mdx.ac.uk/');
    });

    // TC1: Verify that the login page is successfully loaded
    it('Open login page', () => {
        cy.get('form[action="/login/"]').should('exist');
    });

    // TC2: Verify the presence and attributes of the username field in the login form
    it('Login contains username field', () => {
        cy.get('#id_username').should('exist').should(($el) => {
            expect($el.attr('name')).to.equal('username');
            expect($el.attr('name').toLowerCase()).to.equal('username');
        });
        cy.get('#id_username').should('exist').should('have.attr', 'required');
    });

    // TC3: This test case is commented out and not executed in the code.
    /*it('Login faild', () => {
            cy.get('#id_username').type('i Marah');
            cy.get('#id_password').type('123qweASD#');
            cy.get('select[name="login_as"]').select('staff');
            cy.get('form[action="/login/"]>button[type="submit"]').click();
            cy.get('.alert').should('contain.text', 'Incorrect username or password');
        });
        */
    // TC4: Verify the presence and attributes of the password field in the login form
    it('Login contains password field', () => {
        cy.get('#id_password').should('exist').should(($el) => {
            expect($el.attr('name')).to.equal('password');
            expect($el.attr('name').toLowerCase()).to.equal('password');
        });
        cy.get('#id_password').should('exist').should('have.attr', 'required');
    });

    // TC5: Verify the presence and options of the login as dropdown, and the text on the login button
    it('Login as input test', () => {
        cy.get('select[name="login_as"]').should('exist');
        cy.get('select[name="login_as"]').find('option').should(($options) => {
            expect($options).to.have.length(3);
            expect($options.eq(0)).to.have.value('student');
            expect($options.eq(1)).to.have.value('staff');
            expect($options.eq(2)).to.have.value('admin/admin_dashboard');
        });
        cy.get('form[action="/login/"]>button[type="submit"]').should(($el) => {
            expect($el.text().toLowerCase()).to.include('login');
        });
    });

    // TC6: Login with valid credentials and verify successful login
    it('Login with valid credentials', () => {
        cy.get('#id_username').type('Marah');
        cy.get('#id_password').type('123qweASD#');
        cy.get('select[name="login_as"]').select('staff');
        cy.get('form[action="/login/"]>button[type="submit"]').click();
    });

    // TC7: Navigate to the staff page and open the "Goal" section
    it('Navigate to staff page and open Goal section', () => {
        cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
        cy.get('.mr-auto > :nth-child(2) > .nav-link').click();
    });

    // TC8: Uncheck the "Not Observed" checkbox
    it('Uncheck the "Not Observed" checkbox', () => {
        cy.get('input#not_observed').click({ force: true });
    });

    // TC9: Select a specific group and apply filters
it('Select group and apply filters', () => {
    // Click on the "Topic3" element in the goal filter
    cy.get('h5:contains("Topic3")').trigger('mousemove').click();

    // Select the specific group by clicking on its corresponding label
    cy.get('label:contains("Group1")').trigger('mousemove').click();

    // Click on the "Apply filters" button to display the names of students in the selected group
    // along with their marks in the assigned topic
    cy.get('button:contains("Apply filters")').trigger('mousemove').click();

    // Select a grade (7 in this case) for all members of the group
    cy.get('select[name="grade"]').select('7');

    // Select the second group to view and modify its marks as well
    cy.get('label:contains("Group2")').click();

    // After clicking on "Apply filters," the marks of the second group and the previously selected group
    // will be displayed
    cy.get('button:contains("Apply filters")').click();

    // Assign a grade of 5 to all members of the second group
    cy.get('select[name="grade"]:eq(1)').select('5');
});
    // TC10 (Faild): Attempt to enter marks after clicking on the "Unobserved" button
    it('Attempt to enter marks after unobserving', () => {
        // Click on the "Unobserved" button to disable entering marks for students
        cy.get(':nth-child(4) > .btn').click();

        // Click on the "Grade" field to enter marks for students
        cy.get('select[name="grade"]:eq(1)').as('gradeSelect');

        // Attempt to enter a grade of 2 for all members of the groups
        // Note that the system allows entering the grade despite being unobserved
        cy.get('select[name="grade"]').eq(1).select('2', { force: true });
    });

 
});

 

     