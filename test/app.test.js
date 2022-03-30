/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../app');
let should = chai.should();
let server = require('../app');

chai.use(chaiHttp);

describe('App', () => {

    describe('/login user', () => {
        
        it('it should authenticate the user if found with correct password', (done) => {
            let testUser = {
                name: "john",
                password: "test"
            }
            chai.request(server)
                .post('/login')
                .send(testUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.login.should.be.eql(true);
                    res.body.token.should.be.a('string');
                done();
                });
        });

        it('it should not authenticate the user if found with incorrect password', (done) => {
            let testUser = {
                name: "john",
                password: "notest"
            }
            chai.request(server)
                .post('/login')
                .send(testUser)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.eql('Unauthenticated user');
                done();
                });
        });

        it('it should not authenticate the user if not found', (done) => {
            let testUser = {
                name: "johnny",
                password: "test"
            }
            chai.request(server)
                .post('/login')
                .send(testUser)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eql('User not found');
                done();
                });
        });

        it('it should not authenticate if the request is invalid/errors', (done) => {
            let testUser = {
                name: "john"
            }
            chai.request(server)
                .post('/login')
                .send(testUser)
                .end((err, res) => {
                    res.should.have.status(500);
                    res.text.should.be.eql('Failure checking user credentials');
                done();
                });
        });
    });
});