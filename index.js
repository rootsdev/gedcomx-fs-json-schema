var schema = module.exports = require('gedcomx-json-schema');

/**
 * New data types
 */

schema.definitions.ChangeInfo = {
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

schema.definitions.ChildAndParentsRelationship = {
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

/**
 * Property extensions
 */

schema.definitions.AtomEntry.properties.changeInfo = {
  type: 'array',
  items: { $ref: '#/definitions/ChangeInfo' }
};

schema.definitions.GedcomX.properties.childAndParentsRelationships = {
  type: 'array',
  items: { $ref: '#/definitions/ChildAndParentsRelationship' }
};
