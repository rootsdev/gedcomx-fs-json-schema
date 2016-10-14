var chai = require('chai');
chai.use(require('chai-json-schema'));
chai.tv4.banUnknown = true;
var assert = chai.assert;
var fsSchema = require('../');

it('ChangeInfo', validateFile('change-info'));

it('ChildAndParentsRelationship', validateFile('child-and-parent-relationships'));

function validateFile(name){
  return function(){
    assert.jsonSchema(require('./data/' + name), fsSchema);
  };
}