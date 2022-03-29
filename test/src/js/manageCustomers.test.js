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


describe('Manage Customers Page - UT', function(){
    let browser;
    let page;

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
        const APIJson = await page.$eval('body > pre', ele => ele.textContent);
        const cleanAPIJson = JSON.parse(APIJson);

        //Change phone string from API to integer
        var phoneInteger = parseInt(cleanAPIJson.phone, 10);
        expect(phoneInteger).to.not.be.NaN;
    })
})

