class AngularPracticeCheckout {
    getLogoNavbar() {
        return cy.get('.navbar > .navbar-brand');
    }

    getLogoTwo() {
        return cy.get('.container > .navbar-brand');
    }

    getHomeButton() {
        return cy.get('.navbar > .navbar-nav > li:nth-child(1) > .nav-link');
    }

    getShopButton() {
        return cy.get('li:nth-child(2) > .nav-link');
    }

    getTableRows() {
        return cy.get('tr');
    }

    getTableRow(row){
        return cy.get(`tr:nth-child(${row})`);
    }

    getTableHeader(column){
        return cy.get(`thead > tr > th:nth-child(${column})`);
    }

    getQuantityEditBoxOfRow(row) {
        return cy.get(`#exampleInputEmail${row}`);
    }

    getRemoveButtonOfRow(row) {
        return cy.get(`tr:nth-child(${row}) .btn-danger`);
    }

    getTableTotal(){
        return cy.get('tbody > tr').last().prev().find('td:nth-child(5)');
    }

    getContinueShoppingButton(){
        return cy.get('tbody > tr').last().find('.btn-default');
    }

    getCheckoutButton(){
        return cy.get('tbody > tr').last().find('.btn-success');
    }
}

export default AngularPracticeCheckout;