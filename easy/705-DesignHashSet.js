// 166ms, 95.36%
// 53.2 MB

const MyHashSet = function() {
    this.hashSet = {};
  };
  
MyHashSet.prototype.add = function(key) {
  this.hashSet[key] = null;
  return key;
};

MyHashSet.prototype.remove = function(key) {
  delete this.hashSet[key];
  return key;
};

MyHashSet.prototype.contains = function(key) {
  return this.hashSet.hasOwnProperty(key);
};

const myHashSet = new MyHashSet();

console.log(myHashSet.add(1));
console.log(myHashSet.add(2));
console.log(myHashSet.contains(1));
console.log(myHashSet.contains(3));
console.log(myHashSet.add(2));
console.log(myHashSet.contains(2));
console.log(myHashSet.remove(2));
console.log(myHashSet.contains(2));