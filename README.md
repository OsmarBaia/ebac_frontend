# Exercício Cypress
## Objetivos
1) Criar um projeto de testes utilizando o Cypress;
2) No script de testes você deverá testar as funcionalidades da aplicação disponível no link https://agenda-contatos-react.vercel.app/;
3) Testar as funcionalidades:
+ inclusão;
+ alteração;
+ remoção de um contato;

## Resultado
![preview](./preview.png)

## Código fonte
```
describe('Agenda de Contatos - Testes Automatizados', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('input[type="text"]').type('Teste Nome');
      cy.get('input[type="email"]').type('teste@email.com');
      cy.get('input[type="tel"]').type('11999999999');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Teste Nome').should('exist');
      cy.contains('teste@email.com').should('exist');
      cy.contains('11999999999').should('exist');
    });
  
    it('Deve editar um contato existente', () => {
      cy.get('button[class="edit"]').first().click();
      cy.get('input[type="text"]').clear().type('Nome Editado');
      cy.get('button[type="submit"]').click();      
      cy.contains('Nome Editado').should('exist');
    });
  
    it('Deve remover um contato', () => {
    cy.get('button[class="delete"]').first().click();
      cy.contains('Nome Editado').should('not.exist');
    });
  });
  
```