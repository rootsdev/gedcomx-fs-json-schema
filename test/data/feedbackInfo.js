// https://familysearch.org/developers/docs/api/places/Read_Place_Feedback_usecase
module.exports = {
  "sourceDescriptions" : [ {
    "id" : "sd",
    "citations" : [ {
      "value" : "Google Maps. (2016). [Gate of Heaven Cemetery, Hawthorne, NY] [Street map]. Retrieved from https://www.google.com/maps/place/Gate+of+Heaven+Cemetery/@41.0957054,-73.7967452,17z/data=!4m12!1m6!3m5!1s0x89c2be2c9829d737:0x2c066805f2fe7b3d!2sGate+of+Heaven+Cemetery!8m2!3d41.0957054!4d-73.7945565!3m4!1s0x89c2be2c9829d737:0x2c066805f2fe7b3d!8m2!3d41.0957054!4d-73.7945565"
    } ]
  } ],
  "places" : [ {
    "sources" : [ {
      "descriptionId" : "sd",
      "description" : "#sd"
    } ],
    "notes" : [ {
      "text" : "Submitted by John Doe on 2016-06-08 13:32:33 via http://mydomain.com/mypage."
    } ],
    "attribution" : {
      "contributor" : {
        "resource" : "mailto:user@somewhere.org"
      },
      "changeMessage" : "I'd like to reference this cemetery in burial information."
    },
    "names" : [ {
      "value" : "Gate of Heaven Cemetery"
    } ],
    "latitude" : 41.095932,
    "longitude" : 73.794519,
    "spatialDescription" : {
      "resource" : "data:,Just%20off%20Stevens%20Avenue%20in%20Hawthorne,%20NY"
    }
  } ],
  "feedbackInfo" : [ {
    "resolution" : "data:,Place%20Created",
    "status" : "data:,Resolved",
    "place" : {
      "resource" : "https://familysearch.org/platform/places/description/768459"
    },
    "details" : "A new place was created."
  } ]
};