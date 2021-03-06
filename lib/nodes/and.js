// Generated by CoffeeScript 1.10.0
var And, Node, exports,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Node = require('./node');

And = (function(superClass) {
  extend(And, superClass);

  function And(children, right) {
    if (right == null) {
      right = null;
    }
    if (Array !== children.constructor) {
      children = [children, right];
    }
    this.children = children;
  }

  And.prototype.left = function() {
    return this.children.first;
  };

  And.prototype.right = function() {
    return this.children[1];
  };

  return And;

})(Node);

exports = module.exports = And;
