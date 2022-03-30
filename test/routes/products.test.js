/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../../app');
let {Product} = require("../../orm/Product");
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

describe('Product', ()=>{

    let testUser = {
        name: "john",
        password: "test"
    }

    const testSecret = 'secretsecret';
    const wrongTestSecret = 'wrongsecretsecret';
    const testTokenLife = '1h';
    const testToken = jwt.sign({ testUser }, testSecret, {
        expiresIn: testTokenLife
    });
    const invalidTestToken = jwt.sign({ testUser }, wrongTestSecret, {
        expiresIn: testTokenLife
    });

     describe('/GET product', ()=>{
        it('it should GET all products', (done)=>{
            chai.request(server)
            .get('/api/products')
            .set("Authorization", "Bearer " + testToken)
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3)
            done();
            });
        });
        it('it should not GET all products if user is unauthenticated', (done)=>{
            chai.request(server)
            .get('/api/products')
            .set("Authorization", "Bearer " + invalidTestToken)
            .end((err, res) =>{
                res.should.have.status(401);
                res.text.should.be.eql('Unauthenticated user');
            done();
            });
        });
        it('it should GET a single product given productId', (done)=>{
            chai.request(server)
            .get('/api/products/2')
            .set("Authorization", "Bearer " + testToken)
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('productName').eql('Lime');
                res.body.should.have.property('productPrice').eql('0.50');
                res.body.should.have.property('productQuantity').eql(100);
                res.body.should.have.property('productSKU').eql('731ABC123');
            done();
            });
        });
        it('GET/Id should send back an error code 404', (done)=>{
            chai.request(server)
            .get('/api/products/5')
            .set("Authorization", "Bearer " + testToken)
            .end((err, res) =>{
                res.should.have.status(404);
                res.text.should.be.eql('Could not find product with specified id')
            done();
            });
        });
    });
    describe('/PUT product', () => {

        it('it should not PUT a product if productSKU validation fails', (done) => {
            let product ={
                productId:1,
                productSKU: "-1441292",
                productPrice: 10.47,
                productName: "Daniel Test",
                productQuantity: 1,
                productDescription: "yum"
                }
          chai.request(server)
              .put('/api/products/1')
              .set("Authorization", "Bearer " + testToken)
              .send(product)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.errors[0].msg.should.be.eql('Product SKU must be alphanumeric');
                done();
              });
        });

        it('it should not PUT a product if product price validation fails', (done) => {
            let product ={
                productId:1,
                productSKU: "00000",
                productPrice: 1400.222,
                productName: "Daniel Test",
                productQuantity: 1,
                productDescription: "yum"
                }
          chai.request(server)
              .put('/api/products/1')
              .set("Authorization", "Bearer " + testToken)
              .send(product)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.errors[0].msg.should.be.eql('Price format is invalid');
                done();
              });
        });

        it('it should not PUT a product if product name validation fails', (done) => {
            let product ={
                productId:1,
                productSKU: "00000",
                productPrice: 10.47,
                productName: "Daniel-!@$@@#@Test",
                productQuantity: 1,
                productDescription: "yum"
                }
          chai.request(server)
              .put('/api/products/1')
              .set("Authorization", "Bearer " + testToken)
              .send(product)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.errors[0].msg.should.be.eql('Product name must be alphanumeric');
                done();
              });
        });

        it('it should not PUT a product if product quantity is not a number', (done) => {
            let product ={
                productId:1,
                productSKU: "00000",
                productPrice: 10.47,
                productName: "Daniel Test",
                productQuantity: "a",
                productDescription: "yum"
                }
          chai.request(server)
              .put('/api/products/1')
              .set("Authorization", "Bearer " + testToken)
              .send(product)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.errors[0].msg.should.be.eql('Product quantity must be numeric');
                done();
              });
        });

        it('it should (PUT) UPDATE a product using productid', (done) => {
            let product ={
                productId:1,
                productSKU: "00000",
                productPrice: 10.47,
                productName: "Daniel Test",
                productQuantity: 1,
                productDescription: "yum"
                }
            chai.request(server)
                .put('/api/products/1')
                .set("Authorization", "Bearer " + testToken)
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('productPrice').eql('10.47');
                    res.body.should.have.property('productQuantity').eql(1);
                    res.body.should.have.property('productSKU').eql('00000');
                    res.body.should.have.property('productName').eql('Daniel Test');
                    res.body.should.have.property('productId').eql(1);
                    done();
                });
            });
        it('it should send an error code 404 given productId that does not exist', (done) => {
            let product ={
                productId:100,
                productSKU: "00000",
                productPrice: 10.47,
                productName: "Daniel Test",
                productQuantity: 1,
                productDescription: "yum"
                }
            chai.request(server)
                .put('/api/products/100')
                .set("Authorization", "Bearer " + testToken)
                .send(product)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eql('Not found: could not update product with specified id')
                    done();
                });
            });
        });
    });
