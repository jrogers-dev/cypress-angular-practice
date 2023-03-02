/// <reference types="Cypress" />

import AngularPracticeShop from "./pageObjects/AngularPracticeShop.cy";
import AngularPracticeCheckout from "./pageObjects/AngularPracticeCheckout.cy";
import AngularPracticeShipping from "./pageObjects/AngularPracticeShipping.cy";

describe("Test several pages using Page Object Pattern design", () => {
  const SHOP_PAGE = new AngularPracticeShop();
  const CHECKOUT_PAGE = new AngularPracticeCheckout();
  const SHIPPING_PAGE = new AngularPracticeShipping();
  it("Ensures all functional DOM elements exist on the shop page and contain the correct text", () => {
    
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    SHOP_PAGE.getLogoNavbar().should("exist").and("have.text", "ProtoCommerce");
    SHOP_PAGE.getHomeButton().should("exist").and("have.text", "Home");
    SHOP_PAGE.getShopButton().should("exist").and("have.text", "Shop");
    SHOP_PAGE.getLogoTwo().should("exist").and("have.text", "ProtoCommerce Home");
    SHOP_PAGE.getCheckoutButton().should("exist").and("contain.text", "Checkout ( 0 )");
    SHOP_PAGE.getCategory1Link().should("exist").and("have.text", "Category 1");
    SHOP_PAGE.getCategory2Link().should("exist").and("have.text", "Category 2");
    SHOP_PAGE.getCategory3Link().should("exist").and("have.text", "Category 3");
    SHOP_PAGE.getCarouselPrev().should("exist");
    SHOP_PAGE.getCarouselNext().should("exist");
    SHOP_PAGE.getCarouselButton1().should("exist");
    SHOP_PAGE.getCarouselButton2().should("exist");
    SHOP_PAGE.getCarouselButton3().should("exist");
    SHOP_PAGE.getCarouselButtonActive().should("exist");
    SHOP_PAGE.getiPhoneXImage().should("exist");
    SHOP_PAGE.getiPhoneXText().should("exist").and("have.text", "iphone X");
    SHOP_PAGE.getiPhoneXAddButton().should("exist").and("contain.text", "Add");
    SHOP_PAGE.getNote8Image().should("exist");
    SHOP_PAGE.getNote8Text().should("exist").and("have.text", "Samsung Note 8");
    SHOP_PAGE.getNote8AddButton().should("exist").and("contain.text", "Add");
    SHOP_PAGE.getNokiaEdgeImage().should("exist");
    SHOP_PAGE.getNokiaEdgeText().should("exist").and("have.text", "Nokia Edge");
    SHOP_PAGE.getNokiaEdgeAddButton().should("exist").and("contain.text", "Add");
    SHOP_PAGE.getBlackberryImage().should("exist");
    SHOP_PAGE.getBlackberryText().should("exist").and("have.text", "Blackberry");
    SHOP_PAGE.getBlackberryAddButton().should("exist").and("contain.text", "Add");
  })

  it("Navigates to an empty checkout page and ensures all expected elements exist", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 0 )");
    SHOP_PAGE.getCheckoutButton().click();

    CHECKOUT_PAGE.getLogoNavbar().should("exist").and("have.text", "ProtoCommerce");
    CHECKOUT_PAGE.getHomeButton().should("exist").and("have.text", "Home");
    CHECKOUT_PAGE.getShopButton().should("exist").and("have.text", "Shop");
    CHECKOUT_PAGE.getLogoTwo().should("exist").and("have.text", "ProtoCommerce Home");

    CHECKOUT_PAGE.getTableRows().should('have.length', 3);
    CHECKOUT_PAGE.getTableHeader(1).should('contain.text', 'Product');
    CHECKOUT_PAGE.getTableHeader(2).should('contain.text', 'Quantity');
    CHECKOUT_PAGE.getTableHeader(3).should('contain.text', 'Price');
    CHECKOUT_PAGE.getTableHeader(4).should('contain.text', 'Total');

    CHECKOUT_PAGE.getTableTotal().should('contain.text', '₹. 0');

    CHECKOUT_PAGE.getContinueShoppingButton().should('exist').and('contain.text', 'Continue Shopping');
    CHECKOUT_PAGE.getCheckoutButton().should('exist').and('contain.text', 'Checkout');
  })

  it("Adds one of each phone to the shopping cart and ensures the checkout button is updated properly", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 0 )");
    SHOP_PAGE.getiPhoneXAddButton().click();
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 1 )");
    SHOP_PAGE.getNote8AddButton().click();
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 2 )");
    SHOP_PAGE.getNokiaEdgeAddButton().click();
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 3 )");
    SHOP_PAGE.getBlackberryAddButton().click();
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 4 )");
  })

  it("Adds and removes items from the cart verifies totals on the checkout page", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 0 )");
    SHOP_PAGE.getiPhoneXAddButton().click();
    SHOP_PAGE.getiPhoneXAddButton().click();
    SHOP_PAGE.getNokiaEdgeAddButton().click();
    SHOP_PAGE.getCheckoutButton().click();

    CHECKOUT_PAGE.getTableRows().then( ($el) => { expect($el).to.have.length(5) });
    CHECKOUT_PAGE.getTableRow(2).should("contain.text", "Nokia Edge");
    
    CHECKOUT_PAGE.getRemoveButtonOfRow(2).click();
    
    CHECKOUT_PAGE.getTableRows().then( ($el) => { expect($el).to.have.length(4) });
    CHECKOUT_PAGE.getTableRow(2).should("not.contain.text", "Nokia Edge");

    CHECKOUT_PAGE.getQuantityEditBoxOfRow(1).clear().type(1);
    CHECKOUT_PAGE.getQuantityEditBoxOfRow(1).should('contain.value', '1');
    CHECKOUT_PAGE.getQuantityEditBoxOfRow(1).clear().type(4);
    CHECKOUT_PAGE.getQuantityEditBoxOfRow(1).should('contain.value', '4');

    let displayedTotal = 0;
    CHECKOUT_PAGE.getTableTotal().then( (el) => {
      displayedTotal = parseInt(el.text().replace(/[^0-9]/g, ""), 10);
    }).then( () => {
      expect(displayedTotal == 400000, "Expect sum of costs to equal 400000").to.be.true;
    });
  })

  it("Adds items to the cart and navigates the complete checkout process", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    SHOP_PAGE.getCheckoutButton().should("contain.text", "Checkout ( 0 )");
    SHOP_PAGE.getiPhoneXAddButton().click();
    SHOP_PAGE.getiPhoneXAddButton().click();
    SHOP_PAGE.getNokiaEdgeAddButton().click();
    SHOP_PAGE.getCheckoutButton().click();

    CHECKOUT_PAGE.getCheckoutButton().click();
    SHIPPING_PAGE.getEditBox().type('India');
    SHIPPING_PAGE.getSuggestionDropdown('India').click();
    SHIPPING_PAGE.getCheckbox().check({force: true});
    SHIPPING_PAGE.getPurchaseButton().click();
    SHIPPING_PAGE.getAlert().should('exist').and('contain.text', 'Success!');
  })
})