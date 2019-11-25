const handleEmptyPayload = require('./empty-payload');
const contentTypeSet = require('./set-content-type');
const contentTypeJson = require('./json-content-type');
const handleRequestBodyErrors = require('./request-body-error-handler');
const setResponseHeaders = require('./set-response-headers');

module.exports = {
  handleEmptyPayload,
  contentTypeJson,
  contentTypeSet,
  handleRequestBodyErrors,
  setResponseHeaders
};
