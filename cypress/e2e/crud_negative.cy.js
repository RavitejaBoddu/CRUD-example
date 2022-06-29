describe("Evaluates Signup with incorrect credentials", () => {
    it("Sign-up without entering name", () => {
      cy.visit("http://localhost:3001/");
  
      cy.get('#add-btn').click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("please enter your name");
      });
    });
  
    it("Sign-up without entering email", () => {
      cy.visit("http://localhost:3001/");
      cy.get("#uname").type("ravi");
      cy.get('#add-btn').click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("Please enter your email");
      });
    });
  
    it("Sign-up without entering age", () => {
      cy.visit("http://localhost:3001/");
      cy.get("#uname").type("ravi");
      cy.get("#email").type("test@test.com");
      cy.get('#add-btn').click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("please enter the age");
      });
    });
  
    it("Sign-up with incorrect email format", () => {
      cy.visit("http://localhost:3001/");
      cy.get("#uname").type("ravi");
      cy.get("#email").type("test.com");
      cy.get('#age').type(25);
      cy.get('#male').check();
      cy.get('#add-btn').click();
      cy.on("window:alert", (t) => {
        expect(t).to.contains("Please enter a valid email address");
      });
    });
  });