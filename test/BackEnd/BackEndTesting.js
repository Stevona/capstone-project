let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../../app');
let customer = require("../../orm/Customer");

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
                zip: "01854"
            }
          chai.request(server)
              .post('/api/customers')
              .send(testCustomer)
              .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.text.should.be.eql('Customer posting failed');
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
                zip: "01854"
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




});

});
