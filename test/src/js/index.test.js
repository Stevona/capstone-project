var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
const puppeteer = require('puppeteer');
var expect = require('chai').expect;


describe('Index Page - UT', function(){
    let browser;
    let page;

    before (async function(){
        this.timeout(10000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    })

    after (async function() {
        await browser.close();
    })
    
    /*
    TEST TYPE: Unit Test Front End
    DEVELOPER: Maria Ringes
    DATE: Mar 25 2:00p.m. EST
    PURPOSE: Ensure the H1 header includes 'TJX'
    */
    it("UT-FE: H1 Header Includes 'TJX'", async function(){
        const header =  await page.$eval('H1', ele => ele.textContent);
        expect(header).to.include('TJX');
    })
})

