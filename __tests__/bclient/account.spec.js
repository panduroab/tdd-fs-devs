const { bclient } = require('../consts');
let trades;
describe('B Account module', () => {
    it('should retrieve the Account Balance', done => {
        bclient.account.balance()
            .then(balance => {
                return done();
            })
            .catch(done);
    });
    it('should retrieve the Account Trades', done => {
        bclient.account.trades()
            .then(res => {
                trades = res;
                return done();
            })
            .catch(done);
    });
    it('should retrieve the Account Orders by orderId', done => {
        bclient.account.orderById(trades[0].oid)
            .then(res => {
                return done();
            })
            .catch(done);
    });
});