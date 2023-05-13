describe('filter goals', () => {

  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
    cy.get('#id_username').type('Aya');
    cy.get('#id_password').type('Ayasoud123#');
    cy.get('select[name="login_as"]').select('staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get(':nth-child(3) > :nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
    cy.get('a[href="/staff/38/goals/"]').click();
  });


  it('Goal filter exists', () => {
    cy.get('.text-center > strong').should('contain.text', "Goal Filter");
    cy.get('input[name="all_goals"]').should('exist');
    cy.get('label[for="all_goals"]').should('exist');
    cy.get('input#topic_84').should('exist');
    cy.get('label[for="topic_84"]').should('exist');
    cy.get('input#goal_1336').should('exist');
    cy.get('label[for="goal_1336"]').should('exist');
    cy.get('input#goal_1337').should('exist');
    cy.get('label[for="goal_1337"]').should('exist');
    cy.get('input#topic_159').should('exist');
    cy.get('label[for="topic_159"]').should('exist');
    cy.get('input#goal_1338').should('exist');
    cy.get('label[for="goal_1338"]').should('exist');
  });


  it('Group filter exists', () => {
    cy.get('.text-center > strong').should('contain.text', "Group filter");
    cy.get('input[name="all_groups"]').should('exist');
    cy.get('label[for="all_groups"]').should('exist');
    cy.get('input[group="None"]').should('exist');
    cy.get('label[for="group_None"]').should('exist');
    cy.get('input[group="Group1"]').should('exist');
    cy.get('label[for="group_Group1"]').should('exist');
    cy.get('input[group="Group2"]').should('exist');
    cy.get('label[for="group_Group2"]').should('exist');
  });


  it('Level filter exists', () => {
    cy.get('input[name="all_levels"]').should('exist');
    cy.get('label[for="all_levels"]').should('exist');
    cy.get('input#level_Medium').should('exist');
    cy.get('label[for="level_Medium"]').should('exist');
    cy.get('input#level_Low').should('exist');
    cy.get('label[for="level_Low"]').should('exist');
    cy.get('input#level_High').should('exist');
    cy.get('label[for="level_High"]').should('exist');
  });


  it('Other filters exists', () => {
    cy.get('.text-center > strong').should('contain.text', "Other filters");
    cy.get('input[id="not_observed"]').should('exist');
    cy.get('label[for="not_observed"]').should('exist');
    cy.get('input[name="deadline_filter"]').should('exist');
    cy.get('label[for="expected_ByNow"]').should('exist');
  });


  it('Apply only goal filters', () => {
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input[name="all_groups"]').uncheck({force: true});
    cy.get('input[name="all_levels"]').uncheck({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a group');
    });
  });


  it('Apply only group filters', () => {
    cy.get('input[name="all_goals"]').uncheck({force: true});
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    cy.get('input[name="all_levels"]').uncheck({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only level filters', () => {
    cy.get('input[name="all_goals"]').uncheck({force: true});
    cy.get('input[name="all_groups"]').uncheck({force: true});
    cy.get('input[name="all_levels"]').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only other filters', () => {
    cy.get('input[name="all_goals"]').uncheck({force: true});
    cy.get('input[name="all_groups"]').uncheck({force: true});
    cy.get('input[name="all_levels"]').uncheck({force: true});
    cy.get('input#not_observed').check({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only goal and group filters', () => {
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    cy.get('input[name="all_levels"]').uncheck({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.wait(1000);
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a level');
    });
  });


  it('Apply only goal and level filters', () => {
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input[name="all_groups"]').uncheck({force: true});
    cy.get('input[name="all_levels"]').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a group');
    });
  });


  it('Apply only group and level filters', () => {
    cy.get('input[name="all_goals"]').uncheck({force: true});
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    cy.get('input[name="all_levels"]').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Filter statistcs', () => {
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});    
    cy.get('input[name="all_levels"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.wait(1000);
    cy.get('span#total_goal').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.goals').should('have.length', expectedCount/3);
    });  
    cy.get('span#observedGoal').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10); 
      cy.get('select[name="grade"]').should('have.length', expectedCount+1);
    }); 
    cy.get('span#expectedByNow').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.expected_ByNow_True').should('have.length', expectedCount/3);
    });
    cy.get('span#late_goals').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.late_True').should('have.length', expectedCount);
    });
    
  });


  it('Filter all goals expected by now only', () => {
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    cy.get('input[name="all_levels"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').check({force: true});
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    cy.wait(1000);
    cy.get('div.expected_ByNow_False').should('not.exist');
  });



});