
describe('OJTPH Log in', () => {

    //visit link
    const weblink = 'http://localhost:4200/home';

    //type companyname to search
    const companyname = 'New Company 4';

    //reason for declining
    const reason = 'Reason1';

    //decline message
    const declinemessage = 'Test123';

    //controller for accepting and declining company
    const acceptbtn = true;
    const declinetbtn = false;
    const cancelbtn = false;
    const submitbtn = false;

    //controller to enable or disable a function
    const enable_showpass = false;
    const enable_signout = false;
    const enable_confirmbtn = false;
    const enable_decline = false;
    const enable_declinebtn = false;
    const usernameicon = false;


    const users = [
        { username: 'sadmin', password: 'P@ssw0rd!' },
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

            //click companies tab
            cy.get('div[class="links"]')
                .parents('div[class="navlinks prevent-select"]')
                .contains('Companies')
                .should('be.visible')
                .click()
            cy.wait(2000)

            //search company from the list
            cy.get('#search')
                .type(companyname)
                .should('have.value', companyname)
            cy.wait(2000)

            //select company
            cy.get('.overflow-auto > .w-full > .card > .card-content > .flex')
                .contains(companyname)
                .click()
            cy.wait(2000)

            //click accept button
            if (acceptbtn) {
                cy.get('.top-container > .btn-choices > .btn-choices-button')
                    .contains('Accept')
                    .click()
                cy.wait(2000)
            }

            //click decline button
            if (declinetbtn) {
                cy.get('.top-container > .btn-choices > .btn-choices-button')
                    .contains('Decline')
                    .click()
                cy.wait(2000)
            }

            //reason for declining 
            if (enable_decline) {
                cy.get('#reasonDecline').click()

                if (reason === 'Reason1') {
                    cy.contains('Not Interested').click()
                } else if (reason === 'Reason2') {
                    cy.contains('Not A Good Fit').click()
                } else if (reason === 'Reason3') {
                    cy.contains('Not Enough Time').click()
                } else if (reason === 'Reason4') {
                    cy.contains('Other').click()
                }

                cy.get('#reasonDecline')
                    .should('be.visible')
                cy.wait(500)
            }

            //decline message
            if (enable_declinebtn) {
                cy.get('#message')
                    .type(declinemessage)
                cy.wait(500)
            }

            //cancel button
            if (cancelbtn) {
                cy.get('app-button[label="Cancel"]')
                    .parents('div[class="formBtn"]')
                    .contains('Cancel')
                    .click()
                cy.wait(500)
            }

            //submit button
            if (submitbtn) {
                cy.get('app-button[label="Submit"]')
                    .parents('div[class="formBtn"]')
                    .contains('Submit')
                    .click()
                cy.wait(500)
            }
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
            if (usernameicon) {
                cy.get('div[class="header-items_right-username relative py-2 px-2 rounded cursor-pointer prevent-select"]')
                    .contains(user.username)
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
})