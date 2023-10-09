
describe('Student Sign up Instructions', () => {

    it('Student should be able to see the sign up instructions', () => {

        cy.on('Uncaught:exception', () => {
            return false;
        })

        cy.visit('https://test.ojtph.com')
        cy.intercept({ resourceType: /xhr|fetch/ } , {log: false});
        cy.wait(500)

        //click sign up button
        cy.get('button[class="h-full w-full prevent-select button"]')
            .parents('app-button[class="button"]')
            .contains('Sign up')
            .should('be.visible')
            .click()
        cy.wait(500)

        //select school
        cy.get('div[class="title"]')
            .parents('div[class="selection"]')
            .contains('Sign up as a Student')
            .should('be.visible')
            .click()
        cy.wait(500)

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)

        //click confirm button
        cy.get('button[class="h-full w-full prevent-select button"]')
            .parents('app-button[class="button primary"]')
            .contains('Confirm')
            .should('be.visible')
            .click()
        cy.wait(500)

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)



    })

})