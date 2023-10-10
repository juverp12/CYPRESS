import '@percy/cypress'

describe('OJTPH Log in', () => {

    //visit link
    const weblink = 'https://ojtph.com';

    //controller to enable or disable a function
    const enable_showpass = false;
    const enable_signout = true;
    const enable_confirmbtn = false;

    const users = [
        { username: 'sadmin', password: 'P@ssw0rd!' },
        // { username: 'NewCompany1', password: 'NewCompany1' },
    ];

    beforeEach(() => {
        cy.visit(weblink)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    users.forEach(user => {

        it('User should be able to log in', () => {
            cy.on('uncaught:exception', () => {
                return false
            })

            cy.percySnapshot('Front Page')

            //input username
            cy.get('#input-username')
                .type(user.username)
                .should('have.value', user.username)
            cy.wait(2000)

            //input password
            cy.get('#input-password')
                .type(user.password)
                .should('have.value', user.password)
            cy.wait(2000)

            //show & hide password
            if (enable_showpass){
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

            //click username icon
            cy.get('div[class="header-items_right-username relative py-2 px-2 rounded cursor-pointer prevent-select"]')
                .contains(user.username)
                .should('be.visible')
                .click()
            cy.wait(2000)

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
})