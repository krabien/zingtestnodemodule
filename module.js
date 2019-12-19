const moment  = require('moment');
const uuidv1 = require('uuid/v1');

const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://01edf29d06b94a159a5f7b762d18f811@sentry.io/1860656' });
Sentry.captureMessage('hello from B4A cloud code');

module.exports.test = () => { return 'Hello, my dear world! How are you today?' };
