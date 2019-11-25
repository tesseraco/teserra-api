const ResponseBody = require('../helpers/classes/ResponseBody');

module.exports = (req, res, next) => {
  if (!req.headers['content-type'].includes('application/json')) {
    const rBody = new ResponseBody();
    rBody.setMessage(
      'The "Content-Type" header must always be "application/json"'
    );
    rBody.removeData();
    return res.status(415).json(rBody);
  }
  next();
};
