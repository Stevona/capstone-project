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
    describe('/PUT product', () => {
        it('it should (PUT) UPDATE a product using productid', (done) => {
            let product ={
                productId:1,
                productSKU: "00000",
                productPrice: 10.47,
                productName: "Daniel Test",
                productQuantity: "1",
                productDescription: "yum"
            }
            chai.request(server)
                .put('/api/products/1')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('productId').eql(1);
                    done();
                });
            });
        });
    });