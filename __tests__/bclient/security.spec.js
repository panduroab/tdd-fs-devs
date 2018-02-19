let bclient;
const expect = require('chai').expect;
describe("Security library", () => {
    it("should create a B-Client instance", done => {
        try {
            bclient = require('../../src/lib/bclient')({
                'key': process.env.B_KEY,
                'secret': process.env.B_SECRET,
                'host': process.env.B_HOST
            });
            return done()
        } catch (err) {
            return done(err);
        }
    });
    it("should receive an ERROR if called without keys", done => {
        try {
            let bc = require('../../src/lib/bclient')();
            return done(new Error('No keys'))
        } catch (err) {
            return done(null, err);
        }
    });
    it("should a valid signature", done => {
        try {
            let signature = bclient.security.buildSignature('/v3/user_trades/');
            expect(signature).to.be.a('string');
            return done();
        } catch (err) {
            return done(err);
        }
    });
});