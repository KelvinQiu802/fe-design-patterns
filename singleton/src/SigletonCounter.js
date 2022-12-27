let count = 0;
let instance;

// class Counter {
//   constructor() {
//     if (instance) {
//       throw new Error('only one instance!');
//     }
//     instance = this;
//   }

//   getInstance() {
//     return this;
//   }

//   getCount() {
//     return count;
//   }

//   increment() {
//     return ++count;
//   }

//   decrement() {
//     return --count;
//   }
// }

const singleton = Object.freeze({
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
});

export default singleton;
