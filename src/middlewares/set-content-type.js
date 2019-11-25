const ResponseBody = require('../helpers/classes/ResponseBody');

module.exports = (req, res, next) => {
  if (
    req.headers['content-length'] &&
    req.headers['content-length'] !== '0' &&
    !req.headers['content-type']
  ) {
    const rBody = new ResponseBody();
    rBody.setMessage(
      'The "Content-Type" header must be set for requests with a non-empty payload'
    );
    rBody.removeData();
    return res.status(400).json(rBody);
  }
  next();
};
