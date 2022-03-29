//Mocha
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
//Chai
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = require('chai').expect;
//Puppeteer
const puppeteer = require('puppeteer');


describe('Add Customers Page - IT', function(){
    let browser;

    //Utilize puppeteer to launch the browser and create two new pages
    before(async function(){
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });
    })

    after(async function() {
        await browser.close();
    })

    /*
    TEST TYPE: Integration Test
    DEVELOPER: Maria Ringes
    DATE: Mar 27 8:00p.m. EST
    STEPS TESTED:
        1. Go to manage customers and get current customer count
        2. Add a customer
        3. Ensure the customer count is one more than it was before adding the customer
            *Customer count = number of table rows on manageCustomer page
            **Include pagination? Test should fail
    */
    it("IT: Adding a customer increases length of table on manageCustomers page by 1", async function(){

        //Get customer count
        managePageBefore = await browser.newPage();
        await managePageBefore.goto('http://localhost:8080/manageCustomers')
        customerCount = await managePageBefore.$eval('#app > table > tbody', ele => ele.rows.length);

        //Add customer
        addPage = await browser.newPage();
        await addPage.goto('http://localhost:8080/addCustomer');
        await addPage.type('#firstName', 'Maria');
        await addPage.type('#lastName', 'Ringes');
        await addPage.type('#phone', '2034917089');
        await addPage.type('#email', 'maria_ringes@tjx.com');
        await addPage.type('#address', '300 Value Way')
        await addPage.type('#city', 'Marlborough');
        await addPage.type('#region', 'MA');
        await addPage.select('#inlineFormCustomSelect', 'United States');
        await addPage.type('#zip', '01752');
        // await addPage.waitForTimeout(3000);
        await addPage.click('#app > form > div.col-auto.g-10.d-flex.justify-content-center > input');
        
        //Get customer count after
        managePageAfter = await browser.newPage();
        await managePageAfter.goto('http://localhost:8080/manageCustomers')
        let newCustomerCount = await managePageAfter.$eval('#app > table > tbody', ele => ele.rows.length);
        expect(newCustomerCount).to.equal(customerCount+1);
    }).timeout(10000);

    /*
    TEST TYPE: Integration Test
    DEVELOPER: Maria Ringes
    DATE: Mar 27 9:30p.m. EST
    STEPS TESTED:
        1. Add a customer
        2. Get the first and last name of last customer displayed in manageCustomers
    */
    it("IT: manageCustomers page displays the last added customer", async function(){
        //Add customer
        addPage = await browser.newPage();
        await addPage.goto('http://localhost:8080/addCustomer');
        await addPage.type('#firstName', 'Maria');
        await addPage.type('#lastName', 'Ringes');
        await addPage.type('#phone', '2034917089');
        await addPage.type('#email', 'maria_ringes@tjx.com');
        await addPage.type('#address', '300 Value Way')
        await addPage.type('#city', 'Marlborough');
        await addPage.type('#region', 'MA');
        await addPage.select('#inlineFormCustomSelect', 'United States');
        await addPage.type('#zip', '01752');
        await addPage.click('#app > form > div.col-auto.g-10.d-flex.justify-content-center > input');
        
        //Get the first and last name of last customer displayed in manageCustomers
        managePage = await browser.newPage();
        await managePage.goto('http://localhost:8080/manageCustomers')
        let lastCustomerName = await managePage.$eval('#app > table > tbody > tr:last-child > th', ele => ele.textContent);
        expect(lastCustomerName).to.equal('Maria Ringes');
    }).timeout(10000);
})

describe('Manage Customers Page - IT', function(){
    let browser;
    let page;

    before(async function(){
        browser = await puppeteer.launch();
    })

    after(async function() {
        await browser.close();
    })

    /*
    TEST TYPE: Integration Test (Front End and API)
    DEVELOPER: Maria Ringes
    DATE: Mar 25 3:00p.m. EST
    PURPOSE: Ensure the first name of the first customer in the API matches the first name of the first customer on the manageCustomer rendered table
    */
    it("IT: First name of first customer in API matches on front end", async function(){
        //Access first customer in the front end manageCustomer table
        page = await browser.newPage();
        pagetwo = await browser.newPage();
        await page.goto('http://localhost:8080/manageCustomers');
        const firstName =  await page.$eval('#app > table > tbody > tr:nth-child(1) > th > a', ele => ele.textContent);

        //Access first name of the first customer on API
        await pagetwo.goto('http://localhost:3000/api/customers/1');
        const APIJson = await pagetwo.$eval('body > pre', ele => ele.textContent);
        const cleanAPIJson = JSON.parse(APIJson);

        //Ensure the first name of the first customer on the table matches with the first customer on the API
        expect(firstName).to.include(cleanAPIJson.firstName);
    })

    /*
    TEST TYPE: Integration Test (Front End and API)
    DEVELOPER: Maria Ringes
    DATE: Mar 25 3:15p.m. EST
    PURPOSE: Ensure the last name of the first customer in the API matches the last name of the first customer on the manageCustomer rendered table
    */
    it("IT: Last name of first customer in API matches on front end", async function(){
        //Access first customer in the front end manageCustomer table
        page = await browser.newPage();
        pagetwo = await browser.newPage();
        await page.goto('http://localhost:8080/manageCustomers');
        const lastName =  await page.$eval('#app > table > tbody > tr:nth-child(1) > th > a', ele => ele.textContent);

        //Access first name of the first customer on API
        await pagetwo.goto('http://localhost:3000/api/customers/1');
        const APIJson = await pagetwo.$eval('body > pre', ele => ele.textContent);
        const cleanAPIJson = JSON.parse(APIJson);

        //Ensure the first name of the first customer on the table matches with the first customer on the API
        expect(lastName).to.include(cleanAPIJson.lastName);
    })
})

