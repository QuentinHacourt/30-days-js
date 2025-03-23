/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  return {
    counter: init,
    increment: function() {
      this.counter++;
      return this.counter;
    },
    decrement: function() {
      this.counter--;
      return this.counter;
    },
    reset: function() {
      this.counter = init;
      return this.counter;
    }
  }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
