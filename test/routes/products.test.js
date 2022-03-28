/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../../app');
let {Customer} = require("../../orm/Customer");
let {Product} = require("../../orm/Product");

chai.use(chaiHttp);

describe('Product', ()=>{
     describe('/GET product', ()=>{
        it('it should GET all products', (done)=>{
            chai.request(server)
            .get('/api/products')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(3)
            done();
            })
        })
        it('it should GET a single product given productId', (done)=>{
            chai.request(server)
            .get('/api/products/1')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('productName').eql('Irish Whiskey');
                res.body.should.have.property('productPrice').eql('12.50');
                res.body.should.have.property('productQuantity').eql(10);
                res.body.should.have.property('productSKU').eql('A11369420');
            done();
            })
        })
        it('GET/Id should send back an error code 404', (done)=>{
            chai.request(server)
            .get('/api/products/5')
            .end((err, res) =>{
                res.should.have.status(404);
                res.text.should.be.eql('Could not find product with id 5')
            done();
            })
        })
    })
    describe('/PUT product', () => {
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
                .send(product)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eql('Not found: could not update product with id 100')
                    done();
                });
            });
        });
    });
