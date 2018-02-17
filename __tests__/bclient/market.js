const { bclient } = require('../consts');
describe('B Market module', () => {
    it('should retrieve the Market Prices', done => {
        bclient.market.ticker()
            .then(res => {
                return done();
            })
            .catch(done);
    });
});