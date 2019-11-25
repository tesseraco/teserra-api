class ResponseBody {
  constructor() {
    this.success = false;
    this.message = 'Something went wrong. Please try again later';
    this.data = {};
  }

  setSuccess() {
    this.success = true;
  }

  setMessage(message) {
    this.message = message;
  }

  setData({ key, value }) {
    this.data[key] = value;
  }

  removeData() {
    delete this.data;
  }
}

module.exports = ResponseBody;
