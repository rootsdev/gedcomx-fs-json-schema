var schema = module.exports = require('gedcomx-json-schema');

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

schema.definitions.AtomEntry.properties.changeInfo = {
  type: 'array',
  items: { $ref: '#/definitions/ChangeInfo' }
};
