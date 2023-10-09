
describe('OJTPH Log in', () => {

    //visit link
    const weblink = 'http://localhost:4200/home';

    //log in credentials
    const companyusername = 'company101';
    const companypassword = 'company101';

    //controller to enable or disable a function
    const enable_showpass = false;
    const enable_signout = false;
    const enable_confirmbtn = true;
    const enable_refresh = false;
    const usernameicon = false;

    beforeEach(() => {
        cy.visit(weblink)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })


    it('Company should be able to edit profile', () => {
        cy.on('uncaught:exception', () => {
            return false
        })

        //input username
        cy.get('#input-username')
            .type(companyusername)
            .should('have.value', companyusername)
        cy.wait(2000)

        //input password
        cy.get('#input-password')
            .type(companypassword)
            .should('have.value', companypassword)
        cy.wait(2000)

        //show & hide password
        if (enable_showpass) {
            cy.get('[class="fa fa-eye prevent-select"]')
                .parents('div[class="suffix-ico"]')
                .find('span')
                .should('be.visible')
                .click()
                .wait(2000)
        }

        //log in 
        cy.get('[class="h-full w-full prevent-select button"]')
            .parents('div[class="forms-btn"]')
            .find('button')
            .contains('Log In')
            .should('be.visible')
            .click()
        cy.wait(5000)

        //Confirm Button (Verification Modal), enable this line of codes if needed
        if (enable_confirmbtn) {
            cy.get('[class="h-full w-full prevent-select button"]')
                .parents('app-button[class="button primary"]')
                .find('button')
                .contains('Confirm')
                .should('be.visible')
                .click()
                .wait(2000)
        }

        //click profile tab
        cy.get('div[class="links"]')
            .parents('div[class="navlinks prevent-select"]')
            .contains('Profile')
            .should('be.visible')
            .click()
        cy.wait(2000)

        //refresh button
        if (enable_refresh) {
            cy.get('.loader-container > app-button.button > .h-full')
                .contains('Refresh')
                .should('be.visible')
                .click()
            cy.wait(2000)
        }

        cy.get('.container-ending > .button > .h-full')
            .contains('Edit Details')
            .should('be.visible')
            .click()
        cy.wait(2000)

        //click username icon
        if (usernameicon) {
            cy.get('div[class="header-items_right-username relative py-2 px-2 rounded cursor-pointer prevent-select"]')
                .contains(schoolusername)
                .should('be.visible')
                .click()
            cy.wait(2000)
        }

        //sign out
        if (enable_signout) {
            cy.get('[class="h-full w-full prevent-select button"]')
                .parents('app-button[class="button"]')
                .find('button')
                .contains('SIGN OUT')
                .should('be.visible')
                .click()
            cy.wait(2000)
        }
    })

})