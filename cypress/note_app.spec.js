describe('Note App', () => {
    it('adds a new note', () => {
      cy.visit('/');
  
      // Vérifie les inputs
      cy.get('input[name="title"]').type('Test Note');
      cy.get('input[name="score"]').type('10');
      cy.get('textarea[name="comment"]').type('Test comment');
      cy.get('form').submit();
  
      // Vérifie que la nouvelle note est affichée
      cy.contains('Test Note').should('exist');
  
      // Vérifie que les notes sont stockées dans le LocalStorage
      cy.getLocalStorage('notes').should('deep.equal', [
        { title: 'Test Note', score: 10, comment: 'Test comment', createdAt: expect.any(String) },
      ]);
    });
  });
  