const request = require('supertest');
const { app } = require('../consts');
describe('Account Controller endpoints', () => {
    it('should get the account balance from endpoint', done => {
        request(app)
            .get('/account/balance')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                console.log(res.body);
                done();
            });
    });
});