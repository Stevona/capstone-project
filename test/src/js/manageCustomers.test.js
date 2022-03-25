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
let server = require('../../../app');


describe('Manage Customers Page', function(){
    let browser;
    let page;
    let server;

    //Utilize puppeteer to launch the browser and create two new pages
    before(async function(){
        browser = await puppeteer.launch();
    })

    after(async function() {
        await browser.close();
    })

    /*
    TEST TYPE: Unit Test Front End
    DEVELOPER: Maria Ringes
    DATE: Mar 25 2:30p.m. EST
    PURPOSE: Ensure the H1 header includes 'Manage'
    */
    it("UT-FE: H1 Header Includes 'Manage'", async function(){
        page = await browser.newPage();
        await page.goto('http://localhost:8080/manageCustomers');
        const header =  await page.$eval('H1', ele => ele.textContent);
        expect(header).to.include('manage');
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

    /*
    TEST TYPE: Unit Test Backend
    DEVELOPER: Maria Ringes
    DATE: Mar 25 3:30p.m. EST
    PURPOSE: Ensure the phone number of the first customer of the API is an integer (no characters allowed)
    */
    it("UT-BE: Phone number in API must be an integer", async function(){
        //Access first customer in the front end manageCustomer table
        page = await browser.newPage();

        //Access first customer on API
        await page.goto('http://localhost:3000/api/customers/1');
        const APIJson = await pagetwo.$eval('body > pre', ele => ele.textContent);
        const cleanAPIJson = JSON.parse(APIJson);

        //Change phone string from API to integer
        var phoneInteger = parseInt(cleanAPIJson.phone, 10);
        expect(phoneInteger).to.not.be.NaN;
    })
})

