/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../../app');
let {Order} = require("../../orm/Order");

chai.use(chaiHttp);

describe('Order', () => {

    describe('/GET order', () => {
        it('it should GET all orders', (done) => {
          chai.request(server)
              .get('/api/orders')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3)
                done();
              });
        });

        it('it should GET a single order given orderId', (done)=>{
            chai.request(server)
            .get('/api/orders/1')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('orderId').eql(1);
                res.body.should.have.property('totalOrderPrice').eql('1000.00');
                res.body.should.have.property('orderStatusCodeId').eql(8);
                res.body.should.have.property('datetimeOrderPlaced').eql('2022-03-10');
            done();
            });
        });
        it('GET/Id should send back an error code 404', (done)=>{
            chai.request(server)
            .get('/api/orders/5')
            .end((err, res) =>{
                res.should.have.status(404);
                res.text.should.be.eql('Could not find order with specified id')
            done();
            });
        });
    });

    describe('/POST order', () => {
        it('it should not POST an order without customerId', (done) => {
            let testOrder = {
                datetimeOrderPlaced: '2022-08-10',
                datetimeOrderFulfilled: '2022-08-13',
                totalOrderPrice:'1234.23',
                orderStatusCodeId: 8
            }
          chai.request(server)
              .post('/api/orders')
              .send(testOrder)
              .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.text.should.be.eql('Order POST failed');
                done();
              });
        });
        it('it should POST an order ', (done) => {
            let testOrder = {
                datetimeOrderPlaced: '2022-08-10',
                datetimeOrderFulfilled: '2022-08-13',
                totalOrderPrice:'1234.23',
                customerId: 3,
                orderStatusCodeId: 8
            }
          chai.request(server)
              .post('/api/orders')
              .send(testOrder)
              .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('datetimeOrderPlaced').eql('2022-08-10');
                    res.body.should.have.property('datetimeOrderFulfilled').eql('2022-08-13');
                    res.body.should.have.property('totalOrderPrice').eql('1234.23');
                    res.body.should.have.property('customerId').eql(3);
                    res.body.should.have.property('orderStatusCodeId').eql(8);
                done();
              });
        });
    });

    describe('/PUT order', () => {
        it('it should PUT an order ', (done) => {
            let testOrder = {
                orderId: 2,
                datetimeOrderPlaced: '2022-08-10',
                datetimeOrderFulfilled: '2022-08-13',
                totalOrderPrice:'1234.23',
                customerId: 2,
                orderStatusCodeId: 8
            }
          chai.request(server)
              .put('/api/orders/2')
              .send(testOrder)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('datetimeOrderPlaced').eql('2022-08-10');
                    res.body.should.have.property('datetimeOrderFulfilled').eql('2022-08-13');
                    res.body.should.have.property('totalOrderPrice').eql('1234.23');
                    res.body.should.have.property('customerId').eql(2);
                    res.body.should.have.property('orderStatusCodeId').eql(8);
                    done();
              });
            });
        it('it should send an error code 404 given orderId that does not exist ', (done) => {
            let testOrder = {
                orderId: 100,
                datetimeOrderPlaced: '2022-08-10',
                datetimeOrderFulfilled: '2022-08-13',
                totalOrderPrice:'1234.23',
                orderStatusCodeId: 8
                }
            chai.request(server)
                .put('/api/orders/100')
                .send(testOrder)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eql('Not found: could not update product with specified id');
                });
            done();
            });
    });

    describe('/DELETE order', () => {
        it('it should DELETE an order given an orderId', (done) => {
            chai.request(server)
                .delete('/api/orders/3')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.text.should.be.eql('Order successfully deleted');
                done();
                });
        });
    });
});
