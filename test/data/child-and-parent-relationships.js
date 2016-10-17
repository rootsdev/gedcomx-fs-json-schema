// https://familysearch.org/developers/docs/api/tree/Read_Relationships_to_Children_(Deprecated)_usecase
module.exports = {
  "links" : {
    "person" : {
      "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
    }
  },
  "persons" : [ {
    "id" : "PPP0-MP1",
    "links" : {
      "person" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      }
    }
  } ],
  "relationships" : [ {
    "id" : "FPPP0-PP0",
    "links" : {
      "child" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-PP3"
      },
      "person1" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "person2" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-PP3"
      },
      "parent" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "father" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      }
    },
    "identifiers" : {
      "http://familysearch.org/v1/ChildAndParentsRelationship" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0"
    },
    "type" : "http://gedcomx.org/ParentChild",
    "person1" : {
      "resource" : "#PPP0-MP1",
      "resourceId" : "PPP0-MP1"
    },
    "person2" : {
      "resource" : "https://familysearch.org/platform/tree/persons/PPP0-PP3",
      "resourceId" : "PPP0-PP3"
    }
  }, {
    "id" : "FPPP1-PP0",
    "links" : {
      "child" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP1-PP3"
      },
      "person1" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "person2" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP1-PP3"
      },
      "parent" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "father" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      }
    },
    "identifiers" : {
      "http://familysearch.org/v1/ChildAndParentsRelationship" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0"
    },
    "type" : "http://gedcomx.org/ParentChild",
    "person1" : {
      "resource" : "#PPP0-MP1",
      "resourceId" : "PPP0-MP1"
    },
    "person2" : {
      "resource" : "https://familysearch.org/platform/tree/persons/PPP1-PP3",
      "resourceId" : "PPP1-PP3"
    }
  } ],
  "childAndParentsRelationships" : [ {
    "id" : "PPP0-PP0",
    "links" : {
      "source-references" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0/source-references"
      },
      "relationship" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0"
      },
      "child" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-PP3"
      },
      "change-history" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0/changes"
      },
      "collection" : {
        "href" : "https://familysearch.org/platform/collections/tree"
      },
      "notes" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0/notes"
      },
      "source-descriptions" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0/sources"
      },
      "father" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "father-role" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP0-PP0/father"
      }
    },
    "father" : {
      "resource" : "#PPP0-MP1",
      "resourceId" : "PPP0-MP1"
    },
    "child" : {
      "resource" : "https://familysearch.org/platform/tree/persons/PPP0-PP3",
      "resourceId" : "PPP0-PP3"
    },
    "fatherFacts" : [ {
      "id" : "C.1",
      "attribution" : {
        "contributor" : {
          "resource" : "https://familysearch.org/platform/users/agents/JNYR-KJP"
        }
      },
      "type" : "http://gedcomx.org/AdoptiveParent"
    } ]
  }, {
    "id" : "PPP1-PP0",
    "links" : {
      "source-references" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0/source-references"
      },
      "relationship" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0"
      },
      "child" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP1-PP3"
      },
      "change-history" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0/changes"
      },
      "collection" : {
        "href" : "https://familysearch.org/platform/collections/tree"
      },
      "notes" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0/notes"
      },
      "source-descriptions" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0/sources"
      },
      "father" : {
        "href" : "https://familysearch.org/platform/tree/persons/PPP0-MP1"
      },
      "father-role" : {
        "href" : "https://familysearch.org/platform/tree/child-and-parents-relationships/PPP1-PP0/father"
      }
    },
    "father" : {
      "resource" : "#PPP0-MP1",
      "resourceId" : "PPP0-MP1"
    },
    "child" : {
      "resource" : "https://familysearch.org/platform/tree/persons/PPP1-PP3",
      "resourceId" : "PPP1-PP3"
    },
    "fatherFacts" : [ {
      "id" : "C.1",
      "attribution" : {
        "contributor" : {
          "resource" : "https://familysearch.org/platform/users/agents/JNYR-KJP"
        }
      },
      "type" : "http://gedcomx.org/AdoptiveParent"
    } ]
  } ]
};