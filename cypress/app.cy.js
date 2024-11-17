describe("App E2E Test", () => {

    it("loads the page and verify ", () => {
  
      cy.visit("http://localhost:8080"); 
      cy.contains("Terminierungsportal"); // Verify the specific text
      cy.contains('#app > main > div > ul > li > div.appointment-details > p:nth-child(3) > strong', 'Durchzuführende Arbeit'); //verify Aufgabe
      cy.contains('.appointment-details > p:nth-child(2)', '10:00 - 11:00');//verify start end time
      cy.contains('.technician-details > p:nth-child(2)', 'John Doe');//verify techniker name
      cy.contains('.technician-details > p:nth-child(3)', '35');//verify Techniker alt
      cy.contains('p:nth-child(4)', 'Male');//verify Geschlecht
      cy.get('.btn-reschedule').click();
      cy.get('.reschedule-options li').should('have.length', 3);
      
    });
  });