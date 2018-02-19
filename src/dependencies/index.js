const accountDeps = require('./account')();

module.exports = () => {
    return {
        setupRoutes: app => {
            //Account routes
            app.use('/account', accountDeps.controller.routes());
        }
    }
};