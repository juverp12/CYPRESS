
describe('OJTPH Log in', () => {

    //visit link
    const weblink = 'http://localhost:4200/home';

    //School Information (Step 1)
    const schoolName = 'School 4 University';
    const schoolType = 'Option1';
    const schoolRegNum = '123456';
    const schoolSize = 'Option1';
    const date = '2000-10-12';
    const website = 'www.school4.edu.ph/';
    const description = 'Test';
    const affiliation = 'Option1';

    //log in credentials
    const schoolusername = 'school1';
    const schoolpassword = 'school1';

    //controller to enable or disable a function
    const enable_showpass = false;
    const enable_signout = false;
    const enable_confirmbtn = true;
    const enable_refresh = true;
    const usernameicon = false;

    beforeEach(() => {
        cy.visit(weblink)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })


    it('School should be able to edit profile', () => {
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

        //type school name
        cy.get('#schoolName')
            .clear()
            .type(schoolName)
            .should('have.value', schoolName)
        cy.wait(500)

        //input date established
        cy.get('input[type="date"]')
            .type(date)
            .should('have.value', date)
        cy.wait(500)

        //select school type and change the schoolType into "Option1" or "Option2" from the code
        cy.get('#generalClassification').click()
        if (schoolType === 'Option1') {
            cy.contains('Public').click();
        } else if (schoolType === 'Option2') {
            cy.contains('Private').click();
        }

        //input school website
        cy.get('#schoolWebsite')
            .clear()
            .type(website)
            .should('have.value', website)
        cy.wait(500)

        //type school registration number
        cy.get('#schoolRegNum')
            .clear()
            .type(schoolRegNum)
            .should('have.value', schoolRegNum)
        cy.wait(500)

        //select school size and change the school size into "Option1" or "Option2"......from the code
        cy.get('#schoolSize').click()

        if (schoolSize === 'Option1') {
            cy.contains('Small School (1 To 100 Students)').click()
        } else if (schoolSize === 'Option2') {
            cy.contains('Medium School (100 To 500 Students)').click()
        } else if (schoolSize === 'Option3') {
            cy.contains('Large School (500 To 1,000 Students)').click()
        } else if (schoolSize === 'Option4') {
            cy.contains('Very Large School (1,000+ Students)').click()
        } else if (schoolSize === 'Option5') {
            cy.contains('Specialized School (May Vary)').click()
        }

        //type a description
        cy.get('#schoolDescription')
            .clear()
            .type(description)
            .should('have.value', description)
        cy.wait(500)

        //add affiliation
        cy.get('.row-content > .hold-contain > .button.ng-tns-c219-0 > .h-full')
            .contains('Add Affiliation')
            .should('be.visible')
            .click()
        cy.wait(500)

        //select affiliations and change the affiliation into "Option1" or "Option2"......from the code
        cy.get('#affiliation0').click()

        if (affiliation === 'Option1') {
            cy.contains('Department Of Education').click();
        } else if (affiliation === 'Option2') {
            cy.contains('Commission On Higher Education').click();
        } else if (affiliation === 'Option3') {
            cy.contains('Catholic Schools').click();
        } else if (affiliation === 'Option4') {
            cy.contains('Protestant Schools').click();
        } else if (affiliation === 'Option5') {
            cy.contains('Private School Associations').click();
        } else if (affiliation === 'Option6') {
            cy.contains('Technical Education And Skills Development Authority').click();
        }
        cy.get('#affiliation')
            .should('be.visible');
        cy.wait(500)


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