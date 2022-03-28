/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../../app');
let should = chai.should();
let server = require('../../app');
let {Customer} = require("../../orm/Customer");
let {Product} = require("../../orm/Product");

chai.use(chaiHttp);

describe('Customer', () => {

    describe('/GET customer', () => {
        it('it should GET all the customers', (done) => {
          chai.request(server)
              .get('/api/customers')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
              });
        });

        it('it should GET a specific customer', (done) => {
            chai.request(server)
                .get('/api/customers/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                done();
                });
        });
    });

    describe('/POST customer', () => {
        it('it should not POST a customer without email field', (done) => {
            let testCustomer = {
                firstName: "Brianna",
                middleName: "Lynn",
                lastName: "Fahrenkopf",
                phone: "6367512114",
                address: "116 Martin St",
                city: "Lowell",
                region: "Massachusetts",
                zip: "01854",
                country: 'US'
            }
          chai.request(server)
              .post('/api/customers')
              .send(testCustomer)
              .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.errors[0].msg.should.be.eql('Must be a valid email');
                done();
              });
        });

        it('it should POST a customer', (done) => {
            let testCustomer = {
                firstName: "Brianna",
                middleName: "Lynn",
                lastName: "Fahrenkopf",
                phone: "6367512114",
                email: "test@tjx.com",
                address: "116 Martin St",
                city: "Lowell",
                region: "Massachusetts",
                zip: "01854",
                country: 'US'
            }
          chai.request(server)
              .post('/api/customers')
              .send(testCustomer)
              .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('firstName');
                done();
              });
  
    });

    describe('/PUT customer', () => {
        it('it should (PUT) UPDATE a specific customer', (done) => {
            let testCustomer = {
                firstName: "BriannaPUTUPDATE",
                middleName: "Lynn",
                lastName: "Fahrenkopf",
                phone: "6367512114",
                email: "test@tjx.com",
                address: "116 Martin St",
                city: "Lowell",
                region: "Massachusetts",
                zip: "01854",
                country: 'US',
                customerId: 3
            }
            chai.request(server)
                .put('/api/customers/3')
                .send(testCustomer)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/DELETE customer', () => {
        it('it should DELETE specific customer', (done) => {
            chai.request(server)
                .delete('/api/customers/4')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.text.should.be.eql('Customer successfully deleted');
                done();
                });
        });
    });

});

});
