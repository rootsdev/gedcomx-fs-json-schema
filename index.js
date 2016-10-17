var schema = module.exports = require('gedcomx-json-schema'),
    definitions = schema.definitions;

/**
 * New data types
 */

definitions.ChangeInfo = {
  type: 'object',
  properties: {
    objectModifier: { type: 'string' },
    operation: { type: 'string' },
    reason: { type: 'string' },
    objectType: { type: 'string' },
    original: { $ref: '#/definitions/ResourceReference' },
    parent: { $ref: '#/definitions/ResourceReference' },
    removed: { $ref: '#/definitions/ResourceReference' },
    resulting: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.ChildAndParentsRelationship = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/Subject' }
  ],
  properties: {
    father: { $ref: '#/definitions/ResourceReference' },
    mother: { $ref: '#/definitions/ResourceReference' },
    child: { $ref: '#/definitions/ResourceReference' },
    fatherFacts: {
      type: 'array',
      items: { $ref: '#/definitions/Fact' }
    },
    motherFacts: {
      type: 'array',
      items: { $ref: '#/definitions/Fact' }
    }
  }
};

definitions.Comment = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/ExtensibleData' }
  ],
  properties: {
    text: { type: 'string' },
    created: { type: 'integer' },
    contributor: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.Discussion = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/ExtensibleData' }
  ],
  properties: {
    title: { type: 'string' },
    details: { type: 'string' },
    created: { type: 'integer' },
    contributor: { $ref: '#/definitions/ResourceReference' },
    modified: { type: 'integer' },
    numberOfComments: { type: 'integer' },
    comments: {
      type: 'array',
      items: { $ref: '#/definitions/Comment' }
    }
  }
};

definitions.DiscussionReference = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/ExtensibleData' }
  ],
  properties: {
    resource: { type: 'string' },
    resourceId: { type: 'string' },
    attribution: { $ref: '#/definitions/Attribution' }
  }
};

definitions.FeatureSet = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    enabled: { type: 'boolean' },
    activationDate: { type: 'integer' }
  }
};

definitions.MatchInfo = {
  type: 'object',
  properties: {
    status: { type: 'string' },
    collection: { type: 'string' }
  }
};

definitions.Tag = {
  type: 'object',
  properties: {
    resource: { type: 'string' }
  }
};

definitions.User = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/ExtensibleData' }
  ],
  properties: {
    alternateEmail: { type: 'string' },
    birthDate: { type: 'string' },
    contactName: { type: 'string' },
    country: { type: 'string' },
    displayName: { type: 'string' },
    email: { type: 'string' },
    familyName: { type: 'string' },
    fullName: { type: 'string' },
    gender: { type: 'string' },
    givenName: { type: 'string' },
    helperAccessPin: { type: 'string' },
    mailingAddress: { type: 'string' },
    mobilePhoneNumber: { type: 'string' },
    personId: { type: 'string' },
    phoneNumber: { type: 'string' },
    preferredLanguage: { type: 'string' },
    treeUserId: { type: 'string' }
  }
};

/**
 * Property extensions
 */

definitions.AtomEntry.properties.changeInfo = {
  type: 'array',
  items: { $ref: '#/definitions/ChangeInfo' }
};

definitions.GedcomX.properties.childAndParentsRelationships = {
  type: 'array',
  items: { $ref: '#/definitions/ChildAndParentsRelationship' }
};

definitions.GedcomX.properties.discussions = {
  type: 'array',
  items: { $ref: '#/definitions/Discussion' }
};

definitions.GedcomX.properties.features = {
  type: 'array',
  items: { $ref: '#/definitions/FeatureSet' }
};

definitions.GedcomX.properties.users = {
  type: 'array',
  items: { $ref: '#/definitions/User' }
};

definitions.AtomEntry.properties.matchInfo = {
  type: 'array',
  items: { $ref: '#/definitions/MatchInfo' }
};

definitions.Person.properties['discussion-references'] = {
  type: 'array',
  items: { $ref: '#/definitions/DiscussionReference' }
};

definitions.SourceReference.properties.tags = {
  type: 'array',
  items: { $ref: '#/definitions/Tag' }
};
