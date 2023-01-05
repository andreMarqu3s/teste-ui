describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').eq(3).click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    let quantidade = 2;

    cy.get('[class="product-block grid"]')
      .contains("Abominable Hoodie")
      .click();
    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Blue").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get('.woocommerce-message').should(
      "contain",
      `${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`
    );
  });

  it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 2)
  });

  
  it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Ajax Full-Zip Sweatshirt', 'L', 'Red', 3)
  });
});
