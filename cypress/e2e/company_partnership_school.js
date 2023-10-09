
describe('OJTPH Log in', () => {

    //visit link
    const weblink = 'http://localhost:4200/home';

    //type schoolname to search
    const schoolname = 'School 1 University';

    //type companyname to search
    const companyname = 'New Company 1';

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
    const enable_confirmbtn = true;
    const enable_decline = false;
    const enable_download = true;
    const enable_declinemessage = false;
    const usernameicon = false;

    //log in credentials
    const companyusername = 'Newcompany1!';
    const companypassword = 'Newcompany1!';

    const schoolusername = 'School1!';
    const schoolpassword = 'School1!';

    beforeEach(() => {
        cy.visit(weblink)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })


    it('Company should be able to send a partnership', () => {
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

        //click schools tab
        cy.get('div[class="links"]')
            .parents('div[class="navlinks prevent-select"]')
            .contains('School')
            .should('be.visible')
            .click()
        cy.wait(2000)

        //search school from the list
        cy.get('#search')
            .type(schoolname)
            .should('have.value', schoolname)
        cy.wait(2000)

        //select school
        cy.get('.overflow-auto > .w-full > .card > .card-content > .flex')
            .contains(schoolname)
            .click()
        cy.wait(2000)

        //click send partnership request button
        cy.get('app-button[class="button"]')
            .parents('div[class="content-container"]')
            .contains('Send Partnership Request')
            .click()
        cy.wait(2000)

        //click username icon
        if (usernameicon) {
            cy.get('div[class="header-items_right-username relative py-2 px-2 rounded cursor-pointer prevent-select"]')
                .contains(companyusername)
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
    it('School should be able to accept the partnership', () => {
        cy.on('uncaught:exception', () => {
            return false
        })

        //input username
        cy.get('#input-username')
            .type(schoolusername)
            .should('have.value', schoolusername)
        cy.wait(2000)

        //input password
        cy.get('#input-password')
            .type(schoolpassword)
            .should('have.value', schoolpassword)
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
        //click company tab
        cy.get('div[class="links"]')
            .parents('div[class="navlinks prevent-select"]')
            .contains('Company')
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
            cy.get('.content > .buttonChoices > .button > .button-accept')
                .contains('Accept')
                .click()
            cy.wait(2000)
        }

        //click decline button
        if (declinetbtn) {
            cy.get('.content > .buttonChoices > .button > .button-decline')
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
        if (enable_declinemessage) {
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

        //type authorized person
        cy.get('#authPerson')
            .type('Juan Dela Cruz')
        cy.wait(2000)

        //type designation
        cy.get('#designation')
            .type('IT Department')
        cy.wait(2000)

        //click submit information
        cy.get('app-button.button')
            .contains('Submit Information')
            .click()
        cy.wait(2000)

    })
    it('Company should be able to proceed to the MOA Process', () => {

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

        //click schools tab
        cy.get('div[class="links"]')
            .parents('div[class="navlinks prevent-select"]')
            .contains('School')
            .should('be.visible')
            .click()
        cy.wait(2000)

        //search school from the list
        cy.get('#search')
            .type(schoolname)
            .should('have.value', schoolname)
        cy.wait(2000)

        //select school
        cy.get('.overflow-auto > .w-full > .card > .card-content > .flex')
            .contains(schoolname)
            .click()
        cy.wait(2000)

        //click next button
        cy.get('app-button.button > .h-full')
            .contains('Next')
            .click()
        cy.wait(2000)

        //upload a file
        cy.get('.file-input ')
            .click()
            .selectFile('cypress/fixtures/OJTPH.pdf', { force: true })
        cy.wait(2000)

        //click submit document button for review
        cy.get('app-button.button > .h-full')
            .contains('Submit Document for Review')
            .click()
        cy.wait(2000)

        //click download
        if (enable_download) {
            cy.get('.file-download-button')
                .contains('Download')
                .click()
            cy.wait(5000)
        }

    })
    it('School should be able to download the MOA for review', () => {
        cy.on('uncaught:exception', () => {
            return false
        })

        //input username
        cy.get('#input-username')
            .type(schoolusername)
            .should('have.value', schoolusername)
        cy.wait(2000)

        //input password
        cy.get('#input-password')
            .type(schoolpassword)
            .should('have.value', schoolpassword)
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
        //click company tab
        cy.get('div[class="links"]')
            .parents('div[class="navlinks prevent-select"]')
            .contains('Company')
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

        //click download
        if (enable_download) {
            cy.get('.file-download-button')
                .contains('Download')
                .click()
        }

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