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


describe('Add Customers Page - UT', function(){
    let browser;
    let page;

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
    TEST TYPE: Unit Test Front End
    DEVELOPER: Maria Ringes
    DATE: Mar 27 8:00p.m. EST
    STEPS TESTED:
        1. Add a customer
        2. Ensure alert says 'Customer has been created'
    */
        it("UT-FE: Adding a customer shows success alert", async function(){
            page = await browser.newPage();
            await page.goto('http://localhost:8080/addCustomer');
            await page.type('#firstName', 'Maria');
            await page.type('#lastName', 'Ringes');
            await page.type('#phone', '2034917089');
            await page.type('#email', 'maria_ringes@tjx.com');
            await page.type('#address', '300 Value Way')
            await page.type('#city', 'Marlborough');
            await page.type('#region', 'MA');
            await page.select('#inlineFormCustomSelect', 'United States');
            await page.type('#zip', '01752');
            await page.click('#app > form > div.col-auto.g-10.d-flex.justify-content-center > input');
            const successAlert =  await page.$eval('#app > div.alert.alert-success', ele => ele.textContent);
            expect(successAlert).to.include('Customer has been created!');
        }).timeout(30000);

})