const { port } = require('./consts');
const app = require('../src/server')();

describe('Application', () => {
    it('should run a app instance', done => {
        app.listen(port, done);
    });
});