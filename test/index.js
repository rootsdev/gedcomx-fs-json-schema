var chai = require('chai');
chai.use(require('chai-json-schema'));
chai.tv4.banUnknown = true;
var assert = chai.assert;
var fsSchema = require('../');

it('ChangeInfo', validateFile('change-info'));

function validateFile(name){
  return function(){
    assert.jsonSchema(require('./data/' + name), fsSchema);
  };
}