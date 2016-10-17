// https://familysearch.org/developers/docs/api/tree/Merge_Person_usecase
module.exports = {
  "merges" : [ {
    "resourcesToDelete" : [ {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345/conclusions/ABCD"
    }, {
      "resource" : "https://familysearch.org/platform/tree/persons/P12-345/source-references/EFGH"
    } ],
    "resourcesToCopy" : [ {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321/conclusions/IJKL"
    }, {
      "resource" : "https://familysearch.org/platform/tree/persons/P54-321/source-references/MNOP"
    } ]
  } ]
};