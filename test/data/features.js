// https://familysearch.org/platform/pending-modifications.json
module.exports = {
  "features" : [ {
    "name" : "consolidate-redundant-resources",
    "description" : "Resources that have been made redundant will be consolidated by returning a 301 (redirect) to the appropriate resources. These resources include: Person With Relationships, Spouse Relationships, Child Relationships, Parent Relationships, Source References, Discussion References, and Memory References.",
    "enabled" : false,
    "activationDate" : 1480982400000
  }, {
    "name" : "current-person-401",
    "description" : "Changes the response code for an attempt to read the current person from 404 to 401.",
    "enabled" : false,
    "activationDate" : 1480982400000
  }, {
    "name" : "include-non-subject-persons-and-relationships",
    "description" : "When reading a person and/or relationship(s), additional persons and relationships are available to be included at minimal cost, but are currently being dropped to preserve compatibility. This pending modification will include the extra \"non-subject\" persons and relationships.",
    "enabled" : false,
    "activationDate" : 1480982400000
  }, {
    "name" : "new-name-form-langs",
    "description" : "Enables support for new, more specific languages on name forms. For details, see the Names guide in the developer documentation.",
    "enabled" : false,
    "activationDate" : 1480982400000
  } ]
};