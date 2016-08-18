const chai = require('chai');

global.assert = chai.assert;

const context = require.context('./client/test/spec', true, /.spec\.js$/);
context.keys().forEach(context);
