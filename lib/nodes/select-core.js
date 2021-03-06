// Generated by CoffeeScript 1.10.0
var JoinSource, Node, SelectCore, exports,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Node = require('./node');

JoinSource = require('./join-source');

SelectCore = (function(superClass) {
  extend(SelectCore, superClass);

  function SelectCore() {
    this.source = new JoinSource(null);
    this.top = null;
    this.projections = [];
    this.wheres = [];
    this.groups = [];
    this.having = null;
  }

  SelectCore.prototype.from = function(value) {
    if (value) {
      return this.source.left = value;
    } else {
      return this.source.left;
    }
  };

  SelectCore.prototype.initializeCopy = function(other) {
    SelectCore.__super__.initializeCopy.call(this);
    if (this.source) {
      this.source = u(this.source).clone();
    }
    this.projections = u(this.projections).clone();
    this.wheres = u(this.wheres).clone();
    this.groups = u(this.groups).clone();
    return this.having = u(this.having).clone();
  };

  return SelectCore;

})(Node);

exports = module.exports = SelectCore;
