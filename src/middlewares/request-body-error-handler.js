const ResponseBody = require('../helpers/classes/ResponseBody');

module.exports = (error, req, res, next) => {
  if (error.type === 'entity.parse.failed') {
    const rBody = new ResponseBody();
    rBody.setMessage('Payload should be in JSON format');
    rBody.removeData();
    return res.status(400).send(rBody);
  }
  next();
};
