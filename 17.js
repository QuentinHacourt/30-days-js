var TimeLimitedCache = function() {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let res = false;
  if (this.cache.has(key))
    res = true;
  this.cache.set(key, [value, Date.now() + duration]);
  return res;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  let res = this.cache.get(key);
  if (! this.cache.has(key))
    return -1;

  if (res[1] >= Date.now())
    return res[0];

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let counter = 0;

  this.cache.forEach((val, _) =>{
    if (val[1] >= Date.now()) {
      counter++;
    }
  });
  return counter;
};
