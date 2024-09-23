describe('Gestão de Contatos - Agenda Contatos React', () => {

    // Teste de inclusão de contato
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

        // Preenche os campos de nome, e-mail e telefone
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joao.silva@email.com');
        cy.get('input[placeholder="Telefone"]').type('11987654321');

        // Clica no botão de adicionar
        cy.get('button').contains('Adicionar').click();

        // Verifica se o contato foi adicionado à lista
        cy.contains('João Silva').should('be.visible');
        cy.contains('11987654321').should('be.visible');
        cy.contains('joao.silva@email.com').should('be.visible');
    });

    // Teste de edição de contato
    it('Deve editar um contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

        // Clica no botão de editar do primeiro contato
        cy.get('button').contains('Editar').first().click();

        // Altera os campos de nome, e-mail e telefone
        cy.get('input[placeholder="Nome"]').clear().type('João da Silva');
        cy.get('input[placeholder="E-mail"]').clear().type('joao.dasilva@email.com');
        cy.get('input[placeholder="Telefone"]').clear().type('11912345678');

        // Clica no botão de salvar
        cy.get('button').contains('Salvar').click();

        // Verifica se o contato foi alterado
        cy.contains('João da Silva').should('be.visible');
        cy.contains('11912345678').should('be.visible');
        cy.contains('joao.dasilva@email.com').should('be.visible');
    });

    // Teste de remoção de contato
    it('Deve remover um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');

        // Clica no botão de deletar do primeiro contato
        cy.get('button').contains('Deletar').first().click();

        // Verifica se o contato foi removido da lista
        cy.contains('gian Souza').should('not.exist');
    });

});
