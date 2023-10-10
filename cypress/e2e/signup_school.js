
describe('School Admin Registration', () => {

    //visit link
    const weblink = 'https://ojtph.com';

    //School Information (Step 1)
    const schoolName = 'School 2 University';
    const schoolType = 'Option1';
    const schoolRegNum = '123456789';
    const schoolSize = 'Option1';
    const date = '2000-10-12';
    const website = 'www.school1.edu.ph/';

    //School Affiliations (Step 2)
    const affiliation = 'Option1';

    //Contact Details (Step 3)
    const email = 'school4@gmail.com';
    const secondContact = '(912) 334-0230';
    const contactPerson = 'Juan Cruz';
    const socialMedia = 'Option1';
    const link = "test1.com"

    //Physical Address (Step 4)
    const country = 'Option1';
    const region = 'Option1';
    const province = 'Option1';
    const City = 'Option1';
    const postal = '6100';
    const streetAddress = 'Mandalagan';

    //Documents Upload (Step 5)

    //Account Credentials (Step 6)
    const alternateEmail = 'school1@gmail.com';
    const username = 'School1!';
    const password = 'School1!';
    const passwordConfirm = 'School1!';

    //controller to enable or disable a function
    const enable_register = false;
    const enable_homebtn = false;
    const enable_confirmbtn = false;
    const enable_retrybtn = false;

    it('School Admin should be able to sign up', () => {

        cy.on('uncaught:exception', () => {
            return false;
        })

        cy.visit(weblink)
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
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
            .contains('Sign up as a School')
            .should('be.visible')
            .click()
        cy.wait(500)

        // close button, enable this line of codes if needed
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

        //school information
        //type school name
        cy.get('#schoolName')
            .type(schoolName)
            .should('have.value', schoolName)
        cy.wait(500)

        //select school type and change the schoolType into "Option1" or "Option2" from the code
        cy.get('#schoolType').click()
        if (schoolType === 'Option1') {
            cy.contains('Public').click();
        } else if (schoolType === 'Option2') {
            cy.contains('Private').click();
        }

        cy.get('#schoolType')
            .should('be.visible')
        cy.wait(500)

        //type school registration number
        cy.get('#schoolRegNum')
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

        cy.get('#schoolSize')
            .should('be.visible')
        cy.wait(500)

        //input date established
        cy.get('input[type="date"]')
            .type(date)
            .should('have.value', date)
        cy.wait(500)

        //input school website
        cy.get('#schoolWebsite')
            .type(website)
            .should('have.value', website)
        cy.wait(500)

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)

        //continue, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button primary"]')
        //     .contains('Continue')
        //     .click()
        // cy.wait(500)

        //leave, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button secondary"]')
        //     .contains('Leave')
        //     .click()
        // cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //school affiliations
        //select affiliations and change the affiliation into "Option1" or "Option2"......from the code
        cy.get('#affiliation').click()

        if (affiliation === 'Option1') {
            cy.contains('Catholic Schools').click();
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

        //add more affiliations
        // cy.get('button[class="h-full w-full prevent-select button primary"]')
        //     .contains('Add More')
        //     .click()
        // cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //back button, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button secondary-grey"]')
        //     .contains('Back')
        //     .click()

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)

        //continue, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button primary"]')
        //     .contains('Continue')
        //     .click()
        // cy.wait(500)

        //leave, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button secondary"]')
        //     .contains('Leave')
        //     .click()
        // cy.wait(500)

        //contact details
        //school email
        cy.get('#schoolEmail')
            .type(email)
            .should('have.value', email)
        cy.wait(500)

        //second contact number
        cy.get('#contactNum')
            .type(secondContact)
            .should('have.value', secondContact)
        cy.wait(500)

        //second contact number
        cy.get('#contactPerson')
            .type(contactPerson)
            .should('have.value', contactPerson)
        cy.wait(500)


        //select social media and change the socialMedia into "Option1" or "Option2"......from the code
        cy.get('#socMedType').click()

        if (socialMedia === 'Option1') {
            cy.contains('Facebook').click();
        } else if (socialMedia === 'Option2') {
            cy.contains('Linkedin').click();
        }
        cy.get('#socMedType')
            .should('be.visible');
        cy.wait(500)

        //link
        cy.get('#socMedLink')
            .type(link)
            .should('have.value', link)
        cy.wait(500)

        //add more social media
        // cy.get('.show > .hold-contain > .button.ng-tns-c94-0 > .h-full')
        //     .contains('Add More')
        //     .click()
        // cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //back button, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button secondary-grey"]')
        //     .contains('Back')
        //     .click()

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)

        //continue, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button primary"]')
        //     .contains('Continue')
        //     .click()
        // cy.wait(500)

        //leave, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button secondary"]')
        //     .contains('Leave')
        //     .click()
        // cy.wait(500)

        //select country and change the Country into "Option1" or "Option2"......from the code
        cy.get('#country').click()
        cy.get('#country-option > [tabindex="0"]').click()

        if (country === 'Option1') {
            cy.contains('Philippines').click();
        } else if (country === 'Option2') {
            cy.contains('US').click();
        }
        cy.get('#country')
            .should('be.visible');
        cy.wait(2000)

        //select region and change the Region into "Option1" or "Option2"......from the code
        cy.get('.text-input flex > .text')
            .click()

        if (region === 'Option1') {
            cy.contains('Western Visayas').click();
        }

        cy.get('#region')
            .should('be.visible');
        cy.wait(500)

        //select province and change the Province into "Option1" or "Option2"......from the code
        cy.get('#stateProv').click()

        if (province === 'Option1') {
            cy.contains('Negros Occidental').click();
        }

        cy.get('#stateProv')
            .should('be.visible');
        cy.wait(500)

        //select city and change the City into "Option1" or "Option2"......from the code
        cy.get('#city').click()

        if (City === 'Option1') {
            cy.contains('Bacolod City').click();
        }

        cy.get('#city')
            .should('be.visible');
        cy.wait(500)

        //postal/zip code
        cy.get('#postal')
            .type(postal)
            .should('have.value', postal)
        cy.wait(500)

        //street address
        cy.get('#streetAddress')
            .type(streetAddress)
            .should('have.value', streetAddress)
        cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //upload file
        cy.get('input[type="file"]')
            .click()
            .selectFile('cypress/fixtures/OJTPH.pdf', { force: true })
        cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //account credentials
        //email
        cy.get('#alternateEmail')
            .type(alternateEmail)
            .should('have.value', alternateEmail)
        cy.wait(500)

        //username
        cy.get('#username')
            .type(username)
            .should('have.value', username)
        cy.wait(500)

        //password
        cy.get('#password')
            .type(password)
            .should('have.value', password)
        cy.wait(500)

        //confirm password
        cy.get('#passwordConfirm')
            .type(passwordConfirm)
            .should('have.value', passwordConfirm)
        cy.wait(500)

        //back button, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button secondary-grey"]')
        //     .contains('Back')
        //     .click()

        //register button
        if (enable_register) {
            cy.get('button[class="h-full w-full prevent-select button primary"]')
                .contains('Register')
                .click()
            cy.wait(5000)
        }

        //close button, enable this line of codes if needed
        // cy.get('.close-button')
        //     .click()
        //     .should('be.visible')
        // cy.wait(500)

        //continue, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button primary"]')
        //     .contains('Continue')
        //     .click()
        // cy.wait(500)

        //leave, enable this line of codes if needed
        // cy.get('button[class="h-full w-full prevent-select button"]')
        //     .parents('app-button[class="button secondary"]')
        //     .contains('Leave')
        //     .click()
        // cy.wait(500)

        //home button for success registration
        if (enable_homebtn) {
            cy.get('[ng-reflect-fade-in="true"] > .popup-container > .background > .pop > .contain > .footer > .container-btn > .primary > .h-full')
                .contains('Home')
                .click()
            cy.wait(5000)
        }

        //Confirm Button (Verification Modal), enable this line of codes if needed
        if (enable_confirmbtn) {
            cy.get('[class="h-full w-full prevent-select button"]')
                .parents('app-button[class="button primary"]')
                .find('button')
                .contains('Confirm')
                .should('be.visible')
                .click()
                .wait(5000)
        }

        //retry button for failed registration, enable this line of codes if needed
        if (enable_retrybtn) {
            cy.get('button[class="h-full w-full prevent-select button"]')
                .contains('Retry')
                .click()
        }

    })
})

