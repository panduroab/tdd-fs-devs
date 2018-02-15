const { port } = require('./consts');
const app = require('../src/server')();

describe('Application', () => {
    it('should run an app instance', done => {
        app.listen(port, done);
    });
});