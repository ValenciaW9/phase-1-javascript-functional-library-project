function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let newArray = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i]));
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      newArray.push(callback(collection[key], key));
    }
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let start = 0;
  if (arguments.length < 3) {
    acc = collection[0];
    start = 1;
  }
  if (Array.isArray(collection)) {
    for (let i = start; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      acc = callback(acc, collection[key], collection);
    }
  }
  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let newArray = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        newArray.push(collection[i]);
      }
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (predicate(collection[key])) {
        newArray.push(collection[key]);
      }
    }
  }
  return newArray;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === "object") {
    return Object.keys(collection).length;
  }
  return 0;
}

function myFirst(array, n) {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (n) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object) {
  return Object.keys(object);
}