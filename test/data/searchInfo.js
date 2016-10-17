// https://familysearch.org/developers/docs/api/tree/Search_Persons_usecase
module.exports = {
  "id" : "uuid:e957f41e-a866-41a1-a1c9-e421f23345c8",
  "results" : 2,
  "index" : 1,
  "links" : {
    "next" : {
      "href" : "https://familysearch.org/platform/tree/search?start=20&context=jvihef7"
    },
    "self" : {
      "href" : "https://familysearch.org/platform/tree/search?q=motherGivenName:Clarissa+fatherSurname:Heaton+motherSurname:Hoyt+surname:Heaton+givenName:Israel+fatherGivenName:Jonathan"
    },
    "collection" : {
      "href" : "https://familysearch.org/platform/collections/tree"
    },
    "first" : {
      "href" : "https://familysearch.org/platform/tree/search?start=0&context=jvihef7"
    }
  },
  "subtitle" : "Results of searching for persons.",
  "title" : "Person Search Results",
  "updated" : 1475597246950,
  "entries" : [ {
    "content" : {
      "gedcomx" : {
        "persons" : [ {
          "id" : "MMM3-KG7",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM3-KG7"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM3-KG7/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMM3-KG7" ]
          },
          "gender" : {
            "type" : "http://gedcomx.org/Male"
          },
          "names" : [ {
            "type" : "http://gedcomx.org/BirthName",
            "nameForms" : [ {
              "fullText" : "Israel Heaton"
            } ]
          } ],
          "facts" : [ {
            "type" : "http://gedcomx.org/Birth",
            "date" : {
              "original" : "30 January 1880"
            },
            "place" : {
              "original" : "Orderville, UT"
            }
          }, {
            "type" : "http://gedcomx.org/Death",
            "date" : {
              "original" : "29 August 1936"
            },
            "place" : {
              "original" : "Kanab, Kane, UT"
            }
          } ],
          "display" : {
            "name" : "type=BirthName,nameForms[0]=Israel Heaton,pref=null",
            "gender" : "type=Male",
            "birthDate" : "30 January 1880",
            "deathDate" : "29 August 1936"
          }
        }, {
          "id" : "MMM3-485",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM3-485"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM3-485/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMM3-485" ]
          },
          "gender" : {
            "type" : "http://gedcomx.org/Male"
          },
          "names" : [ {
            "nameForms" : [ {
              "fullText" : "Jonathan Heaton"
            } ]
          } ],
          "display" : {
            "name" : "type=null,nameForms[0]=Jonathan Heaton,pref=null",
            "gender" : "type=Male"
          }
        }, {
          "id" : "MMMS-R96",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-R96"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-R96/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMMS-R96" ]
          },
          "gender" : {
            "type" : "http://gedcomx.org/Female"
          },
          "names" : [ {
            "nameForms" : [ {
              "fullText" : "Clarissa Hoyt"
            } ]
          } ],
          "display" : {
            "name" : "type=null,nameForms[0]=Clarissa Hoyt,pref=null",
            "gender" : "type=Female"
          }
        }, {
          "id" : "MMMS-DLS",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-DLS"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-DLS/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMMS-DLS" ]
          },
          "gender" : {
            "type" : "http://gedcomx.org/Female"
          },
          "names" : [ {
            "nameForms" : [ {
              "fullText" : "Charlotte Cox"
            } ]
          } ],
          "display" : {
            "name" : "type=null,nameForms[0]=Charlotte Cox,pref=null",
            "gender" : "type=Female"
          }
        }, {
          "id" : "MMMS-MZL",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-MZL"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMMS-MZL/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMMS-MZL" ]
          },
          "gender" : {
            "type" : "http://gedcomx.org/Male"
          },
          "names" : [ {
            "nameForms" : [ {
              "fullText" : "Alma Heaton"
            } ]
          } ],
          "display" : {
            "name" : "type=null,nameForms[0]=Alma Heaton,pref=null",
            "gender" : "type=Male"
          }
        } ],
        "relationships" : [ {
          "type" : "http://gedcomx.org/ParentChild",
          "person1" : {
            "resource" : "#MMM3-485",
            "resourceId" : "MMM3-485"
          },
          "person2" : {
            "resource" : "#MMM3-KG7",
            "resourceId" : "MMM3-KG7"
          }
        }, {
          "type" : "http://gedcomx.org/ParentChild",
          "person1" : {
            "resource" : "#MMMS-R96",
            "resourceId" : "MMMS-R96"
          },
          "person2" : {
            "resource" : "#MMM3-KG7",
            "resourceId" : "MMM3-KG7"
          }
        }, {
          "type" : "http://gedcomx.org/Couple",
          "person1" : {
            "resource" : "#MMM3-KG7",
            "resourceId" : "MMM3-KG7"
          },
          "person2" : {
            "resource" : "#MMMS-DLS",
            "resourceId" : "MMMS-DLS"
          }
        }, {
          "type" : "http://gedcomx.org/ParentChild",
          "person1" : {
            "resource" : "#MMM3-KG7",
            "resourceId" : "MMM3-KG7"
          },
          "person2" : {
            "resource" : "#MMMS-MZL",
            "resourceId" : "MMMS-MZL"
          }
        } ]
      }
    },
    "id" : "MMM3-KG7",
    "score" : 0.95,
    "links" : {
      "person" : {
        "href" : "https://familysearch.org/platform/tree/persons/MMM3-KG7"
      }
    },
    "title" : "Person MMM3-KG7 (type=BirthName,nameForms[0]=Israel Heaton,pref=null)",
    "updated" : 1475597246950
  }, {
    "content" : {
      "gedcomx" : {
        "persons" : [ {
          "id" : "MMM9-VMZ",
          "links" : {
            "person" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM9-VMZ"
            },
            "portrait" : {
              "href" : "https://familysearch.org/platform/tree/persons/MMM9-VMZ/portrait"
            }
          },
          "identifiers" : {
            "http://gedcomx.org/Persistent" : [ "https://familysearch.org/ark:/61903/4:1:MMM9-VMZ" ]
          },
          "names" : [ {
            "type" : "http://gedcomx.org/BirthName",
            "nameForms" : [ {
              "fullText" : "Israel Hoyt Heaton"
            } ]
          } ],
          "display" : {
            "name" : "type=BirthName,nameForms[0]=Israel Hoyt Heaton,pref=null"
          }
        } ]
      }
    },
    "id" : "MMM9-VMZ",
    "score" : 0.85,
    "links" : {
      "person" : {
        "href" : "https://familysearch.org/platform/tree/persons/MMM9-VMZ"
      }
    },
    "title" : "Person MMM9-VMZ (type=BirthName,nameForms[0]=Israel Hoyt Heaton,pref=null)",
    "updated" : 1475597246950
  } ],
  "searchInfo" : [ {
    "totalHits" : 2,
    "closeHits" : 1
  } ]
};