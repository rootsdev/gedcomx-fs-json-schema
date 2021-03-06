var chai = require('chai');
chai.use(require('chai-json-schema'));
chai.tv4.banUnknown = true;
var assert = chai.assert;
var fsSchema = require('../');

it('ChangeInfo', validateFile('change-info'));

it('ChildAndParentsRelationship', validateFile('child-and-parent-relationships'));

it('Comments', validateFile('comments'));

it('Discussion', validateFile('discussion'));

it('Discussion References', validateFile('discussion-references'));

it('FeatureSet', validateFile('features'));

it('MatchInfo', validateFile('matches'));

it('Tag', validateFile('tags'));

it('User', validateFile('users'));

it('Merge', validateFile('merge'));

it('MergeAnalysis', validateFile('merge-analyses'));

it('SearchInfo', validateFile('searchInfo'));

it('FeedbackInfo', validateFile('feedbackInfo'));

it('Error', validateFile('error'));

it('ArtifactMetaData', validateFile('artifact-metadata'));

it('NameFormInfo', validateFile('person'));

it('Reservations', validateFile('reservations'));

it('Ordinances', validateFile('ordinances'));

function validateFile(name){
  return function(){
    assert.jsonSchema(require('./data/' + name), fsSchema);
  };
}