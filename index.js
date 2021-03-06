var schema = module.exports = require('gedcomx-json-schema'),
    definitions = schema.definitions;

/**
 * New data types
 */

definitions.ArtifactMetadata = {
  type: 'object',
  properties: {
    filename: { type: 'string' },
    qualifiers: {
      type: 'array',
      items: { $ref: '#/definitions/Qualifier' }
    },
    width: { type: 'number' },
    height: { type: 'number' },
    size: { type: 'number' },
    screeningState: { type: 'string' },
    editable: { type: 'boolean' }
  }
};

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

definitions.Error = {
  type: 'object',
  properties: {
    code: { type: 'integer' },
    label: { type: 'string' },
    message: { type: 'string' },
    stacktrace: { type: 'string' }
  }
};

definitions.Feature = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    enabled: { type: 'boolean' },
    activationDate: { type: 'integer' }
  }
};

definitions.FeedbackInfo = {
  type: 'object',
  properties: {
    status: { type: 'string' },
    resolution: { type: 'string' },
    details: { type: 'string' },
    place: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.MatchInfo = {
  type: 'object',
  properties: {
    status: { type: 'string' },
    collection: { type: 'string' }
  }
};

definitions.Merge = {
  type: 'object',
  properties: {
    resourcesToDelete: { 
      type: 'array',
      items: { $ref: '#/definitions/ResourceReference' }
    },
    resourcesToCopy: { 
      type: 'array',
      items: { $ref: '#/definitions/ResourceReference' }
    }
  }
};

definitions.MergeAnalysis = {
  type: 'object',
  properties: {
    survivorResources: {
      type: 'array',
      items: { $ref: '#/definitions/ResourceReference' }
    },
    duplicateResources:	{
      type: 'array',
      items: { $ref: '#/definitions/ResourceReference' }
    },
    conflictingResources:	{
      type: 'array',
      items: { $ref: '#/definitions/MergeConflict' }
    },
    survivor:	{ $ref: '#/definitions/ResourceReference' },
    duplicate: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.MergeConflict = {
  type: 'object',
  properties: {
    survivorResource: { $ref: '#/definitions/ResourceReference' },
    duplicateResource: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.NameFormInfo = {
  type: 'object',
  properties: {
    order: { type: 'string' }
  }
};

definitions.Ordinance = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/Reservation' }
  ],
  properties: {
    living: { type: 'boolean' },
    date: { $ref: '#/definitions/Date' },
    templeCode: { type: 'string' }
  }
};

definitions.Reservation = {
  type: 'object',
  allOf: [
    { $ref: '#/definitions/Conclusion' }
  ],
  properties: {
    type: { type: 'string' },
    status: { type: 'string' },
    spouse: { $ref: '#/definitions/ResourceReference' },
    father: { $ref: '#/definitions/ResourceReference' },
    mother: { $ref: '#/definitions/ResourceReference' },
    assignee: { $ref: '#/definitions/ResourceReference' }
  }
};

definitions.SearchInfo = {
  type: 'object',
  properties: {
    closeHits: { type: 'integer' },
    totalHits: { type: 'integer' }
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
  items: { $ref: '#/definitions/Feature' }
};

definitions.PlaceDescription.properties.feedbackInfo = {
  type: 'array',
  items: { $ref: '#/definitions/FeedbackInfo' }
};

definitions.GedcomX.properties.merges = {
  type: 'array',
  items: { $ref: '#/definitions/Merge' }
};

definitions.GedcomX.properties.mergeAnalyses = {
  type: 'array',
  items: { $ref: '#/definitions/MergeAnalysis' }
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

definitions.AtomFeed.properties.searchInfo = {
  type: 'array',
  items: { $ref: '#/definitions/SearchInfo' }
};

definitions.SourceDescription.properties.artifactMetadata = {
  type: 'array',
  items: { $ref: '#/definitions/ArtifactMetadata' }
};

definitions.NameForm.properties.nameFormInfo = {
  type: 'array',
  items: { $ref: '#/definitions/NameFormInfo' }
};

definitions.Person.properties.ordinances = {
  type: 'array',
  items: { $ref: '#/definitions/Ordinance' }
};

schema.anyOf.push({ 
  type: 'object',
  properties: {
    errors: {
      type: 'array',
      items: { $ref: '#/definitions/Error' }
    }
  }
});
