class AngularPracticeShipping {

    getEditBox() {
        return cy.get('#country');
    }

    getSuggestionDropdown(country) {
        return cy.get('.suggestions > ul > li > a', { timeout: 10000 }).should('be.visible').and('contain.text', country);
    }
    
    getCheckbox(){
        return cy.get('#checkbox2');
    }

    getPurchaseButton() {
        return cy.get('.ng-untouched > .btn');
    }

    getAlert(){
        return cy.get('.alert');
    }
}

export default AngularPracticeShipping;