
describe('Company Admin Registration', () => {

    //visit link
    const weblink = 'https://ojtph.com';

    //Company Information (Step 1)
    const companyName = 'New Company 2';
    const companySize = 'Option1';
    const companyRegType = 'Option2';
    const taxOrVatID = '12345';
    const companyWebsite = 'newcompany2.com';
    const industry = 'Option1';
    const companyRegNum = '123456';

    //Contact Details (Step 2)
    const companyemail = 'newcompany@gmail2.com';
    const socMedType = 'Option1';
    const companyNumber = '(912) 334-0230';
    const socMedLink = 'newcompany2.com';

    //Physical Address (Step 3)
    const country = 'Option1';
    const region = 'Option1';
    const province = 'Option1';
    const City = 'Option1';
    const postal = '6100';
    const streetAddress = 'Mandalagan';

    //Documents Upload (Step 4)

    //Account Credentials (Step 5)
    const email = 'newcompany@gmail2.com';
    const username = 'Newcompany2!';
    const password = 'Newcompany2!';
    const passwordConfirm = 'Newcompany2!';

    //controller to enable or disable a function
    const enable_register = false;
    const enable_homebtn = false;
    const enable_confirmbtn = false;
    const enable_retrybtn = false;

    it('Company Admin should be able to sign up', () => {

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

        //select company
        cy.get('div[class="title"]')
            .parents('div[class="selection"]')
            .contains('Sign up as a Company')
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

        //company information
        //type company name
        cy.get('#companyName')
            .type(companyName)
            .should('have.value', companyName)
        cy.wait(500)

        //select company size and change the companySize into "Option1" or "Option2" from the code
        cy.get('#companySize').click()

        if (companySize === 'Option1') {
            cy.contains('Micro (1-9 Employees)').click();
        } else if (companySize === 'Option2') {
            cy.contains('Small (10-49 Employees)').click();
        } else if (companySize === 'Option3') {
            cy.contains('Medium (50-249 Employees)').click();
        } else if (companySize === 'Option4') {
            cy.contains('Large (250-999 Employees)').click();
        } else if (companySize === 'Option5') {
            cy.contains('Enterprise (1000+ Employees)').click();
        }

        //select company registration type and change the companyRegType into "Option1" or "Option2" from the code
        cy.get('#companyRegType').click()

        if (companyRegType === 'Option1') {
            cy.contains('Sec').click();
        } else if (companyRegType === 'Option2') {
            cy.contains('Dti').click();
        }

        cy.get('#companyRegType')
            .should('be.visible')
        cy.wait(500)

        //type tax or vat id
        cy.get('#taxOrVatID')
            .type(taxOrVatID)
            .should('have.value', taxOrVatID)
        cy.wait(500)

        //company website
        cy.get('#companyWebsite')
            .type(companyWebsite)
            .should('have.value', companyWebsite)
        cy.wait(500)

        //select industry and change the industry into "Option1" or "Option2"......from the code
        cy.get('#industry').click()

        if (industry === 'Option1') {
            cy.contains('Information And Communication Technologies (Ict)').click()
        } else if (industry === 'Option2') {
            cy.contains('Manufacturing (Automotive, Aerospace, Electronics, Etc.)').click()
        } else if (industry === 'Option3') {
            cy.contains('Healthcare And Pharmaceuticals').click()
        } else if (industry === 'Option4') {
            cy.contains('Financial Services And Banking').click()
        } else if (industry === 'Option5') {
            cy.contains('Energy & Utilities').click()
        } else if (industry === 'Option6') {
            cy.contains('Retail And E-commerce').click()
        } else if (industry === 'Option7') {
            cy.contains('Energy & Utilities').click()
        } else if (industry === 'Option8') {
            cy.contains('Transportation And Logistics').click()
        } else if (industry === 'Option9') {
            cy.contains('Construction And Real Estate').click()
        } else if (industry === 'Option10') {
            cy.contains('Hospitality And Tourism').click()
        } else if (industry === 'Option11') {
            cy.contains('Agriculture And Food Production').click()
        } else if (industry === 'Option12') {
            cy.contains('Education And Training').click()
        } else if (industry === 'Option13') {
            cy.contains('Media And Entertainment').click()
        } else if (industry === 'Option14') {
            cy.contains('Automotive').click()
        } else if (industry === 'Option15') {
            cy.contains('Biotechnology And Life Sciences').click()
        } else if (industry === 'Option16') {
            cy.contains('Environmental And Green Technologies').click()
        } else if (industry === 'Option17') {
            cy.contains('Mining And Extraction').click()
        } else if (industry === 'Option18') {
            cy.contains('Defense And Security').click()
        } else if (industry === 'Option19') {
            cy.contains('Fasion And Apparel').click()
        } else if (industry === 'Option20') {
            cy.contains('Sports And Recreation').click()
        } else if (industry === 'Option21') {
            cy.contains('Telecommunications').click()
        }

        cy.get('#industry')
            .should('be.visible')
        cy.wait(500)

        //company registration number
        cy.get('#companyRegNum')
            .type(companyRegNum)
            .should('have.value', companyRegNum)
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

        //contact detatils
        //company email
        cy.get('#companyEmail')
            .type(companyemail)
            .should('have.value', companyemail)
        cy.wait(500)

        //social media
        cy.get('#socMedType').click()

        if (socMedType === 'Option1') {
            cy.contains('Facebook').click();
        } else if (socMedType === 'Option2') {
            cy.contains('Linkedin').click();
        }

        cy.get('#socMedType')
            .should('be.visible')
        cy.wait(500)

        //company contact number
        cy.get('#companyNumber')
            .type(companyNumber)
            .should('have.value', companyNumber)
        cy.wait(500)

        //social media link
        cy.get('#socMedLink')
            .type(socMedLink)
            .should('have.value', socMedLink)
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

        //physical address
        //select country and change the Country into "Option1" or "Option2"......from the code
        cy.get('#country').click()
        cy.get('#country-option > [tabindex="0"]').click()

        if (country === 'Option1') {
            cy.contains('Philippines').click({ force: true });
        } else if (country === 'Option2') {
            cy.contains('Us').click();
        }
        cy.get('#country')
            .should('be.visible');
        cy.wait(500)

        //select region and change the Region into "Option1" or "Option2"......from the code
        cy.get('#region').click()

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

        //upload file (business permit)
        cy.get('[uploadlabel="Business Permit"] > .main-container > .file-upload-outside > .file-upload > .file-input')
            .click()
            .selectFile('cypress/fixtures/OJTPH.pdf', { force: true })
        cy.wait(500)

        //upload file (other files-optional)
        cy.get('.ng-untouched > .ng-tns-c93-0 > .main-container > .file-upload-outside > .file-upload > .file-input')
            .selectFile('cypress/fixtures/OJTPH.pdf', { force: true })
        cy.wait(500)

        //upload file (dti registration)
        cy.get('.file-upload-outside > .file-upload > .file-input')
            .selectFile('cypress/fixtures/OJTPH.pdf', { force: true })
        cy.wait(500)


        //add more files
        // cy.get('.pad-0 > .hold-contain > .button.ng-tns-c93-0 > .h-full')
        //     .click()
        // cy.wait(500)

        //click next button
        cy.get('.buttons > .ng-star-inserted > .h-full')
            .contains('Next')
            .should('be.visible')
            .click()
        cy.wait(500)

        //file upload notice.
        cy.get('.checkmark').click()
        cy.wait(500)

        //click continue
        cy.get(':nth-child(4) > .popup-container > .background > .pop > .contain > .footer > :nth-child(1) > .primary > .h-full')
            .contains('Continue')
            .click()
        cy.wait(500)


        //account credentials
        //email
        cy.get('#alternateEmail')
            .type(email)
            .should('have.value', email)
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
            cy.get(':nth-child(5) > .popup-container > .background > .pop > .contain > .footer > .container-btn > .primary > .h-full')
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

