describe('filter goals', () => {

  beforeEach(()=>{
    //login
    cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
    cy.get('#id_username').type('Aya');
    cy.get('#id_password').type('Ayasoud123#');
    cy.get('select[name="login_as"]').select('staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    //route to the GroupL module
    cy.visit('https://goal-dev.mdx.ac.uk/staff/38');
    //route to the goals page
    cy.visit('https://goal-dev.mdx.ac.uk/staff/38/goals/');
  });


  it('Goal filter exists', () => {
    //check if Goal filter title exists
    cy.get('.text-center > strong').should('contain.text', "Goal Filter");
    //check if all goals filter exists
    cy.get('input[name="all_goals"]').should('exist');
    cy.get('label[for="all_goals"]').should('exist');
    //check if Topic1 filter exists
    cy.get('input#topic_84').should('exist');
    cy.get('label[for="topic_84"]').should('exist');
    //check if goal1 filter exists
    cy.get('input#goal_1336').should('exist');
    cy.get('label[for="goal_1336"]').should('exist');
    //check if goal2 filter exists
    cy.get('input#goal_1337').should('exist');
    cy.get('label[for="goal_1337"]').should('exist');
    //check if Topic2 filter exists
    cy.get('input#topic_159').should('exist');
    cy.get('label[for="topic_159"]').should('exist');
    //check if goal3 filter exists
    cy.get('input#goal_1338').should('exist');
    cy.get('label[for="goal_1338"]').should('exist');
    //check if Topic3 filter exists
    cy.get('input#topic_110').should('exist');
    cy.get('label[for="topic_110"]').should('exist');
    //check if goal4 filter exists
    cy.get('input#goal_1473').should('exist');
    cy.get('label[for="goal_1473"]').should('exist');
  });


  it('Group filter exists', () => {
    //check if group filter title exists
    cy.get('.text-center > strong').should('contain.text', "Group filter");
    //check if all group filter exists
    cy.get('input[name="all_groups"]').should('exist');
    cy.get('label[for="all_groups"]').should('exist');
    //check if None group filter exists
    cy.get('input[group="None"]').should('exist');
    cy.get('label[for="group_None"]').should('exist');
    //check if group1 filter exists
    cy.get('input[group="Group1"]').should('exist');
    cy.get('label[for="group_Group1"]').should('exist');
    //check if group2 filter exists
    cy.get('input[group="Group2"]').should('exist');
    cy.get('label[for="group_Group2"]').should('exist');
  });


  it('Level filter exists', () => {
    //check if all level filter exists
    cy.get('input[name="all_levels"]').should('exist');
    cy.get('label[for="all_levels"]').should('exist');
    //check if medium filter filter exists
    cy.get('input#level_Medium').should('exist');
    cy.get('label[for="level_Medium"]').should('exist');
    //check if low level filter exists
    cy.get('input#level_Low').should('exist');
    cy.get('label[for="level_Low"]').should('exist');
    //check if high level filter exists
    cy.get('input#level_High').should('exist');
    cy.get('label[for="level_High"]').should('exist');
  });


  it('Other filters exists', () => {
    //check if other filters title exists
    cy.get('.text-center > strong').should('contain.text', "Other filters");
    //check if not observed filter exists
    cy.get('input[id="not_observed"]').should('exist');
    cy.get('label[for="not_observed"]').should('exist');
    //check if expected by now filter exists
    cy.get('input[name="deadline_filter"]').should('exist');
    cy.get('label[for="expected_ByNow"]').should('exist');
  });


  it('Apply only goal filters', () => {
    //check all goals filter
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#topic_110').check({force: true});
    cy.get('input#goal_1473').check({force: true});
    //uncheck group filter
    cy.get('input[name="all_groups"]').uncheck({force: true});
    //uncheck level filters
    cy.get('input[name="all_levels"]').uncheck({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filters
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if it displays an alert
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a group');
    });
  });


  it('Apply only group filters', () => {
    //uncheck goals filter
    cy.get('input[name="all_goals"]').uncheck({force: true});
    //check all group filters
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    //uncheck level filter
    cy.get('input[name="all_levels"]').uncheck({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if alert message appear
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only level filters', () => {
    //uncheck goals filter
    cy.get('input[name="all_goals"]').uncheck({force: true});
    //uncheck grop filter
    cy.get('input[name="all_groups"]').uncheck({force: true});
    //check level filter
    cy.get('input[name="all_levels"]').check({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if an alert appear
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only other filters', () => {
    //uncheck goals filter
    cy.get('input[name="all_goals"]').uncheck({force: true});
    //uncheck group filter
    cy.get('input[name="all_groups"]').uncheck({force: true});
    //uncheck level filter
    cy.get('input[name="all_levels"]').uncheck({force: true});
    //check other filters
    cy.get('input#not_observed').check({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if an alert appear
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Apply only goal and group filters', () => {
    //check all goals filter
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#topic_110').check({force: true});
    cy.get('input#goal_1473').check({force: true});
    //check all group filters
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    //uncheck level filter
    cy.get('input[name="all_levels"]').uncheck({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if an alert appear
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a level');
    });
  });


  it('Apply only goal and level filters', () => {
    //check all goals filter
    cy.get('input[name="all_goals"]').check({force: true});
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#topic_110').check({force: true});
    cy.get('input#goal_1473').check({force: true});
    //uncheck group filter
    cy.get('input[name="all_groups"]').uncheck({force: true});
    //check  all levels filter
    cy.get('input[name="all_levels"]').check({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if an alert appear
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a group');
    });
  });


  it('Apply only group and level filters', () => {
    //uncheck goals filter
    cy.get('input[name="all_goals"]').uncheck({force: true});
    //check group filter
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    //check levels filter
    cy.get('input[name="all_levels"]').check({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //check if an alert appear 
    cy.on('window:alert', (text) => {
      expect(text).to.include('Please selet a goal');
    });
  });


  it('Check Filter statistcs', () => {
    //check all goals filter
    cy.get('input[name="all_goals"]').check({force: true});    
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#topic_110').check({force: true});
    cy.get('input#goal_1473').check({force: true});
    //check all groups filter
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    //check level filters
    cy.get('input[name="all_levels"]').check({force: true});
    //uncheck other filters
    cy.get('input#not_observed').uncheck({force: true});
    cy.get('input[name="deadline_filter"]').uncheck({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //wait till results appear
    cy.wait(1000);
    //check if the number of total goals is matched with the actual total goals
    cy.get('span#total_goal').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.goals').should('have.length', expectedCount/3);
    });  
    //check if the number of observed goals is matched with the actual observed goals
    cy.get('span#observedGoal').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10); 
      cy.get('select[name="grade"]').should('have.length', expectedCount+1);
    }); 
    //check if the number of expected by now goals is matched with the actual expected by now goals
    cy.get('span#expectedByNow').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.expected_ByNow_True').should('have.length', expectedCount/3);
    });
    //check if the number of late goals is matched with the actual late goals
    cy.get('span#late_goals').invoke('text').then((text) => {
      const expectedCount = parseInt(text, 10);
      cy.get('div.is_late_True').should('have.length', expectedCount);
    });
    
  });


  it('Filter all goals expected by now only', () => {
    //check all goals filter
    cy.get('input[name="all_goals"]').check({force: true});    
    cy.get('input#topic_84').check({force: true});
    cy.get('input#goal_1336').check({force: true});
    cy.get('input#goal_1337').check({force: true});
    cy.get('input#topic_159').check({force: true});
    cy.get('input#goal_1338').check({force: true});
    cy.get('input#topic_110').check({force: true});
    cy.get('input#goal_1473').check({force: true});
    //check all groups filter
    cy.get('input[name="all_groups"]').check({force: true});
    cy.get('input[group="None"]').check({force: true});
    cy.get('input[group="Group1"]').check({force: true});
    cy.get('input[group="Group2"]').check({force: true});
    //check level filters
    cy.get('input[name="all_levels"]').check({force: true});
    //uncheck not observed filter
    cy.get('input#not_observed').uncheck({force: true});
    //check expected bu now filter
    cy.get('input[name="deadline_filter"]').check({force: true});
    //apply filter
    cy.get('button[onclick="applyGoalFilters(this)"]').click();
    //wait till results appear
    cy.wait(1000);
    //check if any goal that is not expected by now has been appeared 
    cy.get('div.expected_ByNow_False').should('not.exist');
  });



});