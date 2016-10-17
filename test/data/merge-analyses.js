// https://familysearch.org/developers/docs/api/tree/Read_Person_Merge_Analysis_usecase
module.exports = {
  "links" : {
    "person" : {
      "href" : "https://familysearch.org/platform/tree/persons/P12-345"
    },
    "merge" : {
      "href" : "https://familysearch.org/platform/tree/persons/P12-345/merges/P54-321"
    },
    "merge-mirror" : {
      "href" : "https://familysearch.org/platform/tree/persons/P12-345/merges/P54-321"
    }
  },
  "mergeAnalyses" : [ {
    "survivorResources" : [ {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/YZAB"
    }, {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/CDEF"
    } ],
    "duplicateResources" : [ {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/QRST"
    }, {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/UVWX"
    } ],
    "conflictingResources" : [ {
      "survivorResource" : {
        "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
      },
      "duplicateResource" : {
        "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/EFGH"
      }
    }, {
      "survivorResource" : {
        "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/IJKL"
      },
      "duplicateResource" : {
        "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/MNOP"
      }
    } ],
    "survivor" : {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345"
    },
    "duplicate" : {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321"
    }
  } ]
};