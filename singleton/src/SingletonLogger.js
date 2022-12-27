const logArr = [];

const logger = Object.freeze({
  log(msg) {
    logArr.push(msg);
    console.log('Log: ' + msg);
  },
  getCount() {
    return logArr.length;
  },
});

export default logger;
