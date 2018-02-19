const { port } = require('./consts');
const deps = require('../src/dependencies')();
const app = require('../src/server')(deps);

describe('Application', () => {
    it('should run an app instance', done => {
        app.listen(port, done);
    });
});