class AngularPracticeShop {
    getLogoNavbar() {
        return cy.get('.navbar > .navbar-brand');
    }

    getLogoTwo() {
        return cy.get('.container > .navbar-brand');
    }

    getHomeButton() {
        return cy.get('.navbar > .navbar-nav > :nth-child(1) > .nav-link');
    }

    getShopButton() {
        return cy.get(':nth-child(2) > .nav-link');
    }

    getCheckoutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }

    getCategory1Link() {
        return cy.get('.list-group > :nth-child(1)');
    }

    getCategory2Link() {
        return cy.get('.list-group > :nth-child(2)');
    }

    getCategory3Link() {
        return cy.get('.list-group > :nth-child(3)');
    }

    getCarouselPrev() {
        return cy.get('.carousel-control-prev-icon');
    }

    getCarouselNext() {
        return cy.get('.carousel-control-next-icon');
    }

    getCarouselButton1() {
        return cy.get('[data-slide-to="0"]');
    }

    getCarouselButton2() {
        return cy.get('[data-slide-to="0"]');
    }

    getCarouselButton3() {
        return cy.get('[data-slide-to="0"]');
    }

    getCarouselButtonActive() {
        return cy.get('.carousel-indicators > .active');
    }

    getiPhoneXImage(){
        return cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top');
    }

    getiPhoneXText(){
        return cy.get(':nth-child(1) > .card > .card-body > .card-title > a');
    }

    getiPhoneXAddButton(){
        return cy.get(':nth-child(1) > .card > .card-footer > .btn');
    }

    getNote8Image() {
        return cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top');
    }

    getNote8Text() {
        return cy.get(':nth-child(2) > .card > .card-body > .card-title > a');
    }

    getNote8AddButton() {
        return cy.get(':nth-child(2) > .card > .card-footer > .btn');
    }

    getNokiaEdgeImage() {
        return cy.get(':nth-child(3) > .card > :nth-child(1) > .card-img-top');
    }

    getNokiaEdgeText() {
        return cy.get(':nth-child(3) > .card > .card-body > .card-title > a');
    }

    getNokiaEdgeAddButton() {
        return cy.get(':nth-child(3) > .card > .card-footer > .btn');
    }

    getBlackberryImage() {
        return cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top');
    }

    getBlackberryText() {
        return cy.get(':nth-child(4) > .card > .card-body > .card-title > a');
    }

    getBlackberryAddButton() {
        return cy.get(':nth-child(4) > .card > .card-footer > .btn');
    }
}

export default AngularPracticeShop;